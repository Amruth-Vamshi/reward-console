import "../index.css";
import React, { Component } from "react";

class MacBookPro extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div class="marvel-device macbook">
                <div class="top-bar"></div>
                <div class="camera"></div>
                <div class="screen">
                    {this.props.children}
                </div>
                <div class="bottom-bar"></div>
            </div>
        );
    }
}

export default MacBookPro;