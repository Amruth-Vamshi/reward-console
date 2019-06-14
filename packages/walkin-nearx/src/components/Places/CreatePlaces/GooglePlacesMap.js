import React, { Component } from 'react'
import { Affix, Col, Card, Row, Form, Input, Button, Slider, Select, InputNumber, Icon } from 'antd';
import { placeTypesArr } from './data'
import GeofenceMap from '../GeofenceMap';

const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

export default class GooglePlacesMap extends Component {

  // .replace('_', ' ').toLowerCase().split(' ')
  //       .map(s => s.charAt(0).toUpperCase() + s.substring(1))
  //      .join(' ')

  render() {
    var formData = this.props.data
    var options = placeTypesArr.map((item, index) => <Option key={index} value={item.replace(' ', '_').toLowerCase()}>{item}</Option>)
    return (
      // <div>
      // {/* <Affix style={{zIndex: 1}}  offsetBottom={45}> */}

      <div style={{ marginTop: 30 }}>

        {formData.moreOptions ? <div>

          <p><span onClick={() => this.props.getloc()} style={{ padding: '30px', whiteSpace: "nowrap", fontSize: '17px' }} className="gx-text-primary gx-pointer">Get Location From Map</span>
            <span>(or) </span>
            <span onClick={() => this.props.myloc()} style={{ padding: '30px', whiteSpace: "nowrap", fontSize: '17px' }} className="gx-text-primary gx-pointer">Get Current Location</span></p>
          {/* <Button onClick={() => this.props.getloc()} style={{ margin: "10px" }}>Get location from map</Button> */}



          <Row style={{ padding: 10, paddingLeft: 30, float: "center" }} >
            <Col span={10}>

              Latitude: <Input required placeholder="Latitude" value={formData.mark.lat} type="number" step="0.0001" name="latitude" onChange={c => this.props.handleCenterChange(c, "lat")} />
              <span style={{ color: 'Red' }}>{formData.errors.latitude}</span>

            </Col>
            <Col span={10}>
              Longitude  <Input required placeholder="Longitude" value={formData.mark.lng} name="longitude" type="number" step="0.0001" onChange={c => this.props.handleCenterChange(c, "lng")} />
              <span style={{ color: 'Red' }}>{formData.errors.longitude}</span>
            </Col>
          </Row>


          <Row style={{ padding: 10, paddingLeft: 30, float: "center" }}>
            <Col span={10}>
              Search radius: <Input required placeholder="Search Radius" value={formData.searchRadius} name="searchRadius" min={100} type="number" step="1" onChange={c => this.props.changeSearchRadius(c)} />
              <span style={{ color: 'Red' }}>{formData.errors.searchRadius}</span>
            </Col>


            <Col style={{ overflow: "hidden" }} span={10}>
              Type:
              <Select
                showSearch value={formData.type} name="type" style={{ width: '250px' }}
                placeholder="Select Type" optionFilterProp="children"
                onChange={e => this.props.handleOnTypeChange(e)}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}  >
                {options}
              </Select>
              <span style={{ color: 'Red' }}>{formData.errors.type}</span>
            </Col>
          </Row>

        </div> : ''}

        {/* <Affix style={{  top: 200 }} offsetTop={180}> */}
        <div style={{ padding: 20 }}>
          <GeofenceMap mapData={this.props.data} setlocationDetails={this.props.setlocationDetails} />
        </div>
        {/* </Affix> */}

      </div>
      // {/* </Affix> */}
      // </div>
    )
  }
}
