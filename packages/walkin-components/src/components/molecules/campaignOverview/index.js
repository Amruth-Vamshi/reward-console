import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col, Typography, Progress, Button } from "antd";
const { Title } = Typography;
import moment from "moment";
import './overViewStyle.css'
// import Moment from "react-moment";

export default class Overview extends Component {
  changeState = e => {
    console.log(e.target.innerText);
    if (e.target.innerText == "LAUNCH")
      this.props.launchCampaign()
  }

  render() {
    const { campaign, audience, offer, communication, view, launchCampaign } = this.props;
    var now = moment();
    var startDate = moment(campaign.startTime);
    var endDate = moment(campaign.endTime);
    var value = "";
    if (now < startDate) {
      var diff = moment.duration(now.diff(startDate)).humanize()
      value = "To Start";
    } else if (now < endDate) {
      var diff = moment.duration(now.diff(endDate)).humanize()
      value = "To End";
    } else {
      value = "Completed";
    }
    var start = moment(campaign.startTime).format("DD-MMM-YYYY HH:mm:ss");
    var end = moment(campaign.endTime).format("DD-MMM-YYYY HH:mm:ss");
    console.log(this.props);
    return (
      <div className="campaignOverview">
        {view === false ? <Title level={3} className="gx-text-grey"> Overview </Title> : ''}
        <div style={{ margin: '20px 10px 20px 30px' }}>

          <Row>
            <Col style={{ paddingLeft: 0 }} sm={24} md={16}>
              <div className="cpName"> {campaign.name} </div>
              <div className="cpDec mb-15">{campaign.description != null ? campaign.description : ""}</div>
              <div className="cpDaysLeft mb-15"> <b style={{ textTransform: "capitalize" }}>{diff ? diff : ''}</b>  {value} </div>
            </Col>
            <Col sm={24} md={8}>
              <div className='divCenterVertical'>
                {view ? (campaign.campaignStatus == 'DRAFT' || campaign.campaignStatus == 'LIVE') && value != "Completed" ? <Button shape='round' type='primary'
                  style={{ width: '200px', letterSpacing: 1, height: 40, fontSize: 20 }} onClick={this.changeState} >
                  {campaign.campaignStatus == 'DRAFT' ? 'LAUNCH' : campaign.campaignStatus == 'LIVE' ? 'PAUSE' : ''} </Button> : '' : ''}
              </div>

            </Col>

          </Row>

          <div className="mb-25">
            <Row >
              <Col className="mb-10" md={24} lg={8}>  Start date &nbsp; &nbsp;:&nbsp;&nbsp;&nbsp;{start} </Col>
              <Col className="mb-10" md={24} lg={8}>  End date &nbsp; &nbsp;:&nbsp;&nbsp;&nbsp;{end} </Col>
              <Col className="mb-10" md={24} lg={8}> <Progress
                style={{ width: '250px', margin: '0px 5px 0px 5px', colorRendering: '#654665' }}
                percent={Math.round(
                  ((moment() - moment(campaign.startTime)) / (moment(campaign.endTime) - moment(campaign.startTime))) * 100)}
                showInfo={true} status="active"
              /></Col>
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

          {audience && audience.length ?
            <div className="mb-25">
              <Row>
                <Col className='AudienceTitle' sm={16} md={12} xl={10} xxl={9}> <h3>Audience</h3></Col>
                <Col >Total Reach : 6412 </Col>
              </Row>
              {audience.map((i, n) =>
                <Row key={n} style={{ marginBottom: 10 }}>
                  <Col xs={24} sm={16} md={12} xl={10} xxl={9} className="audBg">
                    {i.segment.name}
                  </Col>
                  <Col xs={24} sm={8} md={5} xl={4} xxl={3} className="audBg">
                    users 3422
                </Col>
                </Row>)}
            </div> : ''}

          {offer && <div className="mb-25">
            <h3>Offer</h3>
            <Row>
              <Col xs={24} sm={24} md={17} xl={14} xxl={12} className="offerBg">
                {offer.name}
              </Col>
            </Row>
          </div>}

          {communication &&
            <div className="mb-25">
              <h3>Communication</h3>
              <Row>
                <Col xs={24} sm={24} md={17} xl={14} xxl={12} className="overViewBg">
                  {communication}
                </Col>
              </Row>
            </div>}
        </div>
      </div>
    );
  }
}