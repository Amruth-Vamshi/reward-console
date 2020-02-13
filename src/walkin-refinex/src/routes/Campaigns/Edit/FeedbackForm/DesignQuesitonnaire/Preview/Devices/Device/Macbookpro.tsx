import '../index.css';
import * as React from 'react';

class MacBookPro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="marvel-device macbook">
        <div className="top-bar"></div>
        <div className="camera"></div>
        <div className="screen">{this.props.children}</div>
        <div className="bottom-bar"></div>
      </div>
    );
  }
}

export default MacBookPro;
