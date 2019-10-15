import "../index.css";
import React, { Component } from "react";
class Nexus5 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div class="marvel-device nexus5">
                <div class="top-bar"></div>
                <div class="sleep"></div>
                <div class="volume"></div>
                <div class="camera"></div>
                <div class="screen">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Nexus5;