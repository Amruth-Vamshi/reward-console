import React from "react";
import { Card, Col, Row, message } from 'antd';
import Home from "../feedback-form/index";

export default class Controls extends React.Component {
    warning = () => {
        message.warning('This is last question');
    };
    render() {
        const { question, nextQuestion, isLastQuestion } = this.props;
        console.log(isLastQuestion)
        return (
            <Row>
                <Col span={24}>
                    <Card >
                        <Row>
                            <Col align="right" span={24} style={{ height: "500px", width: "500px" }}>
                                {isLastQuestion ? this.warning() : null}
                                <Home question={question} nextQuestion={nextQuestion} />
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        )

    }
}