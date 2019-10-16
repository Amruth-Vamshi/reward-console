import React, { Fragment } from 'react';
import { Input, Typography, Alert } from 'antd';
import './style.css';
import ButtonGroups from '../../atoms/buttonGroup';
const { Text } = Typography;

class PrioritySelection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			priorityChosen: this.props.priorityChosen ? parseInt(this.props.priorityChosen) : 3,
			priorityNumberError: false,
			maxPriority: this.props.maxPriority ? parseInt(this.props.maxPriority) : 99
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
		if ((!Number.isNaN(value) && value > 0 && value <= this.state.maxPriority) || value === '') {
			this.setState({ priorityChosen: value });
			this.props.onClick()
		} else {
			this.displayError('priorityNumberError');
		}
	};

	handleButtonGroup = e => {
		const { value } = e.target;
		this.props.onClick(e)
		this.setState({ priorityChosen: value });
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
					<ButtonGroups
						selectedPriorityButton={priorityChosen}
						handleChange={this.handleButtonGroup}
						maxPriority={this.state.maxPriority}
					/>
					<Input style={{ marginLeft: 10 }}
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