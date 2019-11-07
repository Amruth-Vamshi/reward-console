import * as React from "react";
import { Card, Col, Row, message } from 'antd';
import Home from "../feedback-form/index";
import Device from "./Devices/index";
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
            <Row gutter={16} style={{
                backgroundColor: "white",

            }}>
                <Col span={24}>
                    <Card>
                        <Row>
                            <Col span={8}>

                            </Col>
                            <Col span={12}>
                                <Device color={color}
                                    isFirstQuestion={isFirstQuestion}
                                    question={question}
                                    nextQuestion={nextQuestion}
                                    goTopreviousQuestion={goTopreviousQuestion}
                                    isLastQuestion={isLastQuestion} />
                            </Col>

                        </Row>


                    </Card>
                </Col>
            </Row>
        )

    }
}