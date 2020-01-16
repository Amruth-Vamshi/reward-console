import '../styles.css';

import { CampaignHeader, InstantSearch, SortableDataTable } from '@walkinsole/shared';
import { Widget } from '@walkinsole/walkin-components';
import { Button, Col, Dropdown, Icon, Menu, Progress, Tabs } from 'antd';
import jwt from 'jsonwebtoken';
import moment from 'moment';
import * as React from 'react';
import { compose, graphql, withApollo, ApolloProviderProps } from 'react-apollo';
import { RouteChildrenProps } from 'react-router';
import { withRouter } from 'react-router-dom';

import { campaigns, DISABLE_CAMPAIGN, VIEW_HYPERX_CAMPAIGNS } from '../../../query/campaign';
import { DEFAULT_ACTIVE_STATUS, DEFAULT_HYPERX_CAMPAIGN, SHOULD_EDIT, DEFAULT_HYPERX_CAMPAIGN_STATES } from '../../../constants';
import { CAMPAIGN_DASHBOARD, NEW_CAMPAIGN } from '../../../constants/RouterConstants';
import HyperXContainer from '../../../utils/HyperXContainer';
import { WHeader } from '@walkinsole/shared/src';
import { includes } from 'lodash'


const { TabPane } = Tabs;
const DEFAULT_PAGE_SIZE = 6

interface CampaignListProps extends RouteChildrenProps, ApolloProviderProps<any> {
  campaigns?: any
  loading?: any
  disableCampaign?: any
  refetch?: any
  location: any
  data?: any
  campaign?: any
  changeStatus: () => any
}

interface CampaignListState {
  sortedInfo: any,
  filtered: any,
  allCampaigns: any,
  data: any,
  total?
  current?
  loading: boolean,
  showPopUp: boolean,
  popupmessage: any,
  key: any,
  filteredInfo: any
}

class CampaignList extends React.Component<CampaignListProps, Partial<CampaignListState>> {
  constructor(props: CampaignListProps) {
    super(props);
    this.state = {
      sortedInfo: null,
      filtered: null,
      allCampaigns: null,
      data: null,
      total: 0,
      current: 1,
      loading: false,
      key: this.props.location.state ? this.props.location.state.tabKey ? this.props.location.state.tabKey : '1' : '1'
    };
  }

  getCampaigns = (offset, state) => {
    console.log('state ', state);
    this.setState({ loading: true })
    this.props.client.query({
      query: VIEW_HYPERX_CAMPAIGNS,
      variables: {
        input: {
          organizationId: jwt.decode(localStorage.getItem("jwt"))['org_id'],
          status: DEFAULT_ACTIVE_STATUS,
          campaignStatus: state,
          // campaignType: DEFAULT_HYPERX_CAMPAIGN
        },
        page: offset,
        perPage: DEFAULT_PAGE_SIZE,
        sort: { sortBy: "id", sortOrder: "DESC" }
      }, fetchPolicy: 'network-only'
    }).then(res => {
      let data = res.data.viewCampaignsForHyperX
      let allCampaigns = data.data.map(c =>
        ({ ...c.campaign, reached: c.reached, audienceCount: c.audienceCount, redemptionRate: c.redemptionRate }))
      this.setState({ loading: false, allCampaigns, total: data.paginationInfo.totalItems }, () => this.dataManipulation(this.state.key));

    }).catch(err => {
      this.setState({ loading: false });
      console.log("Failed to get Campaigns" + err);
    });
  }

  componentWillMount() {
    this.getCampaigns(1, "LIVE")
  }


  onNewCampaign = () => {
    const { history } = this.props;
    history.push({
      pathname: NEW_CAMPAIGN,
    });
  };

  onDeleteCampaign = (campaign: any) => {
    console.log('delete', campaign);
  };

  onViewCampaign = (campaign: any) => {
    console.log('View', campaign);
    this.props.history.push({
      pathname: `${CAMPAIGN_DASHBOARD}/${campaign.id}`,
      state: { campaignSelected: campaign },
    });
  };
  disableCampaign = (campaign: any) => {
    this.setState({ loading: true })
    this.props.disableCampaign({
      variables: {
        id: campaign.id
      }
    }).then(({ data }) => {
      console.log("Data..", data)
      console.log("Disabled");
      this.props.changeStatus()
      this.setState({ allCampaigns: this.props.campaigns, loading: false }, () => {
        this.onTabChange(this.state.key)
      })
      this.setState({ loading: false })
    }).catch((err: any) => {

      console.log("ERR", err);
      this.setState({ loading: false })
    })
  }

