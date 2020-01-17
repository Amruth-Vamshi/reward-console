import * as React from "react";
import {
  Row,
  Col,
  Card,
  Affix,
  message,
  Modal,
  Input,
  Button,
  Icon
} from "antd";
import GetGooglePlaces from "./GetGooglePlaces";
import { Link } from "react-router-dom";
import { CREATE_GROUP_OF_PLACES } from "../../../queries";
import GooglePlacesMap from "./GooglePlacesMap";
import { nearXClient as client } from "../../../nearXApollo";
import axios from "axios";
import canUseDOM from "can-use-dom";
import "../../../styles/styles.css";
import { GET_CONFIGURATION, SET_CONFIGURATION } from "../../../queries";
import {
  GOOGLE_API_KEY,
  FACEBOOK_API_KEY,
  RADIUS_1,
  RADIUS_2,
  RADIUS_3,
  RADIUS_1_MIN,
  TYPE
} from "../../../Constants";
import { History } from "history";

// AIzaSyCwRQqzyQuopL0CQ212q97uFVyXn5EMLbs

const geolocation: any =
  canUseDOM && navigator.geolocation
    ? navigator.geolocation
    : {
        getCurrentPosition(success, failure) {
          failure(`Your browser doesn't support geolocation.`);
        }
      };

interface iProps {
  history?: History;
}

interface iState {
  places?: Array<any>;
  places1?: Array<any>;
  center?: { lat?: any; lng?: any };
  mark?: { lat?: any; lng?: any };
  errors?: any;
  search?: string;
  getLoc?: boolean;
  visible?: boolean;
  noOfPlaces?: number;
  markLoc?: boolean;
  searchRadius?: number;
  moreOptions?: boolean;
  selectAll?: boolean;
  loading?: boolean;
  loading1?: boolean;
  defaultRadius?: Array<number>;
  googleAPIkey?: string;
  type?: string;
}

export default class GooglePlaces extends React.Component<iProps, iState> {
  addHotspot: any;
  deleteHotspot: any;
  addRadius: any;
  onChangeRadius: any;
  constructor(props) {
    super(props);
    this.state = {
      places: [],
      places1: [],

      center: {
        lat: null,
        lng: null
      },
      mark: { lat: null, lng: null },
      // type:null,
      noOfPlaces: 1,
      errors: {},
      markLoc: false,
      search: "",
      searchRadius: null,
      getLoc: false,
      moreOptions: false,
      selectAll: false,
      loading: false,
      visible: false,
      loading1: false,
      defaultRadius: [RADIUS_1_MIN]
    };
  }

  UNSAFE_componentWillMount() {
    let googleAPIkey = "";
    let defaultRadius = [RADIUS_1_MIN];
    client
      .query({
        query: GET_CONFIGURATION,
        variables: {},
        fetchPolicy: "network-only"
      })
      .then(res => {
        // console.log()
        console.log("Results", res.data.getConfiguration);
        res.data.getConfiguration.map(k => {
          if (k.name === GOOGLE_API_KEY) googleAPIkey = k.key;
          if (k.name === RADIUS_1) defaultRadius[0] = parseInt(k.key);
          if (k.name === RADIUS_2) defaultRadius[1] = parseInt(k.key);
          if (k.name === RADIUS_3) defaultRadius[2] = parseInt(k.key);
        });

        // console.log(googleAPIkey)
        if (googleAPIkey !== "") this.setState({ googleAPIkey, defaultRadius });
        else this.setState({ visible: true });
      })
      .catch(err => console.log("Failed to get Places Details" + err));
  }

  myloc = () => {
    geolocation.getCurrentPosition(position => {
      var center = this.state.center;
      center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      this.setState({ center, mark: center, markLoc: true });
    });
  };

  selAll = sel => {
    let { places, places1, selectAll } = this.state;
    places1.map(i => {
      i.selected = !selectAll;
    });

    if (!selectAll) places = places1;
    else places = [];

    this.setState({ places, places1, selectAll: !this.state.selectAll });
  };

