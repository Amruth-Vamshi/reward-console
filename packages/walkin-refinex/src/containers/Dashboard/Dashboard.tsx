import * as React from "react";
import { Col, Row, DatePicker, Button, Icon, Empty, Spin, Table } from "antd";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { IconWithTextCard, Widget, ChartCard, Auxiliary } from "@walkinsole/walkin-components";
import * as moment from 'moment';
import * as jwt from "jsonwebtoken";
import "./style.css"
import { withApollo, ApolloProviderProps } from "react-apollo";
import { GET_ANALYTICS } from "@walkinsole/walkin-core/src/PlatformQueries";


const dateFormat = 'YYYY/MM/DD';

interface LandingProps extends ApolloProviderProps<any> {

}

interface LandingState {
    totalCampaigns: number,
    totalFeedbacks: number,
    totalForms: number,
    totalQuestions: number,
    totalChoices: number,
    totalRefinexEvents: Array<any>,
    customers: Array<any>,
    popularPlaces: Array<any>,
    complains: Array<any>,
    customerCount: number,
    org_id: string,
    startDate: moment.Moment | string,
    endDate: moment.Moment | string,
    errors: any,
    spin: boolean
}

class Landing extends React.Component<LandingProps, Partial<LandingState>> {
    constructor(props: LandingProps) {
        super(props)
        this.state = {
            totalCampaigns: 0,
            totalFeedbacks: 0,
            totalForms: 0,
            totalQuestions: 0,
            totalChoices: 0,
            totalRefinexEvents: [],
            customers: [],
            popularPlaces: [],
            complains: [],
            customerCount: 0,
            org_id: '',
            startDate: moment().subtract(30, 'months'),
            endDate: moment(),
            errors: {},
            spin: false
        }
    }


    componentWillMount() {
        console.log("This.state...", this.state)
        const { id, org_id }: any = jwt.decode(localStorage.getItem("jwt"));
        if (org_id && id) {
            this.setState({ org_id })
            this.getMetrics(org_id, this.state.endDate)
        } else console.log("Error getting JwtData");
    }

    getMetrics = (org_id: any, endDate: any) => {
        this.setState({ spin: true });
        this.props.client
            .query({
                query: GET_ANALYTICS,
                variables: { org_id: org_id, product: "REFINEX", dates: { from: this.state.startDate, to: endDate } },
                fetchPolicy: "no-cache"
            })
            .then(res => {
                console.log('>>>', res);
                this.formatData(res)
                this.setState({ spin: false });
            })
            .catch(err => {
                this.setState({ spin: false });
                console.log("Failed to get User Details" + err);

            });
    }

    formatData = (data: any) => {
        let { totalCampaigns, totalFeedbacks, totalForms, totalQuestions, totalChoices, customerCount, customers, totalRefinexEvents, complains } = this.state
        // if (!data) {
        //   data = AnyNear
        // }
        console.log("Service analytics data..", data.data.analytics);
        data.data.analytics.map(i => {
            if (i.name === "TOTAL_CAMPAIGNS") totalCampaigns = i.total
            else if (i.name === "TOTAL_FEEDBACKS") totalFeedbacks = i.total
            else if (i.name === "TOTAL_FORMS") totalForms = i.total
            else if (i.name === "TOTAL_QUESTIONS") totalQuestions = i.total
            else if (i.name === "TOTAL_CHOICES") totalChoices = i.total
            else if (i.name == "CUSTOMER_COUNTS") {
                customerCount = i.total; customers = [{ "count": 0 }, ...i.response]
            } else if (i.name == "REFINEX_EVENTS") totalRefinexEvents = i.response
        })
        this.setState({ totalCampaigns, totalFeedbacks, totalForms, totalQuestions, totalChoices, customerCount, customers, totalRefinexEvents, complains, spin: false })
    }

    disabledDate = (current: any) => {
        if (!current) return false;
        const date = moment();
        date.hour(0); date.minute(0); date.second(0);
        return current.valueOf() > date.valueOf();
    }

    disableEndDate = (current: any) => {
        if (!current) return false;
        const date = moment(this.state.startDate).add(1, 'day');
        date.hour(0); date.minute(0); date.second(0);
        return (current.valueOf() <= date.valueOf() || moment() < current);
    }

    handleChange2 = (value: any) => {
        var time = "5:30:00"
        var value1 = moment(value).format('YYYY-MM-DD');
        var d = value1 + " " + time;
        var newdate1 = new Date(d).toISOString();
        console.log("newd", newdate1)
        this.setState({ startDate: newdate1, endDate: '' });
        if (newdate1 !== '') this.state.errors.startDate = '';
    }
    handleChange3 = (value: any) => {
        var time = "5:30:00"
        var value1 = moment(value).format('YYYY-MM-DD');
        var d = value1 + " " + time;
        var newdate2 = new Date(d).toISOString();
        //console.log("newd",newdate2)
        this.setState({ endDate: newdate2 });
        this.getMetrics(this.state.org_id, newdate2)
        if (newdate2 !== '') this.state.errors.endDate = '';
    }

