import "../index.css";
import * as React from "react";

class Lumia920 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="marvel-device lumia920 yellow">
        <div className="top-bar"></div>
        <div className="volume"></div>
        <div className="camera"></div>
        <div className="speaker"></div>
        <div className="screen">{this.props.children}</div>
      </div>
    );
  }
}

export default Lumia920;
