import * as React from "react";
import { Select, Button, Icon } from "antd";
import "./style.css";

const { Option } = Select;

interface iProps {
  values?: Array<any>;
  errors?: any;
  onValuesSelected?: any;
  segmentSelectionData?: any;
}

interface iState {
  values?: Array<any>;
  errors?: any;
}

class AddAndDeleteSelectDynamically extends React.Component<iProps, iState> {
  static propTypes: any;
  static defaultProps: any;

  constructor(props: iProps) {
    super(props);
    this.state = {
      values: this.props.values ? this.props.values : [""],
      errors: this.props.errors ? this.props.errors : {}
    };
  }
  addClick() {
    let { values } = this.state;
    console.log(values[values.length - 1]);
    values[values.length - 1] != "" &&
      this.setState({ values: [...this.state.values, ""] });
  }

  handleChange(i: any, value: any) {
    let values = [...this.state.values];
    if (!values.find(i => i == value)) {
      values[i] = value;
      this.setState({ values });
      this.props.onValuesSelected(values);
    }
    if (!values[0] || values[0] == "") this.state.errors.segment = "";
  }

  UNSAFE_componentWillReceiveProps = (p: any) => {
    let { errors } = this.state;
    this.setState({ errors: p.errors ? p.errors : errors });
  };

  removeClick(i: any, e: any) {
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
      <React.Fragment>
        {this.state.values.map((el: any, i: number) => {
          return (
            <div key={i} className="selectSegmentBoxContainer">
              <Select showSearch placeholder="Choose from the list"
                value={el ? el : undefined} style={{ width: "50%" }}
                getPopupContainer={(triggerNode: any) => triggerNode.parentNode}
                optionFilterProp="children" onChange={this.handleChange.bind(this, i)}
              >
                {segmentSelectionData &&
                  segmentSelectionData.map((val: any, i: number) => <Option key={i} value={val.id}> {val.name}</Option>)}
              </Select>
              <Icon type="close" onClick={this.removeClick.bind(this, i)} />
            </div>
          );
        })}
        <div style={{ color: "Red", marginTop: 10 }}>
          {this.state.errors.segment}{" "}
        </div>
        <Button className="newSegmentAddButton" type="primary" onClick={this.addClick.bind(this)}> Add </Button>
      </React.Fragment>
    );
  }
}

export default AddAndDeleteSelectDynamically;
