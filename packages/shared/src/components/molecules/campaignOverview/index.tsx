import * as React from "react";
import * as PropTypes from "prop-types";
import { Row, Col, Icon, Typography, Progress, Button } from "antd";
const { Title } = Typography;
import moment from "moment";
import "./overViewStyle.css";

interface iProps {
  launchCampaign?: any;
  pauseCampaign?: any;
  unpauseCampaign?: any;
  abandonCampaign?: any;
  campaign?: any;
  audience?: any;
  offer?: any;
  communication?: any;
  view?: any;
  loading?: any;
  loading1?: any;
  disableCampaign?
}

export default class Overview extends React.Component<iProps, {}> {
  changeState = (e: any) => {
    console.log(e.target.innerText);
    if (e.target.innerText.trim() == "LAUNCH") this.props.launchCampaign();
    if (e.target.innerText.trim() == "PAUSE") this.props.pauseCampaign();
    if (e.target.innerText.trim() == "UNPAUSE") this.props.unpauseCampaign();
    if (e.target.innerText.trim() == "FORCE STOP") this.props.abandonCampaign();
  };

  render() {
    const { campaign, audience, offer, communication, view } = this.props;
    var now = moment();
    var startDate = moment(campaign.startTime);
    var endDate = moment(campaign.endTime);
    var value = "";
    if (now < startDate) {
      var diff = moment.duration(now.diff(startDate)).humanize();
      value = "To Start";
    } else if (now < endDate) {
      var diff = moment.duration(now.diff(endDate)).humanize();
      value = "To End";
    } else {
      value = "Completed";
    }
    var start = moment(campaign.startTime).format("DD-MMM-YYYY HH:mm:ss");
    var end = moment(campaign.endTime).format("DD-MMM-YYYY HH:mm:ss");
    console.log(this.props);
    return (
      <div className="campaignOverview">
        {view === false ? (
          <Title level={3} className="gx-text-grey">
            {" "}
            Overview{" "}
          </Title>
        ) : (
            ""
          )}
        <div style={{ margin: "20px 10px 20px 30px" }}>
          <Row>
            <Col style={{ paddingLeft: 0 }} sm={24} md={16}>
              <div className="cpName"> {campaign.name} </div>
              <div className="cpDec mb-15">
                {campaign.description != null ? campaign.description : ""}
              </div>
              <div className="cpDaysLeft mb-30">
                {" "}
                <b style={{ textTransform: "capitalize" }}>
                  {" "}
                  {diff ? diff : ""}
                </b>{" "}
                &nbsp;
                {value == "Completed" ? (
                  <div>
                    <Icon
                      style={{ color: "#00b707" }}
                      type="check-circle"
                      theme="filled"
                    />{" "}
                    {value}
                  </div>
                ) : (
                    value
                  )}{" "}
              </div>
            </Col>
            <Col sm={24} md={8}>
              <div className="divCenterVertical">
                {view && value != "Completed" ? (
                  campaign.campaignStatus == "DRAFT" ? (
                    <Button
                      shape="round"
                      type="primary"
                      style={{
                        width: "200px",
                        letterSpacing: 1,
                        height: 40,
                        fontSize: 20
                      }}
                      onClick={this.changeState}
                      loading={this.props.loading}
                    >
                      {" "}
                      LAUNCH{" "}
                    </Button>
                  ) : (
                      // (campaign.campaignStatus == 'LIVE') ?
                      <div>
                        {" "}
                        <Button
                          type="primary"
                          style={{
                            width: "140px",
                            letterSpacing: 0,
                            height: 40,
                            fontSize: 17
                          }}
                          shape="round"
                          onClick={this.changeState}
                          loading={this.props.loading}
                        >
                          {campaign.campaignStatus == "LIVE"
                            ? "PAUSE"
                            : "UNPAUSE"}{" "}
                        </Button>
                        <Button
                          type="primary"
                          style={{
                            width: "145px",
                            letterSpacing: 0,
                            height: 40,
                            fontSize: 16
                          }}
                          shape="round"
                          onClick={this.changeState}
                          loading={this.props.loading1}
                        >
                          FORCE STOP{" "}
                        </Button>
                      </div>
                    ) //: ''
                ) : (
                    ""
                  )}
              </div>
            </Col>
          </Row>

          <div className="mb-25">
            <Row>
              <Col className="mb-10" md={24} lg={8}>
                {" "}
                Start date &nbsp; &nbsp;:&nbsp;&nbsp;&nbsp;{start}{" "}
              </Col>
              <Col className="mb-10" md={24} lg={8}>
                {" "}
                End date &nbsp; &nbsp;:&nbsp;&nbsp;&nbsp;{end}{" "}
              </Col>
              <Col className="mb-10" md={24} lg={8}>
                {" "}
                <Progress
                  style={{
                    width: "250px",
                    margin: "0px 5px 0px 5px",
                    color: "#654665"
                  }}
                  percent={Math.round(
                    (moment().diff(moment(campaign.startTime), "hours") /
                      moment(campaign.endTime).diff(
                        moment(campaign.startTime),
                        "hours"
                      )) *
                    100
                  )}
                  showInfo={true}
                  status="active"
                />
              </Col>
            </Row>
          </div>

          {campaign.feedbackForm ? (
            <div className="mb-25">
              <h3>Form </h3>
              <Row>
                <Col
                  xs={24}
                  sm={24}
                  md={17}
                  xl={14}
                  xxl={12}
                  className="overViewBg"
                >
                  {campaign.feedbackForm ? campaign.feedbackForm.title : ""}
                </Col>
              </Row>
            </div>
          ) : (
              ""
            )}

          {audience && audience.length ? (
            <div className="mb-25">
              <Row>
                <Col className="AudienceTitle" sm={16} md={12} xl={10} xxl={9}>
                  {" "}
                  <h3>Audience</h3>
                </Col>
                <Col>Total Reach : 6412 </Col>
              </Row>
              {audience.map((i: any, n: number) => (
                <Row key={n} style={{ marginBottom: 10 }}>
                  <Col
                    xs={24}
                    sm={16}
                    md={12}
                    xl={10}
                    xxl={9}
                    className="audBg"
                  >
                    {i.segment.name}
                  </Col>
                  <Col xs={24} sm={8} md={5} xl={4} xxl={3} className="audBg">
                    users 3422
                  </Col>
                </Row>
              ))}
            </div>
          ) : (
              ""
            )}

          {offer && (
            <div className="mb-25">
              <h3>Offer</h3>
              <Row>
                <Col
                  xs={24}
                  sm={24}
                  md={17}
                  xl={14}
                  xxl={12}
                  className="offerBg"
                >
                  {offer.name}
                </Col>
              </Row>
            </div>
          )}

          {communication && (
            <div className="mb-25">
              <h3>Communication</h3>
              <Row>
                <Col
                  xs={24}
                  sm={24}
                  md={17}
                  xl={14}
                  xxl={12}
                  className="overViewBg"
                >
                  {communication}
                </Col>
              </Row>
            </div>
          )}
        </div>
      </div>
    );
  }
}
