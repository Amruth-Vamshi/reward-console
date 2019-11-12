
import * as React from 'react'
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
import { GET_ANALYTICS } from "@walkinsole/walkin-core/src/PlatformQueries";
import moment from 'moment';
const dateFormat = 'YYYY/MM/DD';
import * as jwt from "jsonwebtoken";
import Cylinder3DChart from '@walkinsole/walkin-nearx/src/routes/Dashboard/Cylinder3DChart'
import PieChartWithAngle from "../Charts/PieChartWithPaddingAngle";
import PieChartActiveShape from "../Charts/CustomActiveShapePieChart";
import { TableSize } from 'antd/lib/table';
const { Option } = Select;


const FormItem = Form.Item;







interface analyticsProps {

}

interface analyticsState {
    bordered: boolean,
    loading: boolean,
    pagination: any,
    size: TableSize,
    title: any,
    showHeader: boolean,
    scroll: any,
    hasData: boolean,
    data: Array<any>,
    count: number
}


const scroll = { y: 240 };
const pagination = { position: 'top' };
export default class analytics extends React.Component<analyticsProps, analyticsState> {

    constructor(props: analyticsProps) {
        super(props)
        this.state = {
            bordered: false,
            loading: false,
            pagination: '',
            size: 'default',
            title: undefined,
            showHeader: true,
            scroll: undefined,
            hasData: true,
            data: [],
            count: 1
        };
    }


    componentDidMount() {
        const data = [{
            id: "1",
            enabled: false,
            recipients: "sachin@getwalk.in",
            date: moment("12/12/2013"),
            frequency: "month"
        }]
        const count = data.length
        this.setState({ data: data, count })
    }

    onChangeDate = (record: any, value: any, dateString: any) => {
        const { data } = this.state;
        const newData = data.map(i => {
            if (i.id === record.id) {
                i.date = moment(dateString)
            }
            return i;
        })
        this.setState({ data: newData });
    }

    handleSwitchChange = (record: any, value: any) => {
        const { data } = this.state;
        const newData = data.map(i => {
            if (i.id === record.id) {
                i.enabled = value
            }
            return i;
        })
        this.setState({ data: newData });
    }

    updateCommunication = () => {
        const { data } = this.state;
        console.log("data", data);
    }

    onOk = (value: any) => {
        console.log('onOk: ', value);
    }


    onBlur = () => {
        console.log('blur');
    }

    onFocus = () => {
        console.log('focus');
    }

    onSearch = (val: any) => {
        console.log('search:', val);
    }

    onInputChange = (record: any, e: any) => {

        const { data } = this.state;
        const newData = data.map(i => {
            if (i.id === record.id) {
                i.recipients = e.target.value
            }
            return i;
        })
        this.setState({ data: newData });
        // console.log("record", record)
        // console.log("value", e.target.value)
    }

    onChange = (record: any, checked: any) => {
        const { data } = this.state;
        const newData = data.map(i => {
            if (i.id === record.id) {
                i.frequency = checked
            }
            return i;
        })
        this.setState({ data: newData });
    }

    handleToggle = (prop: any) => (enable: any) => {
        this.setState((prevProps: any) => {
            return ({
                ...prevProps,
                [prop]: enable
            })
        });
    };


    handleAdd = () => {
        const { data, count } = this.state;
        const newData = {
            id: count + 1,
            enabled: true,
            recipients: "",
            date: moment(),
            frequency: ""
        };
        this.setState({
            data: [...data, newData],
            count: count + 1
        });
    };
    render() {
        const { state } = this;
        const { data } = state;
        const columns = [
            {
                key: '1',
                dataIndex: "enabled",
                width: 140,
                render: (text: any, record: any) => (
                    <div style={{ marginBottom: 10 }}>
                        <Switch
                            defaultChecked
                            checked={text}
                            onChange={this.handleSwitchChange.bind(this, record)} />
                    </div>

                ),
            },
            {
                title: 'Recipients',
                dataIndex: 'recipients',
                key: '2',
                width: 300,
                render: (text: any, record: any) => (<div style={{ marginBottom: 10 }}>
                    <Input
                        onChange={this.onInputChange.bind(this, record)}
                        addonBefore="To"
                        value={text} />
                </div>),
            },
            {
                title: 'Date & Time',
                dataIndex: 'date',
                key: '3',
                width: 300,
                render: (text: any, record: any) => (
                    <div style={{ marginBottom: 10 }}>
                        <DatePicker
                            value={text}
                            showTime
                            placeholder="Select Time"
                            onChange={this.onChangeDate.bind(this, record)}
                            onOk={this.onOk} />
                    </div>

                )
            },
            {
                title: 'Frequency',
                dataIndex: "frequency",
                key: '4',
                width: 360,
                render: (text: any, record: any) => (
                    <div style={{ marginBottom: 10 }}>
                        <Select
                            value={text}
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Select Frequency"
                            optionFilterProp="children"
                            onChange={this.onChange.bind(this, record)}
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}
                            onSearch={this.onSearch}
                            filterOption={(input: any, option: any) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="month">Every Month</Option>
                            <Option value="week">Every Week</Option>
                        </Select>
                    </div>

                ),
            },
        ];
        return (<Widget
            title="Send Report Schedule"
            style={{
                backgroundColor: "white",
                margin: "0px 30px 30px 30px"
            }}
            styleName="gx-card-tabs"
            extra={
                <div className="ant-row-flex gx-px-2 gx-pt-2">
                    <div className="gx-ml-auto">
                        <Button onClick={this.updateCommunication} type="primary" size={"large"}>
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
                        <Button
                            onClick={this.handleAdd}
                            icon="plus"
                            style={{ marginBottom: 16, marginLeft: 150, marginTop: 10 }}>
                            Add
                        </Button>
                    </div>


                </Col>

            </Row>


        </Widget>)
    }
}