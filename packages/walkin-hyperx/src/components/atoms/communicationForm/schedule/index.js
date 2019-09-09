import React, { Component } from 'react'
import './style.css'
import { Card, Row, Col, Button, TimePicker, DatePicker, Input, Icon, Select, Form } from "antd";

// const formItemLayout = {
//     labelCol: { span: 6 },
//     wrapperCol: { span: 18, offset: 6 },
// };

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 7 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 17 }
    }
};

const Option = Select.Option;

class Schedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            repeatType: "daily",
            repeatOn: [false, false, false, false, false, false, false]
        };
    }

    daySelected = e => this.state.repeatOn[e] ? "primary" : "default"

    dClick = e => {
        let { repeatOn } = this.state
        repeatOn[e] = !repeatOn[e]

        console.log(repeatOn);
        this.setState({ repeatOn })
    }


    handleTypeChange = e => {
        this.setState({ repeatType: e })
    }
    render() {

        return (
            <div>
                <Card className="scheduleCard">
                    <Row><p style={{ fontSize: 18 }}>Schedule</p></Row>

                    <Form ref={this.props.wrappedComponentRef} onSubmit={this.props.submit}>
                        <Form.Item label="Repeat Every" {...formItemLayout}>
                            <Select
                                // getPopupContainer={() => document.getElementById('OffArea')}
                                value={this.state.repeatType} name="type" className="scheduleType"
                                placeholder="Select Type" optionFilterProp="children"
                                onChange={e => this.handleTypeChange(e)}
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            >
                                <Option value="daily">Daily</Option>
                                <Option value="weekly">Weekly</Option>
                            </Select>
                        </Form.Item>
                        {this.state.repeatType == "weekly" ?
                            <Form.Item style={{ marginTop: 10 }} label="Repeat On" {...formItemLayout}>
                                <span>
                                    <Button className="dBtn" onClick={() => this.dClick(0)} type={this.daySelected(0)} shape="circle"> S </Button>
                                    <Button className="dBtn" onClick={() => this.dClick(1)} type={this.daySelected(1)} shape="circle"> M </Button>
                                    <Button className="dBtn" onClick={() => this.dClick(2)} type={this.daySelected(2)} shape="circle"> T </Button>
                                    <Button className="dBtn" onClick={() => this.dClick(3)} type={this.daySelected(3)} shape="circle"> W </Button>
                                    <Button className="dBtn" onClick={() => this.dClick(4)} type={this.daySelected(4)} shape="circle"> T </Button>
                                    <Button className="dBtn" onClick={() => this.dClick(5)} type={this.daySelected(5)} shape="circle"> F </Button>
                                    <Button className="dBtn" onClick={() => this.dClick(6)} type={this.daySelected(6)} shape="circle"> S </Button>
                                </span>
                            </Form.Item> : ''
                        }


                        <Form.Item label="@ Time" {...formItemLayout}>
                            <TimePicker className="scheduleTime" use12Hours format="h:mm a" onChange={this.onChange} />
                        </Form.Item>

                        <Form.Item style={{ marginTop: 5 }} label="Ends" {...formItemLayout}>
                            <Select
                                // getPopupContainer={() => document.getElementById('OffArea')}
                                value={this.props.offer} name="type" className="scheduleEnd"
                                placeholder="Select Type" optionFilterProp="children"
                                onChange={e => this.props.handleOnOfferChange(e)}
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            >
                                <Option value="1">On End Date</Option>
                                <Option value="2">After Occurrences</Option>
                            </Select>
                        </Form.Item>

                        <Row type="flex" justify="space-around" className="saveRow">
                            <Col style={{ justifyContent: "center", flex: "auto" }} span={8}>
                                {this.props.saved ? <span className="saveMark divCenterVertical"> <Icon type="check-circle" theme="filled" /> &nbsp;  Saved</span> : ''}
                            </Col>
                            <Col span={8}>
                                <Button style={{ marginBottom: 0, float: "right" }} type="primary" shape="round" > Save </Button>
                            </Col>
                        </Row>


                    </Form>

                </Card>
            </div>
        )
    }
}

export default Schedule