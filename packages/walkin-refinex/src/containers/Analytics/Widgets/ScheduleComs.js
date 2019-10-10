
import React, { Component } from 'react'
import {
    Col,
    Row,
    DatePicker,
    Button,
    Icon,
    Empty,
    Spin,
    Table,
    Card,
    Select,
    Radio,
    Switch, Form, Divider, Input
} from "antd";
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
const { Option } = Select;


const FormItem = Form.Item;
function onChange(value, dateString) {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
    console.log('onOk: ', value);
}


function onBlur() {
    console.log('blur');
}

function onFocus() {
    console.log('focus');
}

function onSearch(val) {
    console.log('search:', val);
}
const columns = [
    {
        key: '4',
        width: 140,
        render: (text, record) => (
            <Switch defaultChecked onChange={() => console.log("here")} />
        ),
    },
    {
        title: 'Recipients',
        dataIndex: 'recipients',
        key: '1',
        width: 300,
        render: text => (<div style={{ marginBottom: 16 }}>
            <Input addonBefore="To" />
        </div>),
    },
    {
        title: 'Date & Time',
        dataIndex: 'date',
        key: '2',
        width: 300,
        render: text => (
            <DatePicker showTime placeholder="Select Time" onChange={onChange} onOk={onOk} />
        )
    },
    {
        title: 'Frequency',
        key: '3',
        width: 360,
        render: (text, record) => (
            <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select Frequency"
                optionFilterProp="children"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                <Option value="month">Every Month</Option>
                <Option value="week">Every Week</Option>
            </Select>
        ),
    },
];

const data = [];
for (let i = 1; i <= 4; i++) {
    data.push({
        key: i,
        recipients: 'John Brown',
        date: `${i}2`
    });
}


const showHeader = true;

const scroll = { y: 240 };
const pagination = { position: 'bottom' };
export default class analytics extends Component {
    state = {
        bordered: false,
        loading: false,
        pagination,
        size: 'default',
        title: undefined,
        showHeader: true,
        scroll: undefined,
        hasData: true,
    };

    onChange = (checked) => {
        console.log(`switch to ${checked}`);
    }

    handleToggle = prop => enable => {
        this.setState({ [prop]: enable });
    };

    handleSizeChange = e => {
        this.setState({ size: e.target.value });
    };

    handleExpandChange = enable => {
        this.setState({ expandedRowRender: enable ? expandedRowRender : undefined });
    };

    handleTitleChange = enable => {
        this.setState({ title: enable ? title : undefined });
    };

    handleHeaderChange = enable => {
        this.setState({ showHeader: enable ? showHeader : false });
    };


    handleRowSelectionChange = enable => {
        this.setState({ rowSelection: enable ? {} : undefined });
    };

    handleScollChange = enable => {
        this.setState({ scroll: enable ? scroll : undefined });
    };

    handleDataChange = hasData => {
        this.setState({ hasData });
    };

    handlePaginationChange = e => {
        const { value } = e.target;
        this.setState({
            pagination: value === 'none' ? false : { position: value },
        });
    };
    render() {
        const { state } = this;
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


                    <div style={{
                        width: "100%"
                    }}>

                        <Table style={{
                            width: "75vw"
                        }} {...this.state} columns={columns} dataSource={state.hasData ? data : null} />
                    </div>


                </Col>

            </Row>


        </Widget>)
    }
}