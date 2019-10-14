import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Col,
  Row,
  Typography,
  Divider,
  Form,
  Select,
  Input,
  Button
} from "antd";
const { Title } = Typography;
import Delay from "./Delay";
import EventType from "./EventType";
import Filter from "./Filter";
class Triggers extends Component {


  constructor(props) {
    super(props);

  }



  render() {
    console.log(this.props)
    return (
      <Row
        style={{
          margin: "1rem",
          height: "-webkit-fill-available",
          paddingBottom: "5rem",
          overflowX: "scroll"
        }}
      >
        <Row>
          <Col span={24}>
            <Title level={3} className="gx-text-grey">
              Triggers
            </Title>
          </Col>
        </Row>
        <Divider />
        <Col span={24}>
          <EventType
            unlinkCampaignFromApplication={this.props.unlinkCampaignFromApplication}
            selectedApplication={this.props.selectedApplication}
            linkCampaignToApplication={this.props.linkCampaignToApplication}
            application={this.props.applications}
            event={this.props.eventValues}
            onEventTypeEdited={this.props.onEventTypeEdited} />
        </Col>

        <Divider />
        <Col span={24}>
          <Filter
            query={this.props.query}
            attributeData={this.props.attributeData}
            logQuery={this.props.logQuery}
          />
        </Col>

        {/* <Divider />
        <Col span={24}>
          <Delay />
        </Col> */}
      </Row>
    );
  }
}

export default Triggers;
