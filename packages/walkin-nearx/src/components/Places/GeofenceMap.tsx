import * as React from "react";
import { Auxiliary } from "@walkinsole/walkin-components";
import {
  Circle,
  GoogleMap,
  Marker,
  withGoogleMap,
  GoogleMapProps
} from "react-google-maps";
import DrawingManager from "react-google-maps/lib/components/drawing/DrawingManager";
import canUseDOM from "can-use-dom";
const markerIcon = require("@walkinsole/walkin-components/src/assets/images/marker-location.png");

interface iProps extends GoogleMapProps {
  mapData?: any,
  setlocationDetails?: any,
  mapHeight?: string,
  places?: any,
  myLocation?: any
}

interface iState {
  center?: object
}

const geolocation: any =
  canUseDOM && navigator.geolocation
    ? navigator.geolocation
    : {
      getCurrentPosition(success, failure) {
        failure(`Your browser doesn't support geolocation.`);
      }
    };

const Geofences = places => {
  let geoFen = [];
  geoFen = places.map((place, index) => (
    <div key={index}>
      {" "}
      {place.center.lat && place.center.lng && (
        <div>
          {/* <InfoWindow position={place.center}>    
                <div>{place.placeName}</div>
                <Icon type="environment" style={{ color: "#e20464" }} theme="filled" />
            </InfoWindow>  */}
          <Marker position={place.center} />
          <Circle
            center={place.center}
            radius={place.radius[0] ? place.radius[0] : 0}
            options={{
              fillColor: "#1DD9FA",
              fillOpacity: 0.3,
              strokeColor: "#62A7FF",
              strokeOpacity: 1,
              strokeWeight: 1
            }}
          />
          <Circle
            center={place.center}
            radius={place.radius[1] ? place.radius[1] : 0}
            options={{
              fillColor: "#1DD9FA",
              fillOpacity: 0.2,
              strokeColor: "#BA7EFE",
              strokeOpacity: 1,
              strokeWeight: 1
            }}
          />
          <Circle
            center={place.center}
            radius={place.radius[2] ? place.radius[2] : 0}
            options={{
              fillColor: "#FFA6A6",
              fillOpacity: 0.18,
              strokeColor: "#FF8686",
              strokeOpacity: 1,
              strokeWeight: 1
            }}
          />
        </div>
      )}
    </div>
  ));

  return geoFen;
};

const GeolocationExampleGoogleMap: any = withGoogleMap((props: iProps) => (
  <GoogleMap
    defaultZoom={16}
    center={props.center.lat ? props.center : props.myLocation}
  >
    <div>
      {/* {console.log(props.mapData.center)}
    {console.log(props.center)}  */}
    </div>

    {/* <Marker  icon= {{ url:markerIcon, scaledSize: new google.maps.Size(30, 60) }}  
              position={(props.mapData.center.lat && props.mapData.center.lat!=NaN && props.mapData.center.lng && props.mapData.center.lng!=NaN)
                        ?props.mapData.center:props.myLocation} /> */}

    {props.mapData.markLoc ? (
      <Marker
        icon={{ url: markerIcon, scaledSize: new google.maps.Size(30, 60) }}
        position={
          props.mapData.mark.lat && props.mapData.mark.lng
            ? props.mapData.mark
            : props.myLocation
        }
      />
    ) : (
        ""
      )}

    {Geofences(props.places ? props.places : props.mapData.places)}

    {props.mapData.searchRadius ? (
      <Circle
        center={props.mapData.mark}
        radius={props.mapData.searchRadius}
        options={{
          fillColor: "#11FFDE",
          fillOpacity: 0.2,
          strokeColor: "#C1FF00",
          strokeOpacity: 1,
          strokeWeight: 1
        }}
      />
    ) : (
        ""
      )}

    {props.mapData.getLoc ? (
      <DrawingManager
        defaultDrawingMode={google.maps.drawing.OverlayType.MARKER}
        defaultOptions={{
          drawingControl: true
        }}
        onMarkerComplete={marker => {
          props.setlocationDetails(
            marker.getPosition().lat(),
            marker.getPosition().lng()
          );
          marker.setMap(null);
        }}
      />
    ) : (
        ""
      )}
  </GoogleMap>
));

export default class GeofenceMap extends React.Component<iProps, iState> {
  constructor(props) {
    super(props);
    this.state = { center: { lat: 0.1, lng: 0.1 } };
  }

  isUnmounted = false;
  componentWillUnmount() {
    this.isUnmounted = true;
  }

  componentWillMount() {
    geolocation.getCurrentPosition(position => {
      var center = this.state.center;
      (center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }),
        this.setState({ center });
      // console.log("My Location  "+center)
    });
  }

  render() {
    return (
      <Auxiliary>
        <GeolocationExampleGoogleMap
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={
            <div
              style={{
                height: this.props.mapHeight ? this.props.mapHeight : `630px`
              }}
            />
          }
          mapElement={<div style={{ height: `100%` }} />}
          center={this.props.mapData.center}
          mapData={this.props.mapData}
          setlocationDetails={this.props.setlocationDetails}
          myLocation={this.state.center}
          places={this.props.places}
        />
      </Auxiliary>
    );
  }
}
