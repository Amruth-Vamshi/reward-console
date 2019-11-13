import './style.css';

import { CampaignHeader, InstantSearch, SortableDataTable } from '@walkinsole/shared';
import { Widget } from '@walkinsole/walkin-components';
import { Button, Col, Dropdown, Icon, Menu, Progress, Tabs } from 'antd';
import jwt from 'jsonwebtoken';
import moment from 'moment';
import * as React from 'react';
import { compose, graphql, withApollo } from 'react-apollo';
import { RouteChildrenProps } from 'react-router';
import { withRouter } from 'react-router-dom';

import { campaigns, DISABLE_CAMPAIGN } from '../../../query/campaign';
import { DEFAULT_ACTIVE_STATUS, DEFAULT_HYPERX_CAMPAIGN } from '../../../utils';
import { CAMPAIGN_DASHBOARD, NEW_CAMPAIGN } from '../../../utils/RouterConstants';
import HyperXContainer from '../../../components/atoms/HyperXContainer';
import { WHeader } from '@walkinsole/shared/src';

const { org_id, id }: any = jwt.decode(localStorage.getItem("jwt"));
const { TabPane } = Tabs;

interface CampaignListProps extends RouteChildrenProps {
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
      loading: false,
      key: this.props.location.tabKey ? this.props.location.tabKey : '1'
    };
  }
  componentDidMount() {
    const { campaigns, loading } = this.props;
    this.setState({ loading: loading })
  }


  componentDidUpdate(preValue: any) {
    if (this.props.loading !== preValue.loading) {
      this.setInitialValues()
      console.log(this.props)
    }
  }

  // componentWillReceiveProps = p => {
  // 	this.setInitialValues()
  // }

  setInitialValues = () => {
    const { campaigns, loading } = this.props;
    this.setState({ allCampaigns: campaigns, loading: false }, () => {
      this.onTabChange(this.state.key)
    })

  }
  onNewCampaign = () => {
    const { history } = this.props;
    history.push({
      pathname: NEW_CAMPAIGN,
    });
  };
  handleChange = (pagination: any, filters: any, sorter: any) => {
    console.log(pagination, filters, sorter);
    this.setState({ sortedInfo: sorter });
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
      {/* {_.includes(record.campaignStatus, SHOULD_EDIT) ? <Menu.Item key="edit"><Icon type="edit" /> Edit</Menu.Item> : null} */}
      {/* <Menu.Item key="duplicate"><Icon type="copy" /> Duplicate</Menu.Item> */}
      <Menu.Item key="delete"><Icon type="delete" /> Delete</Menu.Item>
    </Menu>
  );

  onCampaignFilteredList = (newList: any) => {
    console.log("new list", newList)
    this.setState({
      filtered: newList,
    });
  };

  onTabChange = (key: any) => {
    this.setState({ key })
    const { allCampaigns } = this.state
    if (!allCampaigns || allCampaigns.length < 1) return
    if (key == 2) {
      let upcomingCampaigns = allCampaigns.filter((val: any) => {
        if (val.status == 'ACTIVE') {
          return val.campaignStatus == 'LIVE' && moment(val.startTime).isAfter(moment());
        }
      });
      this.setState({ data: upcomingCampaigns, filtered: null });
    }

    if (key == 3) {
      let completedCampaigns = allCampaigns.filter((val: any) => {
        if (val.status == 'ACTIVE') {
          return moment(val.endTime).isBefore(moment());
        }
      });
      this.setState({ data: completedCampaigns, filtered: null });
    }
    if (key == 4) {
      let draftCampaigns = allCampaigns.filter((val: any) => {
        return val.campaignStatus == 'DRAFT';
      });
      this.setState({ data: draftCampaigns, filtered: null });
    }
    if (key == 5) {
      let draftCampaigns = allCampaigns.filter((val: any) => {
        return val.campaignStatus == 'PAUSE';
      });
      this.setState({ data: draftCampaigns, filtered: null });
    }
    if (key == 1) {
      let liveCampaigns = allCampaigns.filter((val: any) => {
        if (val.status == 'ACTIVE') {
          return val.campaignStatus == 'LIVE' && moment().isBetween(val.startTime, val.endTime);
        }
      });
      this.setState({ data: liveCampaigns, filtered: null });
    }
  };

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
      total: campaignData ? campaignData.length : 0,
      defaultPageSize: 6,
      showTotal: (total: any, range: any) => `${range[0]}-${range[1]} of ${total} items`
    }

    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: '30%',
        render: (text: any, row: any) => <div style={{ color: '#292929' }}> {text} </div>,
        sorter: (a: any, b: any) => (a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0),
        sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
      },
      {
        title: 'Start date & end date',
        dataIndex: 'startTime',
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
        {/* <CampaignHeader
          children={
            <React.Fragment>
              <Col span={12}>
                <h3 className="gx-text-grey paddingLeftStyle campaignHeaderTitleStyle">Campaigns</h3>
              </Col>
              <Col style={{ display: 'flex', justifyContent: 'flex-end' }} span={12}>
                <Button type="primary" style={{ marginBottom: 0 }} onClick={this.onNewCampaign}>
                  CREATE CAMPAIGN
								</Button>
              </Col>
            </React.Fragment>
          }
        /> */}
        <WHeader title='Campaigns' extra={<Button type="primary" style={{ marginBottom: 0 }} onClick={this.onNewCampaign}>CREATE CAMPAIGN</Button>} />
        {/* // <div className="gx-card" style={{ margin: '32px' }}>
					// 	<div className="gx-card-body">
					// 		<div className="searchInputStyle">
					// 			<InstantSearch
					// 				placeHolder="Search campaign"
					// 				data={data}
					// 				onFilteredList={this.onCampaignFilteredList}
					// 			/>
					// 		</div> */}
        <HyperXContainer margin='32px' headerHeightInPX={160}>
          <div className="HyperX-campaignList">
            <Widget title="Campaign List" styleName="gx-card-tabs"
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
    graphql(campaigns, {
      options: () => ({
        variables: {
          organization_id: org_id,
          status: DEFAULT_ACTIVE_STATUS,
          campaignType: DEFAULT_HYPERX_CAMPAIGN
        }, fetchPolicy: "network-only",
        forceFetch: true
      }),
      props: ({ data: { loading, error, campaigns, refetch } }: any) => ({
        loading, campaigns, error,
        changeStatus: (status: any) => {
          refetch({
            variables: {
              organization_id: org_id,
              status: DEFAULT_ACTIVE_STATUS,
              campaignType: DEFAULT_HYPERX_CAMPAIGN
            }, fetchPolicy: "network-only"
          });
        },
      }),
    }),
    graphql(DISABLE_CAMPAIGN, {
      name: "disableCampaign"
    }),
  )(CampaignList)
);
