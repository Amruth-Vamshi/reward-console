import * as React from "react";
import { Affix, Row, Col, Tabs } from "antd";
import GeofenceMap from "../GeofenceMap";
import CreateHotspot from "./CreateHotspot";
import SelectHotspots from "./SelectHotspots";
import { nearXClient as client } from "../../../nearXApollo";
import { SEARCH_PLACES, GET_NAERBY_PLACES } from "../../../queries";
import { withApollo } from "react-apollo";
import { HOTSPOT_RADIUS } from "../../../Constants";
import CustomScrollbars from "../../../util/CustomScrollbars";

const TabPane = Tabs.TabPane;

interface iProps {
  submitHotspots?: (val) => any;
}

interface iState {
  places?: Array<any>;
  places1?: Array<any>;
  places2: Array<any>;
  center?: { lat?: any; lng?: any };
  errors?: any;
  markerPlace?: number;
  search?: string;
  getLoc?: Boolean;
  totalPlaces?: number;
  tab?: number;
  visible?: boolean;
}

class AddHotspot extends React.Component<iProps, Partial<iState>> {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
      places1: [],
      places2: [
        {
          placeName: "",
          address: "",
          selected: true,
          radius: [HOTSPOT_RADIUS],
          center: {
            lat: null,
            lng: null
          },
          errors: {}
        }
      ],
      center: {
        lat: null,
        lng: null
      },
      errors: {},
      markerPlace: 1,
      search: "",
      getLoc: false,
      totalPlaces: 10
    };
  }

  componentWillMount() {
    // let location = this.props.formData.places[0].center;
    // client
    //   .query({
    //     query: GET_NAERBY_PLACES,
    //     variables: { limit: 5, offset: 0, distance: 1000, location: location }
    //   })
    //   .then(res => {
    //     var places = [...this.state.places];

    //     res.data.getNearByPlaces.places.map(p => {
    //       if (!places.find(e => p.id === e.id))
    //         places.push({
    //           id: p.id,
    //           placeName: p.geofenceName,
    //           address: p.address,
    //           center: { lat: p.location.lat, lng: p.location.lng },
    //           radius: [HOTSPOT_RADIUS],
    //           selected: false
    //         });
    //     });
    //     console.log("Near by Places Results", res);
    //     this.setState({
    //       places1: places,
    //       totalPlaces: res.data.getNearByPlaces.pageInfo.total
    //     });
    //   })
    //   .catch(err => console.log("Failed to get Nearby Places Details" + err));

    this.getPlacesData(0, 5, "");
  }

  getPlacesData = (offset, limit, search) => {
    // console.log("GetPlacesCAlled");
    client
      .query({
        query: SEARCH_PLACES,
        variables: { limit: limit, offset: offset, search: search }
      })
      .then(res => {
        var places = [...this.state.places];

        res.data.Places.places.map(p => {
          if (!places.find(e => p.id === e.id))
            places.push({
              id: p.id,
              placeName: p.geofenceName,
              address: p.address,
              center: { lat: p.location.lat, lng: p.location.lng },
              radius: [HOTSPOT_RADIUS],
              selected: false
            });
        });
        this.setState({
          places1: places,
          totalPlaces: res.data.Places.pageInfo.total
        });
      })
      .catch(err => console.log("Failed to get Places Details" + err));
  };

  pagination = (e, n) => this.getPlacesData((e - 1) * n, n, this.state.search);

  onPlaceSelect = (id, e) => {
    let { places, places1 } = this.state;
    if (e.target.checked) {
      let place = places1.splice(id, 1);

      place[0].selected = true;
      places.push(place[0]);

      places1 = [place[0], ...places1];
      this.setState({ places, places1, center: place[0].center });
    } else {
      let { places, places1 } = this.state;
      places.splice(id, 1);
      let place = places1.splice(id, 1);
      place[0].selected = false;
      places1.push(place[0]);
      // places1 = [place[0],...places1]
      this.setState({ places, places1 });
    }
  };

  handleSearchSubmit = () => {
    this.getPlacesData(0, 5, this.state.search);
  };

  handleSubmit1 = () => {
    this.props.submitHotspots(this.state.places);
    // this.setState({ places1: [], places: [] });
  };

  handleSubmit = () => {
    let err = 0;
    let places = this.state.places2;
    places.map(place => {
      place.errors = {};
      if (place.placeName.trim() == "")
        place.errors.placeName = "* place Name is mandatory";
      if (place.address.trim() == "")
        place.errors.address = "* address is mandatory";
      // if(place.storeId.trim()=='') place.errors.storeId = "* storeId is mandatory"
      if (place.center.lat == null || place.center.lat == NaN)
        place.errors.latitude = "* latitude is mandatory";
      if (place.center.lng == null || place.center.lng == NaN)
        place.errors.longitude = "* longitude is mandatory";
      if (Object.keys(place.errors).length !== 0) err++;
    });

    if (err) {
      this.setState({ places2: places });
      console.log("Errors in submition");
    } else {
      this.props.submitHotspots(places);
      let place = [
        {
          placeName: "",
          address: "",
          selected: true,
          center: { lat: null, lng: null },
          errors: {},
          radius: [HOTSPOT_RADIUS]
        }
      ];
      this.setState({ places2: place });
    }
  };

  setlocationDetails = (lat, lng) => {
    let places = this.state.places2;
    places[this.state.markerPlace].center = { lat: lat, lng: lng };
    if (lat != NaN && lat != null)
      places[this.state.markerPlace].errors.latitude = "";
    if (lng != NaN && lng != null)
      places[this.state.markerPlace].errors.longitude = "";
    this.setState({ places2: places, getLoc: false });
    this.state.markerPlace
      ? this.setState({ places2: places, getLoc: false })
      : this.setState({
          places2: places,
          center: places[0].center,
          getLoc: false
        });
  };

  addHotspot = () => {
    let place = {
      placeName: "",
      address: "",
      selected: true,
      center: { lat: null, lng: null },
      errors: {},
      radius: [HOTSPOT_RADIUS]
    };

    let places = [...this.state.places2, place];
    this.setState({ places2: places });
    //  this.getGeoLocation()
  };

  handleOnChange = (e, i) => {
    let places = this.state.places2;
    places[i][e.target.name] = e.target.value;
    if (e.target.value.trim() != "") places[i].errors[e.target.name] = "";
    this.setState({ places2: places });
  };

  handleChange = (e: any) => {
    let errors = this.state.errors;
    if (e.target.value.trim() != "") errors[e.target.name] = "";
    this.setState({ [e.target.name]: e.target.value }); // Old implementation
    // this.setState((prevState) => ({
    //   ...prevState,
    //   [e.target.name]: e.target.value,
    // }))
  };

  handleCenterChange = (e, i, name) => {
    let places = this.state.places2;
    let lng = places[i].center.lng;
    let lat = places[i].center.lat;

    if (name == "lat") lat = parseFloat(e.target.value);
    else lng = parseFloat(e.target.value);

    if (lat != NaN && lat != null) places[i].errors.latitude = "";
    if (lng != NaN && lng != null) places[i].errors.longitude = "";

    places[i].center = { lat: lat, lng: lng };
    i
      ? this.setState({ places2: places })
      : this.setState({ places2: places, center: places[0].center });
  };

  onTabChange = n => this.setState({ tab: parseInt(n) - 1 });

  deleteHotspot = i => {
    let places = this.state.places2;
    places.splice(i, 1);
    this.setState({ places2: places });
  };

  deleteHotspot1 = i => {
    let places = this.state.places1;
    places.splice(i, 1);
    this.setState({ places1: places });
  };

  getloc = i => this.setState({ getLoc: true, markerPlace: i });

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  render() {
    return (
      <div>
        <Row>
          <Col span={12}>
            <Tabs onChange={this.onTabChange} defaultActiveKey="1">
              <TabPane tab="Connect To Existing Hotspot" key="1">
                <SelectHotspots
                  handleChange={this.handleChange}
                  handleSubmit1={this.handleSubmit1}
                  deleteHotspot={this.deleteHotspot1}
                  formData={this.state}
                  handleSearchSubmit={this.handleSearchSubmit}
                  pagination={this.pagination}
                  onPlaceSelect={this.onPlaceSelect}
                />
              </TabPane>
              <TabPane tab="Create Custom" key="2">
                <CreateHotspot
                  addHotspot={this.addHotspot}
                  deleteHotspot={this.deleteHotspot}
                  handleOnChange={this.handleOnChange}
                  getloc={this.getloc}
                  handleCenterChange={this.handleCenterChange}
                  handleSubmit={this.handleSubmit}
                  formData={this.state}
                />
              </TabPane>
            </Tabs>
          </Col>
          <Col xs={24} sm={12} span={12}>
            <Affix offsetTop={125}>
              <div style={{ marginTop: 15 }}>
                <GeofenceMap
                  mapHeight="600px"
                  places={
                    this.state.tab ? this.state.places2 : this.state.places
                  }
                  setlocationDetails={this.setlocationDetails}
                  mapData={this.state}
                />
              </div>
            </Affix>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withApollo(AddHotspot);
