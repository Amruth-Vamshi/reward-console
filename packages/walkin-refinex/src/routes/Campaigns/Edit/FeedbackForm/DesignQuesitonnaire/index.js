
import React, { Component } from "react";

import { Card, Col, Row } from 'antd';
import Home from "./feedback-form/index";
class FormDesign extends Component {
  render() {
    return (
      <div style={{ background: '#ECECEC', height: "100vh" }}>
        <Row>
          <Col span={19}>
            <Card style={{ height: "100vh" }}>
              <Row>
                <Col align="right" span={24} style={{ height: "500px", width: "500px" }}>
                  <Home />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={6}>
            <Card style={{ backgroundColor: "#a39c9b", height: "100vh" }}>
              <Row>
                <Col span={24}>
                  this is first row
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  this is first row
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  this is first row
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>

    )
  }
}
export default FormDesign;
