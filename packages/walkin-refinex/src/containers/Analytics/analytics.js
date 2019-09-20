
import React, { Component } from 'react'
import { Col, Row, DatePicker, Button, Icon, Empty, Spin, Table } from "antd";
import { IconWithTextCard, Widget, ChartCard, Auxiliary } from "@walkinsole/walkin-components";
import { Bar, BarChart, Legend, CartesianGrid, Tooltip, XAxis, YAxis, RadialBarChart, RadialBar } from "recharts";
import { graphql, compose, withApollo } from "react-apollo";
import { GET_ANALYTICS, ANALYTICS } from "@walkinsole/walkin-core/src/PlatformQueries";
import moment from 'moment';
const dateFormat = 'YYYY/MM/DD';
import jwt from "jsonwebtoken";
import Cylinder3DChart from '@walkinsole/walkin-nearx/src/routes/Dashboard/Cylinder3DChart'


const data = [
    {
        name: 'How would you rate your experience at CCD today?', uv: 47, pv: 2400, fill: '#8884d8',
    },
    {
        name: 'How likely are you to recommend CCD to your friends on a scale of 0-10', uv: 40, pv: 4567, fill: '#83a6ed',
    },
    {
        name: 'Please help us identify the improvement areas with payment/billing/offers?', uv: 15, pv: 1398, fill: '#8dd1e1',
    },
    {
        name: 'What did you like most about our service', uv: 8.22, pv: 9800, fill: '#82ca9d',
    },
    {
        name: 'What problem did you face with our service?', uv: 12, pv: 3908, fill: '#a4de6c',
    },
    // {
    //     name: '50+', uv: 2.63, pv: 4800, fill: '#d0ed57',
    // },
    // {
    //     name: 'unknow', uv: 6.67, pv: 4800, fill: '#ffc658',
    // },
];

const style = {
    top: 0,
    left: 350,
    lineHeight: '24px',
};
class analytics extends Component {
    constructor(props) {
        super(props)
        this.state = {
            HOUR_OF_DAY_VS_EVENT_COUNT: 0,
            DAY_OF_WEEK_VS_EVENT_COUNT: 0,
            TOP_QUESTION: 0,
            startDate: moment().subtract(30, 'day'),
            endDate: moment(),
            org_id: '',
            errors: {}
        }
    }

    componentWillMount() {
        console.log("This.state...", this.state)
        const { id, org_id } = jwt.decode(localStorage.getItem("jwt"));
        this.getMetrics(org_id, this.state.endDate)

        // if (org_id && id) {
        //     this.setState({ org_id })
        //     this.getMetrics(org_id, this.state.endDate)
        // } else console.log("Error getting JwtData");
    }

    disabledDate = current => {
        if (!current) return false;
        const date = moment();
        date.hour(0); date.minute(0); date.second(0);
        return current.valueOf() > date.valueOf();
    }

    disableEndDate = current => {
        if (!current) return false;
        const date = moment(this.state.startDate).add(1, 'day');
        date.hour(0); date.minute(0); date.second(0);
        return (current.valueOf() <= date.valueOf() || moment() < current);
    }

    handleChange2 = (value) => {
        var time = "5:30:00"
        var value1 = moment(value).format('YYYY-MM-DD');
        var d = value1 + " " + time;
        var newdate1 = new Date(d).toISOString();
        console.log("newd", newdate1)
        this.setState({ startDate: newdate1, endDate: '' });
        if (newdate1 !== '') this.state.errors.startDate = '';
    }
    handleChange3 = (value) => {
        var time = "5:30:00"
        var value1 = moment(value).format('YYYY-MM-DD');
        var d = value1 + " " + time;
        var newdate2 = new Date(d).toISOString();
        //console.log("newd",newdate2)
        this.setState({ endDate: newdate2 });
        this.getMetrics(this.state.org_id, newdate2)
        if (newdate2 !== '') this.state.errors.endDate = '';
    }

    getMetrics = (org_id, endDate) => {
        this.setState({ spin: true });
        this.props.client
            .query({
                query: GET_ANALYTICS,
                variables: { org_id: org_id, product: "REFINEX", dates: { from: this.state.startDate, to: endDate } },
                fetchPolicy: "no-cache"
            })
            .then(res => {
                console.log('>>>...', res);
                this.formatData(res)
                this.setState({ spin: false });
            })
            .catch(err => {
                this.setState({ spin: false });
                console.log("Failed to get User Details" + err);
                this.formatData()
            });
    }

