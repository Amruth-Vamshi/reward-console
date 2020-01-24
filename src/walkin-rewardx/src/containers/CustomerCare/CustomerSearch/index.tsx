import React from "react";
import { Row, Col, Input, Tabs, Table, Modal, List, Spin, message } from "antd";
import { ColumnProps } from "antd/es/table";
import { CustomButton, SortableDataTable } from "shared";
import "./index.css";
import { withApollo, ApolloProviderProps, Query } from "react-apollo";
import { RouteComponentProps } from "react-router";
import { GET_CUSTOMER_DETAILS } from "../../../query";
import { CircularProgress } from "walkin-components";

interface CustomerSearchRouterProps {
  id: string;
}

interface Customer {
  key: string;
  phoneNumber: string;
  name: string;
  email: string;
  gender: string;
  dob: string;
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
      customerId: null
    };
  }

  componentDidMount() {
    this.setState({ loading: false });
  }

  getCustomerDetails() {
    this.setState({ loading: true });
    this.props.client
      .query({
        query: GET_CUSTOMER_DETAILS,
        variables: {
          input: {
            // id: ""
            externalCustomerId: this.state.customerId
            // organization_id: "5dbe47e1-12db-4004-949f-8d7fe7745264",
            // customerIdentifier: ""
          }
        }
      })
      .then((data: any) => {
        console.log("CustomerSearch getCustomerDetails data", data);

        this.setState({ customer: data.data.customer, loading: false });
      })
      .catch(error => {
        this.setState({ loading: false });
        console.log("CustomerSearch getCustomerDetails error", error);
      });
  }

  onClickSearchButton() {
    if (this.state.customerId && this.state.customerId.length > 0) {
      this.getCustomerDetails();
    } else {
      message.error("Invalid customer id");
    }

    // if (this.state.phoneNumber && this.state.phoneNumber.length === 10) {
    //   this.getCustomerDetails();
    // } else {
    //   message.error("Invalid phone number");
    // }
  }

  onRowClickTransactionTabPane = (event, record, rowIndex) => {
    console.log("event", event);
    console.log("record", record);
    console.log("rowIndex", rowIndex);
    // this.setState({ showTransactionModal: true, selectedTransaction: record });
    this.props.history.push({
      pathname: "/rewardx/customer_care",
      state: { record: record }
    });
  };

  render() {
    const { customer } = this.state;
    console.log("CustomerSearch render customer", customer);
    let id = "id";
    let phoneNumber = "";
    let name = "";
    let email = "";
    let gender = "";
    let dob = "";

    if (customer && customer.id) id = customer.id;
    if (customer && customer.phoneNumber) phoneNumber = customer.phoneNumber;
    if (customer && customer.firstName) {
      if (customer.lastName) {
        name = customer.firstName + " " + customer.lastName;
      } else {
        name = customer.firstName;
      }
    }

    if (customer && customer.email) email = customer.email;
    if (customer && customer.gender) gender = customer.gender;
    if (customer && customer.dateOfBirth) dob = customer.dateOfBirth;

    const data: Customer[] = [
      {
        key: id,
        phoneNumber: phoneNumber,
        name: name,
        email: email,
        gender: gender,
        dob: dob
      }
    ];

    const columns: ColumnProps<Customer>[] = [
      {
        title: "Phone Number",
        dataIndex: "phoneNumber",
        key: "phoneNumber",
        sorter: (a: any, b: any) =>
          a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0
        // sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        sorter: (a: any, b: any) =>
          a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0
      },
      {
        title: "Email",
        dataIndex: "email",
        key: "email",
        sorter: (a: any, b: any) =>
          a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0
      },
      {
        title: "Gender",
        dataIndex: "gender",
        key: "gender",
        sorter: (a: any, b: any) =>
          a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0
      },
      {
        title: "Date of Birth",
        dataIndex: "dob",
        key: "dob",
        sorter: (a: any, b: any) =>
          a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0
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
                  disabled={true}
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
                  disabled={false}
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
