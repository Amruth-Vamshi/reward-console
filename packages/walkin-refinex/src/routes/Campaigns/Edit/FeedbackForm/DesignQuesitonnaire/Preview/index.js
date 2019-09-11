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
        const { question, nextQuestion, isLastQuestion, goTopreviousQuestion, isFirstQuestion } = this.props;
        console.log(isLastQuestion)
        return (
            <Row>
                <Col span={24}>
                    <Card >
                        <Row>
                            <Col align="right" span={24} style={{ height: "500px", width: "500px" }}>
                                {isLastQuestion ? this.warning() : null}
                                {isFirstQuestion ? this.newWarning() : null}
                                <Home question={question} nextQuestion={nextQuestion} goTopreviousQuestion={goTopreviousQuestion} />
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        )

    }
}