  handleSubmit = e => {
    let { googleAPIkey } = this.state;
    // e.preventDefault();
    let errors: any = {};
    if (this.state.search.trim() == "")
      errors.search = "* this field is mandatory";
    if (this.state.searchRadius !== null && this.state.searchRadius !== NaN) {
      if (this.state.searchRadius < 100)
        errors.searchRadius = "Radius should be greater than 100";
      if (this.state.mark.lat === null || this.state.mark.lng === null)
        errors.searchRadius = "Please fill Latitude and Longitude values first";
    }

    if (Object.keys(errors).length !== 0) {
      this.setState({ errors });
    } else {
      let url = "https://maps.googleapis.com/maps/api/place/";
      if (this.state.mark.lat === null || this.state.mark.lng === null)
        url +=
          "textsearch/json?key=" + googleAPIkey + "&query=" + this.state.search;
      else {
        url +=
          "nearbysearch/json?location=" +
          this.state.mark.lat +
          "," +
          this.state.mark.lng +
          "&key=" +
          googleAPIkey;
        if (this.state.searchRadius !== null && this.state.searchRadius >= 100)
          url += "&radius=" + this.state.searchRadius;
        else url += "&rankby=distance";
        url += "&keyword=" + this.state.search;
      }

      if (this.state.type) {
        url += "&type=" + this.state.type;
      }

      // console.log(url);

      const hide = message.loading("Action in progress..", 0);

      var req = axios.create({
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      });
      let proxy = "https://cors-anywhere.herokuapp.com/";
      req
        .get(proxy + url)
        .then(response => {
          setTimeout(hide, 0);
          if (response.data.results.length) {
            this.formatePlaces(response.data.results);
            message.success(
              "success: " + response.data.results.length + " Places Found"
            );
          } else
            message.warning(
              response.data.error_message
                ? response.data.error_message
                : "No Places Found"
            );
        })
        .catch(err => {
          setTimeout(hide, 0);
          message.error("ERROR");
          console.log(err);
        });

      // axios.get(url, {
      //   headers: {
      //     'Access-Control-Allow-Origin': '*',
      //   },
      //   proxy: {
      //     host: '178.128.220.91',
      //     port: 5000
      //   }
      //   })

      // axios.get(url).then(response => {
      //     // this.setState({ categories: response.data.data });
      //     console.log('REsponse :', response);
      // }).catch(err=>console.log('Error :', err));
    }
  };

  formatePlaces = data => {
    let places = [];
    data.map(i => {
      places.push({
        image: i.icon,
        placeName: i.name,
        address: i.vicinity ? i.vicinity : i.formatted_address,
        sroreId: i.id,
        selected: false,
        radius: this.state.defaultRadius,
        center: i.geometry.location,
        errors: {}
      });
    });
    // console.log(places)
    this.setState({
      places: [],
      selectAll: false,
      places1: places,
      center: places[0].center
    });
  };

  onPlaceSelect = id => {
    let { places1, selectAll } = this.state;
    places1.filter(place => {
      if (place.sroreId === id) place.selected = !place.selected;
    });
    let places = places1.filter(place => place.selected);
    if (places.length == places1.length) selectAll = true;
    else selectAll = false;
    this.setState({ places, places1, selectAll });
  };

  createPlaces = () => {
    this.setState({ loading: true });
    console.log("Create Places");
    let places = [];
    this.state.places.map(p => {
      places.push({
        geofenceName: p.placeName,
        address: p.address,
        location: p.center,
        radii: p.radius
      });
    });
    client
      .mutate({
        mutation: CREATE_GROUP_OF_PLACES,
        variables: { groupName: this.state.search, places: places }
      })
      .then(res => {
        message.success("success");
        this.props.history.push("/nearx/places");
        this.setState({ loading: false });
      })
      .catch(err => {
        this.setState({ loading: false });
        console.log("Failed to stote Places Details" + err);
        message.warning("Failed to stote Places Details");
      });
  };

  handleOnChange = e => {
    if (e.target.value.trim() != "") this.state.errors[e.target.name] = "";
    this.setState({ [e.target.name]: e.target.value });
  };

