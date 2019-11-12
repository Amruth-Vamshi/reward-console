import * as React from 'react'
import { Card, Row, Col, Button, TimePicker, DatePicker, InputNumber, Input, Icon, Select, Form } from "antd";
import { Widget } from "@walkinsole/walkin-components";

interface TestComponentProps {
    text: string
    label: any
    placeholder: any
}

export default class TestComponent extends React.Component<TestComponentProps, {}> {
    render() {
        return (
            <Widget
                style={{ backgroundColor: "#FAFAFA" }}
                title={<h1 className="gx-text-primary gx-text-capitalize gx-mb-0">

                    {this.props.text}</h1>
                }>
                <Form className="gx-signup-form gx-form-row0 gx-mb-0">
                    <div className="gx-mb-2">
                        <label>{this.props.label}</label>
                    </div>

                    <div className="gx-mb-3">
                        <Input placeholder={this.props.placeholder} />
                    </div>
                    <Button type="primary" className="gx-mb-0" htmlType="submit">
                        Send
              </Button>
                </Form>
            </Widget>
        )
    }
}
