import React from 'react';
import './style.css';

interface InputProps {
  value: any;
  title?: string;
  onChange?: any;
  target1?: string;
  target2?: string;
  suffix?: string;
  prefix?: string;
  placeholder?: string;
  isDisabled?: boolean;
  validations?: Array<String>;
  width?: string;
}

interface InputState {
  errorMessage: string;
}

class Input extends React.Component<InputProps, InputState> {
  state = {
    errorMessage: '',
  };

  validationFunctions = {
    required: value => {
      if (!value && !this.props.isDisabled) {
        this.setState({
          errorMessage: `${
            this.props.title ? this.props.title : 'This field'
          } is required!`,
        });
        return false;
      } else {
        this.setState({ errorMessage: '' });
        return true;
      }
    },
    percentage: value => {
      let percentageCheck = /^(\d+|\d+[.]\d+)%?$/g;
      if (!percentageCheck.test(value)) {
        this.setState({ errorMessage: `Enter valid percentage!` });
        return false;
      } else {
        value =
          value[value.length - 1] == '%'
            ? parseInt(value.substr(0, value.length - 1))
            : parseInt(value);
        if (value > 100) {
          this.setState({
            errorMessage: `Percentage should be less than 100!`,
          });
          return false;
        }
        this.setState({ errorMessage: '' });
        return true;
      }
    },
    numeric: value => {
      if (isNaN(value)) {
        this.setState({
          errorMessage: `${
            this.props.title ? this.props.title : 'This field'
          } should be numbers!`,
        });
        return false;
      } else {
        this.setState({ errorMessage: '' });
        return true;
      }
    },
  };

  checkValidations = value => {
    this.props.validations.every(validation => {
      return this.validationFunctions[`${validation}`](value);
    });
  };

  onChange = (e, value1, value2) => {
    let value = this.props.onChange(e, value1, value2);
    if (this.props.validations) this.checkValidations(value);
  };

  render() {
    return (
      <React.Fragment>
        <div className="input-component">
          <div className="input-position">
            <div className={this.props.prefix ? 'input-prefix-container' : ''}>
              <input
                style={this.props.width ? { width: this.props.width } : {}}
                placeholder={this.props.placeholder}
                value={this.props.isDisabled ? '' : this.props.value}
                className={`input ${this.props.value ? 'input-complete' : ''} ${
                  this.props.isDisabled ? 'input-disabled' : ''
                } ${this.state.errorMessage ? 'input-box-error' : ''}`}
                onChange={e => {
                  this.onChange(e, this.props.target1, this.props.target2);
                }}
              />
              {this.props.prefix ? (
                <p className="prefix">{this.props.prefix}</p>
              ) : (
                ''
              )}
            </div>
            {this.props.title ? (
              <p
                className={`input-title ${
                  this.state.errorMessage ? 'input-error' : ''
                }`}
              >
                {this.props.title}
              </p>
            ) : null}
          </div>
          <p className="input-error" style={{ margin: '4px 0px 0px 0px' }}>
            {this.state.errorMessage}
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Input;
