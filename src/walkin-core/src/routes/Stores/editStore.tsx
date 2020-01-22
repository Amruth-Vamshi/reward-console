import React from "react";
import { Link } from "react-router-dom";
import * as jwt from "jsonwebtoken";
import { withApollo, ApolloProviderProps } from "react-apollo";
import { History } from "history";

import { Icon, Select, Input, Button, Switch, Spin } from "antd";
import "./index.css";
import GeofenceMap from "../../../../walkin-nearx/src/components/Places/GeofenceMap";
import {
  GET_ALL_USERS_OF_ORGANIZATION,
  STORE,
  CREATE_STORE,
  UPDATE_STORE
} from "./../../PlatformQueries";
const { Option } = Select;

interface EditStoreProps extends ApolloProviderProps<any> {
  history: History;
}
interface EditStoreState {
  mapData: any;
  activeUsers: any;
  storeDetails: any;
  orgID: string;
  isFetching: boolean;
}

class EditStore extends React.Component<EditStoreProps, EditStoreState> {
  constructor(props: EditStoreProps) {
    super(props);

    this.state = {
      isFetching: true,
      orgID: "",
      activeUsers: [],
      storeDetails: {},
      mapData: {
        places: [
          {
            id: "",
            placeName: "",
            storeId: "",
            selected: true,
            mainPlace: true,
            address: "",
            radius: [],
            center: {
              lat: null,
              lng: null
            },
            errors: {}
          }
        ],
        // places1: [],

        center: {
          lat: null,
          lng: null
        },

        errors: {},
        // markerPlace: 0,
        getLoc: false
        // loading1: false
      }
    };
  }

  UNSAFE_componentWillMount() {
    const jwtToken: any = localStorage.getItem("jwt");
    const { org_id }: any = jwt.decode(jwtToken);

    let { mapData } = this.state;
    let storeId = "";
    let locationParams = this.props.history.location.pathname.split("/");
    if (locationParams[locationParams.length - 1] === "edit") {
      storeId = locationParams[3];
      this.props.client
        .query({
          query: STORE,
          variables: { id: storeId },
          fetchPolicy: "network-only"
        })
        .then(storeDetails => {
          console.log(storeDetails.data.store, "new");
          mapData.places[0].center = {
            lat: storeDetails.data.store.latitude,
            lng: storeDetails.data.store.longitude
          };
          this.setState({
            storeDetails: storeDetails.data.store,
            orgID: org_id,
            mapData,
            isFetching: false
          });
        });
    }

    this.props.client
      .query({
        query: GET_ALL_USERS_OF_ORGANIZATION,
        variables: { id: org_id },
        fetchPolicy: "network-only"
      })
      .then(allUsers => {
        let activeUsers = allUsers.data.organization.users.filter(
          (user, index) => (user.status = "ACTIVE")
        );
        this.setState({ activeUsers, isFetching: false });
        console.log(activeUsers, "new");
      });
  }

  onChange = (type: string, value: any) => {
    this.setState(
      (
        prevState: Readonly<EditStoreState>,
        props: Readonly<EditStoreProps>
      ) => {
        return {
          ...prevState,
          [type]: value
        };
      }
    );
  };

  onCreateStore = () => {
    let { storeDetails } = this.state;
    let input = {
      parentOrganizationId: this.state.orgID,
      ...storeDetails
    };

    this.props.client
      .mutate({
        mutation: CREATE_STORE,
        variables: {
          input: input
        }
      })
      .then(createStore => {
        console.log(createStore, "ncreateStoreew");
        if (createStore.data.createStore.id) {
          this.props.history.push("/core/stores/");
        }
      });
  };

  onUpdateStore = () => {
    let { storeDetails } = this.state;
    let input = {
      parentOrganizationId: this.state.orgID,
      ...storeDetails
    };
    this.props.client
      .mutate({
        mutation: UPDATE_STORE,
        variables: {
          input: input
        }
      })
      .then(UpdateStore => {
        console.log(UpdateStore, "ncreateStoreew");
        if (UpdateStore.data.updateStore.id) {
          this.props.history.push("/core/stores/");
        }
      });
  };

  onFilteredList = newList => {
    console.log("storeInfo onFilteredList newList", newList);
    // this.setState({ dataSource: newList });
  };

  getloc = i =>
    this.setState({
      mapData: { ...this.state.mapData, getLoc: true, markerPlace: i }
    });