  onDuplicateCampaign = (campaign: any) => {
    console.log('dupl', campaign);
    const { history, match } = this.props;
    history.push({
      pathname: `${NEW_CAMPAIGN}/${campaign.id}`,
      state: {
        campaignSelected: campaign,
      },
    });
  };

  onEditCampaign = (campaign: any) => {
    console.log('edit', campaign);
    const { history, match } = this.props;
    history.push({
      pathname: `${NEW_CAMPAIGN}/${campaign.id}`,
      state: { campaignSelected: campaign, update: true }
    });
  };

  menus = record => (
    <Menu
      onClick={e => {
        if (e.key === 'duplicate') {
          this.onDuplicateCampaign(record);
        } else if (e.key === 'edit') {
          this.onEditCampaign(record);
        } else if (e.key === "view") {
          this.onViewCampaign(record)
        } else if (e.key === "delete") {
          console.log("DELETE...")
          this.disableCampaign(record)
        } else {
          this.onDeleteCampaign(record);
        }
      }}
    >
      <Menu.Item key="view"><Icon type="eye" /> View</Menu.Item>
      {includes(SHOULD_EDIT, record.campaignStatus) ? <Menu.Item key="edit"><Icon type="edit" /> Edit</Menu.Item> : null}
      {/* <Menu.Item key="duplicate"><Icon type="copy" /> Duplicate</Menu.Item> */}
      {/* <Menu.Item key="delete"><Icon type="delete" /> Delete</Menu.Item> */}
    </Menu>
  );

  handleChange = (pagination: any, filters: any, sorter: any) => {
    console.log(pagination, filters, sorter);
    // let { current } = this.state
    // current = pagination.current
    this.setState({ sortedInfo: sorter, current: pagination.current });
  };

  onCampaignFilteredList = (newList: any) => {
    console.log("new list", newList)
    this.setState({
      filtered: newList,
    });
  };

  dataManipulation = (key) => {
    const { allCampaigns } = this.state
    if (!allCampaigns || allCampaigns.length < 1) return
    if (key == 1) {
      let liveCampaigns = allCampaigns.filter((val: any) => moment().isBetween(val.startTime, val.endTime));
      this.setState({ data: liveCampaigns, filtered: null });
    } else if (key == 2) {
      let upcomingCampaigns = allCampaigns.filter((val: any) => val.campaignStatus == DEFAULT_HYPERX_CAMPAIGN_STATES[1] || (val.campaignStatus == DEFAULT_HYPERX_CAMPAIGN_STATES[0] && moment(val.startTime).isAfter(moment())));
      this.setState({ data: upcomingCampaigns, filtered: null });
    } else {
      let Campaigns = allCampaigns
      this.setState({ data: Campaigns, filtered: null });
    }
  }

  onTabChange = (key: any) => {
    this.setState({ key, data: [], current: 1 })

    if (key == 2) this.getCampaigns(1, [DEFAULT_HYPERX_CAMPAIGN_STATES[0], DEFAULT_HYPERX_CAMPAIGN_STATES[1]])
    else this.getCampaigns(1, DEFAULT_HYPERX_CAMPAIGN_STATES[key - 1])

  };


  onTableChange = (e, n) => {
    if (n) {    // Filter for Pagination Changes
      // console.log('onChange', e, n)
      this.getCampaigns(e, DEFAULT_HYPERX_CAMPAIGN_STATES[this.state.key - 1])
    }
  }

