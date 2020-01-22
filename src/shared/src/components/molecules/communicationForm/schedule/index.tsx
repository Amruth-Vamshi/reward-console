import * as React from "react";
import "./style.css";
import {
  Card,
  Row,
  Col,
  Button,
  TimePicker,
  DatePicker,
  InputNumber,
  Input,
  Icon,
  Select,
  Form
} from "antd";
import moment from "moment";

// const formItemLayout = {
//     labelCol: { span: 6 },
//     wrapperCol: { span: 18, offset: 6 },
// };

const weekDays = [
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY"
];

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
    xl: { span: 17 }
    // xl: { span: 17 }
  }
};

const Option = Select.Option;

interface iProps {
  saved?: boolean;
  getScheduleData?: any;
  campaign?: any;
  saveSchedule?: any;
  scheduleData?: any;
  wrappedComponentRef?: any;
  submit?: any;
}

interface iState {
  repeatOn?: Array<any>;
  errors?: any;
  repeatType?: string;
  time?: any;
  end?: any;
  noOfOccurances?: number;
  saved?: boolean;
}

class Schedule extends React.Component<iProps, Partial<iState>> {
  constructor(props: iProps) {
    super(props);
    this.state = {
      errors: {},
      repeatType: "DAILY",
      time: "",
      repeatOn: [false, false, false, false, false, false, false],
      end: "onEndDate",
      noOfOccurances: 10,
      saved: this.props.saved
    };
  }

  daySelected = (e: number) => (this.state.repeatOn[e] ? "primary" : "default");

  dClick = (e: number) => {
    let { repeatOn, errors } = this.state;
    errors.repeatOn = "";
    repeatOn[e] = !repeatOn[e];
    this.setState({ repeatOn, errors, saved: false });
  };

  handleChange = (e: number) => {
    this.setState({ noOfOccurances: e, saved: false });
  };

  saveSchedule = () => {
    let errors: any = {};

    if (this.state.repeatType === "WEEKLY") {
      if (!this.state.repeatOn.find(i => i)) {
        errors.repeatOn = "select atleast one day";
      }
    }

    if (!this.state.time || this.state.time == "")
      errors.time = "* this field is mandatory";

    if (Object.keys(errors).length !== 0) {
      this.setState({ errors });
    } else {
      let { repeatType, time, repeatOn, end, noOfOccurances } = this.state,
        days: Array<any> = [];
      let ScheduleData: any = { repeatType, time };
      if (repeatType == "WEEKLY") {
        repeatOn.map((day, i) => day && days.push(weekDays[i]));
        ScheduleData.days = days;
      }
      end == "afterOccurrences"
        ? (ScheduleData.noOfOccurances = noOfOccurances)
        : (ScheduleData.endTime = this.props.campaign.endTime);
      this.props.saveSchedule(ScheduleData);
    }
  };

  componentDidMount() {
    console.log(this.props.scheduleData);

    if (this.props.scheduleData) {
      let { repeatOn, end } = this.state;
      let { repeatType, time, noOfOccurances, days } = this.props.scheduleData;
      if (repeatType == "WEEKLY" && days)
        repeatOn = weekDays.map(day => days.includes(day));
      end = noOfOccurances ? "afterOccurrences" : "onEndDate";
      noOfOccurances = noOfOccurances ? noOfOccurances : 10;
      this.setState({ repeatType, time, repeatOn, end, noOfOccurances });
    }
  }

  UNSAFE_componentWillReceiveProps = (p: any) => {
    this.setState({ saved: p.saved });
  };

  onChangeTime = (e: any, n: any) => {
    this.state.errors.time = "";
    this.setState({ time: e, saved: false });
  };
  handleOnEndChange = (e: string) => {
    this.setState({ end: e, saved: false });
  };

