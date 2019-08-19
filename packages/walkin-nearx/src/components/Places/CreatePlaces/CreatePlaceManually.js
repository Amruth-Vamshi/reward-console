import React, { Component } from "react";
import { Row, Col, Affix, Button, message, Modal } from "antd";
import CreatePlaceForm from "./CreatePlaceForm";
import GeofenceMap from "../GeofenceMap";
import canUseDOM from "can-use-dom";
import { nearXClient as client } from "../../../nearXApollo";
import raf from "raf";
import { CREATE_PLACE, PLACES_BY_ID } from "../../../queries";
import AddHotspot from "./AddHotspot";
import { RADIUS_1_MAX, RADIUS_1_MIN, RADIUS_2_MAX, RADIUS_3_MAX, HOTSPOT_RADIUS } from "../../../Constants";

const geolocation =
  canUseDOM && navigator.geolocation
    ? navigator.geolocation
    : {
      getCurrentPosition(success, failure) {
        failure(`Your browser doesn't support geolocation.`);
      }
    };

export default class CreatePlaceManually extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [
        {
          id: "",
          placeName: "",
          storeId: "",
          selected: true,
          mainPlace: true,
          address: "",
          radius: [RADIUS_1_MIN],
          center: {
            lat: null,
            lng: null
          },
          errors: {}
        }
      ],
      places1: [],

      center: {
        lat: null,
        lng: null
      },

      errors: {},
      markerPlace: 1,
      getLoc: false,
      loading1: false
    };
  }

  componentWillMount() {

    sessionStorage.getItem("placeId")
      ? this.getPlaceDetails(JSON.parse(sessionStorage.getItem("placeId")))
      : this.getGeoLocation(0);

    sessionStorage.removeItem("placeId");
  }

  getPlaceDetails = placeId => {
    client
      .query({
        query: PLACES_BY_ID,
        variables: { id: placeId }
      })
      .then(res => {
        let place = res.data.Place;
        let places = [
          {
            id: place.id,
            placeName: place.geofenceName,
            address: place.address,
            center: { lat: place.location.lat, lng: place.location.lng },
            radius: place.radii,
            mainPlace: true,
            selected: true,
            errors: {}
          }
        ];
        place.hotspots.map(p => {
          places.push({
            id: p.id,
            placeName: p.geofenceName,
            address: p.address,
            center: { lat: p.location.lat, lng: p.location.lng },
            radius: [HOTSPOT_RADIUS],
            selected: true,
            errors: {}
          });
        });
        this.setState({ places, places1: places, center: places[0].center });
      })
      .catch(err => console.log("Failed to get Places Details" + err));
  };

  addRadius = i => {
    let places = this.state.places;
    places[i].radius.push(places[i].radius[places[i].radius.length - 1]);
    this.setState({ places });
  };

  getGeoLocation = (i = 0) => {
    geolocation.getCurrentPosition(position => {
      let places = this.state.places;
      (places[i].center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }),
        this.setState({ places, center: places[0].center });
    });
  };

  addHotspot = () => {
    let place = {
      placeName: "",
      //radius1: 0,  radius2: 0,  radius3: 0,
      center: { lat: null, lng: null },
      errors: {},
      radius: [RADIUS_1_MIN],
      storeId: ""
    };

    let places = [...this.state.places, place];
    this.setState({ places });
    //  this.getGeoLocation()
  };

  onPlaceSelect = id => {
    let { places1 } = this.state;
    places1[id].selected = !places1[id].selected;
    let places = places1.filter(place => place.selected);
    this.setState({ places, places1 });
  };

  // deleteHotspot = i =>{
  //   let places = this.state.places
  //   places1.splice(i,1)
  //   this.setState({places})
  // }

  handleCenterChange = (e, i, name) => {
    let places = this.state.places;
    let lng = places[i].center.lng;
    let lat = places[i].center.lat;

    if (name == "lat") lat = parseFloat(e.target.value);
    else lng = parseFloat(e.target.value);

    if (lat != NaN && lat != null) places[i].errors.latitude = "";
    if (lng != NaN && lng != null) places[i].errors.longitude = "";

    places[i].center = { lat: lat, lng: lng };
    i
      ? this.setState({ places })
      : this.setState({ places, center: places[0].center });
  };

  getloc = i => this.setState({ getLoc: true, markerPlace: i });

  handleOnChange = (e, i) => {
    let places = this.state.places;
    places[i][e.target.name] = e.target.value;
    if (e.target.value.trim() != "") places[i].errors[e.target.name] = "";
    this.setState({ places });
  };

  onChangeRadius = (e, i, n) => {
    let places = this.state.places;
    places[i].radius[n] = e;
    this.setState({ places });
  };

  setlocationDetails = (lat, lng) => {
    let places = this.state.places;
    places[this.state.markerPlace].center = { lat: lat, lng: lng };
    if (lat != NaN && lat != null)
      places[this.state.markerPlace].errors.latitude = "";
    if (lng != NaN && lng != null)
      places[this.state.markerPlace].errors.longitude = "";
    this.setState({ places, getLoc: false });
    this.state.markerPlace
      ? this.setState({ places, getLoc: false })
      : this.setState({ places, center: places[0].center, getLoc: false });
  };

  handleSubmit = () => {
    let err = 0;
    let places = this.state.places;
    places.map(place => {
      place.errors = {};
      if (place.placeName.trim() == "")
        place.errors.placeName = "* Place Name is mandatory";
      if (place.address.trim() == "")
        place.errors.address = "* Address is mandatory";
      // if(place.storeId.trim()=='') place.errors.storeId = "* storeId is mandatory"
      if (place.center.lat == null || place.center.lat == NaN)
        place.errors.latitude = "* latitude is mandatory";
      if (place.center.lng == null || place.center.lng == NaN)
        place.errors.longitude = "* longitude is mandatory";
      if (Object.keys(place.errors).length !== 0) err++;
    });

    if (err) {
      this.setState({ places });
      console.log("Errors in submition");
    } else {
      this.setState({ loading1: true });
      let places = [];
      this.state.places.map(p => {
        places.push({
          id: p.id ? p.id : null,
          geofenceName: p.placeName,
          address: p.address,
          location: p.center,
          radii: p.radius
        });
      });
      places[0].mainPlace = true;

      client
        .mutate({
          mutation: CREATE_PLACE,
          variables: { places: places }
        })
        .then(res => {
          message.success("success");
          this.props.history.push("/nearx/places");
          this.setState({ loading1: false });
        })
        .catch(err => {
          this.setState({ loading1: false });
          console.log("Failed to store Places Details" + err);
          message.warning("Failed to store Places Details");
        });
    }
  };

  submitHotspots = hotspots => {
    let { places1, places } = this.state;
    places1[0] = places[0];

    hotspots.map(h => {
      if (h.id) {
        if (!places1.find(p => h.id === p.id)) places1.push(h);
      } else {
        places1.push(h);
      }
    });

    let places2 = places1.filter(p => p.selected === true);
    // let places = [...places1,...hotspots]
    this.setState({ places: places2, places1, visible: false });
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  deleteRedi = n => {
    let { places } = this.state
    places[n].radius.pop()
    this.setState({ places })
  }

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const width = window.innerWidth;
    return (
      <div className="gx-main-content-wrapper">
        {/* <div>
           <p style={{fontSize:20 }} > CREATE  PLACES</p>    
         </div> */}
        <Row style={{ float: "center" }} gutter={20}>
          <Col xs={24} sm={12} span={12}>
            <CreatePlaceForm
              formData={this.state}
              showModal={this.showModal}
              getloc={this.getloc}
              handleSubmit={this.handleSubmit}
              handleOnChange={this.handleOnChange}
              deleteRedi={this.deleteRedi}
              addHotspot={this.addHotspot}
              deleteHotspot={this.deleteHotspot}
              onPlaceSelect={this.onPlaceSelect}
              addRadius={this.addRadius}
              onChangeRadius={this.onChangeRadius}
              handleCenterChange={this.handleCenterChange}
            />
          </Col>

          <Col xs={24} sm={12} span={12}>
            {/* <Affix offsetTop={185}> */}
            <div className="gx-card">
              <div className="gx-card-head">GEO LOCATION</div>
              <div className="gx-card-body">
                <GeofenceMap
                  mapHeight="600px"
                  mapData={this.state}
                  setlocationDetails={this.setlocationDetails}
                />
              </div>
            </div>
            {/* </Affix> */}
          </Col>
        </Row>

        <Modal
          width="80%"
          key="model"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          <AddHotspot
            formData={this.state}
            submitHotspots={this.submitHotspots}
          />
        </Modal>
      </div>
    );
  }
}
