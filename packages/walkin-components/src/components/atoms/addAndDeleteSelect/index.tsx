import * as React from "react";
import { Select, Button, Icon } from "antd";
import "./style.css";

const { Option } = Select;

interface IProps {
  values?: Array<any>;
  errors?: any;
  onValuesSelected?: any;
  segmentSelectionData: Array<any>;
}

interface IState {
  values: Array<any>;
  errors: any;
}

const setValuesFromProps = (props: IProps): IState => {
  return {
    values: props.values ? props.values : [""],
    errors: props.errors ? props.errors : {}
  };
};
class AddAndDeleteSelectDynamically extends React.Component<IProps, IState> {
  readonly state = setValuesFromProps(this.props);

  constructor(props: IProps) {
    super(props);
  }
  addClick() {
    let { values } = this.state;
    console.log(values[values.length - 1]);
    values[values.length - 1] != "" &&
      this.setState({ values: [...this.state.values, ""] });
  }

  handleChange(i: number, value: any) {
    let values = [...this.state.values];
    if (!values.find(i => i == value)) {
      values[i] = value;
      this.setState({ values });
      this.props.onValuesSelected(values);
    }
    if (!values[0] || values[0] == "") this.state.errors.segment = "";
  }

  componentWillReceiveProps = (p: IProps) => {
    let { errors } = this.state;
    this.setState({ errors: p.errors ? p.errors : errors });
  };

  removeClick(i: number) {
    var array = [...this.state.values]; // make a separate copy of the array
    if (i !== -1) {
      array.splice(i, 1);
      this.setState({ values: array });
      this.props.onValuesSelected(array);
    }
  }
  render() {
    const { Fragment } = React;
    const { segmentSelectionData } = this.props;
    return (
      <Fragment>
        {this.state.values.map((el, i) => {
          return (
            <div key={i} className="selectSegmentBoxContainer">
              <Select
                showSearch
                placeholder="Choose from the list"
                value={el ? el : undefined}
                style={{ width: "50%" }}
                optionFilterProp="children"
                onChange={this.handleChange.bind(this, i)}
              >
                {segmentSelectionData &&
                  segmentSelectionData.map((val, i) => {
                    return (
                      <Option key={i} value={val.id}>
                        {" "}
                        {val.name}{" "}
                      </Option>
                    );
                  })}
              </Select>
              <Icon type="close" onClick={this.removeClick.bind(this, i)} />
            </div>
          );
        })}
        <div style={{ color: "Red", marginTop: 10 }}>
          {" "}
          {this.state.errors.segment}{" "}
        </div>
        <Button
          className="newSegmentAddButton"
          type="primary"
          onClick={this.addClick.bind(this)}
        >
          {" "}
          Add{" "}
        </Button>
      </Fragment>
    );
  }
}
