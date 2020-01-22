import React from "react";
import Row from "antd/lib/row";
import Col from "antd/lib/col";

import "./index.css";

export default class ResponsiveGrid extends React.Component {
  render() {
    return (
      <Row>
        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
          Col
        </Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={4}>
          Col
        </Col>
        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
          Col
        </Col>
      </Row>
    );
  }
}