    formatData = data => {
        let { HOUR_OF_DAY_VS_EVENT_COUNT, DAY_OF_WEEK_VS_EVENT_COUNT, TOP_QUESTION } = this.state
        // if (!data) {
        //   data = AnyNear
        // }
        console.log("Service analytics data..", this.state);
        data.data.analytics.map(i => {
            if (i.name === "HOUR_OF_DAY_VS_EVENT_COUNT") HOUR_OF_DAY_VS_EVENT_COUNT = i.response
            else if (i.name === "DAY_OF_WEEK_VS_EVENT_COUNT") DAY_OF_WEEK_VS_EVENT_COUNT = i.response
            else if (i.name === "TOP_QUESTION") TOP_QUESTION = i.response
        })
        this.setState({ HOUR_OF_DAY_VS_EVENT_COUNT, DAY_OF_WEEK_VS_EVENT_COUNT, TOP_QUESTION, spin: false })
    }

    render() {
        console.log("Analytics..", this.state)
        let hoursOfTheWeek = []
        let dayOfTheWeek = []
        let topQuestions = []
        hoursOfTheWeek = this.state.HOUR_OF_DAY_VS_EVENT_COUNT;
        dayOfTheWeek = this.state.DAY_OF_WEEK_VS_EVENT_COUNT;
        topQuestions = this.state.TOP_QUESTION;
        return (
            <div>
                <Auxiliary>
                    <div className="gx-main-content-wrapper">
                        <Row>
                            <Col sm={0} md={6} xl={8}>
                                <span className='gx-d-none gx-d-sm-flex'
                                    style={{ width: '100%', fontSize: 24, color: '#5B5B5B' }}>
                                    <Icon style={{ fontSize: 26, marginRight: 14, color: '#D5003A' }} type="alert" theme="filled" />
                                    Analytics
                                </span>
                            </Col>
                            <Col sm={24} md={18} xl={16}>
                                <Row gutter={20} type="flex" justify="end" style={{ marginBottom: 15 }} >
                                    <Col>
                                        {/* <div>From Date</div> */}
                                        <DatePicker getCalendarContainer={triggerNode => triggerNode.parentNode}
                                            onChange={this.handleChange2}
                                            value={this.state.startDate ? moment(this.state.startDate, dateFormat) : ''}
                                            format={dateFormat} disabledDate={this.disabledDate} name="startDate" placeholder="Select Start Date" />
                                        <p>{this.state.errors.startDate}</p>
                                    </Col>
                                    <Col>
                                        {/* <div>To Date</div> */}
                                        <DatePicker getCalendarContainer={triggerNode => triggerNode.parentNode}
                                            onChange={this.handleChange3}
                                            value={this.state.endDate ? moment(this.state.endDate, dateFormat) : ''} format={dateFormat} disabledDate={this.disableEndDate} name="endDate" placeholder="Select End Date" />
                                        <p>{this.state.errors.endDate}</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={10}>
                                <BarChart width={500} height={250} data={hoursOfTheWeek}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="hours_of_day" fill="#8884d8" />
                                    <Bar dataKey="count" fill="#82ca9d" />
                                </BarChart>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={10}>
                                <BarChart width={500} height={250} data={dayOfTheWeek}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="day_of_week" fill="#8884d8" />
                                    <Bar dataKey="count" fill="#82ca9d" />
                                </BarChart>

                            </Col>
                        </Row>
                        <Row>
                            <Col span={22}>
                                {/* <BarChart width={500} height={250} layout={"vertical"} data={topQuestions}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="question_text" fill="#8884d8" />
                                    <Bar dataKey="count" fill="#82ca9d" />
                                </BarChart> */}
                                <RadialBarChart width={600} height={300} cx={150} cy={150} innerRadius={20} outerRadius={140} barSize={10} data={data}>
                                    <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise dataKey="uv" />
                                    <Legend iconSize={10} width={420} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
                                </RadialBarChart>
                            </Col>
                        </Row>
                    </div>
                </Auxiliary>
            </div >
        )
    }
}

export default withApollo(analytics);

{/* <BarChart width={730} height={250} data={topQuestions}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="count" fill="#8884d8" />
                                    {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
                                // </BarChart> */}
