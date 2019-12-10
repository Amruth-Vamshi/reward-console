import React from "react";

interface ImageProps {
  source: string;
  height: any;
  width: any;
  style: any;
  alternate_text: string;
}

interface ImageState {}

export default class Image extends React.Component<ImageProps, ImageState> {
  render() {
    return (
      <img
        src={this.props.source}
        height={this.props.height}
        width={this.props.width}
        style={this.props.style}
        alt={this.props.alternate_text}
      />
    );
  }
}
