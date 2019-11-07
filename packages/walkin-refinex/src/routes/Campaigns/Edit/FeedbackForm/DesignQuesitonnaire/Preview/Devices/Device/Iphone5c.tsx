import "../index.css";
import React, { Component } from "react";

class Iphone5c extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div class="marvel-device iphone5c green">
                <div class="top-bar"></div>
                <div class="sleep"></div>
                <div class="volume"></div>
                <div class="camera"></div>
                <div class="sensor"></div>
                <div class="speaker"></div>
                <div class="screen">
                    {this.props.children}
                </div>
                <div class="home"></div>
                <div class="bottom-bar"></div>
            </div>
        );
    }
}

export default Iphone5c;