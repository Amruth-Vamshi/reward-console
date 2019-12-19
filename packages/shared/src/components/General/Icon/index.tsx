import Icon from "antd/lib/icon/index";
import React from "react";

interface IconProps {
  type: string;
  spin: boolean;
  style: any;
  rotate: number;
  twoToneColor: any;
  theme: any;
}

class CustomIcon extends React.Component<IconProps> {
  render() {
    return (
      <Icon
        type={this.props.type}
        spin={this.props.spin}
        style={this.props.style}
        rotate={this.props.rotate}
        twoToneColor={this.props.twoToneColor}
        theme={this.props.theme}
      />
    );
  }
}

export default CustomIcon;
