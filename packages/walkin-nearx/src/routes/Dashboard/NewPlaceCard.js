import React, { Component } from 'react'
import { Row, Col } from "antd";

export default class NewPlaceCard extends Component {
    render() {
        let { name, hotspots, entry, exit, avgTime } = this.props.place
        return (
            <Row>
                <Col xs={24} sm={7} style={{ color: "black", wordBreak: 'break-word', marginBottom: 8 }}>{name}</Col>
                <Col xs={6} sm={4} >Hotspots: <b>{hotspots}</b></Col>
                <Col xs={5} sm={4}>Entry: <b>{entry}</b></Col>
                <Col xs={4} sm={3}>Exit: <b>{exit}</b></Col>
                <Col xs={9} sm={6}>Avg Dwell time: <b>{avgTime}min</b></Col>
            </Row>
        )
    }
}
