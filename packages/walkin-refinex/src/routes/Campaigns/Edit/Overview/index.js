import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col, Typography } from "antd";
const { Title } = Typography;

export default class Overview extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
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
            CCD Feedback
          </div>
          <div className="overviewRowmargin">Store based customer feedback</div>
          <div className="overviewRowmargin">
            <b>10 </b>days left to start
          </div>
          <Row className="overviewRowmargin">
            <Col style={{ marginRight: 0 }} span={4}>
              Start date
            </Col>
            <Col span={5}>01 jan 2020-12:00 AM</Col>
            <Col span={2}>to</Col>
            <Col span={5}>31 jan 2020-11:59 PM</Col>
          </Row>
          <Row className="overviewTitlemargin">
            <h4>Form </h4>
          </Row>
          <Row className="overviewRowmargin">
            <Col span={10} className="overViewBackground">
              Customer Feedback abot Store
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
    );
  }
}
