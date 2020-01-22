import "../index.css";
import * as React from "react";

class HtcOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="marvel-device htc-one">
        <div className="top-bar"></div>
        <div className="camera"></div>
        <div className="sensor"></div>
        <div className="speaker"></div>
        <div className="screen">{this.props.children}</div>
      </div>
    );
  }
}

export default HtcOne;
