import * as React from "react";
import PropTypes from "prop-types";
import { Col, Row, Form, Select, Input, Button, Icon } from "antd";
import { AddAndDeleteSelectDynamically, WalkinQueryBuilder } from "shared";
import { FormComponentProps } from "antd/lib/form";

let id = 0;

interface FilterProps extends FormComponentProps {
  handleSubmit?: any;
  query?: any;
  attributeData?: any;
  logQuery?: any;
}

class Filter extends React.Component<FilterProps, {}> {
  constructor(props: FilterProps) {
    super(props);
  }
  removeFields = k => {
    const { form } = this.props;
    const keys = form.getFieldValue("keys");
    if (keys.length === 1) {
      return;
    }
    form.setFieldsValue({
      keys: keys.filter(key => key !== k)
    });
  };

  addFields = () => {
    const { form } = this.props;
    const keys = form.getFieldValue("keys");
    const nextKeys = keys.concat(id++);
    form.setFieldsValue({
      keys: nextKeys
    });
  };

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    getFieldDecorator("keys", { initialValue: [] });
    const keys = getFieldValue("keys");
    const formItems = keys.map((key, index) => {
      return (
        <Form.Item key={key}>
          <Form.Item>
            {getFieldDecorator(`attribute [${key}]`, {
              rules: [
                {
                  required: true,
                  message: "Please select an attribute type!"
                }
              ]
            })(
              <Select style={{ width: 100 }} placeholder="Select an attribute">
                <Select.Option value="ccd_event">NAME</Select.Option>
                <Select.Option value="ccd_event2">AGE</Select.Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator(`attribute_exp [${key}]`, {
              rules: [
                {
                  required: true,
                  message: "Please select an attribute type!"
                }
              ]
            })(
              <Select style={{ width: 100 }} placeholder="Select an attribute">
                <Select.Option value="equal_to">EQUALS_TO</Select.Option>
                <Select.Option value="less_then">LESS_THEN</Select.Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator(`attribute_value [${key}]`, {
              rules: [
                {
                  required: true,
                  message: "Please select an attribute value!"
                }
              ]
            })(<Input />)}
          </Form.Item>
          {keys.length > 1 ? (
            <Icon
              className="dynamic-delete-button"
              type="minus-circle-o"
              onClick={() => this.removeFields(key)}
            />
          ) : null}
        </Form.Item>
      );
    });
    return (
      <Row style={{ marginTop: "1rem" }}>
        <Col span={6}>
          <h2>Filter</h2>
        </Col>
        <Col span={14}>
          <Form layout="inline" onSubmit={() => console.log("submit")}>
            {formItems}
            <WalkinQueryBuilder
              query={this.props.query}
              fields={this.props.attributeData}
              onQueryChange={this.props.logQuery}
            />

            {/* <Button
              type="dashed"
              onClick={this.addFields}
              style={{ width: "40%" }}
            >
              <Icon type="plus" /> Add More Rules
             
            </Button> */}
          </Form>
        </Col>
      </Row>
    );
  }
}

const FilterForm = Form.create<FilterProps>({
  name: "Filter",
  onFieldsChange(props, changedFields) {
    console.log(changedFields);
  },
  // mapPropsToFields(props) {
  //   console.log(props);
  //   const { items } = props;
  //   items.map((item, index) => {
  //     return {
  //       [`${item.name} ${index}`]: Form.createFormField({
  //         value: item.value
  //       })
  //     };
  //   });
  // },
  onValuesChange(_, values) {
    console.log("values", values);
  }
})(Filter);

export default FilterForm;
