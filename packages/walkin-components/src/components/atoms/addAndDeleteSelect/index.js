import React, { Fragment } from 'react';
import { Select, Button, Icon } from 'antd';
import './style.css';
import PropTypes from 'prop-types';

const { Option } = Select;

class AddAndDeleteSelectDynamically extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			values: this.props.values ? this.props.values : [""]
		};
	}
	addClick() {
		let { values } = this.state
		console.log(values[values.length - 1]);
		values[values.length - 1] != '' &&
			this.setState({ values: [...this.state.values, ''] });
	}

	handleChange(i, value) {
		let values = [...this.state.values];
		console.log(values.find(i => i == value));
		if (!values.find(i => i == value)) {
			values[i] = value;
			this.setState({ values });
			this.props.onValuesSelected(values);
		}
	}

	removeClick(i, e) {
		var array = [...this.state.values]; // make a separate copy of the array
		if (i !== -1) {
			array.splice(i, 1);
			this.setState({ values: array });
			this.props.onValuesSelected(array);
		}
	}
	render() {
		const { segmentSelectionData } = this.props;
		return (
			<Fragment>
				{this.state.values.map((el, i) => {
					return (
						<div key={i} className="selectSegmentBoxContainer">
							<Select showSearch
								placeholder="Choose from the list"
								classname="segmentSelectBoxStyle"
								value={el ? el : undefined}
								style={{ width: '50%' }}
								onChange={this.handleChange.bind(this, i)} >

								{segmentSelectionData &&
									segmentSelectionData.map((val, i) => {
										return <Option key={i} value={val.id}> {val.name} </Option>

									})}
							</Select>
							<Icon type="close" onClick={this.removeClick.bind(this, i)} />
						</div>
					);
				})}
				<Button className="newSegmentAddButton" type="primary" onClick={this.addClick.bind(this)}> Add </Button>
			</Fragment>
		);
	}
}
AddAndDeleteSelectDynamically.propTypes = {
	onValuesSelected: PropTypes.func,
	segmentSelectionData: PropTypes.array,
};

AddAndDeleteSelectDynamically.defaultProps = {
	onValuesSelected: () => { },
	segmentSelectionData: [],
};

export default AddAndDeleteSelectDynamically;
