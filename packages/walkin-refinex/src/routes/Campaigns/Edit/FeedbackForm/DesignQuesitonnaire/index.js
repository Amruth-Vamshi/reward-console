/**@jsx h */
import React, { Component } from "react";
import Preact, { h } from "preact"
import { Card, Col, Row } from 'antd';
import { CustomScrollbars } from "@walkinsole/walkin-components";
import Home from "../../../../../../../feedback-form-web/src/Components/Fields/TextField"
class FormDesign extends Component {
  render() {
    let h = React.createElement
    return (
      <div style={{ background: '#ECECEC', height: "100vh" }}>
        <Row>
          <Col span={19}>
            <Card style={{ height: "100vh" }}>
              <Row>
                <Col span={24}>
                  <Home props={{ answerType: "SINGLE", answerContent: "hELLO", onAnswerSelected: () => console.log("hello") }} />
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