  handleCenterChange = (e, i, name) => {
    let places = this.state.mapData.places;
    let lng = places[i].center.lng;
    let lat = places[i].center.lat;

    if (name == "lat") lat = parseFloat(e.target.value);
    else lng = parseFloat(e.target.value);

    if (lat != NaN && lat != null) places[i].errors.latitude = "";
    if (lng != NaN && lng != null) places[i].errors.longitude = "";

    places[i].center = { lat: lat, lng: lng };
    i
      ? this.setState({ mapData: { ...this.state.mapData, places } })
      : this.setState({
          mapData: { ...this.state.mapData, places, center: places[0].center }
        });
  };

  setlocationDetails = (lat, lng) => {
    let places = this.state.mapData.places;
    places[this.state.mapData.markerPlace].center = { lat: lat, lng: lng };
    if (lat != NaN && lat != null)
      places[this.state.mapData.markerPlace].errors.latitude = "";
    if (lng != NaN && lng != null)
      places[this.state.mapData.markerPlace].errors.longitude = "";
    this.setState({
      mapData: { ...this.state.mapData, places, getLoc: false }
    });
    this.state.mapData.markerPlace
      ? this.setState({
          mapData: { ...this.state.mapData, places, getLoc: false }
        })
      : this.setState({
          mapData: {
            ...this.state.mapData,
            places,
            center: places[0].center,
            getLoc: false
          }
        });
  };

