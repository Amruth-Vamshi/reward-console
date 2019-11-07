import React, { Fragment } from 'react';
import { Slider } from 'antd';
import './style.css';
import PropTypes from 'prop-types';

class BasicSlider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	limitRange = value => {
		if (value >= this.props.maxValueAllowed) {
			this.props.onTestValueChange(value);
			this.props.onControlValueChange(100 - value);
		}
	};
	render() {
		const { testValue, controlValue } = this.props;
		return (
			<div>
				<Slider
					marks={{
						0: {
							style: { left: '10%', width: '100%' },
							label: `Test Group: ${testValue ? testValue : 95}`,
						},
						100: {
							style: { left: '90%', width: '100%' },
							label: `Control Group: ${controlValue ? controlValue : 5}`,
						},
					}}
					value={testValue ? testValue : 95}
					onChange={this.limitRange}
				/>
			</div>
		);
	}
}
BasicSlider.propTypes = {
	testValue: PropTypes.number,
	controlValue: PropTypes.number,
	maxValueAllowed: PropTypes.number,
};

BasicSlider.defaultProps = {
	testValue: 95,
	controlValue: 5,
	maxValueAllowed: 75,
};

export default BasicSlider;
