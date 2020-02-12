import * as React from 'react';
import { Form, Checkbox, Select } from 'antd';

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};
const dateItemLayout = {
  wrapperCol: { span: 18 },
  labelCol: { span: 10 },
};

const Option = Select.Option;

interface iProps {
  onFormNext?: any;
  noOfferRequired?: boolean;
  offerChecked?: any;
  offersList?: Array<any>;
  subTitle?: any;
  offer?: any;
  handleOnOfferChange?: any;
  errors?: any;
}

interface iState {
  check?: boolean;
}

export default class Offers extends React.Component<iProps, iState> {
  constructor(props: iProps) {
    super(props);
    this.state = {
      check: this.props.noOfferRequired ? this.props.noOfferRequired : false,
    };
  }
  onChange = (e: any) => {
    this.props.offerChecked(e.target.checked);
    this.setState({ check: e.target.checked });
  };
  render() {
    var options;
    if (this.props.offersList)
      options = this.props.offersList.map((item, index) => (
        <Option key={index} value={item.id}>
          {item.name}
        </Option>
      ));
    return (
      <div>
        <h3 style={{ marginLeft: -5 }} className="gx-text-grey gx-mb-1">
          {this.props.subTitle}
        </h3>
        <div style={{ marginTop: 25, marginLeft: 10 }}>
          {/* <div>No Offer? &nbsp;&nbsp;
					<span onClick={this.props.onFormNext} className="gx-text-primary gx-pointer">Skip this Step </span>
					</div> */}

          <Checkbox checked={this.state.check} onChange={this.onChange}>
            No Offer Required
          </Checkbox>

          <Form style={{ marginTop: 20 }} layout="vertical">
            <Form.Item label="Choose Offer" {...formItemLayout}>
              {/* <Input required placeholder="Address" value={this.props.offersList} size='large'
								name="name" onChange={c => this.props.handleOnOfferChange(c)} /> */}
              <Select
                showSearch
                disabled={this.state.check}
                value={this.props.offer}
                style={{ width: '100%' }}
                getPopupContainer={(triggerNode: any) => triggerNode.parentNode}
                placeholder="Select Type"
                optionFilterProp="children"
                onChange={e => this.props.handleOnOfferChange(e)}
                size="large"
                filterOption={(input: any, option: any) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                {options}
              </Select>
              <span style={{ color: 'Red' }}>
                {' '}
                {this.props.errors.offerName}{' '}
              </span>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}
