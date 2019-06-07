import React, { Component } from 'react'
import { Col, Card, Row, Input, Button, Pagination, Icon } from 'antd';
import HotspotCard from './HotspotCard';


const Search = Input.Search;

export default class SelectHotspots extends Component {
  render() {
    let formData = this.props.formData
    return (
      <div>
        <div>
            <Search placeholder="Search Nearby Hotspots"
              value={formData.search}
              size="large"
              onSearch={this.props.handleSearchSubmit}
              onPressEnter={this.props.handleSearchSubmit}
              name="search" onChange={c => this.props.handleChange(c)} />
            <span style={{ color: 'Red' }}>{formData.errors.search}</span>
        </div>

        { this.props.formData.places1.map((place,index)=>      
               <HotspotCard index={index} onPlaceSelect={this.props.onPlaceSelect} deleteHotspot={this.props.deleteHotspot} key={index} hp={place} />  )
        }

        {this.props.formData.places1.length?<div>

        <div style={{ margin: 20 }} className="divCenter">
            <Pagination defaultCurrent={1} onChange={this.props.pagination} pageSize={5} total={formData.totalPlaces} />
        </div>   
        
        <div style={{ overflow: "hidden",marginTop:-10}} >
            {/* <Button htmlType='submit' type="primary" style={{float:"right",marginRight:20}}>CREATE</Button> */}
            <Button onClick={this.props.handleSubmit1} className='buttonPrimary' style={{float:"right", marginRight:20}}>CREATE</Button>  
        </div></div>
        :''}

      </div>
    )
  }
}
