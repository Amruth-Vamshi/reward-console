import * as React from "react";
import { Col, Row, message, Button, Icon, Empty, Spin, Table } from "antd";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { IconWithTextCard, Widget, ChartCard, Auxiliary } from "@walkinsole/walkin-components";
import moment from 'moment';
import * as jwt from "jsonwebtoken";
import "./style.css"
import { withApollo, ApolloProviderProps } from "react-apollo";
import { GET_ANALYTICS } from "@walkinsole/walkin-core/src/PlatformQueries";
import { ColumnProps } from "antd/lib/table";
import { CounterCard, MultipleCounterCard } from '@walkinsole/shared';

const dateFormat = 'YYYY/MM/DD';

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
                                {/* <Icon style={{ fontSize: 26, marginRight: 14, color: '#D5003A' }} type="alert" theme="filled" /> */}
                                Dashboard
                            </span>
                        </Col>
                        <Col sm={0} md={6} xl={4}>
                            <Button type={"primary"} onClick={() => { this.createSurvey() }}>Create Survey</Button>
                        </Col>
                    </Row>
                    <Row style={{ paddingBottom: "20px" }}>
                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                            <CounterCard titleColor="#545454" subtitleColor={"#999999"} title={"+37"} subTitle="Net Promoter Score" />
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                            <MultipleCounterCard textColor={"#999999"} valueColor={"#000"} title={"NPS"} counterArray={[{ title: "New Customers", value: "+3" }, { title: "Existing Customers", value: "+5" }]} />
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                            <CounterCard titleColor="#545454" subtitleColor={"#999999"} title={"06.36"} subTitle="Customer Satisfaction Score" />
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                            <MultipleCounterCard textColor={"#999999"} valueColor={"#000"} title={"CSAT"} counterArray={[{ title: "New Customers", value: "0.35" }, { title: "Existing Customers", value: "0.20" }]} />
                        </Col>
                    </Row>
                    <Row style={{ height: "20px", marginLeft: "1px", marginRight: "1px" }}>
                        <Col span={11} style={{ backgroundColor: "#FFF" }} ></Col>
                        <Col span={11} offset={2} style={{ backgroundColor: "#FFF" }} ></Col>
                    </Row>
                </div>
            </Auxiliary>
        );
    }
}

export default withApollo(Landing)