    customPopup = (c: any) => {
        if (c.payload[0])
            return <div className='recharts-default-tooltip tooltipPopup'>
                <div>{c.payload[0].payload.Date ? c.payload[0].payload.Date : ''}</div>
                <div className="tooltipData">{c.payload[0].dataKey + " : " + c.payload[0].value}</div>
            </div>
    }


    render() {

        const columns = [
            {
                title: 'REFINEX_EVENT_ID',
                dataIndex: 'id',
                key: 1,
                width: 200,
                fixed: 'left',
            },
            {
                title: 'customer_id',
                dataIndex: 'customer_id',
                key: 'customer_id',
                width: 200
            },
            // {
            //   title: 'customer_feedback_id',
            //   dataIndex: 'customer_feedback_id',
            //   key: 2,
            //   width: 200,
            // },
            // {
            //   title: 'producer_event_id',
            //   dataIndex: 'producer_event_id',
            //   key: 'producer_event_id',
            //   width: 200,
            // },
            // {
            //   title: 'created',
            //   dataIndex: 'created',
            //   key: 'created',
            //   width: 200,
            // },
            // {
            //   title: 'created_by',
            //   dataIndex: 'created_by',
            //   key: 'created_by',
            //   width: 200,
            // },
            // {
            //   title: 'last_updated',
            //   dataIndex: 'last_updated',
            //   key: 'last_updated',
            //   width: 200,
            //   // fixed: 'left',
            // },
            // {
            //   title: 'last_updated_by',
            //   dataIndex: 'last_updated_by',
            //   key: 'last_updated_by',
            //   width: 200,
            //   // fixed: 'left',
            // },
            // {
            //   title: 'producer_event_time',
            //   dataIndex: 'producer_event_time',
            //   key: 'producer_event_time',
            //   width: 200,
            // },
            // {
            //   title: 'event_arrival_time',
            //   dataIndex: 'event_arrival_time',
            //   key: 'event_arrival_time',
            //   width: 200,
            // },
            {
                title: 'source',
                dataIndex: 'source',
                key: 'source',
                width: 150
            },
            // {
            //   title: 'event_type',
            //   dataIndex: 'event_type',
            //   key: 'event_type',
            //   width: 200
            // },
            {
                title: 'campaign_id',
                dataIndex: 'campaign_id',
                key: 'campaign_id',
                width: 150
            },
            // {
            //   title: 'feedback_form_id',
            //   dataIndex: 'feedback_form_id',
            //   key: 'feedback_form_id',
            //   width: 200
            // },
            // {
            //   title: 'feedback_category_id',
            //   dataIndex: 'feedback_category_id',
            //   key: 'feedback_category_id',
            //   width: 200
            // },
            // {
            //   title: 'question_id',
            //   dataIndex: 'question_id',
            //   key: 'question_id',
            //   width: 150
            // },
            // {
            //   title: 'response_id',
            //   dataIndex: 'response_id',
            //   key: 'response_id',
            //   width: 150
            // },
            // {
            //   title: 'user_response',
            //   dataIndex: 'user_response',
            //   key: 'user_response',
            //   width: 200
            // },
            // {
            //   title: 'choiceIds',
            //   dataIndex: 'choiceId',
            //   key: 'choiceIds',
            //   width: 150
            // },
            // {
            //   title: 'application_id',
            //   dataIndex: 'application_id',
            //   key: 'application_id',
            //   width: 200
            // },
            // {
            //   title: 'organization_id',
            //   dataIndex: 'organization_id',
            //   key: 'organization_id',
            //   width: 200
            // },
            // {
            //   title: 'campaign_priority',
            //   dataIndex: 'campaign_priority',
            //   key: 'campaign_priority',
            //   width: 200
            // },
            // {
            //   title: 'is_campaign_control_enabled',
            //   dataIndex: 'is_campaign_control_enabled',
            //   key: 'is_campaign_control_enabled',
            //   width: 200
            // },
            // {
            //   title: 'campaign_control_percent',
            //   dataIndex: 'campaign_control_percent',
            //   key: 'campaign_control_percent',
            //   width: 200
            // },
            // {
            //   title: 'is_global_control_enabled',
            //   dataIndex: 'is_global_control_enabled',
            //   key: 'is_global_control_enabled',
            //   width: 200
            // },
            // {
            //   title: 'operation',
            //   dataIndex: 'operation',
            //   key: 'operation',
            //   width: 200
            // },
            {
                title: 'completed',
                dataIndex: 'completed',
                key: 'completed',
                width: 150
            }
        ]
        const width: any = window.innerWidth;
        let nRows: any = width / 300
        let demoData = []
        const antIcon = <Icon type="loading" style={{ fontSize: 100 }} spin />;
        demoData = this.state.totalRefinexEvents
        return (
            <Auxiliary>
                <div
                    style={{
                        minHeight: "100vh"
                    }}
                    className="gx-main-content-wrapper">
                    <Row>
                        <Col sm={0} md={6} xl={8}>
                            <span className='gx-d-none gx-d-sm-flex'
                                style={{ width: '100%', fontSize: 24, color: '#5B5B5B' }}>
                                <Icon style={{ fontSize: 26, marginRight: 14, color: '#D5003A' }} type="alert" theme="filled" />
                                Dashboard
              </span>
                        </Col>

                        <Col sm={24} md={18} xl={16}>
                            <Row gutter={20} type="flex" justify="end" style={{ marginBottom: 15 }} >
                                <Col>
                                    {/* <div>From Date</div> */}
                                    <DatePicker
                                        getCalendarContainer={(triggerNode: any) => triggerNode.parentNode}
                                        onChange={this.handleChange2}
                                        value={this.state.startDate ? moment(this.state.startDate, dateFormat) : moment()}
                                        format={dateFormat}
                                        disabledDate={this.disabledDate}
                                        name="startDate"
                                        placeholder="Select Start Date" />
                                    <p>{this.state.errors.startDate}</p>
                                </Col>
                                <Col>
                                    {/* <div>To Date</div> */}
                                    <DatePicker
                                        getCalendarContainer={(triggerNode: any) => triggerNode.parentNode}
                                        onChange={this.handleChange3}
                                        value={this.state.endDate ? moment(this.state.endDate, dateFormat) : moment()}
                                        format={dateFormat}
                                        disabledDate={this.disableEndDate}
                                        name="endDate"
                                        placeholder="Select End Date" />
                                    <p>{this.state.errors.endDate}</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    {this.state.spin ?
                        <div> <br /> <br /> <br /> <br />
                            <div className="divCenter">
                                <Spin size="large" indicator={antIcon} />
                            </div> <br /> <br /> <br />
                        </div>
                        : <div>

                            <Row gutter={12}>
                                <Col span={5} className="gx-col-full">
                                    <IconWithTextCard cardColor="cyan" antIcon="dollar" title={this.state.totalCampaigns} subTitle="Total Campaigns" />
                                </Col>
                                <Col span={5} className="gx-col-full">
                                    <IconWithTextCard cardColor="orange" icon="feedback" title={this.state.totalFeedbacks} subTitle="Total Feedbacks" />
                                </Col>
                                <Col span={4} className="gx-col-full">
                                    <IconWithTextCard cardColor="teal" antIcon="form" title={this.state.totalForms} subTitle="Total Forms" />
                                </Col>
                                <Col span={5} className="gx-col-full">
                                    <IconWithTextCard cardColor="red" icon="question-circle" title={this.state.totalQuestions} subTitle="Total Questions" />
                                </Col>
                                <Col span={5} className="gx-col-full">
                                    <IconWithTextCard cardColor="blue" antIcon="more" title={this.state.totalChoices} subTitle="Total Choices" />
                                </Col>
                                {/* <Col xl={6} lg={6} md={6} sm={12} xs={12} className="gx-col-full">
                  <IconWithTextCard cardColor="cyan" antIcon="more" title={this.state.totalChoices} subTitle="Total Choices" />
                </Col> */}
                            </Row>

                            <Row>
                                <Col span={24}>
                                    <ChartCard prize={this.state.customerCount} desc="Total no. of new customers" //icon="wall"
                                        // title="20" styleName="up"
                                        children={
                                            this.state.customerCount ?
                                                <ResponsiveContainer width="100%" height={130}>
                                                    <AreaChart data={this.state.customers}
                                                        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                                                        <Tooltip content={c => this.customPopup(c)} />
                                                        {/* <Tooltip /> */}
                                                        {/* <XAxis dataKey="name" /> */}
                                                        <defs>
                                                            <linearGradient id="color2" x1="0" y1="0" x2="1" y2="0">
                                                                <stop offset="5%" stopColor="#4ECDE4" stopOpacity={0.9} />
                                                                <stop offset="95%" stopColor="#6BEF93" stopOpacity={0.9} />
                                                            </linearGradient>
                                                        </defs>
                                                        <Area dataKey='count' type='monotone' strokeWidth={0.2} stackId="2" stroke='#4D95F3'
                                                            fill="url(#color2)"
                                                            fillOpacity={1} />
                                                    </AreaChart>
                                                </ResponsiveContainer> : <Empty style={{ marginBottom: 10 }} />
                                        } />
                                </Col>
                            </Row>

                            <Row>

                                <Col xl={24} lg={24} md={24}>
                                    <div className='homeNewPlaces ant-table-tbody'>
                                        <Widget title="RefineX Events" styleName="gx-card">
                                            {/* <Table columns={columns} dataSource={data} bordered pagination={{ pageSize: 5 }} scroll={{ x: '20%', y: 200 }} /> */}
                                            <Table columns={columns} dataSource={demoData} bordered pagination={{ pageSize: 5 }} scroll={{ x: '20%', y: 200 }} />

                                        </Widget>
                                    </div>
                                </Col>

                            </Row>
                        </div>}

                </div>
            </Auxiliary>
        );
    }
}

export default withApollo(Landing)