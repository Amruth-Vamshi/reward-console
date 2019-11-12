import "../index.css";
import * as React from "react";
class Nexus5 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="marvel-device nexus5">
                <div className="top-bar"></div>
                <div className="sleep"></div>
                <div className="volume"></div>
                <div className="camera"></div>
                <div className="screen">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Nexus5;