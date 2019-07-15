import React, { Component } from "react";
import {
  Col,
  Row,
  Spin,
  Pagination,
  Card,
  message,
  Input,
  Icon,
  Button
} from "antd";
import { Link } from "react-router-dom";
import { Auxiliary, CustomScrollbars } from "@walkinsole/walkin-components";
import "../../styles/places.css";
import { nearXClient as client } from "../../nearXApollo";
import PlaceCard from "../../components/Places/placeCard";
// import { getAllPlaces } from './data'
// import { Query } from "react-apollo";
import { GET_ALL_AND_SEARCH_PLACES } from "../../queries";

const Search = Input.Search;

export default class Places extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
      totalPlaces: 0,
      search: "",
      errors: {},
      spin: false
    };
  }

  getPlacesData = (offset, limit, search) => {
    this.setState({ spin: true });
    let input = { limit: limit, offset: offset };
    if (search && search.trim() !== "") input.search = search.trim();
    client
      .query({
        query: GET_ALL_AND_SEARCH_PLACES,
        variables: input
      })
      .then(res => {
        var places = [];
        res.data.Places.places.map(p => {
          places.push({
            id: p.id,
            name: p.geofenceName,
            address: p.address,
            center: p.location,
            radius: p.radii,
            hotspots: p.totalHotspot
          });
        });
        // console.log(JSON.stringify(places))
        this.setState({
          places,
          spin: false,
          totalPlaces: res.data.Places.pageInfo.total
        });
      })
      .catch(err => {
        this.setState({ spin: false });
        message.error("ERROR");
        console.log("Failed to get Places Details" + err);
      });
  };

  componentWillMount() {
    this.setState({ spin: true });
    let input = { limit: 7, offset: 0 };
    // if(search && search.trim() !== '') input.search = search.trim()
    client
      .query({
        fetchPolicy: "network-only", // skip the cache
        query: GET_ALL_AND_SEARCH_PLACES,
        variables: input
      })
      .then(res => {
        var places = [];
        res.data.Places.places.map(p => {
          places.push({
            id: p.id,
            name: p.geofenceName,
            address: p.address,
            center: p.location,
            radius: p.radii,
            hotspots: p.totalHotspot
          });
        });
        this.setState({
          places,
          spin: false,
          totalPlaces: res.data.Places.pageInfo.total
        });
      })
      .catch(err => {
        this.setState({ spin: false });
        message.error("ERROR");
        console.log("Failed to get Places Details" + err);
      });
  }

  pagination = (e, n) => {
    this.getPlacesData((e - 1) * n, n, this.state.search);
    // this.setState({offset:e})
  };

  handleSearchSubmit = () => {
    this.getPlacesData(0, 7, this.state.search);
  };
  handleChange = e => {
    let errors = this.state.errors;
    if (e.target.value.trim() != "") errors[e.target.name] = "";
    this.setState({ [e.target.name]: e.target.value, errors });
  };

  handleSearchChange = e => {
    if (e.target.value.trim() == "") this.getPlacesData(0, 7, '');
    this.setState({ [e.target.name]: e.target.value });
  };


  render() {
    const demoData = this.state.places;
    // console.log(demoData)
    return (
      <div style={{ margin: 0 }}>
        <Auxiliary>
          <Row className="headerRow1">
            <div style={{ width: "100%" }}>
              <span style={{ fontSize: 25 }}>Places</span>
              <div style={{ float: "right", flexFlow: "right" }}>
                <Link to="/nearx/places/createplace">
                  <Button style={{ margin: 0 }} className="buttonPrimary">
                    Create New
                  </Button>
                </Link>
              </div>
            </div>
          </Row>
          <br />
          {/* <Row>
            <div style={{ width: "100%" }}>
              <span style={{fontSize:25}} >Places</span>
              <div style={{ float: "right", flexFlow: "right" }}>
                <Link to="/nearx/places/createplace"><Button className='buttonPrimary'>Create New</Button></Link>
        
              </div>
            </div>
            </Row> */}

          <Row style={{ margin: "5px 0px" }}>
            <Col span={5}>
              {/* <Input style={{ width: "10%", marginRight: 15 }} placeholder="Sort By" /> */}
              {/* <Input style={{ width: "10%" }} placeholder="Filter" /> */}
              {/* <Input prefix={<Icon type="search" />} placeholder="Search" /> */}

              <Search
                placeholder="Search Places"
                value={this.state.search}
                // size="large"
                onSearch={this.handleSearchSubmit}
                onPressEnter={this.handleSearchSubmit}
                name="search"
                onChange={c => this.handleSearchChange(c)}
              />
              <span style={{ color: "Red" }}>{this.state.errors.search}</span>
            </Col>
          </Row>

          {/* <CustomScrollbars className="gx-layout-sider-scrollbar"> */}
          {this.state.spin ? (
            <div>
              {" "}
              <br /> <br /> <br /> <br />{" "}
              <div className="divCenter">
                <Spin size="large" />
              </div>{" "}
              <br /> <br /> <br />{" "}
            </div>
          ) : demoData.length ? (
            <div>
              <Row className="placeTableHeaders">
                <Col span={5}>Name & ID</Col>
                <Col span={6}>Address</Col>
                <Col span={5}>Radius</Col>
                <Col span={2}>Hotspots</Col>
                <Col span={4}>Location</Col>
                <Col span={2} />
              </Row>

              {demoData.map((data, index) => (
                <PlaceCard
                  history={this.props.history}
                  key={index}
                  data={data}
                />
              ))}
            </div>
          ) : (
                <div style={{ margin: 60, fontSize: 25 }}>
                  <div className="divCenter">
                    <div>No Places Found</div>
                  </div>
                  <div className="divCenter">
                    <Link to="/nearx/places/createplace">
                      <Button
                        style={{ margin: 22, fontSize: 18 }}
                        className="buttonPrimary"
                      >
                        Create New Place
                  </Button>
                    </Link>
                    {/* <div style={{margin:10, fontSize:20}}>Create A new Place</div> */}
                  </div>
                </div>
              )}

          <div style={{ margin: 20 }} className="divCenter">
            <Pagination
              defaultCurrent={1}
              onChange={this.pagination}
              pageSize={7}
              total={this.state.totalPlaces}
            />
          </div>

          {/* </CustomScrollbars> */}
        </Auxiliary>
      </div>
    );
  }
}
