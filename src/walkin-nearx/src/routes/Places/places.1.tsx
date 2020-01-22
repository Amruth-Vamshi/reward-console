import * as React from "react";
import { Row, Icon, Button, Input } from "antd";
import { Link } from "react-router-dom";
import { Auxiliary } from "walkin-components";
import PlaceCard from "../../components/Places/placeCard";
import "../../styles/places.css";

const demoData = [
  {
    key: "1",
    name: "Big Bizar koramangala",
    code: "BZJKJSDNJKN",
    latitude: "55.6541651",
    longitude: "130.541512",
    campaign: {
      active: 1,
      upComing: 3
    },
    region: "225 Bills place L20-30 Bills place Brogan Massachusetts chad"
  },
  {
    key: "2",
    name: "Big Bizar koramangala",
    code: "BZJKJSDNJKN",
    latitude: "55.6541651",
    longitude: "130.541512",
    campaign: {
      active: 1,
      upComing: 3
    },
    region: "225 Bills place L20-30 Bills place Brogan Massachusetts chad"
  },
  {
    key: "3",
    name: "Big Bizar koramangala",
    code: "BZJKJSDNJKN",
    latitude: "55.6541651",
    longitude: "130.541512",
    campaign: {
      active: 1,
      upComing: 3
    },
    region: "225 Bills place L20-30 Bills place Brogan Massachusetts chad"
  },
  {
    key: "4",
    name: "Big Bizar koramangala",
    code: "BZJKJSDNJKN",
    latitude: "55.6541651",
    longitude: "130.541512",
    campaign: {
      active: 1,
      upComing: 3
    },
    region: "225 Bills place L20-30 Bills place Brogan Massachusetts chad"
  },
  {
    key: "5",
    name: "Big Bizar koramangala",
    code: "BZJKJSDNJKN",
    latitude: "55.6541651",
    longitude: "130.541512",
    campaign: {
      active: 1,
      upComing: 3
    },
    region: "225 Bills place L20-30 Bills place Brogan Massachusetts chad"
  }
];

export default class Places extends React.Component {
  render() {
    return (
      <div className="gx-main-content-wrapper">
        <Auxiliary>
          <Row>
            <div style={{ width: "100%" }}>
              <span style={{ fontSize: 25 }}>Places</span>
              <div style={{ float: "right", flexFlow: "right" }}>
                <Button>Upload CSV</Button>
                <Link to="/nearx/places/createplace">
                  <Button className="buttonPrimary">Create New</Button>
                </Link>
              </div>
            </div>
          </Row>

          <div className="gx-card">
            <div className="gx-card-body">
              <div style={{ width: "100%" }}>
                <Input
                  style={{ width: "10%", marginRight: 15 }}
                  placeholder="Sort By"
                />
                <Input style={{ width: "10%" }} placeholder="Filter" />
                <div style={{ float: "right", flexFlow: "right" }}>
                  {" "}
                  <Input
                    prefix={<Icon type="search" />}
                    placeholder="Search"
                  />{" "}
                </div>
              </div>
            </div>
          </div>

          {/* <CustomScrollbars className="gx-layout-sider-scrollbar"> */}
          {demoData.map((data, index) => (
            <PlaceCard key={index} data={data} />
          ))}
          {/* </CustomScrollbars> */}
        </Auxiliary>
      </div>
    );
  }
}
