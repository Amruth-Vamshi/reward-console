import React, { Component } from 'react'
import './style.css'
import { Card, Row, Col, Button, TimePicker, DatePicker, InputNumber, Input, Icon, Select, Form } from "antd";
import moment from "moment";

// const formItemLayout = {
//     labelCol: { span: 6 },
//     wrapperCol: { span: 18, offset: 6 },
// };

const weekDays = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SUNDAY"]

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 7 },
        md: { span: 24 },
        lg: { span: 24 },
        xl: { span: 7 }
        // xl: { span: 7 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 17 },
        md: { span: 24 },
        lg: { span: 24 },
        xl: { span: 17 },
        // xl: { span: 17 }
    }
};

const Option = Select.Option;

class Schedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {},
            repeatType: "DAILY",
            time: '',
            repeatOn: [false, false, false, false, false, false, false],
            end: "onEndDate",
            noOfOcc: 10,
            saved: this.props.saved
        };
    }

    daySelected = e => this.state.repeatOn[e] ? "primary" : "default"

    dClick = e => {
        let { repeatOn, errors } = this.state
        errors.repeatOn = ''
        repeatOn[e] = !repeatOn[e]
        this.setState({ repeatOn, errors, saved: false })
    }

    handleChange = e => {
        console.log(e);
        this.setState({ noOfOcc: e, saved: false })
    }

    saveSchedule = () => {
        let errors = {};

        if (this.state.repeatType == "WEEKLY") {
            console.log(this.state.repeatOn.find(i => i));
            !this.state.repeatOn.find(i => i) ?
                errors.repeatOn = "select atleast one day" : ''
        }

        console.log(this.state.time);

        if (this.state.time == '') errors.time = "* this field is mandatory";



        if (Object.keys(errors).length !== 0) {
            this.setState({ errors });
        } else {
            let { repeatType, time, repeatOn, end, noOfOcc } = this.state, days = []
            let ScheduleData = { repeatType, time }
            if (repeatType == "WEEKLY") {
                repeatOn.map((day, i) => day && days.push(weekDays[i]))
                ScheduleData.days = days
            }
            end == "afterOccurrences" ? ScheduleData.noOfOcc = noOfOcc : ScheduleData.endTime = this.props.campaign.endTime
            this.props.saveSchedule(ScheduleData)
        }
    }

    componentWillReceiveProps = p => {
        this.setState({ saved: p.saved })
    }

    onChangeTime = (e, n) => {
        this.state.errors.time = "";
        this.setState({ time: e, saved: false })
    }
    handleOnEndChange = e => {
        this.setState({ end: e, saved: false })
    }

    handleTypeChange = e => {
        this.setState({ repeatType: e, saved: false })
    }
    render() {
        let { campaign } = this.props

        return (
            <div>
                <Card className="scheduleCard">
                    <Row><p style={{ fontSize: 18 }}>Schedule</p></Row>
                    {this.props.campaign &&
                        <p className="campDate"> Campaign Date: &nbsp;  <b>{moment(campaign.startTime).format("DD MMM YY HH:mm") + ' - ' +
                            moment(campaign.endTime).format("DD MMM YY HH:mm")} </b></p>}

                    <Form ref={this.props.wrappedComponentRef} onSubmit={this.props.submit}>
                        <Form.Item label="Repeat Every" {...formItemLayout}>
                            <Select
                                // getPopupContainer={() => document.getElementById('OffArea')}
                                value={this.state.repeatType} name="type" className="scheduleType"
                                placeholder="Select Type" optionFilterProp="children"
                                onChange={e => this.handleTypeChange(e)}
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            >
                                <Option value="DAILY">Daily</Option>
                                <Option value="WEEKLY">Weekly</Option>
                            </Select>
                        </Form.Item>
                        {this.state.repeatType == "WEEKLY" &&
                            <Form.Item style={{ marginTop: 10 }} label="Repeat On" {...formItemLayout}>
                                <div>
                                    <div>
                                        <Button className="dBtn" onClick={() => this.dClick(0)} type={this.daySelected(0)} shape="circle"> S </Button>
                                        <Button className="dBtn" onClick={() => this.dClick(1)} type={this.daySelected(1)} shape="circle"> M </Button>
                                        <Button className="dBtn" onClick={() => this.dClick(2)} type={this.daySelected(2)} shape="circle"> T </Button>
                                        <Button className="dBtn" onClick={() => this.dClick(3)} type={this.daySelected(3)} shape="circle"> W </Button>
                                        <Button className="dBtn" onClick={() => this.dClick(4)} type={this.daySelected(4)} shape="circle"> T </Button>
                                        <Button className="dBtn" onClick={() => this.dClick(5)} type={this.daySelected(5)} shape="circle"> F </Button>
                                        <Button className="dBtn" onClick={() => this.dClick(6)} type={this.daySelected(6)} shape="circle"> S </Button>
                                    </div>
                                    <span style={{ color: 'Red' }}>{this.state.errors.repeatOn}</span>
                                </div>
                            </Form.Item>
                        }


                        <Form.Item label="@ Time" {...formItemLayout}>
                            <TimePicker className="scheduleTime" use12Hours format="h:mm a" onChange={this.onChangeTime} />
                            <div style={{ color: 'Red' }}>{this.state.errors.time}</div>
                        </Form.Item>

                        <Form.Item style={{ marginTop: 5 }} label="Ends" {...formItemLayout}>
                            <Select
                                // getPopupContainer={() => document.getElementById('OffArea')}
                                value={this.state.end} name="type" className="scheduleEnd"
                                placeholder="Select Type" optionFilterProp="children"
                                onChange={e => this.handleOnEndChange(e)}
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            >
                                <Option value="onEndDate">On End Date</Option>
                                <Option value="afterOccurrences">After Occurrences</Option>
                            </Select>
                            {this.state.end == "afterOccurrences" &&
                                <InputNumber max={1000} min={1} value={this.state.noOfOcc} onChange={(e) => this.handleChange(e)} style={{ width: 70 }} />}
                            <span style={{ color: 'Red' }}>{this.state.errors.end}</span>
                        </Form.Item>

                        <Row type="flex" justify="space-around" className="saveRow">
                            <Col style={{ justifyContent: "center", flex: "auto" }} span={8}>
                                {this.state.saved ? <span className="saveMark divCenterVertical"> <Icon type="check-circle" theme="filled" /> &nbsp;  Saved</span> : ''}
                            </Col>
                            <Col span={8}>
                                <Button onClick={() => this.saveSchedule()} style={{ marginBottom: 0, float: "right" }} type="primary" shape="round" > Save </Button>
                            </Col>
                        </Row>


                    </Form>

                </Card>
            </div>
        )
    }
}

export default Schedule