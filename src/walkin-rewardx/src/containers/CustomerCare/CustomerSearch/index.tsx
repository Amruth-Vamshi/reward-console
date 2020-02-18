import React from "react";
import { Row, Col, Input, Tabs, Table, Modal, List, Spin, message } from "antd";
import { ColumnProps } from "antd/es/table";
import { CustomButton, SortableDataTable } from "shared";
import "./index.css";
import { withApollo, ApolloProviderProps, Query } from "react-apollo";
import { RouteComponentProps } from "react-router";
import moment from "moment";
import { GET_CUSTOMER_DETAILS, GET_LOYALTY_TRANSACTIONS } from "../../../query";
import { CircularProgress } from "walkin-components";

interface CustomerSearchRouterProps {
  id: string;
}

interface CustomerLastOrder {
  key: string;
  phoneNumber: string;
  name: string;
  loyaltyBalance: string;
  orderDate: string;
  orderId: string;
  loyaltyEarnStatus: string;
}

interface CustomerSearchCacheProps {
  data: object;
}

interface CustomerSearchProps
  extends ApolloProviderProps<CustomerSearchCacheProps>,
    RouteComponentProps<CustomerSearchRouterProps> {}

interface CustomerSearchState {
  orgId: string;
  customer: any;
  loading: boolean;
  loadingTable: boolean;
  phoneNumber: string;
  customerId: string;
  loyaltyTransactionsData: any;
}

class CustomerSearch extends React.Component<
  CustomerSearchProps,
  CustomerSearchState
