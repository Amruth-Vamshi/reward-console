import "../index.css";
import React, { Component } from "react";

class Galaxys5 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div class="marvel-device s5 white landscape">
                <div class="top-bar"></div>
                <div class="sleep"></div>
                <div class="camera"></div>
                <div class="sensor"></div>
                <div class="speaker"></div>
                <div class="screen">
                    {this.props.children}
                </div>
                <div class="home"></div>
            </div>
        );
    }
}

export default Galaxys5;