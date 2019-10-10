
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
            title="Send Report Schedule"
            style={{
                backgroundColor: "white",
                margin: "0px 30px 0px 30px"
            }}
            styleName="gx-card-tabs"
            extra={
                <div className="ant-row-flex gx-px-2 gx-pt-2">
                    <div className="gx-ml-auto">
                        <Button type="primary" size={"large"}>
                            Update
                        </Button>
                    </div>
                </div>
            }

        >
            <Row>
                <Col>

                </Col>

            </Row>


        </Widget>)
    }
}