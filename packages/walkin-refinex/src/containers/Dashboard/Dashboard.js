import React, { Component } from "react";
import { Col, Row, DatePicker, Button, Icon, Empty, Spin } from "antd";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { increamentData, AnyNear } from "./data";
import { IconWithTextCard, Widget, ChartCard, Auxiliary } from "@walkinsole/walkin-components";
import moment from 'moment';
import Cylinder3DChart from "./Cylinder3DChart";
import ComplainCard from "./ComplainCard";
import jwt from "jsonwebtoken";
import "./style.css"
import { withApollo } from "react-apollo";
import { Link } from "react-router-dom";
import { GET_ANALYTICS } from "@walkinsole/walkin-components/src/PlatformQueries";

const dateFormat = 'YYYY/MM/DD';

class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      totalFeedbacks: 0,
      nps: 0,
      partialComplete: 0,
      totalFeedbackCompleted: 0,
      customers: [],
      popularPlaces: [],
      complains: [],
      customerCount: 0,
      org_id: '',
      startDate: moment().subtract(30, 'day'),
      endDate: moment(),
      errors: {}
    }
  }

  componentWillMount() {

    const { id, org_id } = jwt.decode(localStorage.getItem("jwt"));
    if (org_id && id) {
      this.setState({ org_id })
      this.getMetrics(org_id, this.state.endDate)
    } else console.log("Error getting JwtData");
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
        console.log('>>>', res);
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
    let { totalFeedbackCompleted, totalFeedbacks, nps, partialComplete, customerCount, customers, popularPlaces, complains } = this.state
    console.log(AnyNear.data.analytics);
    if (!data) {
      data = AnyNear
    }
    data.data.analytics.map(i => {
      if (i.name === "Total_feedback_completed") totalFeedbackCompleted = i.total
      else if (i.name === "Partial_complete_feedback") partialComplete = i.total
      else if (i.name === "NPS_RATING") nps = i.total
      else if (i.name === "TOTAL_FEEDBACKS") totalFeedbacks = i.total
      else if (i.name === "CUSTOMER_COUNTS") {
        customerCount = i.total; customers = [{ "count": 0 }, ...i.response]
      } else if (i.name === "POPULAR_PLACES") popularPlaces = i.response
      else if (i.name === "COMPLAIN_BY_CATAGORY") complains = i.response
    })
    this.setState({ totalFeedbacks, totalFeedbackCompleted, nps, totalFeedbacks, partialComplete, customerCount, customers, popularPlaces, complains, spin: false })
    console.log('Done');
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

  customPopup = c => {
    if (c.payload[0])
      return <div className='recharts-default-tooltip tooltipPopup'>
        <div>{c.payload[0].payload.Date ? c.payload[0].payload.Date : ''}</div>
        <div className="tooltipData">{c.payload[0].dataKey + " : " + c.payload[0].value}</div>
      </div>
  }

  render() {
    let nRows = parseInt(window.innerWidth / 300)
    let demoData = []
    const antIcon = <Icon type="loading" style={{ fontSize: 100 }} spin />;
    // if (window.innerWidth > 991)
    //   for (let i = 0; i < nRows && i < this.state.complains.length && i < 5; i++)
    //     demoData[i] = this.state.complains[i]
    // else 
    demoData = this.state.complains.slice(0, 5)
    // demoData.splice(nRows)
    return (
      <Auxiliary>
        <div className="gx-main-content-wrapper">
          <Row>
            <Col sm={0} md={6} xl={8}>
              <span className='gx-d-none gx-d-sm-flex'
                style={{ width: '100%', fontSize: 24, color: '#5B5B5B' }}>
                <Icon style={{ fontSize: 26, marginRight: 14, color: '#D5003A' }} type="alert" theme="filled" />
                Dashboard
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

          {/* <Row>
            <div style={{ width: "100%", marginBottom: 15, marginLeft: 10 }}>
              <span
                style={{ fontSize: 24, color: '#5B5B5B' }}>
                <span className='gx-d-none gx-d-sm-flex'  >
                  <Icon style={{ fontSize: 28, marginRight: 10, color: 'red' }} type="alert" theme="filled" />
                  Dashboard </span>
              </span>
              <div style={{ float: "right", flexFlow: "right" }}>
                <div style={{ display: "inline-block", marginRight: 20 }} >
                  <DatePicker getCalendarContainer={triggerNode => triggerNode.parentNode}
                    onChange={this.handleChange2}
                    value={this.state.startDate ? moment(this.state.startDate, dateFormat) : ''}
                    format={dateFormat} disabledDate={this.disabledDate} name="startDate" placeholder="Select Start Date" />
                  <p>{this.state.errors.startDate}</p>
                </div>
                <div style={{ display: "inline-block" }} >

                  <DatePicker getCalendarContainer={triggerNode => triggerNode.parentNode}
                    onChange={this.handleChange3}
                    value={this.state.endDate ? moment(this.state.endDate, dateFormat) : ''} format={dateFormat} disabledDate={this.disableEndDate} name="endDate" placeholder="Select End Date" />
                  <p>{this.state.errors.endDate}</p>
                </div>
              </div>
            </div>
          </Row> */}


          {this.state.spin ?
            <div> <br /> <br /> <br /> <br />
              <div className="divCenter">
                <Spin size="large" indicator={antIcon} />
              </div> <br /> <br /> <br />
            </div>
            : <div>

              <Row>
                <Col xl={6} lg={6} md={6} sm={12} xs={12} className="gx-col-full">
                  <IconWithTextCard cardColor="cyan" icon="wall" title={this.state.totalFeedbackCompleted} subTitle="Feedback Completed" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                  <IconWithTextCard cardColor="orange" antIcon="login" title={this.state.totalFeedbacks} subTitle="Total Feedback Sent" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                  <IconWithTextCard cardColor="teal" antIcon="logout" title={this.state.partialComplete} subTitle="Partial Complete" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12} xs={12} className="gx-col-full">
                  <IconWithTextCard cardColor="red" icon="map-street-view" title={this.state.nps} subTitle="NPS Rating" />
                </Col>
              </Row>


              <Row>
                <Col span={24}>
                  <ChartCard prize={this.state.customerCount} desc="Total no. of new customers" //icon="wall"
                    // title="20" styleName="up"
                    children={
                      this.state.customerCount ?
                        <ResponsiveContainer width="100%" height={130}>
                          <AreaChart data={this.state.customers}
                            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                            <Tooltip content={c => this.customPopup(c)} />
                            {/* <Tooltip /> */}
                            {/* <XAxis dataKey="name" /> */}
                            <defs>
                              <linearGradient id="color2" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="5%" stopColor="#4ECDE4" stopOpacity={0.9} />
                                <stop offset="95%" stopColor="#6BEF93" stopOpacity={0.9} />
                              </linearGradient>
                            </defs>
                            <Area dataKey='count' type='monotone' strokeWidth={0.2} stackId="2" stroke='#4D95F3'
                              fill="url(#color2)"
                              fillOpacity={1} />
                          </AreaChart>
                        </ResponsiveContainer> : <Empty style={{ marginBottom: 10 }} />
                    } />
                </Col>
              </Row>

              <Row>

                <Col xl={24} lg={24} md={24}>
                  <div className='homeNewPlaces'>
                    <Widget title="Comlplaints by category" styleName="gx-card">

                      {demoData.length ?
                        demoData.map((i, n) => <ComplainCard key={n} complain={i} />) :
                        <Empty />
                      }

                      {/* <div style={{ margin: '20px 20px 30px 0px', width: '100%' }}>
                        <Link to='/nearx/places'> <p style={{ float: "right", color: "#34bfe2" }}> View All </p></Link>
                      </div> */}
                    </Widget>
                  </div>
                </Col>



                {/* <Col xl={9} lg={9} md={24} sm={24} xs={24}>
                  <div className="gx-card">
                    <div style={{ paddingBottom: 0 }} className="gx-card-head">
                      <h4 className="gx-card-title">Popular  Places</h4>
                    </div>
                    <div style={{ paddingTop: 0 }} className="gx-card-body">
                      {this.state.popularPlaces.length ?
                        <Cylinder3DChart data={this.state.popularPlaces} /> : <Empty />}
                    </div>
                  </div>
                </Col> */}

              </Row>
            </div>}

        </div>
      </Auxiliary>
    );
  }
}

export default withApollo(Landing)