import '../index.css';
import * as React from 'react';

class Iphone5c extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="marvel-device iphone5c green">
        <div className="top-bar"></div>
        <div className="sleep"></div>
        <div className="volume"></div>
        <div className="camera"></div>
        <div className="sensor"></div>
        <div className="speaker"></div>
        <div className="screen">{this.props.children}</div>
        <div className="home"></div>
        <div className="bottom-bar"></div>
      </div>
    );
  }
}

export default Iphone5c;
