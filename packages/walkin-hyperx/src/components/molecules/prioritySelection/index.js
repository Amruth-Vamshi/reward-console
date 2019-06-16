import React, { Fragment } from 'react';
import { Input, Typography, Alert } from 'antd';
import './style.css';
import ButtonGroups from '../../atoms/buttonGroup';
const { Text } = Typography;

class PrioritySelection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			priorityChosen: '',
			priorityNumberError: false,
		};
	}

	displayError = state => {
		this.setState({ [state]: true }, () => {
			setTimeout(() => {
				this.setState({ [state]: false });
			}, 4000);
		});
	};

	validateCampaignPriority = e => {
		const { value } = e.target;
		let priorityChosen;
		const reg = /^(([1-9][0-9])|([1-9]))$/;
		if ((!Number.isNaN(value) && reg.test(value)) || value === '' || value === '-') {
			this.setState({ priorityChosen: value });
		} else {
			this.displayError('priorityNumberError');
		}
	};

	handleButtonGroup = e => {
		const { value } = e.target;
	};

	render() {
		const {
			prioritySelectionTitle,
			priorityButtonText,
			priorityNumberInvalidErrorMessage,
			selectedPriorityButton,
		} = this.props;
		const { priorityChosen, priorityNumberError } = this.state;
		return (
			<Fragment>
				<Text>{prioritySelectionTitle}</Text>
				<div className="prioritySelectionContainer">
					<ButtonGroups selectedPriorityButton={priorityChosen} handleChange={this.handleButtonGroup} />
					<Input
						className="prioritySelectionInputStyle"
						placeholder={priorityButtonText}
						onChange={this.validateCampaignPriority}
						value={priorityChosen}
						type="number"
					/>
				</div>
				{priorityNumberError && <Alert message={priorityNumberInvalidErrorMessage} type="error" />}
			</Fragment>
		);
	}
}

export default PrioritySelection;
