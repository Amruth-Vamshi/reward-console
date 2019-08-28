import React, { Component } from "react";
import PropTypes from "prop-types";
import { Col, Row, Typography } from "antd";
const { Title } = Typography;
export default class Campaigns extends Component {
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
          <Title level={3} className="gx-text-grey">
            Campaigns
          </Title>
        </Col>
      </Row>
    );
  }
}
