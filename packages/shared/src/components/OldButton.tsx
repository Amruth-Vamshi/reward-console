import React from "react";
import { Row, Col, Button } from "antd";

interface ButtonState {}

interface ButtonProps {
  text: String;
}

export default class CustomButton extends React.Component<
  ButtonProps,
  ButtonState
> {
  constructor(props) {
    super(props);
  }

  render() {
    let { text } = this.props;
    return (
      <Row>
        <Col style={{ margin: "auto" }}>
          <Button type="primary" size={"large"}>
            {text}
          </Button>
        </Col>
      </Row>
    );
  }
}
