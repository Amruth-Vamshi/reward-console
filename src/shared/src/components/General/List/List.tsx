import React from "react";
import { List, Avatar, Col, Row } from "antd";
import { CustomButton, Image } from "shared";

interface ListProps {
  actionableButtonText: string;
  actionableButtonType: any;
  imageSpan: number;
  contentSpan: number;
  actionSpan: number;
  imageStyle: any;
  contentStyle: any;
  actionStyle: any;
  imageHeight: any;
  imageWidth: any;
  imageScaleType: any;
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
    if (item.image) {
      return (
        <Col span={this.props.imageSpan}>
          <Image
            scaleType={this.props.imageScaleType}
            height={this.props.imageHeight}
            width={this.props.imageWidth}
            source={item.image}
            alternate_text="image-placeholder"
            style={this.props.imageStyle}
          />
        </Col>
      );
    }
    return (
      <Col span={this.props.imageSpan}>
        <Image
          scaleType={this.props.imageScaleType}
          height={this.props.imageHeight}
          width={this.props.imageWidth}
          source={require("../../../assets/walkin.png")}
          alternate_text="image-placeholder"
          style={this.props.imageStyle}
        />
      </Col>
    );
  }

  renderContent(item: ListItem) {
    return (
      <Col span={this.props.contentSpan} style={this.props.contentStyle}>
        <Row>{item.title ? item.title : "Title"}</Row>
        <Row>{item.subTitle ? item.subTitle : "SubTitle"}</Row>
      </Col>
    );
  }

  renderAction(item: ListItem) {
    if (item.actionable) {
      return (
        <Col span={this.props.actionSpan} style={this.props.actionStyle}>
          <CustomButton
            type={this.props.actionableButtonType}
            disabled={false}
            style={{}}
            onClick={() => console.log("actionable button clicked")}
          >
            {this.props.actionableButtonText}
          </CustomButton>
        </Col>
      );
    }
    return (
      <Col span={this.props.actionSpan} style={this.props.actionStyle}>
        <Row>
          {item.actionableTitle ? item.actionableTitle : "actionableTitle"}
        </Row>
        <Row>
          {item.actionableSubTitle
            ? item.actionableSubTitle
            : "actionableSubTitle"}
        </Row>
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
