import React from "react";
import * as jwt from "jsonwebtoken";
import { Link } from "react-router-dom";
import { History } from "history";
import { InstantSearch } from "shared";
import { Breadcrumb, Table, Col, Row, Button, Switch } from "antd";
import { withApollo, ApolloProviderProps } from "react-apollo";
import "./index.css";

import { GET_ALL_STORES } from "./../../PlatformQueries";

interface StoreListProps extends ApolloProviderProps<any> {
  history: History;
}
interface StoreListState {
  dataSource: any;
  allStoresFromApi: any;
  org_id: String;
  isFetching: boolean;
}

class StoreList extends React.Component<StoreListProps, StoreListState> {
  constructor(props: StoreListProps) {
    super(props);

    this.state = {
      dataSource: [],
      allStoresFromApi: [],
      org_id: "",
      isFetching: true
    };
  }

  UNSAFE_componentWillMount() {
    const jwtToken: any = localStorage.getItem("jwt");
    const { org_id }: any = jwt.decode(jwtToken);
    this.props.client
      .query({
        query: GET_ALL_STORES,
        // variables: { org_id, status: "ACTIVE" },
        fetchPolicy: "network-only"
      })
      .then(allStoresResponse => {
        console.log(allStoresResponse, "new");

        let dataSource = [];
        allStoresResponse.data.stores.map((store, index) => {
          dataSource.push({
            key: store.id,
            name: store.name,
            storeCode: store.externalStoreId,
            address: `${store.addressLine1},${store.addressLine2}`,
            admin: "NIL",
            STATUS: store.STATUS
          });
        });

        this.setState({
          dataSource,
          allStoresFromApi: allStoresResponse.data.stores,
          org_id,
          isFetching: false
        });
      });
  }
  onChange = () => {};

  onStoreFilteredList = list => {
    console.log(list);
  };

  render() {
    const columns = [
      {
        title: "Store Code",
        dataIndex: "storeCode",
        key: "storeCode",
        width: "10%"
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        width: "30%"
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "address",
        width: "30%"
      },
      {
        title: "Admin",
        dataIndex: "admin",
        key: "admin",
        width: "10%"
      },
      {
        title: "Status",
        dataIndex: "STATUS",
        key: "STATUS",
        width: "20%",
        render: (text: any, record: any) => {
          // <Switch
          //   className={webhook.enabled ? "webhookStatusSwitch" : ""}
          //   checked={webhook.enabled}
          //   onChange={() => this.onEnableOrDisableWebhook(index)}
          //   loading={isLoading && selectedWebhookIndex === index}
          // />
          return (
            <div className={"storeFlexWrapper"}>
              <div>{text === "ACTIVE" ? "Active" : "Inactive"}</div>
              {/* <Switch
                checked={text === "ACTIVE"}
                // onChange={(value: any) => {
                //   storeDetails.STATUS = value ? "ACTIVE" : "INACTIVE";
                //   this.onChange("storeDetails", storeDetails);
                // }}
              /> */}
            </div>
          );
        }
      }
    ];

    console.log("storeInfo render dataSource", this.state.dataSource);
    return (
      <div>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to="/core/organization">Organisation Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>StoreInfo</Breadcrumb.Item>
        </Breadcrumb>

        <Row className="rowStoreInfoInstantSearch">
          <Col className="colStoreInfo">StoreInfo</Col>
          <Col className="colInstantSearch">
            {/* component to be created
            <ConfigurableSearchBox
              placeHolder="Search"
              data={this.state.dataSource}
              onFilteredList={this.onFilteredList}
              filterOptions={columns}
            /> */}
            {/* <InstantSearch
              placeHolder="Search stores"
              data={[{ name: "sidhu" }, { name: "sidhus" }]}
              onFilteredList={this.onStoreFilteredList}
            /> */}
          </Col>
          <Col className="colCreateStoreButton">
            <Button
              disabled={false}
              className="button"
              type="primary"
              size="large"
              onClick={() => {
                this.props.history.push("/core/stores/create");
              }}
              loading={false}
            >
              Create Store
            </Button>
          </Col>
        </Row>
        <Table
          dataSource={this.state.dataSource}
          columns={columns}
          loading={this.state.isFetching}
          onRow={(record: any, rowIndex: number) => {
            return {
              onClick: (event: any) => {
                console.log(record, rowIndex);
                this.props.history.push("/core/stores/" + record.key + "/edit");
              }
            };
          }}
          //   onChange={this.onChange}
        />
      </div>
    );
  }
}

export default withApollo(StoreList);
