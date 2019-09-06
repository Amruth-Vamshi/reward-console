import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col, Typography } from "antd";
const { Title } = Typography;
import { CustomScrollbars } from "@walkinsole/walkin-components";
import moment from "moment";
import { identifier } from "@babel/types";
// import Moment from "react-moment";

export default class Overview extends Component {
  render() {
    console.log("Overview page");
    const { campaign } = this.props;
    console.log("Campaign data", campaign);
    var now = moment();
    var startDate = moment(campaign.startTime);
    var endDate = moment(campaign.endTime);
    var value = "";
    if (now < startDate) {
      var diff = startDate.diff(now, "days");
      value = "To start";
    } else {
      var diff = endDate.diff(now, "days");
      value = "To end";
    }
    var start = moment(campaign.startTime).format("DD-MM-YYYY HH:mm:ss");
    var end = moment(campaign.endTime).format("DD-MM-YYYY HH:mm:ss");
    // if (start < end) {
    //   var diff = start.diff(end);
    //   console.log("Diff..", diff);
    // }
    return (
      <CustomScrollbars>
        <Row
          style={{
            margin: "1rem"
          }}
        >
          <Col span={24}>
            <Title level={2} className="gx-text-grey">
              Overview
            </Title>
            <div style={{ fontWeight: "bold" }} className="overviewRowmargin">
              {campaign.name}
            </div>
            <div className="overviewRowmargin">{campaign.description != null ? campaign.description : ""}</div>
            <div className="overviewRowmargin">
              <b>{diff}</b> days {value}
            </div>
            <Row className="overviewRowmargin">
              <Col style={{ marginRight: 0 }} span={4}>
                Start date
              </Col>
              <Col span={5}>{start}</Col>
              <Col span={2}>End date</Col>
              <Col span={5}>{end}</Col>
            </Row>
            <Row className="overviewTitlemargin">
              <h4>Form </h4>
            </Row>
            <Row className="overviewRowmargin">
              <Col span={10} className="overViewBackground">
                {campaign.feedbackForm ? campaign.feedbackForm.title : ""}
              </Col>
            </Row>
            <Row className="overviewTitlemargin">
              <Col>
                <h4 style={{ marginRight: 200 }}>Audience</h4>
              </Col>
              <Col span={4}>Total Reach 6412 </Col>
            </Row>
            <Row className="overviewRowmargin">
              <Col span={6} className="overViewBackground">
                HLVR(Modified)
              </Col>
              <Col span={4} className="overViewBackground">
                users 3422
              </Col>
            </Row>
            <Row className="overviewRowmargin">
              <Col span={6} className="overViewBackground">
                Gold Members
              </Col>
              <Col span={4} className="overViewBackground">
                users 2990
              </Col>
            </Row>
            <Row className="overviewTitlemargin">
              <h4>Communication</h4>
            </Row>
            <Row className="overviewRowmargin">
              <Col span={10} className="overViewBackground">
                SMS - Store Experience
              </Col>
            </Row>
            {/* <div>Start date 01 jan 2020-12:00 AM to 31 jan 2020-11:59 PM </div> */}
          </Col>
        </Row>
      </CustomScrollbars>
    );
  }
}
