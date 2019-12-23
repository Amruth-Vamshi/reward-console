import React from "react";
import { Col, Row, Avatar, Table } from "antd";
import { Image, CustomList, CustomButton, InfoText } from "@walkinsole/shared";
import "./index.css";

const data = [
  {
    image: require("../../../../shared/src/assets/big_bazaar.png"),
    title: "Big Bazaar",
    subTitle: "Tower C, 247 Park, LBS Marg, Vikhroli (W), Mumbai - 400 083",
    actionableTitle: "Admin",
    actionableSubTitle: "Niranjan",
    actionable: false
  },
  {
    image: require("../../../../shared/src/assets/fbb.png"),
    title: "FBB Fashion Store",
    subTitle: "Tower C, 247 Park, LBS Marg, Vikhroli (W), Mumbai - 400 083",
    actionableTitle: "Admin",
    actionableSubTitle: "Sreemanth",
    actionable: false
  },
  {
    image: require("../../../../shared/src/assets/central_mall.png"),
    title: "Central Mall",
    subTitle: "Tower C, 247 Park, LBS Marg, Vikhroli (W), Mumbai - 400 083",
    actionableTitle: "",
    actionableSubTitle: "",
    actionable: true
  },
  {
    image: require("../../../../shared/src/assets/nilgiris.png"),
    title: "Nilgiris Retail",
    subTitle: "Tower C, 247 Park, LBS Marg, Vikhroli (W), Mumbai - 400 083",
    actionableTitle: "Admin",
    actionableSubTitle: "Rahul",
    actionable: false
  },
  {
    image: require("../../../../shared/src/assets/alltheplussize.png"),
    title: "All The Plus Size",
    subTitle: "Tower C, 247 Park, LBS Marg, Vikhroli (W), Mumbai - 400 083",
    actionableTitle: "Admin",
    actionableSubTitle: "Suresh",
    actionable: false
  },
  {
    image: require("../../../../shared/src/assets/easy_day_club.png"),
    title: "Easy Day club",
    subTitle: "Tower C, 247 Park, LBS Marg, Vikhroli (W), Mumbai - 400 083",
    actionableTitle: "Admin",
    actionableSubTitle: "Surya",
    actionable: false
  }
];

interface OrganisationHomeProps {}

class OrganisationHome extends React.Component<OrganisationHomeProps> {
  renderInfoHeader() {
    return (
      <Row className="rowInfoHeader">
        <Col className="colAvatar">
          <Avatar
            src="https://via.placeholder.com/150x150"
            style={{ border: "1px solid lightgrey" }}
            size={40}
          />
        </Col>
        <Col className="colName">David Tailor</Col>
        <Col className="colDesignation">Super Admin</Col>
      </Row>
    );
  }

  renderInfo() {
    const dataSource = [
      {
        key: "1",
        name: "Mike",
        value: "63782038"
      },
      {
        key: "2",
        name: "Name",
        value: "Big Bazaar"
      },
      {
        key: "3",
        name: "Address",
        value: "Tower C, 247 Park, LBS Marg, Vikhroli (W), Mumbai - 400 083"
      },
      {
        key: "4",
        name: "Email",
        value: "mediarelations@futuregroup.in"
      },
      {
        key: "5",
        name: "Phone",
        value: "+91-22-6119-000"
      }
    ];

    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        width: "30%"
      },
      {
        title: "Value",
        dataIndex: "value",
        key: "value",
        width: "70%"
      }
    ];
    return (
      <Table
        dataSource={dataSource}
        columns={columns}
        showHeader={false}
        pagination={false}
        tableLayout={"fixed"}
        bordered={false}
      />
    );
  }

  render() {
    const imageStyle = {
      backgroundColor: "transparent",
      padding: "10px"
    };
    const contentStyle = {
      backgroundColor: "transparent",
      // height: "80px",
      // width: "100px",
      padding: "10px"
    };
    const actionStyle = {
      backgroundColor: "transparent",
      // height: "80px",
      // width: "100px",
      padding: "10px"
    };
    return (
      <React.Fragment>
        <Row className="header">Organisation</Row>
        <Row style={{ display: "flex", height: "80vh" }}>
          <Col className="col1 nohoverTableWrapper">
            <Row className="rowImage">
              <Image
                source={require("../../../../shared/src/assets/fbb.png")}
                width={"100%"}
                height={"100%"}
                style={{}}
                alternate_text="org_logo"
                scaleType="contain"
              />
            </Row>
            {this.renderInfoHeader()}
            {this.renderInfo()}
          </Col>
          <Col className="col2">
            <Row className="rowStores">
              <Col className="colStores">Stores</Col>
              <Col className="colCustomButtonAddNewSub">
                <CustomButton
                  type="primary"
                  disabled={false}
                  style={{}}
                  onClick={() => {}}
                >
                  Add NEW SUB
                </CustomButton>
              </Col>
            </Row>
            <Row>
              <CustomList
                data={data}
                actionableButtonText={"Assign"}
                actionableButtonType={"default"}
                actionStyle={actionStyle}
                actionSpan={4}
                imageStyle={imageStyle}
                imageSpan={4}
                imageHeight={"80px"}
                imageWidth={"100px"}
                imageScaleType={"contain"}
                contentStyle={contentStyle}
                contentSpan={16}
              />
            </Row>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default OrganisationHome;
