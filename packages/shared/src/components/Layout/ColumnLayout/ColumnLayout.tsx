import React from "react";
import Col from "antd/lib/col";
import Row from "antd/lib/row";

interface ColumnLayoutProps {
  cstyle: any;
}
interface ColumnLayoutState {}

export default class ColumnLayout extends React.Component<
  ColumnLayoutProps,
  ColumnLayoutState
> {
  render() {
    var elements = [];
    for (var i = 0; i < this.props.cstyle.length; i++) {
      elements.push(
        <Col style={this.props.cstyle[i]} span={this.props.cstyle[i].span} />
      );
    }
    return (
      <div>
        <Row>{elements}</Row>
      </div>
    );
  }
}
