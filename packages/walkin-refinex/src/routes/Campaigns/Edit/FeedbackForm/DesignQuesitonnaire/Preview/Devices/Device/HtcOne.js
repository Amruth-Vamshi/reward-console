import "../index.css";
import React, { Component } from "react";

class HtcOne extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div class="marvel-device htc-one">
                <div class="top-bar"></div>
                <div class="camera"></div>
                <div class="sensor"></div>
                <div class="speaker"></div>
                <div class="screen">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default HtcOne;