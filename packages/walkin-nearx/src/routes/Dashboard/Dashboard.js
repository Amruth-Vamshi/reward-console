import React, { Component } from "react";
import { Col, Row, Card, DatePicker } from "antd";
import Auxiliary from "../../util/Auxiliary";
import { Area, AreaChart, Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import { increamentData, lineData } from "./data";
import { IconWithTextCard, Widget, ChartCard } from "@walkinsole/walkin-components";
import { getNewPlaces } from '../Places/data'
import moment from 'moment';
import Cylinder3DChart from "./Cylinder3DChart";

const demoData = getNewPlaces

const dateFormat = 'YYYY/MM/DD';

export default class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: '',
      endDate: '',
      errors: {}
    }
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

    return [current.valueOf() <= date.valueOf(), moment() < current];
  }

  handleChange2 = (value) => {
    var time = "5:30:00"
    var value1 = moment(value).format('YYYY-MM-DD');
    var d = value1 + " " + time;
    var newdate1 = new Date(d).toISOString();
    // console.log("newd", newdate1)
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
    if (newdate2 !== '') this.state.errors.endDate = '';
  }


  render() {
    return (
      <Auxiliary>
        <div className="gx-main-content-wrapper">

          <Row gutter={20} type="flex" justify="end" style={{ marginBottom: 15 }} >
            <Col>
              <DatePicker getCalendarContainer={triggerNode => triggerNode.parentNode}
                onChange={this.handleChange2}
                value={this.state.startDate ? moment(this.state.startDate, dateFormat) : ''}
                format={dateFormat} disabledDate={this.disabledDate} name="startDate" placeholder="Select Start Date" />
              <p>{this.state.errors.startDate}</p>
            </Col>
            <Col>

              <DatePicker getCalendarContainer={triggerNode => triggerNode.parentNode}
                onChange={this.handleChange3}
                value={this.state.endDate ? moment(this.state.endDate, dateFormat) : ''} format={dateFormat} disabledDate={this.disableEndDate} name="endDate" placeholder="Select End Date" />
              <p>{this.state.errors.endDate}</p>
            </Col>
          </Row>

          <Row>
            <Col xl={6} lg={6} md={6} sm={12} xs={12} className="gx-col-full">
              <IconWithTextCard cardColor="cyan" icon="wall" title="09" subTitle="Total Places" />
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <IconWithTextCard cardColor="orange" icon="tasks" title="687" subTitle="Total Enties" />
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <IconWithTextCard cardColor="teal" icon="team" title="04" subTitle="Total Exit" />
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12} className="gx-col-full">
              <IconWithTextCard cardColor="red" icon="map-street-view" title="09" subTitle="Dwell Time Count" />
            </Col>
          </Row>


          <Row>
            <Col span={24}>
              <ChartCard prize="$7,831" title="100" //icon="etherium"
                children={<ResponsiveContainer width="100%" height={125}>
                  <AreaChart data={increamentData}
                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <Tooltip />
                    <defs>
                      <linearGradient id="color4" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="5%" stopColor="#4ECDE4" stopOpacity={0.9} />
                        <stop offset="95%" stopColor="#06BB8A" stopOpacity={0.9} />
                      </linearGradient>
                    </defs>
                    <Area dataKey='price' type='monotone' strokeWidth={0} stackId="2" stroke='#4D95F3'
                      fill="url(#color4)"
                      fillOpacity={1} />
                  </AreaChart>
                </ResponsiveContainer>}
                styleName="up" desc="Etherium Price" />
            </Col>
          </Row>

          <Row>

            <Col xl={15} lg={15} md={24}>
              <div className='homeNewPlaces'>
                <Widget title="New Places" styleName="gx-card">

                  <Row>
                    <Col span={6}>{demoData[0].name}</Col>
                    <Col span={4}>Hotspot:{demoData[0].hotspots}</Col>
                    <Col span={4}>Entry: {demoData[0].entry}</Col>
                    <Col span={3}>Exit: {demoData[0].exit}</Col>
                    <Col span={5}>Avg Dwell time: {demoData[0].avgTime}min</Col>
                  </Row>
                  <Row>
                    <Col span={6}>{demoData[0].name}</Col>
                    <Col span={4}>Hotspot:{demoData[0].hotspots}</Col>
                    <Col span={4}>Entry: {demoData[0].entry}</Col>
                    <Col span={3}>Exit: {demoData[0].exit}</Col>
                    <Col span={5}>Avg Dwell time: {demoData[0].avgTime}min</Col>
                  </Row>
                  <Row>
                    <Col span={6}>{demoData[0].name}</Col>
                    <Col span={4}>Hotspot:{demoData[0].hotspots}</Col>
                    <Col span={4}>Entry: {demoData[0].entry}</Col>
                    <Col span={3}>Exit: {demoData[0].exit}</Col>
                    <Col span={5}>Avg Dwell time: {demoData[0].avgTime}min</Col>
                  </Row>

                  <Row>
                    <Col span={6}>{demoData[0].name}</Col>
                    <Col span={4}>Hotspot:{demoData[0].hotspots}</Col>
                    <Col span={4}>Entry: {demoData[0].entry}</Col>
                    <Col span={3}>Exit: {demoData[0].exit}</Col>
                    <Col span={5}>Avg Dwell time: {demoData[0].avgTime}min</Col>
                  </Row>
                  <Row>
                    <Col span={6}>{demoData[0].name}</Col>
                    <Col span={4}>Hotspot:{demoData[0].hotspots}</Col>
                    <Col span={4}>Entry: {demoData[0].entry}</Col>
                    <Col span={3}>Exit: {demoData[0].exit}</Col>
                    <Col span={5}>Avg Dwell time: {demoData[0].avgTime}min</Col>
                  </Row>

                  {/* <Row> */}
                  <div style={{ margin: '20px 20px 30px 0px', width: '100%' }}>
                    <p style={{ float: "right", color: "#34bfe2" }}> <a to='#'> View All </a></p>
                  </div>
                  {/* </Row> */}
                </Widget>
              </div>
            </Col>



            <Col xl={9} lg={9} md={24}>
              <div className="gx-card">
                <div style={{ paddingBottom: 0 }} className="gx-card-head">
                  <h4 className="gx-card-title">Popular  Places</h4>
                </div>
                <div style={{ paddingTop: 0 }} className="gx-card-body">
                  <Cylinder3DChart />
                </div>
              </div>
            </Col>

          </Row>


        </div>
      </Auxiliary>
    );
  }
}

