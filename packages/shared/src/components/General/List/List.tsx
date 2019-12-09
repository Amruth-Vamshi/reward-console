import React from "react";
import { List, Avatar, Col, Row } from "antd";
import { CustomButton, Image } from "@walkinsole/shared";

interface ListProps {
  actionableButtonText: string;
  imageSpan: number;
  contentSpan: number;
  actionSpan: number;
  imageStyle: any;
  contentStyle: any;
  actionStyle: any;
  data: Array<{
    image: string;
    title: string;
    subTitle: string;
    actionableTitle: string;
    actionableSubTitle: string;
    actionable: boolean;
  }>;
}
interface ListState {
  data: Array<{
    image: string;
    title: string;
    subTitle: string;
    actionableTitle: string;
    actionableSubTitle: string;
    actionable: boolean;
  }>;
}
interface ListItem {
  image: string;
  title: string;
  subTitle: string;
  actionableTitle: string;
  actionableSubTitle: string;
  actionable: boolean;
}

export default class CustomList extends React.Component<ListProps, ListState> {
  constructor(props: ListProps) {
    super(props);
    this.state = {
      data: props.data
    };
  }

  renderImage(item: ListItem) {
    return (
      <Col span={this.props.imageSpan}>
        <Image
          source={item.image}
          alternate_text="image-placeholder"
          style={this.props.imageStyle}
        />
      </Col>
    );
  }

  renderContent(item: ListItem) {
    return (
      <Col span={this.props.contentSpan} style={this.props.contentStyle}>
        <Row>{item.title}</Row>
        <Row>{item.subTitle}</Row>
      </Col>
    );
  }

  renderAction(item: ListItem) {
    if (item.actionable) {
      return (
        <Col span={this.props.actionSpan} style={this.props.actionStyle}>
          <CustomButton
            disabled={false}
            style={{ backgroundColor: "transparent" }}
            onClick={() => console.log("actionable button clicked")}
          >
            {this.props.actionableButtonText}
          </CustomButton>
        </Col>
      );
    }
    return (
      <Col span={this.props.actionSpan} style={this.props.actionStyle}>
        <Row>{item.actionableTitle}</Row>
        <Row>{item.actionableSubTitle}</Row>
      </Col>
    );
  }

  render() {
    return (
      <List
        itemLayout="horizontal"
        dataSource={this.state.data}
        renderItem={item => (
          <List.Item>
            {this.renderImage(item)}
            {this.renderContent(item)}
            {this.renderAction(item)}
          </List.Item>
        )}
      />
    );
  }
}
