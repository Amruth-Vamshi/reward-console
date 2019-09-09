import React, { Component } from 'react'
import { Row, Col } from "antd";

export default class ComplainCard extends Component {
    render() {
        let { Category, number_of_complains } = this.props.complain
        return (
            <Row>

                <Col xs={12} sm={10}>Category: <b>{Category}</b></Col>
                <Col xs={12} sm={10}>number_of_complains: <b>{number_of_complains}</b></Col>
            </Row>
        )
    }
}
