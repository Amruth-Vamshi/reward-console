import "./index.css";
import React, { Component } from 'react';
import { Card, Col, Row, message } from 'antd';
import Home from "../../feedback-form/index";
export default class Device extends Component {
    constructor(props) {
        super(props)
    }
    warning = () => {
        message.warning('This is last question');
    };

    newWarning = () => {
        message.warning('This is first question')
    }

    render() {
        const { question, nextQuestion, isLastQuestion, goTopreviousQuestion, isFirstQuestion, color } = this.props;

        return (
            <div class="marvel-device iphone5c green">
                <div class="top-bar"></div>
                <div class="sleep"></div>
                <div class="volume"></div>
                <div class="camera"></div>
                <div class="sensor"></div>
                <div class="speaker"></div>
                <div class="screen">
                    <Row >
                        <Col style={{ width: "100%", height: "100%" }}>
                            {isLastQuestion ? this.warning() : null}
                            {isFirstQuestion ? this.newWarning() : null}
                            <Home color={color} question={question} nextQuestion={nextQuestion} goTopreviousQuestion={goTopreviousQuestion} />
                        </Col>
                    </Row>
                </div>
                <div class="home"></div>
                <div class="bottom-bar"></div>
            </div>

            // <div className="marvel-device iphone-x">
            //     <div className="notch">
            //         <div className="camera"></div>
            //         <div className="speaker"></div>
            //     </div>
            //     <div className="top-bar"></div>
            //     <div className="sleep"></div>
            //     <div className="bottom-bar"></div>
            //     <div className="volume"></div>
            //     <div className="overflow">
            //         <div className="shadow shadow--tr"></div>
            //         <div className="shadow shadow--tl"></div>
            //         <div className="shadow shadow--br"></div>
            //         <div className="shadow shadow--bl"></div>
            //     </div>
            //     <div className="inner-shadow"></div>
            //     <div className="screen">
            //         <Row >
            //             <Col style={{ width: "100%", height: "100%" }}>
            //                 {isLastQuestion ? this.warning() : null}
            //                 {isFirstQuestion ? this.newWarning() : null}
            //                 <Home color={color} question={question} nextQuestion={nextQuestion} goTopreviousQuestion={goTopreviousQuestion} />
            //             </Col>
            //         </Row>
            //     </div>
            // </div>
        )
    }
}