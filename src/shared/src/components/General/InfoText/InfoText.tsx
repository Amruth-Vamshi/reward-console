import React from 'react';
import { Typography } from 'antd';
const { Text } = Typography;

interface infoTextProps {
  header: string;
  text: string;
  headerStyle: any;
  textStyle: any;
  containerStyle: any;
}

interface infoTextState {}

export default class InfoText extends React.Component<
  infoTextProps,
  infoTextState
> {
  render() {
    return (
      <div style={this.props.containerStyle}>
        <Text type="secondary" style={this.props.headerStyle}>
          {this.props.header}
        </Text>
        <Text style={this.props.textStyle}>{this.props.text}</Text>
      </div>
    );
  }
}
