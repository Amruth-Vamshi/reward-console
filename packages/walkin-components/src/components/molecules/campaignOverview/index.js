import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col, Typography } from "antd";
const { Title } = Typography;
import { CustomScrollbars } from "@walkinsole/walkin-components";
import moment from "moment";
import './style.css'
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
      // var diff = startDate.diff(now, "days");
      var diff = moment.duration(now.diff(startDate)).humanize()
      value = "To Start";
    } else if (now < endDate) {
      // var diff = endDate.diff(now, "days");
      var diff = moment.duration(now.diff(endDate)).humanize()
      value = "To End";
    } else {
      value = "Completed";
    }
    var start = moment(campaign.startTime).format("DD-MM-YYYY HH:mm:ss");
    var end = moment(campaign.endTime).format("DD-MM-YYYY HH:mm:ss");
    // if (start < end) {
    //   var diff = start.diff(end);
    //   console.log("Diff..", diff);
    // }

    return (
      // <CustomScrollbars> 
      <div className="campaignOverview">
        <Title level={2} className="gx-text-grey"> Overview </Title>
        <div style={{ margin: 15 }}>

          <div className="cpName"> {campaign.name} </div>

          <div className="cpDec mb-15">{campaign.description != null ? campaign.description : ""}</div>
          <div className="cpDaysLeft mb-15"> <b>{diff ? diff : ''}</b> {value} </div>
          <div className="mb-25">
            <Row >
              <Col md={24} lg={8}>  Start date &nbsp; &nbsp;:&nbsp;&nbsp;&nbsp;{start} </Col>
              <Col md={24} lg={8}>  End date &nbsp; &nbsp;:&nbsp;&nbsp;&nbsp;{end} </Col>
            </Row>
          </div>

          {campaign.feedbackForm ?
            <div className="mb-25">
              <h3>Form </h3>
              <Row>
                <Col xs={24} sm={24} md={17} xl={14} xxl={12} className="overViewBg">
                  {campaign.feedbackForm ? campaign.feedbackForm.title : ""}
                </Col>
              </Row>
            </div> : ''}

          <div className="mb-25">
            <Row>
              <Col className='AudienceTitle' sm={16} md={12} xl={10} xxl={9}> <h3>Audience</h3></Col>
              <Col >Total Reach : 6412 </Col>
            </Row>

            <Row style={{ marginBottom: 10 }}>
              <Col xs={24} sm={16} md={12} xl={10} xxl={9} className="audBg">
                HLVR(Modified)
                </Col>
              <Col xs={24} sm={8} md={5} xl={4} xxl={3} className="audBg">
                users 3422
                </Col>
            </Row>
            <Row>
              <Col xs={24} sm={16} md={12} xl={10} xxl={9} className="audBg">
                Gold Members
              </Col>
              <Col xs={24} sm={8} md={5} xl={4} xxl={3} className="audBg">
                users 2990
              </Col>
            </Row>
          </div>

          <div className="mb-25">
            <h3>Offer</h3>
            <Row>
              <Col xs={24} sm={24} md={17} xl={14} xxl={12} className="offerBg">
                50% discount on cars
              </Col>
            </Row>
          </div>

          <div className="mb-25">
            <h3>Communication</h3>
            <Row>
              <Col xs={24} sm={24} md={17} xl={14} xxl={12} className="overViewBg">
                SMS - Store Experience
              </Col>
            </Row>
          </div>
        </div>
      </div>
      // </CustomScrollbars>
    );
  }
}
