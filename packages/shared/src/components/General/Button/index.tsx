import Button from "antd/lib/button/button";
import React from "react";

interface ButtonProps {
  style: any;
  disabled: boolean;
}

class CustomButton extends React.Component<ButtonProps> {
  render() {
    return (
      <Button disabled={this.props.disabled} style={this.props.style}>
        {this.props.children}
      </Button>
    );
  }
}

export default CustomButton;