> {
  constructor(props: CustomerSearchProps) {
    super(props);
    this.state = {
      orgId:
        this.props.client &&
        this.props.client.cache["data"]["data"]["$ROOT_QUERY.auth"]
          .organizationId,
      customer: null,
      loading: true,
      loadingTable: false,
      phoneNumber: null,
      customerId: null,
      loyaltyTransactionsData: null
    };
  }

  componentDidMount() {
    this.setState({ loading: false });
  }

  getCustomerDetails() {
    console.log(
      "CustomerSearch getCustomerDetails externalCustomerId",
      this.state.customerId
    );
    this.setState({ customer: null, loading: true });
    this.props.client
      .query({
        query: GET_CUSTOMER_DETAILS,
        variables: {
          input: {
            // id: ""
            externalCustomerId: this.state.phoneNumber
            // organization_id: "5dbe47e1-12db-4004-949f-8d7fe7745264",
            // customerIdentifier: ""
          }
        }
      })
      .then((data: any) => {
        console.log("CustomerSearch getCustomerDetails data", data);
        if (data.data.customer) {
          this.setState({ customer: data.data.customer });
          this.getLoyaltyTransactions();
        } else {
          this.setState({ loading: false });
          message.error(
            "Unable to fetch customer data, please check the phone number"
          );
        }
      })
      .catch(error => {
        console.log("CustomerSearch getCustomerDetails error", error);
        this.setState({ loading: false });
      });
  }

  getLoyaltyTransactions() {
    this.props.client
      .query({
        query: GET_LOYALTY_TRANSACTIONS,
        variables: {
          externalCustomerId: this.state.phoneNumber,
          pageOptions: {
            page: 1,
            pageSize: 10
          },
          sortOptions: {
            sortBy: "id",
            sortOrder: "DESC"
          }
        }
      })
      .then((data: any) => {
        console.log("CustomerSearch getLoyaltyTransactions data", data);
        this.setState({
          loyaltyTransactionsData: data.data.loyaltyTransaction,
          loading: false
        });
      })
      .catch(error => {
        this.setState({ loading: false });
        console.log("CustomerSearch getLoyaltyTransactions error", error);
      });
  }

  onClickSearchButton() {
    // if (this.state.customerId && this.state.customerId.length > 0) {
    //   this.getCustomerDetails();
    // } else {
    //   message.error("Invalid customer id");
    // }

    if (this.state.phoneNumber && this.state.phoneNumber.length === 10) {
      this.getCustomerDetails();
    } else {
      message.error("Invalid phone number");
    }
  }

  onRowClickTransactionTabPane = (event, record, rowIndex) => {
    console.log("event", event);
    console.log("record", record);
    console.log("rowIndex", rowIndex);
    // this.setState({ showTransactionModal: true, selectedTransaction: record });
    this.props.history.push({
      pathname: "/rewardx/customer_care",
      state: {
        record: record,
        loyaltyTransactionsData: this.state.loyaltyTransactionsData
      }
    });
  };

  render() {
    const { customer, loyaltyTransactionsData } = this.state;
    console.log("CustomerSearch render customer", customer);
    console.log(
      "CustomerSearch render loyaltyTransactionsData",
      loyaltyTransactionsData
    );
    let id = "id";
    let phoneNumber = "";
    let name = "";
    let loyaltyBalance = "";
    let orderDate = "";
    let orderId = "";
    let loyaltyEarnStatus = "";

    if (customer && customer.id) id = customer.id;
    if (customer && customer.phoneNumber) phoneNumber = customer.phoneNumber;
    if (customer && customer.firstName) {
      if (customer.lastName) {
        name = customer.firstName + " " + customer.lastName;
      } else {
        name = customer.firstName;
      }
    }
    if (
      loyaltyTransactionsData &&
      loyaltyTransactionsData.data &&
      loyaltyTransactionsData.data.length
    ) {
      if (loyaltyTransactionsData.data[0].data) {
        loyaltyBalance =
          loyaltyTransactionsData.data[0].data.orderData.order.totalAmount;
      }
      if (
        loyaltyTransactionsData.data[0].data &&
        loyaltyTransactionsData.data[0].data.orderData &&
        loyaltyTransactionsData.data[0].data.orderData.order
      ) {
        orderId =
          loyaltyTransactionsData.data[0].data.orderData.order.externalOrderId;
        if (
          moment(
            loyaltyTransactionsData.data[0].data.orderData.order.orderDate
          ).format("YYYY-MM-DD") === "Invalid date"
        ) {
          orderDate = "";
        } else {
          orderDate = moment(
            loyaltyTransactionsData.data[0].data.orderData.order.orderDate
          ).format("YYYY-MM-DD");
        }
      }
      if (loyaltyTransactionsData.data[0].statusCode) {
        loyaltyEarnStatus =
          loyaltyTransactionsData.data[0].statusCode.statusCode;
      }
    }

    const data: CustomerLastOrder[] = [
      {
        key: id,
        phoneNumber: phoneNumber,
        name: name,
        loyaltyBalance: loyaltyBalance,
        orderDate: orderDate,
        orderId: orderId,
        loyaltyEarnStatus: loyaltyEarnStatus
      }
    ];

    const columns: ColumnProps<CustomerLastOrder>[] = [
      {
        title: "Phone Number",
        dataIndex: "phoneNumber",
        key: "phoneNumber",
        render: phoneNumber => (
          <div>
            <a className="cc-link">{phoneNumber}</a>
          </div>
        )
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "Loyalty Balance",
        dataIndex: "loyaltyBalance",
        key: "loyaltyBalance"
      },
      {
        title: "Last Order Date",
        dataIndex: "orderDate",
        key: "orderDate"
      },
      {
        title: "Last Order Id",
        dataIndex: "orderId",
        key: "orderId"
      },
      {
        title: "Status",
        dataIndex: "loyaltyEarnStatus",
        key: "loyaltyEarnStatus"
      }
    ];

    const paginationData = {
      position: "bottom",
      total: data ? data.length : 0,
      defaultPageSize: 5,
      showTotal: (total: any, range: any) =>
        `${range[0]}-${range[1]} of ${total} items`
    };
    return (
      <React.Fragment>
        <div className="cc-container">
          <Row className="cs-header">Customer Care</Row>
          <Row className="cs-search-container cs-sub-header">
            <Col className="cs-input-button-container cs-input-button-container-width">
              <Row>Phone Number</Row>
              <Row className="cs-input">
                <Input
                  disabled={false}
                  placeholder="Enter number"
                  // value="8985427761"
                  allowClear={true}
                  onChange={event =>
                    this.setState({ phoneNumber: event.target.value })
                  }
                  onPressEnter={event => {
                    this.onClickSearchButton();
                  }}
                />
              </Row>
            </Col>
            <Col className="cs-input-button-container cs-input-button-container-width">
              <Row>Email</Row>
              <Row className="cs-input">
                <Input
                  disabled={true}
                  placeholder="Enter email"
                  onChange={event =>
                    this.setState({ phoneNumber: event.target.value })
                  }
                />
              </Row>
            </Col>
            <Col className="cs-input-button-container cs-input-button-container-width">
              <Row>Bill Number</Row>
              <Row className="cs-input">
                <Input
                  disabled={true}
                  placeholder="Enter number"
                  onChange={event =>
                    this.setState({ phoneNumber: event.target.value })
                  }
                />
              </Row>
            </Col>
          </Row>
          <Row className="cs-search-container">
            <Col className="cs-input-button-container cs-input-button-container-width">
              <Row>Name</Row>
              <Row className="cs-input">
                <Input
                  disabled={true}
                  placeholder="Enter text"
                  // value="0005552393"
                  onChange={event =>
                    this.setState({ phoneNumber: event.target.value })
                  }
                />
              </Row>
            </Col>
            <Col className="cs-input-button-container cs-input-button-container-width">
              <Row>Customer ID</Row>
              <Row className="cs-input">
                <Input
                  allowClear={true}
                  disabled={true}
                  placeholder="Enter number"
                  onChange={event =>
                    this.setState({ customerId: event.target.value })
                  }
                  onPressEnter={event => {
                    this.onClickSearchButton();
                  }}
                />
              </Row>
            </Col>
          </Row>
          <Row className="cs-search-container">
            <Col className="cs-input-button-container cs-button">
              <CustomButton
                style={{}}
                type={"primary"}
                disabled={false}
                onClick={() => {
                  this.onClickSearchButton();
                }}
              >
                Search
              </CustomButton>
            </Col>
            {/* <Col className="cs-input-button-container cs-button">
            <CustomButton
              style={{}}
              type={"link"}
              disabled={false}
              onClick={() => {
                this.setState({ phoneNumber: "" });
              }}
            >
              Clear All
            </CustomButton>
          </Col> */}
          </Row>

          <div>
            {this.state.loading ? (
              <div className="cs-loader-view">
                <Spin size="large" />
              </div>
            ) : this.state.customer ? (
              <Table
                // title={() => (
                //   <div className="cc-table-header">Last order details</div>
                // )}
                dataSource={data}
                onChange={() => {}}
                columns={columns}
                // pagination={paginationData}
                loading={this.state.loading}
                onRow={(record, rowIndex) => {
                  return {
                    onClick: event => {
                      this.onRowClickTransactionTabPane(
                        event,
                        record,
                        rowIndex
                      );
                    }
                  };
                }}
                pagination={{
                  defaultPageSize: 10,
                  onChange: (a, b) => {
                    console.log("sdadads", a, b);
                  }
                }}
              />
            ) : null}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withApollo(CustomerSearch);
