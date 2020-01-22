import React from "react";

interface HeaderProps {}

interface HeaderState {}

export default class Header extends React.Component<HeaderProps, HeaderState> {
  render() {
    return <div>{this.props.children}</div>;
  }
}
