import * as React from 'react';
import { Select, Button, Icon } from 'antd';
import './style.css';
import * as PropTypes from 'prop-types';

const { Option } = Select;

interface AddAndDeleteSelectDynamicallyProps {
  onValuesSelected?: (a: any) => void;
  segmentSelectionData: any;
}

interface AddAndDeleteSelectDynamicallyState {
  values?: any;
}

class AddAndDeleteSelectDynamically extends React.Component<
  AddAndDeleteSelectDynamicallyProps,
  AddAndDeleteSelectDynamicallyState
> {
  constructor(props: AddAndDeleteSelectDynamicallyProps) {
    super(props);
    this.state = { values: ['Choose from the list'] };
  }
  addClick() {
    this.setState(prevState => ({ values: [...prevState.values, ''] }));
  }

  handleChange(i: any, value: any) {
    let values = [...this.state.values];
    values[i] = value;
    this.setState({ values });
    this.props.onValuesSelected(values);
  }

  removeClick(i: any, e: any) {
    var array = [...this.state.values]; // make a separate copy of the array
    if (i !== -1) {
      array.splice(i, 1);
      this.setState({ values: array });
    }
  }
  render() {
    const { segmentSelectionData } = this.props;
    return (
      <React.Fragment>
        {this.state.values.map((el: any, i: any) => {
          return (
            <div key={i} className="selectSegmentBoxContainer">
              <Select
                className="segmentSelectBoxStyle"
                value={el || ''}
                style={{ width: 200 }}
                onChange={this.handleChange.bind(this, i)}
              >
                {segmentSelectionData &&
                  segmentSelectionData.map((val: any, i: any) => {
                    return (
                      <Option key={i} value={val.name}>
                        {val.description}
                      </Option>
                    );
                  })}
              </Select>
              <Icon type="close" onClick={this.removeClick.bind(this, i)} />
            </div>
          );
        })}
        <Button
          className="newSegmentAddButton"
          type="primary"
          onClick={this.addClick.bind(this)}
        >
          Add
        </Button>
      </React.Fragment>
    );
  }
}

export default AddAndDeleteSelectDynamically;