  changeSearchRadius = e => {
    let val = e.target.value;
    let errors: any = {};
    if (val < 100) errors.searchRadius = "Radius should be greater than 100";
    else if (this.state.mark.lat == null || this.state.mark.lng == null)
      errors.searchRadius = "Please fill Latitude and Longitude values first";
    if (val == 0 || val == null || val == NaN) errors.searchRadius = "";
    this.setState({ searchRadius: parseInt(e.target.value), errors });
  };

  setlocationDetails = (lat, lng) => {
    let center = this.state.center;
    center = { lat: lat, lng: lng };
    this.setState({ center, mark: center, getLoc: false, markLoc: true });
  };

  getloc = (i: any) => this.setState({ getLoc: true });
  moreOpt = i => {
    if (this.state.moreOptions) {
      let mark = { lat: null, lng: null };
      this.setState({ searchRadius: null, type: null, mark, markLoc: false });
    }
    this.setState({ moreOptions: !this.state.moreOptions });
  };

  handleCenterChange = (e, name) => {
    let val = e.target.value ? parseFloat(e.target.value) : null;
    let { center, errors } = this.state;
    let lng = center.lng ? parseFloat(center.lng) : null;
    let lat = center.lat ? parseFloat(center.lat) : null;
    let markLoc = false;

    if (name == "lat") lat = val;
    else lng = val;

    if (this.state.searchRadius > 100) {
      if (lat !== null && lng !== null) errors.searchRadius = "";
      else
        errors.searchRadius = "Please fill Latitude and Longitude values first";
    }
    if (lat != null) errors.latitude = "";
    if (lng != null) errors.longitude = "";

    center = { lat: lat, lng: lng };
    if (lat != null && lng != null) markLoc = true;

    this.setState({ center, mark: center, markLoc, errors });
  };

  handleOnTypeChange = e => {
    this.setState({ type: e });
  };