  render() {
    let { sortedInfo, filteredInfo, filtered, data, loading, key } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    let campaignData = [];
    if (filtered != null) {
      campaignData = filtered;
    } else {
      campaignData = data;
    }
    const paginationData = {
      position: "bottom",
      current: this.state.current,
      onChange: (e, n) => this.onTableChange(e, n),
      total: this.state.total,
      defaultPageSize: DEFAULT_PAGE_SIZE,
      showTotal: (total: any, range: any) => `${range[0]}-${range[1]} of ${total} items`
    }

    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: '22%',
        render: (text: any, row: any) => <div style={{ color: '#292929' }}> {text} </div>,
        sorter: (a: any, b: any) => (a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0),
        sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
      },
      {
        title: 'Start date & end date',
        dataIndex: 'startTime',
        width: 320,
        key: 'startTime',
        render: (text: any, row: any) => {
          const a: any = moment();
          const b: any = moment(text);
          const c: any = moment(row.endTime)
          return (
            <div>
              {moment(text).format('DD-MM-YYYY')}
              <Progress
                style={{ width: '35%', margin: '0px 5px 0px 5px' }}
                percent={Math.round(
                  ((a - b) / (c - b)) * 100
                )}
                showInfo={false}
              />
              {moment(row.endTime).format('DD-MM-YYYY')}
            </div>
          )
        },
      },
      {
        title: 'Audience Size',
        dataIndex: 'audienceCount',
        key: 'audienceCount',
        // align: 'center' as const
      },
      // {
      //   title: 'Reached',
      //   dataIndex: 'reached',
      //   key: 'reached',
      //   // align: 'center' as const
      // }, 
      {
        title: 'Redemption Rate',
        dataIndex: 'redemptionRate',
        key: 'redemptionRate',
        // align: 'center' as const
      },
      {
        title: 'Priority',
        dataIndex: 'priority',
        key: 'priority',
        render: (text: any, row: any) => <div className="priorityTextStyle">
          {text < 10 ? `0${text}` : text} </div>,
        sorter: (a: any, b: any) => (a.priority !== b.priority ? (a.priority < b.priority ? -1 : 1) : 0),
        sortOrder: sortedInfo.columnKey === 'priority' && sortedInfo.order,
      },
      {
        title: '',
        key: 'action',
        width: 10,
        render: (text: any, record: any) => (
          <div className="gx-module-campaign-right">
            <Dropdown overlay={this.menus(record)} placement="bottomRight" trigger={['click']}>
              <i className="gx-icon-btn icon icon-ellipse-v" />
            </Dropdown>
          </div>
        ),
      },
    ];
    return (
      <div>
        <WHeader title='Campaigns' extra={<Button type="primary" style={{ marginBottom: 0 }} onClick={this.onNewCampaign}>CREATE CAMPAIGN</Button>} />
        <HyperXContainer margin='32px' headerHeightInPX={160}>
          <div className="HyperX-campaignList">
            <Widget styleName="gx-card-tabs"
              extra={
                <InstantSearch
                  placeHolder="Search campaign"
                  data={data}
                  onFilteredList={this.onCampaignFilteredList}
                />}
            >
              <Tabs defaultActiveKey={key ? key : "1"} onChange={this.onTabChange}>
                <TabPane tab="Live" key="1">
                  <SortableDataTable loading={loading} data={campaignData} onChange={this.handleChange} columns={columns} pagination={paginationData} />
                </TabPane>
                <TabPane tab="Upcoming" key="2">
                  <SortableDataTable loading={loading} data={campaignData} onChange={this.handleChange} columns={columns} pagination={paginationData} />
                </TabPane>
                <TabPane tab="Completed" key="3">
                  <SortableDataTable loading={loading} data={campaignData} onChange={this.handleChange} columns={columns} pagination={paginationData} />
                </TabPane>
                <TabPane tab="Draft" key="4">
                  <SortableDataTable loading={loading} data={campaignData} onChange={this.handleChange} columns={columns} pagination={paginationData} />
                </TabPane>
                <TabPane tab="Paused" key="5">
                  <SortableDataTable loading={loading} data={campaignData} onChange={this.handleChange} columns={columns} pagination={paginationData} />
                </TabPane>
                {/* <TabPane tab="closed" key="6">
								<SortableDataTable loading={loading} data={campaignData} onChange={this.handleChange} columns={columns} pagination={paginationData} />
							</TabPane> */}
              </Tabs>
            </Widget>
          </div>
        </HyperXContainer>
        {/* // 	</div>
					// </div> */}

      </div>
    );
  }
}

export default withRouter(
  compose(
    // graphql(campaigns, {
    //   options: () => {
    //     const { org_id }: any = jwt.decode(localStorage.getItem("jwt"));
    //     return ({
    //       variables: {
    //         organization_id: org_id,
    //         status: DEFAULT_ACTIVE_STATUS,
    //         campaignType: DEFAULT_HYPERX_CAMPAIGN
    //       }, fetchPolicy: "network-only",
    //       forceFetch: true
    //     })
    //   },
    //   props: ({ data: { loading, error, campaigns, refetch } }: any) => ({
    //     loading, campaigns, error,
    //     changeStatus: (status: any) => {
    //       const { org_id }: any = jwt.decode(localStorage.getItem("jwt"));
    //       refetch({
    //         variables: {
    //           organization_id: org_id,
    //           status: DEFAULT_ACTIVE_STATUS,
    //           campaignType: DEFAULT_HYPERX_CAMPAIGN
    //         }, fetchPolicy: "network-only"
    //       });
    //     },
    //   }),
    // }),
    graphql(DISABLE_CAMPAIGN, {
      name: "disableCampaign"
    }),
  )(withApollo(CampaignList))
);
