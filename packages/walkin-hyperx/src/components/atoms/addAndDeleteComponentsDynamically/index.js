import React, { Fragment } from 'react';
import { Select, Button, Icon, Form } from 'antd';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import findIndex from 'lodash/findIndex';
const { Option } = Select;

function logProps(InputComponent) {
	InputComponent.prototype.componentWillReceiveProps = function(nextProps) {};
	InputComponent.prototype.componentDidMount = function() {};
	return InputComponent;
}

class AddAndDeleteComponentsDynamically extends React.Component {
	constructor(props) {
		super(props);

		const { data_1, data_2, defaultSelectOneValue, defaultSelectTwoValue } = this.props;
		const defaultValueOne = this.getDefaultSelectedValue(data_1, defaultSelectOneValue);
		const defaultValueTwo = this.getDefaultSelectedValue(data_2, defaultSelectTwoValue);

		this.state = {
			selectTwoData: [],
			items: [
				{
					valueOne: defaultValueOne,
					valueTwo: !!defaultValueTwo ? [...defaultValueTwo] : [],
					onOneChange: this.handleSelectOneChange.bind(this, 0),
					onTwoChange: this.handleSelectTwoChange.bind(this, 0),
				},
			],
		};
	}

	addClick() {
		const { data_1, data_2, defaultSelectTwoValue, defaultSelectOneValue } = this.props;
		const defaultValueOne = this.getDefaultSelectedValue(data_1, defaultSelectOneValue);
		const defaultValueTwo = this.getDefaultSelectedValue(data_2, defaultSelectTwoValue);

		this.setState(prevState => {
			return {
				items: [
					...prevState.items,
					{
						valueOne: defaultValueOne,
						valueTwo: !!defaultValueTwo ? [...defaultValueTwo] : [],
						onOneChange: this.handleSelectOneChange.bind(this, prevState.items.length),
						onTwoChange: this.handleSelectTwoChange.bind(this, prevState.items.length),
					},
				],
			};
		});
	}

	removeClick(i) {
		this.setState(prevState => {
			return {
				items: [...prevState.items.slice(0, i), ...prevState.items.slice(i + 1)],
			};
		});
	}
	componentDidMount() {
		if (this.props.data_2) {
			this.setState({
				selectTwoData: this.props.data_2,
			});
		}
	}

	handleSelectOneChange(index, value) {
		this.setState(
			prevState => {
				return {
					...prevState,
					items: [
						...prevState.items.slice(0, index),
						{ ...prevState.items[index], valueOne: value },
						...prevState.items.slice(index + 1),
					],
				};
			},
			() => {
				this.props.onSelectOneValuesSelected(value, this.state.items);
			}
		);
	}

	handleSelectTwoChange(index, value) {
		this.setState(
			prevState => {
				return {
					...prevState,
					items: [
						...prevState.items.slice(0, index),
						{ ...prevState.items[index], valueTwo: value },
						...prevState.items.slice(index + 1),
					],
				};
			},
			() => {
				this.props.onSelectTwoValuesSelected(this.state.items);
			}
		);
	}

	getDefaultSelectedValue(data_1, searchKey) {
		const defaultIndex = findIndex(data_1, dat => {
			return dat.value === searchKey;
		});
		return defaultIndex !== -1 ? data_1 && data_1[defaultIndex].value : null;
	}

	render() {
		const { data_1, data_2, productValues, locationValues } = this.props;
		const { items } = this.state;

		return (
			<Fragment>
				{map(items, (item, index) => {
					const { valueOne, valueTwo, onOneChange, onTwoChange } = item;
					return (
						<div key={`select-${index}`} className="selectSegmentBoxContainer">
							<Select
								style={{
									display: 'inline-block',
									width: 'calc(35% - 12px)',
									marginBottom: '0px',
									paddingRight: '5px',
								}}
								value={valueOne || ''}
								onChange={onOneChange}
							>
								{data_1 &&
									data_1.map((val, i) => {
										return (
											<Option key={i} value={val.value}>
												{val.title}
											</Option>
										);
									})}
							</Select>

							<Select
								showSearch
								style={{
									display: 'inline-block',
									width: 'calc(65% - 12px)',
									marginBottom: '0px',
								}}
								mode="multiple"
								value={valueTwo || ''}
								onChange={onTwoChange}
							>
								{data_2 &&
									data_2.map((val, i) => {
										return (
											<Option key={i} value={val.value}>
												{val.title}
											</Option>
										);
									})}
							</Select>

							<Icon type="close" onClick={this.removeClick.bind(this, index)} />
						</div>
					);
				})}
				<Button style={{ margin: '0px', paddingLeft: '0px' }} type="link" onClick={this.addClick.bind(this)}>
					Add
				</Button>
			</Fragment>
		);
	}
}
AddAndDeleteComponentsDynamically.propTypes = {
	onValuesSelected: PropTypes.func,
	data_1: PropTypes.array,
	data_2: PropTypes.array,
	prop1: PropTypes.string,
	prop2: PropTypes.string,
};

AddAndDeleteComponentsDynamically.defaultProps = {
	onValuesSelected: () => {},
	data_2: [],
	data_2: [],
	prop1: 'prop1',
	prop2: 'prop2',
};

export default AddAndDeleteComponentsDynamically;
