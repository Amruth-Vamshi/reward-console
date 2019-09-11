import React from "react";
import { Card, Col, Row } from 'antd';

export default class Controls extends React.Component {
    render() {
        return (
            <Row>
            <Col span={24}>
                <Card style={{ backgroundColor: "#a39c9b" }}>
                    <Row>
                        <Col span={24}>
                            this is a row
                </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            this is first row
                </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            this is first row
                </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
        )
        
    }
}