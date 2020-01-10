import React from "react";
import { Link } from "react-router-dom";
import { GoogleMap, Marker } from "react-google-maps";
import { Breadcrumb, Select, Input, Button, Switch } from "antd";
import "./index.css";
import GeofenceMap from "../../../../walkin-nearx/src/components/Places/GeofenceMap";

interface EditStoreProps {}
interface EditStoreState {
  mapData: any;
}

class EditStore extends React.Component<EditStoreProps, EditStoreState> {
  constructor(props: EditStoreProps) {
    super(props);

    this.state = {
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
              lat: -34.397,
              lng: 150.644
            },
            errors: {}
          }
        ],
        places1: [],

        center: {
          lat: -34.397,
          lng: 150.644
        },

        errors: {},
        markerPlace: 1,
        getLoc: false,
        loading1: false
      }
    };
  }

  onChange = () => {};

  onFilteredList = newList => {
    console.log("storeInfo onFilteredList newList", newList);
    // this.setState({ dataSource: newList });
  };

  render() {
    let header = "Edit Store";
    if (true) {
      header = "Create Store ";
    }
    return (
      <div className="storesFormContainer">
        <div
          style={{
            width: "50%"
          }}
        >
          <div className="storeFormTitle">{header}</div>
          <div className="storeInputWrapper">
            <div className="InputLabel">
              Name<span className="requiredFieldRedColor">*</span>
            </div>
            <Input
              size="large"
              placeholder="Enter your store name"
              defaultValue={"need to add"}
              onChange={() => {}}
            />
          </div>
          <div className="storeInputWrapper">
            <div className="InputLabel">
              Email<span className="requiredFieldRedColor">*</span>
            </div>
            <Input
              size="large"
              placeholder="Enter store email address"
              defaultValue={"need to add"}
              onChange={() => {}}
            />
          </div>
          <div className="storeInputWrapper">
            <div className="InputLabel">
              Address<span className="requiredFieldRedColor">*</span>
            </div>
            <Input
              size="large"
              placeholder="Enter store location address"
              defaultValue={"need to add"}
              onChange={() => {}}
            />
          </div>
          <div className="storeInputWrapper">
            <div className="InputLabel">
              Address<span className="requiredFieldRedColor">*</span>
            </div>
            <Input
              size="large"
              placeholder="Enter store phone number address"
              defaultValue={"need to add"}
              onChange={() => {}}
            />
          </div>

          <div id="EntityInputWrapper" className="storeInputWrapper">
            <div className="InputLabel">
              Assign as admin<span className="requiredFieldRedColor">*</span>
            </div>

            <Select
              getPopupContainer={() =>
                document.getElementById("EntityInputWrapper")
              }
              style={{ width: "100%" }}
              defaultValue={"need to add"}
              size="large"
              onChange={(event: any) => {}}
            >
              {/* {SLUG_TYPE.map((type, index) => (
                  <Option key={`type${index}`} value={type}>
                    {type}
                  </Option>
                ))} */}
            </Select>
          </div>
          {/* 
          <div className="storeFlexWrapper">
            <div className="storeInputWrapper width45percent">
              <div className="InputLabel">
                Slug<span className="requiredFieldRedColor">*</span>
              </div>

              <Input
                size="large"
                placeholder="Slug"
                defaultValue={"need to add"}
                onChange={() => {}}
              />
              <div className="inputDesc">
                Short description about above field.
              </div>
            </div>
            <div
              id="EntityInputWrapper"
              className="storeInputWrapper width45percent"
            >
              <div className="InputLabel">
                Type<span className="requiredFieldRedColor">*</span>
              </div>

              <Select
                getPopupContainer={() =>
                  document.getElementById("EntityInputWrapper")
                }
                style={{ width: "100%" }}
                defaultValue={"need to add"}
                size="large"
                onChange={(event: any) => {}}
              >
                {SLUG_TYPE.map((type, index) => (
                  <Option key={`type${index}`} value={type}>
                    {type}
                  </Option>
                ))}
              </Select>
              <div className="inputDesc">
                Short description about above field.
              </div>
            </div>
          </div> */}

          {/* <div className="storeFlexWrapper">
            <div className="storeInputWrapper width45percent">
              <div className="InputLabel">
                Default Value<span className="requiredFieldRedColor">*</span>
              </div>

              <Input
                size="large"
                placeholder="Default Value"
                defaultValue={"need to add"}
                onChange={e => {}}
              />
              <div className="inputDesc">
                Short description about above field.
              </div>
            </div>
            <div className="storeInputWrapper width45percent">
              <div className="InputLabel">
                Description<span className="requiredFieldRedColor">*</span>
              </div>

              <Input
                size="large"
                placeholder="Description"
                defaultValue={"need to add"}
                onChange={(e: any) => {}}
              />
              <div className="inputDesc">
                Short description about above field.
              </div>
            </div>
          </div>

          <div className="storeFlexWrapper">
            <div className="storeInputWrapper width15percent ">
              <Switch checked={false} onChange={(value: any) => {}} />
            </div>
            <div className="storeInputWrapper width75percent">
              Required
              <div className="inputDesc">
                Short description about above field.
              </div>
            </div>
          </div>
          <div className="storeFlexWrapper">
            <div className="storeInputWrapper width15percent ">
              <Switch checked={false} onChange={(value: any) => {}} />
            </div>
            <div className="storeInputWrapper width75percent ">
              Searchable
              <div className="inputDesc">
                Short description about above field.
              </div>
            </div>
          </div> */}
          <Button
            disabled={false}
            className="button"
            type="primary"
            size="large"
            onClick={() => {}}
            loading={false}
          >
            SAVE
          </Button>
        </div>
        <div style={{ width: 1, border: "1px solid grey ", height: 700 }} />
        <div className={"storeMapWrapper"}>
          <GeofenceMap
            mapHeight="100%"
            mapData={this.state.mapData}
            setlocationDetails={(lat, lng) => {
              console.log(lat, lng);
            }}
          />
        </div>
      </div>
    );
  }
}

export default EditStore;
