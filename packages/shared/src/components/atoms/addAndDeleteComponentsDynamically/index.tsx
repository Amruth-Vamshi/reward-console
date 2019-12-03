import { Button, Icon, Select } from "antd";
import findIndex from "lodash/findIndex";
import map from "lodash/map";
import React, { Fragment } from "react";

const { Option } = Select;

function logProps(InputComponent: any) {
  InputComponent.prototype.UNSAFE_componentWillReceiveProps = function (
    nextProps: any
  ) { };
  InputComponent.prototype.componentDidMount = function () { };
  return InputComponent;
}

interface IProps {
  data_1?: any;
  data_2?: any;
  defaultSelectOneValue?: any;
  defaultSelectTwoValue?: any;
  onSelectOneValuesSelected?: any;
  onSelectTwoValuesSelected?: any;
  productValues?: any;
  locationValues?: any;
}

interface IState {
  selectTwoData: any;
  items: any;
}

class AddAndDeleteComponentsDynamically extends React.Component<IProps, IState> {
  static propTypes: any;
  static defaultProps: any;
  constructor(props: IProps) {
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
          onTwoChange: this.handleSelectTwoChange.bind(this, 0)
        }
      ]
    };
  }

  addClick() {
    const { data_1, data_2, defaultSelectTwoValue, defaultSelectOneValue } = this.props;
    // const defaultValueOne = this.getDefaultSelectedValue(data_1, defaultSelectOneValue);
    // const defaultValueTwo = this.getDefaultSelectedValue(data_2, defaultSelectTwoValue);

    let { items } = this.state;
    items[items.length - 1].valueOne != "" && items.length != data_1.length &&
      this.setState({
        items: [...this.state.items, {
          valueOne: "",
          valueTwo: [],
          onOneChange: this.handleSelectOneChange.bind(this, items.length),
          onTwoChange: this.handleSelectTwoChange.bind(this, items.length)
        }]
      });

    // this.setState(prevState => {
    //   return {
    //     items: [...prevState.items,
    //     {
    //       valueOne: "",
    //       valueTwo: [],
    //       onOneChange: this.handleSelectOneChange.bind(this, prevState.items.length),
    //       onTwoChange: this.handleSelectTwoChange.bind(this, prevState.items.length)
    //     }
    //     ]
    //   };
    // });
  }

  removeClick(i) {
    this.setState(prevState => {
      return {
        items: [...prevState.items.slice(0, i), ...prevState.items.slice(i + 1)]
      };
    });
  }
  componentDidMount() {
    if (this.props.data_2) {
      this.setState({ selectTwoData: this.props.data_2 });
    }
  }

  handleSelectOneChange(index, value) {

    console.log(index, value);

    let { items }: any = this.state
    if (!items.find(i => i.valueOne == value)) {
      items[index].valueOne = value
      items[index].valueTwo = []
      this.setState({ items });
      this.props.onSelectOneValuesSelected(value, this.state.items);
    }
    // this.setState(
    //   prevState => {
    //     return {
    //       ...prevState,
    //       items: [
    //         ...prevState.items.slice(0, index),
    //         { ...prevState.items[index], valueOne: value },
    //         ...prevState.items.slice(index + 1)
    //       ]
    //     };
    //   },
    //   () => {
    //     this.props.onSelectOneValuesSelected(value, this.state.items);
    //   }
    // );
  }

  handleSelectTwoChange(index, value) {
    this.setState(
      prevState => {
        return {
          ...prevState,
          items: [
            ...prevState.items.slice(0, index),
            { ...prevState.items[index], valueTwo: value },
            ...prevState.items.slice(index + 1)
          ]
        };
      },
      () => {
        this.props.onSelectTwoValuesSelected(this.state.items);
      }
    );
  }

  getDefaultSelectedValue(data_1: any, searchKey: any) {
    const defaultIndex = findIndex(data_1, (dat: any) => {
      return dat.value === searchKey;
    });
    return defaultIndex !== -1 ? data_1 && data_1[defaultIndex].value : null;
  }

  render() {
    const { data_1, data_2, productValues, locationValues } = this.props;
    const { items } = this.state;

    return (
      <Fragment>
        <div style={{ marginTop: -7 }}>
          {map(items, (item: any, index: number) => {
            const { valueOne, valueTwo, onOneChange, onTwoChange } = item;
            return (
              <div key={`select-${index}`} className="selectSegmentBoxContainer">
                <Select value={valueOne || ""} onChange={onOneChange} getPopupContainer={(triggerNode: any) => triggerNode.parentNode}
                  style={{ display: "inline-block", width: "calc(35% - 12px)", marginBottom: "0px", paddingRight: 20 }}>
                  {data_1 && data_1.map((val: any, i: any) => <Option key={i} value={val.value}>  {val.title} </Option>)}
                </Select>

                <Select showSearch mode="multiple" value={valueTwo || ""} onChange={onTwoChange}
                  getPopupContainer={(triggerNode: any) => triggerNode.parentNode}
                  style={{ display: "inline-block", width: "calc(65% - 12px)", marginBottom: "0px", paddingLeft: 10 }}>
                  {data_2 && data_2.map((val: any, i: any) => <Option key={i} value={val.value}>  {val.title} </Option>)}
                </Select>

                <Icon type="close" onClick={this.removeClick.bind(this, index)} />
              </div>
            )
          })}
          <Button style={{ margin: "0px", paddingLeft: "0px" }} type="link" onClick={this.addClick.bind(this)}> Add </Button>
        </div>
      </Fragment>
    );
  }
}

export default AddAndDeleteComponentsDynamically;
