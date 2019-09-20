import React, { Component, Fragment } from 'react';
import { Col, Row, Form, Input, Checkbox, Select } from "antd";

const formItemLayout = {
	labelCol: { span: 6 },
	wrapperCol: { span: 18 },
};
const dateItemLayout = {
	wrapperCol: { span: 18 },
	labelCol: { span: 10 },
};

const Option = Select.Option;

export default class Offers extends Component {
	constructor(props) {
		super(props)
		this.state = {
			check: false
		}
	}
	onChange = e => {
		this.props.noOfferRequired(e.target.checked)
		this.setState({ check: e.target.checked })
	}
	render() {
		var options
		if (this.props.offersList)
			options = this.props.offersList.map((item, index) => <Option key={index} value={item.id}>{item.name}</Option>)
		return (
			<div>
				<h3 style={{ marginLeft: -5 }} className="gx-text-grey gx-mb-1">{this.props.subTitle}</h3>
				<div style={{ marginTop: 25, marginLeft: 10 }}>
					{/* <div>No Offer? &nbsp;&nbsp;
					<span onClick={this.props.onFormNext} className="gx-text-primary gx-pointer">Skip this Step </span>
					</div> */}

					<Checkbox checked={this.state.check} onChange={this.onChange}>No Offer Required</Checkbox>

					<Form style={{ marginTop: 20 }} layout="vertical">
						<Form.Item label="Choose Offer" {...formItemLayout}>

							{/* <Input required placeholder="Address" value={this.props.offersList} size='large'
								name="name" onChange={c => this.props.handleOnOfferChange(c)} /> */}
							<Select showSearch disabled={this.state.check}
								// getPopupContainer={() => document.getElementById('OffArea')}
								value={this.props.offer} name="type" style={{ width: '100%' }}
								placeholder="Select Type" optionFilterProp="children"
								onChange={e => this.props.handleOnOfferChange(e)} size='large'
								filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
							>
								{options}
							</Select>
							<span style={{ color: "Red" }}> {this.props.errors.name} </span>
						</Form.Item>
					</Form>
				</div>
			</div>
		)
	}
}
