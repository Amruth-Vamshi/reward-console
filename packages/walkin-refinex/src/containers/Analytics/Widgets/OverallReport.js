
import React, { Component } from 'react'
import { Col, Row, DatePicker, Button, Icon, Empty, Spin, Table, Card, Select, Radio } from "antd";
import { IconWithTextCard, Widget, ChartCard, Auxiliary, WidgetHeader } from "@walkinsole/walkin-components";
import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Sector,
    Cell,
    Bar,
    BarChart,
    Legend,
    CartesianGrid,
    Tooltip,
    XAxis,
    YAxis,
    RadialBarChart,
    RadialBar
} from "recharts";
import { graphql, compose, withApollo } from "react-apollo";
import { GET_ANALYTICS, ANALYTICS } from "@walkinsole/walkin-core/src/PlatformQueries";
import moment from 'moment';
const dateFormat = 'YYYY/MM/DD';
import jwt from "jsonwebtoken";
import Cylinder3DChart from '@walkinsole/walkin-nearx/src/routes/Dashboard/Cylinder3DChart'
import PieChartWithAngle from "../Charts/PieChartWithPaddingAngle";
import PieChartActiveShape from "../Charts/CustomActiveShapePieChart";

export default class analytics extends Component {
    render() {
        return (<Widget
            title="Overall Report"
            style={{
                backgroundColor: "#e6e6e6",
                margin: "0px 30px 0px 30px"
            }}
            styleName="gx-card-tabs"
            extra={
                <div className="ant-row-flex gx-px-2 gx-pt-2">
                    <div className="gx-ml-auto">
                        <Select className="gx-mb-2 gx-select-lg" defaultValue="month" onChange={this.handleChange}>
                            <Option value="month">Monthly</Option>
                            <Option value="week">Weekly</Option>
                            <Option value="year">Yearly</Option>
                        </Select>
                    </div>
                </div>
            }

        >
            <Row>
                <Col lg={13} md={13} sm={24} xs={24}>
                    <Row >
                        <Col style={{
                            marginTop: "4rem"
                        }} lg={8} md={8} sm={12} xs={12}>
                            <div className="ant-row-flex">
                                <h2 className="gx-mr-2 gx-mb-0 gx-fs-xxxl gx-font-weight-medium">179,626</h2>

                            </div>
                            <p style={{
                                marginTop: "1rem"
                            }} className="gx-text-grey">Request Sent</p>
                        </Col>
                        <Col style={{
                            marginTop: "4rem"
                        }} lg={8} md={8} sm={12} xs={12}>
                            <div className="ant-row-flex">
                                <h2 className="gx-mr-2 gx-mb-0 gx-fs-xxxl gx-font-weight-medium">179,626</h2>

                            </div>
                            <p style={{
                                marginTop: "1rem"
                            }} className="gx-text-grey">Clicks Opened</p>
                        </Col>
                        <Col style={{
                            marginTop: "4rem"
                        }} lg={8} md={8} sm={12} xs={12}>
                            <div className="ant-row-flex">
                                <h2 className="gx-mr-2 gx-mb-0 gx-fs-xxxl gx-font-weight-medium">179,626</h2>

                            </div>
                            <p style={{
                                marginTop: "1rem"
                            }} className="gx-text-grey">Response Rate</p>
                        </Col>
                        <Col style={{
                            marginTop: "4rem"
                        }} lg={8} md={8} sm={12} xs={12}>
                            <div className="ant-row-flex">
                                <h2 className="gx-mr-2 gx-mb-0 gx-fs-xxxl gx-font-weight-medium">179,626</h2>

                            </div>
                            <p style={{
                                marginTop: "1rem"
                            }} className="gx-text-grey">Completion Rate</p>
                        </Col>
                        <Col style={{
                            marginTop: "4rem"
                        }} lg={8} md={8} sm={12} xs={12}>
                            <div className="ant-row-flex">
                                <h2 className="gx-mr-2 gx-mb-0 gx-fs-xxxl gx-font-weight-medium">179,626</h2>

                            </div>
                            <p style={{
                                marginTop: "1rem"
                            }} className="gx-text-grey">Avg. Time for Completion</p>
                        </Col>
                    </Row>

                </Col>
                <Col lg={11} md={11} sm={24} xs={24}>
                    <div style={{
                        marginLeft: "6rem"
                    }}>
                        <PieChartActiveShape />
                    </div>

                </Col>
            </Row>


        </Widget>)
    }
}