  // handleOk = () => {
  //     this.setState({ loading: true });
  //     setTimeout(() => {
  //         this.setState({ loading: false, visible: false });
  //     }, 3000);
  // };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  googleKeyChange = e => {
    let { errors } = this.state;
    errors.googleAPIkey = "";
    this.setState({ googleAPIkey: e.target.value, errors });
  };

  googleKeySubmit = () => {
    let { errors } = this.state;
    this.setState({ loading1: true });
    var req = axios.create({
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
    let url =
      "https://cors-anywhere.herokuapp.com/" +
      "https://maps.googleapis.com/maps/api/geocode/json?address=bengaluru&key=" +
      this.state.googleAPIkey;
    req
      .get(url)
      .then(response => {
        if (
          response.data.error_message === "The provided API key is invalid."
        ) {
          errors.googleAPIkey = "Invalid API key";
          this.setState({ loading1: false, errors });
          message.warning("Invalid API key");
        } else {
          // message.success('Success');
          this.setState({ loading: true });
          let keys = [
            { name: GOOGLE_API_KEY, key: this.state.googleAPIkey, type: TYPE }
          ];

          client
            .mutate({
              mutation: SET_CONFIGURATION,
              variables: { input: keys }
            })
            .then(res => {
              message.success("success");
              this.setState({ loading1: false, visible: false });
            })
            .catch(err => {
              this.setState({ loading1: false });
              message.warning("ERROR in storing");
            });
        }
      })
      .catch(err => {
        message.error("ERROR");
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        {/* <Row className='headerRow' >
					<Col> <span className="headerTitle">Google Places</span> </Col>
        </Row> */}

        {/* <Row className='headerRow1' >
            <div style={{ width: "100%" }}>
              <span style={{ fontSize: 22 }}>Create Places</span>
              <div style={{ float: "right", flexFlow: "right" }}>
                <Link to="/nearx/places/createplace"><Button style={{ margin: -3 }} className='buttonPrimary'>Upload CSV</Button></Link>
              </div>
            </div>
          </Row> */}

        <Row style={{ float: "none" }} gutter={1}>
          <Col xs={24} sm={14} span={14}>
            <GetGooglePlaces
              formData={this.state}
              handleSubmit={this.handleSubmit}
              moreOpt={this.moreOpt}
              selAll={this.selAll}
              handleOnChange={this.handleOnChange}
              // addHotspot={this.addHotspot}
              // deleteHotspot={this.deleteHotspot}
              onPlaceSelect={this.onPlaceSelect}
            />

            {this.state.places1.length ? (
              <Affix
                style={{ position: "absolute", width: "100%", bottom: 0 }}
                offsetBottom={10}
              >
                <Card
                  className="createPlaceCard"
                  // style={{marginBottom:0, position:"absolute",backgroundColor:'#fffffff',padding:24, width:'100%', bottom:0}}
                >
                  {this.state.places.length ? (
                    <Row>
                      <Col span={16}>
                        <div className="divCenterVertical">
                          {" "}
                          <span>Create places with selected items</span>{" "}
                        </div>
                      </Col>
                      <Col span={8}>
                        {" "}
                        <Button
                          onClick={() => this.createPlaces()}
                          style={{ float: "right", marginBottom: 0 }}
                          loading={this.state.loading}
                          className="buttonPrimary"
                        >
                          CREATE
                        </Button>
                      </Col>
                    </Row>
                  ) : (
                    <Row>
                      <Col span={16}>
                        <div className="divCenterVertical">
                          {" "}
                          <span>Select some places to create</span>{" "}
                        </div>
                      </Col>
                      <Col span={8}>
                        {" "}
                        <Link to="/nearx/places/createplace/manually">
                          <Button
                            disabled
                            className="buttonPrimary"
                            style={{ float: "right", marginBottom: 0 }}
                          >
                            CREATE
                          </Button>
                        </Link>
                      </Col>
                    </Row>
                  )}
                </Card>
              </Affix>
            ) : (
              <div className="">
                {" "}
                <br /> <br /> <br /> <br /> <br />
                <div style={{ textAlign: "center" }}>
                  <Icon
                    type="environment"
                    style={{
                      color: "#CACACA",
                      fontSize: 150,
                      marginBottom: 20
                    }}
                    theme="filled"
                  />
                  <p> Search for restaurants, malls... etc to create place </p>
                  {/* <Link to='/nearx/places/createplace/manually'> <Button className='buttonPrimary'>CREATE</Button></Link> */}
                </div>
              </div>
            )}
            <div />
          </Col>

          <Col
            xs={24}
            sm={10}
            style={{ height: "100hv", backgroundColor: "rgb(234, 234, 234)" }}
          >
            <GooglePlacesMap
              getloc={this.getloc}
              data={this.state}
              // addRadius={this.addRadius}
              // onChangeRadius={this.onChangeRadius}
              handleCenterChange={this.handleCenterChange}
              changeSearchRadius={this.changeSearchRadius}
              myloc={this.myloc}
              setlocationDetails={this.setlocationDetails}
              handleOnTypeChange={this.handleOnTypeChange}
            />
            {this.state.moreOptions ? (
              ""
            ) : (
              <div>
                {" "}
                <br /> <br /> <br /> <br /> <br /> <br />{" "}
              </div>
            )}
          </Col>
        </Row>

        <Modal
          width="500px"
          key="model1"
          visible={this.state.visible}
          onOk={this.googleKeySubmit}
          onCancel={this.handleCancel}
          title="Requires Google API key"
          footer={[
            <Button
              key="submit"
              type="primary"
              loading={this.state.loading1}
              onClick={this.googleKeySubmit}
            >
              Submit
            </Button>
          ]}
        >
          <p>Submit your Google API key to search places</p>
          <div>
            <Input
              placeholder="Google API key"
              value={this.state.googleAPIkey}
              size="large"
              name="googleAPIkey"
              onChange={c => this.googleKeyChange(c)}
            />
            <span style={{ color: "Red" }}>
              {this.state.errors.googleAPIkey}
            </span>
          </div>
          <div style={{ marginRight: 20, marginTop: 15 }}>
            <div style={{ float: "right" }}>
              <div
                style={{ marginBottom: 3, fontSize: 15 }}
                className="gx-text-primary gx-pointer"
              >
                <a
                  target="_blank"
                  href="https://developers.google.com/maps/documentation/javascript/get-api-key"
                >
                  Get Google API key
                </a>
              </div>
            </div>
          </div>
          <br />
        </Modal>
      </div>
    );
  }
}
