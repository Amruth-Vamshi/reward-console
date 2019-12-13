import * as React from "react";
import { Col, Row, message, Button, Icon, Select } from "antd";
import { Auxiliary } from "@walkinsole/walkin-components";
import moment from 'moment';
import * as jwt from "jsonwebtoken";
import "./style.css"
import { withApollo, ApolloProviderProps } from "react-apollo";
import { GET_ANALYTICS } from "@walkinsole/walkin-core/src/PlatformQueries";
import { ColumnProps } from "antd/lib/table";
import { CounterCard, MultipleCounterCard } from '@walkinsole/shared';
import PercentageAreaChart from "./Components/PercentAreaChart"
import LineValueChart from "./Components/LineValueChart"
import SimpleBarChart from "./Components/SimpleBarChart"
import LiveSurvey from "./Components/LiveSurvey"
import ProgressBars from "./Components/ProgressBars"
import Tables from "./Components/Tables"

const dateFormat = 'YYYY/MM/DD';
const { Option } = Select;

interface LandingProps extends ApolloProviderProps<any> {

}

interface TColumnProps {

    title: string,
    dataIndex: string,
    key: number,
    width: number,
    fixed: string,

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
    spin: boolean,
    filterCustomerValue: string,
    filterDateValue: string
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
            spin: false,
            filterCustomerValue: "all_customers",
            filterDateValue: "last_month"
        }
    }


    UNSAFE_componentWillMount() {
        console.log("This.state...", this.state)
        // const { id, org_id }: any = jwt.decode(localStorage.getItem("jwt"));
        // if (org_id && id) {
        //     this.setState({ org_id })
        //     this.getMetrics(org_id, this.state.endDate)
        // } else console.log("Error getting JwtData");
    }

    // ***********************   UI METHODS  ***************************

    createSurvey() {
        message.warn("Function not attached yet!")
    }

    viewDraftedSurvey() {
        message.warn("Function to view drafted survey's not linked!")
    }

    handleCustomerChange(value) {
        console.log(`selected Customer Filter :  ${value}`);
        this.setState({ filterCustomerValue: value })
    }

    handleDateChange(value) {
        console.log(`selected Date Filter :  ${value}`);
        this.setState({ filterDateValue: value })
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
        data.data.analytics.map((i: any) => {
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

    render() {

        const antIcon = <Icon type="loading" style={{ fontSize: 100 }} spin />;

        return (
            <Auxiliary>
                <div
                    style={{ minHeight: "100vh", backgroundColor: "#F2F2F2" }}
                    className="gx-main-content-wrapper">
                    <Row>
                        <Col sm={24} md={18} xl={20}>
                            <span className='gx-d-none gx-d-sm-flex'
                                style={{ width: '100%', fontSize: 24, color: '#5B5B5B' }}>
                                Dashboard
                            </span>
                        </Col>
                        <Col sm={0} md={6} xl={4} style={{ textAlign: "end" }}>
                            <Button type={"primary"} onClick={() => { this.createSurvey() }}>Create Survey</Button>
                        </Col>
                    </Row>
                    <Row style={{ paddingBottom: "20px" }}>
                        <Col span={12}>
                            <Row>
                                <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                                    <CounterCard titleColor="#545454" subtitleColor={"#999999"} title={"+37"} subTitle="Net Promoter Score" />
                                </Col>
                                <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                                    <MultipleCounterCard textColor={"#999999"} valueColor={"#000"} title={"NPS"} counterArray={[{ title: "New Customers", value: "+3" }, { title: "Existing Customers", value: "+5" }]} />
                                </Col>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <Row>
                                <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                                    <CounterCard titleColor="#545454" subtitleColor={"#999999"} title={"06.36"} subTitle="Customer Satisfaction Score" />
                                </Col>
                                <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                                    <MultipleCounterCard textColor={"#999999"} valueColor={"#000"} title={"CSAT"} counterArray={[{ title: "New Customers", value: "0.35" }, { title: "Existing Customers", value: "0.20" }]} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{ backgroundColor: "#FFF", height: "40px", marginLeft: "1px", marginRight: "1px", marginBottom: "5px" }}>
                        <div style={{ textAlign: "end", width: "100%" }}>
                            <Select size={"small"} defaultValue="all_customers" value={this.state.filterCustomerValue} style={{ width: 140, padding: "9px" }} onChange={(val) => { this.handleCustomerChange(val) }}>
                                <Option value="all_customers">All Customers</Option>
                                <Option value="recent_50">Recent 50</Option>
                                <Option value="recent_10">Recent 10</Option>
                            </Select>
                            <Select size={"small"} defaultValue="last_week" value={this.state.filterDateValue} style={{ width: 150, padding: "9px" }} onChange={(val) => { this.handleDateChange(val) }}>
                                <Option value="last_week">Last Week</Option>
                                <Option value="last_month">Last Month</Option>
                                <Option value="last_6_months">Last 6 Months</Option>
                            </Select>
                        </div>
                    </Row>
                    <Row style={{ marginLeft: "1px", backgroundColor: "#FFF", marginRight: "1px" }}>
                        <Col span={12}>
                            <div>
                                <Row style={{ backgroundColor: "#FFF", marginRight: "1px", paddingTop: "8px", paddingBottom: "8px" }} >
                                    <Col span={8} style={{ textAlign: "start", fontWeight: "bold", fontSize: "14px" }}>NPS</Col>
                                </Row>
                                <Row style={{ backgroundColor: "#FFF", marginRight: "1px", padding: "5px 16px 18px 5px" }} >
                                    <LineValueChart chartType="nps" strokeColor="#038FDE" />
                                </Row>
                            </div>
                            <div>
                                <Row style={{ backgroundColor: "#FFF", marginRight: "1px", paddingTop: "8px", paddingBottom: "8px" }} >
                                    <Col span={8} style={{ textAlign: "start", fontWeight: "bold", fontSize: "14px" }}>NPS Distribution %</Col>
                                </Row>
                                <Row style={{ height: "18px", backgroundColor: "#FFF", marginRight: "1px" }}>
                                    <Col span={6} offset={2}><Row><div style={{ backgroundColor: "#46CB92", height: "12px", width: "12px" }}></div><span style={{ fontSize: "12px", color: "#333333", paddingLeft: "2px" }}>Promoter</span></Row></Col>
                                    <Col span={6}><Row><div style={{ backgroundColor: "#FCAD78", height: "12px", width: "12px" }}></div><span style={{ fontSize: "12px", color: "#333333", paddingLeft: "2px" }}>Neutrals</span></Row></Col>
                                    <Col span={6}><Row><div style={{ backgroundColor: "#E96B81", height: "12px", width: "12px" }}></div><span style={{ fontSize: "12px", color: "#333333", paddingLeft: "2px" }}>Detractors</span></Row></Col>
                                </Row>
                                <Row style={{ backgroundColor: "#FFF", marginRight: "1px", padding: "5px 16px 18px 5px" }} >
                                    <PercentageAreaChart />
                                </Row>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div>
                                <Row style={{ backgroundColor: "#FFF", marginLeft: "1px", paddingTop: "8px", paddingBottom: "8px" }} >
                                    <Col span={8} style={{ textAlign: "start", fontWeight: "bold", fontSize: "14px" }}>CSAT</Col>
                                </Row>
                                <Row style={{ backgroundColor: "#FFF", marginLeft: "1px", padding: "5px 16px 18px 5px" }} >
                                    <LineValueChart chartType="csat" strokeColor="#292961" />
                                </Row>
                            </div>
                            <div>
                                <Row style={{ backgroundColor: "#FFF", marginLeft: "1px", paddingTop: "8px", paddingBottom: "8px" }} >
                                    <Col span={8} style={{ textAlign: "start", fontWeight: "bold", fontSize: "14px" }}>CSAT</Col>
                                </Row>
                                <Row style={{ height: "18px", backgroundColor: "#FFF", marginLeft: "1px" }}></Row>
                                <Row style={{ backgroundColor: "#FFF", marginLeft: "1px", padding: "5px 16px 18px 5px" }} >
                                    <ProgressBars />
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "20px", paddingBottom: "20px" }}>
                        <Col span={12}>
                            <Row>
                                <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                                    <CounterCard titleColor="#038FDE" subtitleColor={"#707070"} title={"7"} subTitle="Total Surveys" />
                                </Col>
                                <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                                    <CounterCard titleColor="#46CB92" subtitleColor={"#707070"} title={"4"} subTitle="Live Surveys" />
                                </Col>
                            </Row>
                            <Row style={{ marginTop: "21px" }}>
                                <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                                    <CounterCard titleColor="#FCAD78" subtitleColor={"#707070"} title={"3"} subTitle="Upcoming Surveys" />
                                </Col>
                                <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                                    <CounterCard titleColor="#2E2E2E" subtitleColor={"#707070"} title={"120"} subTitle="Total Responses" />
                                </Col>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <div style={{ backgroundColor: "#FFF", height: "231px" }}>
                                <Row style={{ backgroundColor: "#FFF", marginRight: "1px", marginLeft: "1px", paddingTop: "8px", paddingBottom: "8px" }} >
                                    <Col span={8} style={{ textAlign: "start", fontWeight: "bold", fontSize: "14px" }}>Live Survey Result</Col>
                                </Row>
                                <Row style={{ backgroundColor: "#FFF", marginLeft: "1px", marginRight: "1px", paddingTop: "8px", paddingBottom: "8px" }} >
                                    <LiveSurvey />
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row style={{ marginLeft: "1px", marginRight: "1px", paddingBottom: "20px" }}>
                        <Row style={{ backgroundColor: "#FFF", paddingTop: "14px", paddingBottom: "14px", width: "100%", marginLeft: "1px" }} >
                            <Col span={16} style={{ textAlign: "start", fontWeight: "bold", fontSize: "14px", alignSelf: "center", height: "30px" }}>Survey List</Col>
                            <Col span={8} style={{ textAlign: "end", alignSelf: "center", height: "30px" }}>
                                <Button style={{ color: "#E96B81" }} type={"danger"} size={"small"} ghost onClick={() => { this.viewDraftedSurvey() }}>
                                    4 surveys in draft
                                </Button>
                            </Col>
                        </Row>
                        <Tables />
                    </Row>
                </div>
            </Auxiliary>
        );
    }
}

export default withApollo(Landing)