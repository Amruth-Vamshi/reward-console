import React, { Component } from 'react'
import { Col, Card, Row, Form, Input, Button, Slider, Select, InputNumber, Icon } from 'antd';
import axios from 'axios'
import PlacesItemCard from './PlacesItemCard'

const Search = Input.Search;

export default class GetGooglePlaces extends Component {
  constructor(props) {
    super(props)
  }


  render() {

    var { formData } = this.props

    // console.log(formData)
    return (
        <div className="gx-card" style={{marginBottom:70}}>
          <div className="gx-card-body">

            {/* <p style={{fontSize:18, color:"#969696"}}>Authentication Keys</p> */}
            {/* <Form.Item className="GoogleSearchBar" {...searchbar} style={{marginBottom:5}} > */}

            <Row>
              <Col span={20}>
                <Search required placeholder="Search Places From Google"
                  value={formData.search}
                  size="large"
                  // enterButton
                  // suffix={<Button style={{lineHeight:0, margin: 'auto', padding: 0, height: 'auto', border: '0px'}}>
                  //  <i className="icon icon-search-new gx-pointer gx-text-primary gx-fs-xxl"/>
                  //                 {/* <Icon onClick={this.props.handleSubmit} type="search" style={{ color: 'blue' }} /> */}
                  //         </Button>} 
                  onSearch={this.props.handleSubmit}
                  onPressEnter={this.props.handleSubmit}
                  name="search" onChange={c => this.props.handleOnChange(c)} />
                <span style={{ color: 'Red' }}>{formData.errors.search}</span>
              </Col>
              <Col span={4}>
                <div className="divCenter"> <p onClick={this.props.moreOpt} className="gx-text-primary gx-pointer">{formData.moreOptions ? 'Less Options' : 'More Options'}</p></div>
              </Col>
            </Row>
            {formData.places1.map((place, index) => <PlacesItemCard key={index} onPlaceSelect={this.props.onPlaceSelect} place={place} />)}
            
          </div>
        </div>
    )
  }
}
