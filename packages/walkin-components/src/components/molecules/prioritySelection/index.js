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
			buttonGroupValue: 3,
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
		const reg = /^(([6-9][0-9])|([6-9]))$/;
		if ((!Number.isNaN(value) && reg.test(value)) || value === '' || value === '-') {
			this.setState({ priorityChosen: value });
		} else {
			this.displayError('priorityNumberError');
		}
	};

	handleButtonGroup = e => {
		const { value } = e.target;
		this.props.onClick(e)
		this.setState({ buttonGroupValue: value });
	};

	render() {
		const {
			prioritySelectionTitle,
			priorityButtonText,
			priorityNumberInvalidErrorMessage,
			selectedPriorityButton,
		} = this.props;
		const { priorityChosen, priorityNumberError, buttonGroupValue } = this.state;
		return (
			<Fragment>
				<Text>{prioritySelectionTitle}</Text>
				<div className="prioritySelectionContainer">
					<ButtonGroups
						selectedPriorityButton={priorityChosen}
						handleChange={this.handleButtonGroup}
						value={buttonGroupValue}
					/>
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
