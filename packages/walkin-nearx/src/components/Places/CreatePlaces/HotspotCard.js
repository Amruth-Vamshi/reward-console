import React, { Component } from 'react'
import { Col, Card, Row, Form, Checkbox, Input, Button, Slider, Select, InputNumber, Icon } from 'antd';

export default class HotspotCard extends Component {
    render() {
        let data = this.props.hp
        return (
            <Row gutter={0} className='hotspotCard'>
                <Col span={14}><div className='divCenterVertical'>
                    <div >
                        <Checkbox className="gx-icon-btn"
                            checked={data.selected}
                            value="checked"
                            size='large'
                            onChange={e => { this.props.onPlaceSelect(this.props.index,e) }}
                        />
                    </div>
                    <span style={{ marginLeft: 5 }}> {data.placeName} </span>
                </div></Col>

                <Col style={{ float: "right", marginRight: -15 }}  className='placeCardLocation' span={10}>
                    <Row>Latitude:- <span style={{ marginBottom: 5 }}>{data.center.lat}</span></Row>
                    <Row>Longitude:- <span>{data.center.lng}</span></Row>
                </Col>
                {/* <Icon type="close" onClick={() => this.props.deleteHotspot(this.props.index)} style={{ float: "right", margin: '-8px 1px 0px 0px'}} />  */}
            </Row>
        )
    }
}
