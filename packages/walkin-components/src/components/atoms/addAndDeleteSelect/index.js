import React, { Fragment } from 'react';
import { Select, Button, Icon } from 'antd';
import './style.css';
import PropTypes from 'prop-types';

const { Option } = Select;

class AddAndDeleteSelectDynamically extends React.Component {
	constructor(props) {
		super(props);
		this.state = { values: ['Choose from the list'] };
	}
	addClick() {
		this.setState(prevState => ({ values: [...prevState.values, ''] }));
	}

	handleChange(i, value) {
		let values = [...this.state.values];
		values[i] = value;
		this.setState({ values });
		this.props.onValuesSelected(values);
	}

	removeClick(i, e) {
		var array = [...this.state.values]; // make a separate copy of the array
		if (i !== -1) {
			array.splice(i, 1);
			this.setState({ values: array });
		}
	}
	render() {
		const { segmentSelectionData } = this.props;
		console.log(segmentSelectionData)
		return (
			<Fragment>
				{this.state.values.map((el, i) => {
					return (
						<div key={i} className="selectSegmentBoxContainer">
							<Select showSearch
								classname="segmentSelectBoxStyle"
								value={el || ''}
								style={{ width: '50%' }}
								onChange={this.handleChange.bind(this, i)}
							>
								{segmentSelectionData &&
									segmentSelectionData.map((val, i) => {
										return <Option key={i} value={val.id}> {val.name} </Option>

									})}
							</Select>
							<Icon type="close" onClick={this.removeClick.bind(this, i)} />
						</div>
					);
				})}
				<Button className="newSegmentAddButton" type="primary" onClick={this.addClick.bind(this)}>
					Add
				</Button>
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
