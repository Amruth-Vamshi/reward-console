import React from "react";
import { Card, Col, Row, message } from 'antd';
import Home from "../feedback-form/index";

export default class Controls extends React.Component {
    warning = () => {
        message.warning('This is last question');
    };

    newWarning = () => {
        message.warning('This is first question')
    }
    render() {
        const { question, nextQuestion, isLastQuestion, goTopreviousQuestion, isFirstQuestion, color } = this.props;
        console.log(isLastQuestion)
        return (
            <Row style={{
                backgroundColor: "#89ECD6"
            }}>
                <Col span={24}>
                    <Card style={{ minHeight: "100vh", backgroundColor: "#89ECD6" }}>
                        <Row>
                            <Col align="right" span={24} style={{ marginLeft: "10rem", height: "auto", width: "500px" }}>
                                {isLastQuestion ? this.warning() : null}
                                {isFirstQuestion ? this.newWarning() : null}
                                <Home color={color} question={question} nextQuestion={nextQuestion} goTopreviousQuestion={goTopreviousQuestion} />
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        )

    }
}