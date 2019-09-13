import React from "react";
import { Card, Col, Row, Radio, Upload, Button, Icon } from 'antd';

export default class Controls extends React.Component {
    state = {
        template: "",
        transition: "",
        layout: "",
        color: ""

    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    render() {
        return (
            <Row style={{ minHeight: "100vh", backgroundColor: "#EAECEB", borderLeft: "2px solid grey" }}>
                <Col span={24}>
                    <Card style={{ backgroundColor: "#EAECEB" }}>
                        <Row>
                            <Col span={24}>
                                <h5>Template Structure</h5>
                                <Radio.Group name="template" onChange={this.onChange} value={this.state.template}>
                                    <Radio value="one per Page">one per Page</Radio>
                                    <Radio value="Long Form">Long Form</Radio>

                                </Radio.Group>
                            </Col>
                        </Row>
                        <br></br>
                        <hr></hr>
                        <Row>
                            <Col span={24}>
                                <h5>Transition</h5>
                                <Radio.Group name="transition" onChange={this.onChange} value={this.state.transition}>
                                    <Radio value="Horizontal">Horizontal</Radio>
                                    <Radio value="Vertical">Vertical</Radio>

                                </Radio.Group>
                            </Col>
                        </Row>
                        <br></br>
                        <hr></hr>
                        <Row>
                            <Col span={24}>
                                <h5>Header</h5>
                                <div>
                                    <Upload>
                                        <Button>
                                            <Icon type="upload" /> Upload
                                        </Button>
                                    </Upload>
                                </div>
                            </Col>
                        </Row>
                        <br></br>
                        <hr></hr>
                        <Row>
                            <Col span={24}>
                                <h5>Layout</h5>
                                <Radio.Group name="layout" onChange={this.onChange} value={this.state.layout}>
                                    <Radio value="Style 1">Style 1</Radio>
                                    <Radio value="Style 2">Style 2</Radio>

                                </Radio.Group>
                            </Col>
                        </Row>
                        <br></br>
                        <hr></hr>
                        <Row>
                            <Col span={24}>
                                <h5>Color</h5>
                                <Radio.Group name="color" onChange={this.onChange} value={this.state.color}>
                                    <Radio value="Background">Background</Radio>
                                    <Radio value="Accent">Accent</Radio>

                                </Radio.Group>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        )

    }
}