import { Button } from "antd";
import React from "react";

interface ButtonProps {
  style: any;
  disabled: boolean;
  onClick: any;
  type: any;
}

class CustomButton extends React.Component<ButtonProps> {
  render() {
    return (
      <Button
        type={this.props.type}
        disabled={this.props.disabled}
        style={this.props.style}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </Button>
    );
  }
}

export default CustomButton;
