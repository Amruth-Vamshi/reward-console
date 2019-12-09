import React from "react";
import { List, Avatar, Col, Row } from "antd";
import { CustomButton } from "@walkinsole/shared";

interface ListProps {
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

  renderAvatar(item: ListItem) {
    return (
      <Col span={4}>
        <img
          alt="image-placeholder"
          src={item.image}
          style={{
            backgroundColor: "transparent",
            height: "80px",
            width: "100px",
            padding: "10px"
          }}
        />
      </Col>
    );
  }

  renderContent(item: ListItem) {
    return (
      <Col span={16}>
        <Row>{item.title}</Row>
        <Row>{item.subTitle}</Row>
      </Col>
    );
  }

  renderAction(item: ListItem) {
    if (item.actionable) {
      return (
        <Col span={4}>
          <CustomButton
            disabled={false}
            style={{ backgroundColor: "transparent" }}
            onClick={() => console.log("actionable button clicked")}
          >
            {"Assign"}
          </CustomButton>
        </Col>
      );
    }
    return (
      <Col span={4}>
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
            {this.renderAvatar(item)}
            {this.renderContent(item)}
            {this.renderAction(item)}
          </List.Item>
        )}
      />
    );
  }
}
