import * as React from 'react'
import { Row, Col } from "antd";

interface ComplainCardProps {
    complain?: any
}

export default class ComplainCard extends React.Component<ComplainCardProps, {}> {
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
