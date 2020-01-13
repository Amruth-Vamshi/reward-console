import * as React from "react";
import { Slider } from "antd";
import "./style.css";
import * as PropTypes from "prop-types";

interface iProps {
  maxValueAllowed?: any;
  onTestValueChange?: any;
  onControlValueChange?: any;
  testValue?: number;
  controlValue?: number;
}
class BasicSlider extends React.Component<iProps, {}> {
  static propTypes: any;
  static defaultProps: any;

  constructor(props: iProps) {
    super(props);
    this.state = {};
  }
  limitRange = (value: any) => {
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
              style: { left: "10%", width: "100%" },
              label: `Test Group: ${testValue ? testValue : 95}`
            },
            100: {
              style: { left: "90%", width: "100%" },
              label: `Control Group: ${controlValue}`
            }
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
  maxValueAllowed: PropTypes.number
};

BasicSlider.defaultProps = {
  testValue: 95,
  controlValue: 5,
  maxValueAllowed: 75
};

export default BasicSlider;