  handleTypeChange = (e: string) => {
    this.setState({ repeatType: e, saved: false });
  };
  render() {
    let { campaign } = this.props;

    return (
      <div>
        <Card className="scheduleCard">
          <Row>
            <p style={{ fontSize: 20 }}>Schedule</p>
          </Row>
          {this.props.campaign && (
            <p className="campDate">
              {" "}
              Campaign Date: &nbsp;{" "}
              <b>
                {moment(campaign.startTime).format("DD MMM YY HH:mm") +
                  " - " +
                  moment(campaign.endTime).format("DD MMM YY HH:mm")}{" "}
              </b>
            </p>
          )}

          <Form
            ref={this.props.wrappedComponentRef}
            onSubmit={this.props.submit}
          >
            <Form.Item label="Repeat Every" {...formItemLayout}>
              <Select
                getPopupContainer={(triggerNode: any) => triggerNode.parentNode}
                value={this.state.repeatType}
                className="scheduleType"
                placeholder="Select Type"
                optionFilterProp="children"
                onChange={e => this.handleTypeChange(e)}
                filterOption={(input: any, option: any) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="DAILY">Daily</Option>
                <Option value="WEEKLY">Weekly</Option>
              </Select>
            </Form.Item>
            {this.state.repeatType == "WEEKLY" && (
              <Form.Item
                style={{ marginTop: 10 }}
                label="Repeat On"
                {...formItemLayout}
              >
                <div>
                  <div>
                    <Button
                      className="dBtn"
                      onClick={() => this.dClick(0)}
                      type={this.daySelected(0)}
                      shape="circle"
                    >
                      {" "}
                      S{" "}
                    </Button>
                    <Button
                      className="dBtn"
                      onClick={() => this.dClick(1)}
                      type={this.daySelected(1)}
                      shape="circle"
                    >
                      {" "}
                      M{" "}
                    </Button>
                    <Button
                      className="dBtn"
                      onClick={() => this.dClick(2)}
                      type={this.daySelected(2)}
                      shape="circle"
                    >
                      {" "}
                      T{" "}
                    </Button>
                    <Button
                      className="dBtn"
                      onClick={() => this.dClick(3)}
                      type={this.daySelected(3)}
                      shape="circle"
                    >
                      {" "}
                      W{" "}
                    </Button>
                    <Button
                      className="dBtn"
                      onClick={() => this.dClick(4)}
                      type={this.daySelected(4)}
                      shape="circle"
                    >
                      {" "}
                      T{" "}
                    </Button>
                    <Button
                      className="dBtn"
                      onClick={() => this.dClick(5)}
                      type={this.daySelected(5)}
                      shape="circle"
                    >
                      {" "}
                      F{" "}
                    </Button>
                    <Button
                      className="dBtn"
                      onClick={() => this.dClick(6)}
                      type={this.daySelected(6)}
                      shape="circle"
                    >
                      {" "}
                      S{" "}
                    </Button>
                  </div>
                  <span style={{ color: "Red" }}>
                    {this.state.errors.repeatOn}
                  </span>
                </div>
              </Form.Item>
            )}

            <Form.Item label="@ Time" {...formItemLayout}>
              <TimePicker
                className="scheduleTime"
                value={this.state.time}
                use12Hours
                format="h:mm a"
                onChange={this.onChangeTime}
              />
              <div style={{ color: "Red" }}>{this.state.errors.time}</div>
            </Form.Item>

            <Form.Item
              style={{ marginTop: 5 }}
              label="Ends"
              {...formItemLayout}
            >
              <Select
                getPopupContainer={(triggerNode: any) => triggerNode.parentNode}
                value={this.state.end}
                className="scheduleEnd"
                placeholder="Select Type"
                optionFilterProp="children"
                onChange={e => this.handleOnEndChange(e)}
                filterOption={(input: any, option: any) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="onEndDate">On End Date</Option>
                <Option value="afterOccurrences">After Occurrences</Option>
              </Select>
              {this.state.end == "afterOccurrences" && (
                <InputNumber
                  max={1000}
                  min={1}
                  value={this.state.noOfOccurances}
                  onChange={e => this.handleChange(e)}
                  style={{ width: 70 }}
                />
              )}
              <span style={{ color: "Red" }}>{this.state.errors.end}</span>
            </Form.Item>

            <Row type="flex" justify="space-around" className="saveRow">
              <Col style={{ justifyContent: "center", flex: "auto" }} span={8}>
                {this.state.saved ? (
                  <span className="saveMark divCenterVertical">
                    {" "}
                    <Icon type="check-circle" theme="filled" /> &nbsp; Saved
                  </span>
                ) : (
                  ""
                )}
              </Col>
              <Col span={8}>
                <Button
                  onClick={() => this.saveSchedule()}
                  style={{ marginBottom: 0, float: "right" }}
                  type="primary"
                  shape="round"
                >
                  {" "}
                  Save{" "}
                </Button>
              </Col>
            </Row>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Schedule;
