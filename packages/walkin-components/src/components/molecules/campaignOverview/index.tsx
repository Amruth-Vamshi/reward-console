import "./overViewStyle.css";

import { Button, Col, Progress, Row, Typography } from "antd";
import moment from "moment";
import * as React from "react";

const { Title } = Typography;

interface IProps {
  launchCampaign?: any;
  pauseCampaign?: any;
  unpauseCampaign?: any;
  campaign?: any;
  audience?: any;
  offer?: any;
  communication?: any;
  view?: any;
  loading: boolean;
}
interface IState {}
export class Overview extends React.Component<IProps, IState> {
  changeState = e => {
    console.log(e.target.innerText);
    if (e.target.innerText == "LAUNCH") this.props.launchCampaign();
    if (e.target.innerText == "PAUSE") this.props.pauseCampaign();
    if (e.target.innerText == "UNPAUSE") this.props.unpauseCampaign();
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
              <div className="cpDaysLeft mb-15">
                {" "}
                <b style={{ textTransform: "capitalize" }}>
                  {diff ? diff : ""}
                </b>{" "}
                {value}{" "}
              </div>
            </Col>
            <Col sm={24} md={8}>
              <div className="divCenterVertical">
                {view ? (
                  // (campaign.campaignStatus == 'DRAFT' || campaign.campaignStatus == 'LIVE') &&
                  value != "Completed" ? (
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
                      {campaign.campaignStatus == "DRAFT"
                        ? "LAUNCH"
                        : campaign.campaignStatus == "LIVE"
                        ? "PAUSE"
                        : "UNPAUSE"}{" "}
                    </Button>
                  ) : (
                    ""
                  )
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
                    margin: "0px 5px 0px 5px"
                  }}
                  percent={Math.round(
                    ((moment().get("hours") -
                      moment(campaign.startTime).get("hours")) /
                      (moment(campaign.endTime).get("hours") -
                        moment(campaign.startTime).get("hours"))) *
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
              {audience.map((i, n) => (
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
