import '../index.css';
import * as React from 'react';

class Galaxys5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="marvel-device s5 white landscape">
        <div className="top-bar"></div>
        <div className="sleep"></div>
        <div className="camera"></div>
        <div className="sensor"></div>
        <div className="speaker"></div>
        <div className="screen">{this.props.children}</div>
        <div className="home"></div>
      </div>
    );
  }
}

export default Galaxys5;
