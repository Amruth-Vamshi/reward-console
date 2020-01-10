import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, Table, Col, Row } from "antd";
import SearchBox from "./searchBox";
import "./index.css";

interface StoreInfoProps {}
interface StoreInfoState {
  dataSource: any;
}

class StoreInfo extends React.Component<StoreInfoProps, StoreInfoState> {
  constructor(props: StoreInfoProps) {
    super(props);

    this.state = {
      dataSource: [
        {
          key: "1",
          storeCode: "4456",
          name: "BB-BENGALURU-KORAMANGALA",
          address: "Phoenix Market City, Bangalore Karnataka - 560028",
          admin: "Niranjan"
        },
        {
          key: "2",
          storeCode: "2566",
          name: "BB-BENGALURU-9TH BLOCK JAYANAGAR",
          address: "Phoenix Market City, Bangalore Karnataka - 560028",
          admin: "Sreemanth"
        },
        {
          key: "3",
          storeCode: "3893",
          name: "BB-BENGALURU- J.P NAGAR",
          address: "Phoenix Market City, Bangalore Karnataka - 560028",
          admin: "Yeswanth"
        },
        {
          key: "4",
          storeCode: "7619",
          name: "BB-BENGALURU-HEBBAL-NAGASHETTY HALLI",
          address: "Phoenix Market City, Bangalore Karnataka - 560028",
          admin: "Rahul"
        },

        {
          key: "5",
          storeCode: "9563",
          name: "BB-BENGALURU-KORAMANGALA",
          address: "Phoenix Market City, Bangalore Karnataka - 560028",
          admin: "Suresh"
        },
        {
          key: "6",
          storeCode: "6842",
          name: "BB - FC-GUWAHATI-BHANAGAGHAR-CITY SQUARE G.S ROAD",
          address: "Phoenix Market City, Bangalore Karnataka - 560028",
          admin: "Surya"
        },
        {
          key: "7",
          storeCode: "5964",
          name: "BB-JOHRAT-MOUZA- NAGARMHAL-PMS / B&A COMPLEX",
          address: "Phoenix Market City, Bangalore Karnataka - 560028",
          admin: "Avinash Chowdary"
        },
        {
          key: "8",
          storeCode: "5399",
          name: "BB-SILCHAR-PARGANA-BARAKPUR-GOLDOGH COMMERCIAL COMPLEX",
          address: "Phoenix Market City, Bangalore Karnataka - 560028",
          admin: "Deepak C"
        },
        {
          key: "9",
          storeCode: "2214",
          name: "FBB-GUWAHATI-PALTAN BAZAR-G.S.ROAD",
          address: "Phoenix Market City, Bangalore Karnataka - 560028",
          admin: "Sairam"
        }
      ]
    };
  }

  onChange = () => {};

  onFilteredList = newList => {
    console.log("storeInfo onFilteredList newList", newList);
    this.setState({ dataSource: newList });
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
        width: "40%"
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
        width: "20%"
      }
    ];
    console.log("storeInfo render dataSource", this.state.dataSource);
    return (
      <div>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to="/core/orghome">Organisation Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>StoreInfo</Breadcrumb.Item>
        </Breadcrumb>

        <Row className="rowStoreInfoInstantSearch">
          <Col className="colStoreInfo">StoreInfo</Col>
          <Col className="colInstantSearch">
            <SearchBox
              placeHolder="Search"
              data={this.state.dataSource}
              onFilteredList={this.onFilteredList}
              filterOptions={columns}
            />
          </Col>
        </Row>
        <Table
          dataSource={this.state.dataSource}
          columns={columns}
          //   onChange={this.onChange}
        />
      </div>
    );
  }
}

export default StoreInfo;
