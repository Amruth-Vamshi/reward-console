import React from 'react';
import './style.css';

interface ButtonProps {
  children: any;
  style: string;
  size: string;
  onClick?: any;
}

class Button extends React.Component<ButtonProps, any> {
  // STYLES = [
  //     'btnn-primary',
  //     'btnn-primary-disabled',
  //     'btnn-secondary',
  //     'btnn-secondary-disabled',
  //     'btnn-inline-text',
  //     'btnn-inline-text-disabled',
  //     'btnn-danger'
  // ]

  // SIZES = [
  //     'btnn-medium',
  //     'btnn-small'
  // ]

  // checkStyle = this.STYLES.includes(this.props.style) ? this.props.style : this.STYLES[0];
  // checkSize = this.SIZES.includes(this.props.size) ? this.props.size : this.SIZES[0];

  render() {
    //console.log(this.checkStyle, this.checkSize, this.props.size, this.props.style);
    return (
      <button
        className={`btnn ${this.props.style} ${this.props.size}`}
        onClick={e => {
          if (this.props.onClick) this.props.onClick(e);
        }}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