  render() {
    console.log(this.state.storeDetails);

    let { storeDetails, mapData, isFetching } = this.state;
    let header = "Create Store ";
    if (storeDetails.id) {
      header = "Edit Store";
    }
    return (
      <div className="storesFormContainer">
        {isFetching ? (
          <div
            style={{
              width: "50%"
            }}
            className="centerAlign"
          >
            <Spin size="large" />
          </div>
        ) : (
          <div
            style={{
              width: "50%"
            }}
          >
            <div
              onClick={() => {
                this.props.history.push("/core/stores/");
              }}
              className="cursorPointer webhookBackButton"
            >
              <Icon type="arrow-left" />
              Back
            </div>
            <div className="storeFormTitle">{header}</div>
            <div className="storeInputWrapper">
              <div className="InputLabel">
                Name<span className="requiredFieldRedColor">*</span>
              </div>
              <Input
                size="large"
                placeholder="Enter your store name"
                value={storeDetails.name}
                onChange={e => {
                  storeDetails.name = e.target.value;
                  this.onChange("storeDetails", storeDetails);
                }}
              />
            </div>
            <div className="storeInputWrapper">
              <div className="InputLabel">Email</div>
              <Input
                size="large"
                placeholder="Enter store email address"
                value={storeDetails.email}
                onChange={e => {
                  storeDetails.email = e.target.value;
                  this.onChange("storeDetails", storeDetails);
                }}
              />
            </div>
            <div className="storeInputWrapper">
              <div className="InputLabel">
                Address Line 1<span className="requiredFieldRedColor">*</span>
              </div>
              <Input
                size="large"
                placeholder="Enter store location address"
                value={storeDetails.addressLine1}
                onChange={e => {
                  storeDetails.addressLine1 = e.target.value;
                  this.onChange("storeDetails", storeDetails);
                }}
              />
            </div>
            <div className="storeInputWrapper">
              <div className="InputLabel">
                Address Line 2<span className="requiredFieldRedColor">*</span>
              </div>
              <Input
                size="large"
                placeholder="Enter store location address"
                value={storeDetails.addressLine2}
                onChange={e => {
                  storeDetails.addressLine2 = e.target.value;
                  this.onChange("storeDetails", storeDetails);
                }}
              />
            </div>

            <div className="storeFlexWrapper">
              <div className="storeInputWrapper width45percent marginTop0">
                <div className="InputLabel">
                  City<span className="requiredFieldRedColor">*</span>
                </div>
                <Input
                  size="large"
                  placeholder="Enter store location address"
                  value={storeDetails.city}
                  onChange={e => {
                    storeDetails.city = e.target.value;
                    this.onChange("storeDetails", storeDetails);
                  }}
                />
              </div>
              <div className="storeInputWrapper width45percent marginTop0">
                <div className="InputLabel">
                  State<span className="requiredFieldRedColor">*</span>
                </div>
                <Input
                  size="large"
                  placeholder="Enter store location address"
                  value={storeDetails.state}
                  onChange={e => {
                    storeDetails.state = e.target.value;
                    this.onChange("storeDetails", storeDetails);
                  }}
                />
              </div>
            </div>

            <div className="storeFlexWrapper ">
              <div className="storeInputWrapper width45percent marginTop0 marginBottom0">
                <div className="InputLabel">
                  Pin Code<span className="requiredFieldRedColor">*</span>
                </div>
                <Input
                  size="large"
                  placeholder="Enter store location address"
                  value={storeDetails.pinCode}
                  onChange={e => {
                    storeDetails.pinCode = e.target.value;
                    this.onChange("storeDetails", storeDetails);
                  }}
                />
              </div>
              <div className="storeInputWrapper width45percent marginTop0 marginBottom0">
                <div className="InputLabel">
                  Phone number<span className="requiredFieldRedColor">*</span>
                </div>
                <Input
                  disabled
                  size="large"
                  placeholder="Enter store phone number address"
                  // value={storeDetails.mobileNumber}
                  onChange={e => {
                    // storeDetails.mobileNumber = e.target.value;
                    // this.onChange("storeDetails", storeDetails);
                  }}
                />
              </div>
            </div>

            <div id="EntityInputWrapper" className="storeInputWrapper">
              <div className="InputLabel">Assign as admin</div>
              <Select
                getPopupContainer={() =>
                  document.getElementById("EntityInputWrapper")
                }
                showSearch
                size="large"
                style={{ width: "100%" }}
                placeholder="Choose admin"
                optionFilterProp="children"
                onChange={value => {
                  storeDetails.adminUserId = value;
                  this.onChange("storeDetails", storeDetails);
                }}
                // onFocus={onFocus}
                // onBlur={onBlur}
                // onSearch={onSearch}
                filterOption={(input, option) =>
                  option.props.children
                    .toString()
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                {this.state.activeUsers.map((user, index) => {
                  return (
                    <Option key={index} value={user.id}>
                      {user.firstName}
                    </Option>
                  );
                })}
              </Select>
            </div>
            <div className=" borderWidth1Box">
              <div className="storeFlexWrapper">
                <div className="storeInputWrapper width45percent">
                  <div className="InputLabel">
                    Latitude<span className="requiredFieldRedColor">*</span>
                  </div>
                  <Input
                    size="large"
                    placeholder="Latitude"
                    type="number"
                    step="0.0001"
                    name="latitude"
                    value={mapData.places[0].center.lat}
                    onChange={(e: any) => {
                      this.handleCenterChange(e, 0, "lat");

                      // mapData.places[0].center.lat = e.target.value;
                      // this.onChange("mapData", mapData);
                    }}
                  />
                </div>
                <div
                  id="EntityInputWrapper"
                  className="storeInputWrapper width45percent"
                >
                  <div className="InputLabel">
                    Longitude<span className="requiredFieldRedColor">*</span>
                  </div>
                  <Input
                    size="large"
                    placeholder="Longitude"
                    type="number"
                    step="0.0001"
                    name="latitude"
                    value={mapData.places[0].center.lng}
                    onChange={(e: any) => {
                      this.handleCenterChange(e, 0, "lng");
                      // mapData.places[0].center.lng = e.target.value;
                      // this.onChange("mapData", mapData);
                    }}
                  />
                </div>
              </div>
              <p onClick={() => this.getloc(0)}>
                <i className="gx-pointer gx-text-primary">
                  <Icon type="plus" /> {"  "}Pick Location from map
                </i>
              </p>
            </div>

            <div className="storeFlexWrapper">
              <div className="storeInputWrapper width15percent ">
                <Switch
                  checked={storeDetails.wifi}
                  onChange={(value: any) => {
                    storeDetails.wifi = value;
                    this.onChange("storeDetails", storeDetails);
                  }}
                />
              </div>
              <div className="storeInputWrapper width75percent">Wifi</div>
              <div className="storeInputWrapper width15percent ">
                <Switch
                  checked={storeDetails.STATUS === "ACTIVE"}
                  onChange={(value: any) => {
                    storeDetails.STATUS = value ? "ACTIVE" : "INACTIVE";
                    this.onChange("storeDetails", storeDetails);
                  }}
                />
              </div>
              <div className="storeInputWrapper width75percent">Active</div>
            </div>

            <Button
              disabled={false}
              className="button"
              type="primary"
              size="large"
              onClick={() => {
                if (storeDetails.id) {
                  this.onUpdateStore();
                } else {
                  this.onCreateStore();
                }
              }}
              loading={false}
            >
              {storeDetails.id ? "Update" : "Create"}
            </Button>
          </div>
        )}
        <div style={{ width: 1, border: "1px solid grey ", height: 700 }} />
        <div className={"storeMapWrapper"}>
          <GeofenceMap
            mapHeight="100%"
            mapData={this.state.mapData}
            setlocationDetails={(lat, lng) => {
              this.setlocationDetails(lat, lng);
            }}
          />
        </div>
      </div>
    );
  }
}

export default withApollo(EditStore);
