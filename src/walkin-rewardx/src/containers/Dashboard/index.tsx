import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// import asyncComponent from "../../util/asyncComponent";
import Dashboard from "./Dashboard";
import { RouteChildrenProps, withRouter } from "react-router";
import { Row, Col, Button, Table, Tag, Divider } from "antd";
import {
  IconWithTextCard,
  Widget,
  ChartCard,
  Auxiliary
} from "walkin-components";

interface DashboardProps extends RouteChildrenProps {}

interface DashboardState {
  data: Array<{
    id: String;
    cardName: String;
    createdOn: String;
    currency: String;
    value: String;
  }>;
}

class AnalyticsManager extends React.Component<DashboardProps, DashboardState> {
  constructor(props: DashboardProps) {
    super(props);
    this.state = {
      data: [
        {
          id: "1",
          cardName: "CCD Beans",
          createdOn: "12 Feb,19 @ 12:30pm",
          currency: "Rupee",
          value: "10=Rs1"
        },
        {
          id: "2",
          cardName: "CCD Cash",
          createdOn: "28 Mar,19 @ 01:03pm",
          currency: "Rupee",
          value: "01=Rs1"
        },
        {
          id: "3",
          cardName: "Beans",
          createdOn: "12 Feb,19 @ 12:30pm",
          currency: "Cash",
          value: "01=Rs1"
        }
      ]
    };
  }

  onRowClick(record) {
    console.log("onRowClick", record);
    this.props.history.push({
      pathname: "/rewardx/dashboard/loyalty_card",
      state: { record: record }
    });
  }

  onClickAddNewCard = () => {
    console.log("onClickAddNewCard");
    this.props.history.push({
      pathname: "/rewardx/dashboard/loyalty_card",
      state: { record: null }
    });
  };

  render() {
    const paginationConfig: any = {
      position: "bottom",
      total: this.state.data ? this.state.data.length : 0,
      defaultPageSize: 5,
      showTotal: (total: any, range: any) =>
        `${range[0]}-${range[1]} of ${total} items`
    };

    const columns = [
      {
        title: "Card Name",
        dataIndex: "cardName",
        key: "cardName"
      },
      {
        title: "Created on",
        dataIndex: "createdOn",
        key: "createdOn"
      },
      {
        title: "Currency",
        dataIndex: "currency",
        key: "currency"
      },
      {
        title: "Value",
        dataIndex: "currency",
        key: "value"
      },
      {
        title: "Action",
        dataIndex: "action",
        key: "action",
        render: (text, record) => (
          <span>
            <a>Edit </a>
            <Divider type="vertical" />
            <a>Delete</a>
          </span>
        )
      }
    ];

    return (
      <Auxiliary>
        <div
          style={{
            minHeight: "100vh"
            // maxWidth: "50vw" //html css
          }}
        >
          <Row style={{ display: "flex", margin: "12px" }}>
            {/*antd*/}
            <Col
              style={{
                width: "50%",
                fontSize: 20,
                color: "black"
              }}
            >
              Loyalty Cards
            </Col>
            <Col
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "flex-end"
              }}
            >
              <Button
                type="primary"
                size={"large"}
                onClick={this.onClickAddNewCard}
              >
                Add new card
              </Button>
            </Col>
          </Row>
          <Table
            dataSource={this.state.data}
            columns={columns}
            onRowClick={record => this.onRowClick(record)}
            pagination={this.state.data.length > 20 ? paginationConfig : false}
          />
        </div>
      </Auxiliary>
    );
  }
}

export default withRouter(AnalyticsManager);
