import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { campaigns, DISABLE_CAMPAIGN } from '../Query/index';
import { Card, Menu, Dropdown, Col, Button, Progress, Tabs, message } from 'antd';
import moment from 'moment';
import { withApollo, graphql, compose } from 'react-apollo';
import { SortableDataTable, InstantSearch, CampaignHeader, CircularProgress, Widget } from '@walkinsole/walkin-components';
import './style.css';
import { DEFAULT_ACTIVE_STATUS, DEFAULT_REFINEX_CAMPAIGN, NEW_CAMPAIGN, CAMPAIGN_DASHBOARD, SHOULD_EDIT } from "../../Utils"
import jwt from "jsonwebtoken";
import includes from "lodash/includes"
import { shouldInclude } from 'apollo-utilities';
const { TabPane } = Tabs;

class CampaignList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortedInfo: null,
            filtered: null,
            allCampaigns: null,
            data: null,
            loading: false,
            showPopUp: false,
            popupmessage: "",
            key: this.props.location.tabKey ? this.props.location.tabKey : '1'
        };
    }


    success = () => {
        message.success(this.state.popupmessage, 5);
        this.setState({ showPopUp: false, popupmessage: "" })
    };
    componentDidMount() {

        const { campaigns, loading } = this.props;
        this.setState({ loading: loading })
    }


    componentDidUpdate(preValue) {
        if (this.props.loading !== preValue.loading) {
            this.setInitialValues()
            console.log(this.props)
        }
    }

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
    handleChange = (pagination, filters, sorter) => {
        this.setState({
            sortedInfo: sorter,
        });
    };

    onDeleteContact = async  contact => {
        console.log('delete', contact);
        this.setState({ loading: true })
        await this.props.disableCampaign({
            variables: {
                id: contact.id
            }
        })
        try {
            await this.props.refetch()
            this.setState({ loading: false })
        }
        catch (err) {
            this.setState({ loading: false })
            console.log(err)
        }
    };
    onDuplicateContact = contact => {
        console.log('dupl', contact);
        const { history, match } = this.props;
        console.log(this.props)
        history.push({
            pathname: `${NEW_CAMPAIGN}/${contact.id}`,
            state: {
                campaignSelected: contact,
            },
        });
    };

    showMatrics = record => {
        console.log("matrics", record)
        this.props.history.push({
            pathname: `${CAMPAIGN_DASHBOARD}/${record.id}`,
            state: { campaignSelected: record },
        });
    }
    menus = record => {
        console.log("record", record)
        return (
            <Menu
                onClick={e => {
                    if (e.key === 'duplicate') {
                        this.onDuplicateContact(record);
                    } else if (e.key === 'edit') {
                        this.props.history.push(`/refinex/feedback/${record.id}/edit`)

                    } else if (e.key === "view") {
                        this.showMatrics(record)
                    } else {
                        this.onDeleteContact(record);
                    }
                }}
            >
                <Menu.Item key="view">View</Menu.Item>
                {includes(record.campaignStatus, SHOULD_EDIT) ? <Menu.Item key="edit">Edit</Menu.Item> : null}
                <Menu.Item key="duplicate">Duplicate</Menu.Item>
                <Menu.Item key="delete">Delete</Menu.Item>
            </Menu>
        );
    }

    onCampaignFilteredList = newList => {
        console.log("new list", newList)
        this.setState({
            filtered: newList,
        });
    };

    onTabChange = key => {
        const { allCampaigns } = this.state

        console.log(key)
        if (!allCampaigns || allCampaigns.length < 1) return
        if (key == 2) {
            let upcomingCampaigns = allCampaigns.filter(val => {
                if (val.status == 'ACTIVE') {
                    return val.campaignStatus == 'LIVE' && moment(val.startTime).isAfter(moment());
                }
            });
            this.setState({ data: upcomingCampaigns, filtered: null });
        }

        if (key == 3) {
            let completedCampaigns = allCampaigns.filter(val => {
                if (val.status == 'ACTIVE') {
                    return moment(val.endTime).isBefore(moment());
                }
            });
            this.setState({ data: completedCampaigns, filtered: null });
        }
        if (key == 4) {
            let draftCampaigns = allCampaigns.filter(val => {
                return val.campaignStatus == 'DRAFT';
            });
            this.setState({ data: draftCampaigns, filtered: null });
        }
        if (key == 5) {
            let draftCampaigns = allCampaigns.filter(val => {
                return val.campaignStatus == 'PAUSE';
            });
            this.setState({ data: draftCampaigns, filtered: null });
        }
        if (key == 1) {
            let liveCampaigns = allCampaigns.filter(val => {
                if (val.status == 'ACTIVE') {
                    return val.campaignStatus == 'LIVE' && moment().isBetween(val.startTime, val.endTime);
                }
            });
            this.setState({ data: liveCampaigns, filtered: null });
        }
    };

    render() {
        console.log(this.props)
        let { sortedInfo, filteredInfo, filtered, data, loading, showPopUp } = this.state;
        if (showPopUp) {
            this.success()
        }
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
            defaultPageSize: 5,
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`
        }


        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                sorter: (a, b) => (a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0),
                sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
            },
            {
                title: 'Start date & end date',
                dataIndex: 'startTime',
                key: 'startTime',
                render: (text, row) => (
                    <div>
                        {moment(text).format('DD-MM-YYYY')}
                        <Progress
                            style={{ width: '35%', margin: '0px 5px 0px 5px' }}
                            percent={Math.round(
                                ((moment() - moment(text)) / (moment(row.endTime) - moment(text))) * 100
                            )}
                            showInfo={false}
                        />
                        {moment(row.endTime).format('DD-MM-YYYY')}
                    </div>
                ),
            },
            {
                title: '',
                key: 'action',
                render: (text, record) => (
                    <div className="gx-module-contact-right">
                        <Dropdown overlay={this.menus(record)} placement="bottomRight" trigger={['click']}>
                            <i className="gx-icon-btn icon icon-ellipse-v" />
                        </Dropdown>
                    </div>
                ),
            },
        ];
        return (

            <div style={{
                minHeight: "100vh",
                margin: '1 32px'
            }}>
                <CampaignHeader
                    children={
                        <Fragment>
                            <Col span={12}>
                                <h3 className="gx-text-grey paddingLeftStyle campaignHeaderTitleStyle">Campaigns</h3>
                            </Col>
                            <Col className="searchInputStyle" span={12}>
                                <Button type="primary" onClick={this.onNewCampaign}>
                                    CREATE CAMPAIGN
								</Button>
                            </Col>
                        </Fragment>
                    }
                />
                <div className="RefineX-campaignList">
                    <Widget title="Campaign List" style={{ margin: '32px' }} styleName="gx-card-tabs"
                        extra={
                            <InstantSearch
                                placeHolder="Search campaign"
                                data={data}
                                onFilteredList={this.onCampaignFilteredList}
                            />}
                    >

                        <Tabs defaultActiveKey={this.state.key ? this.state.key : "1"} onChange={this.onTabChange}>
                            <TabPane tab="Live" key="1">
                                <SortableDataTable data={campaignData} onChange={this.handleChange} columns={columns} pagination={paginationData} loading={loading} />
                            </TabPane>
                            <TabPane tab="Upcoming" key="2">
                                <SortableDataTable data={campaignData} onChange={this.handleChange} columns={columns} pagination={paginationData} loading={loading} />
                            </TabPane>
                            <TabPane tab="Completed" key="3">
                                <SortableDataTable data={campaignData} onChange={this.handleChange} columns={columns} pagination={paginationData} loading={loading} />
                            </TabPane>
                            <TabPane tab="Draft" key="4">
                                <SortableDataTable data={campaignData} onChange={this.handleChange} columns={columns} pagination={paginationData} loading={loading} />
                            </TabPane>
                            <TabPane tab="Paused" key="5">
                                <SortableDataTable data={campaignData} onChange={this.handleChange} columns={columns} pagination={paginationData} loading={loading} />
                            </TabPane>
                        </Tabs>

                    </Widget>
                </div>

            </div>
        );
    }
}

export default withRouter(
    compose(

        graphql(DISABLE_CAMPAIGN, {
            name: "disableCampaign"
        }),
        graphql(campaigns, {
            options: () => ({
                variables: {
                    status: DEFAULT_ACTIVE_STATUS,
                    campaignType: DEFAULT_REFINEX_CAMPAIGN,
                    organization_id: jwt.decode(localStorage.getItem("jwt")).org_id
                },
                fetchPolicy: "network-only"
            }),
            props: ({ data: { loading, error, campaigns, refetch } }) => ({
                loading,
                campaigns,
                error,
                refetch,
                changeStatus: status => {
                    const variables = {
                        status,
                        campaignType: DEFAULT_REFINEX_CAMPAIGN,
                        organization_id: jwt.decode(localStorage.getItem("jwt")).org_id
                    };
                    refetch(variables);
                }


            })
            ,
        }
        )

    )(CampaignList)
);
