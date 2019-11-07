import "../index.css";
import React, { Component } from "react";

class Lumia920 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div class="marvel-device lumia920 yellow">
                <div class="top-bar"></div>
                <div class="volume"></div>
                <div class="camera"></div>
                <div class="speaker"></div>
                <div class="screen">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Lumia920;