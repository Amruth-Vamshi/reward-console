import * as React from 'react';
import { ChromePicker, SketchPicker } from 'react-color';
import { ApolloProviderProps } from 'react-apollo';
const noop = () => {};

const pickers: any = {
  chrome: ChromePicker,
  sketch: SketchPicker,
};

interface iProps extends Partial<ApolloProviderProps<any>> {
  color: string;
  small: Boolean;
  type: string;
  position: string;
  onChangeComplete?: any;
  onChange?: any;
}

interface iState {
  displayColorPicker: Boolean;
  color: String;
}

export default class ColorPicker extends React.Component<iProps, iState> {
  static defaultProps = {
    onChange: noop,
    onChangeComplete: noop,
    position: 'bottom',
  };
  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };
  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };
  handleChange = (color: any) => {
    this.setState({ color: color.hex });
    this.props.onChange(color.hex, color);
  };
  handleChangeComplete = (color: any) => {
    this.setState({ color: color.hex });
    this.props.onChangeComplete(color.hex);
  };

  constructor(props: iProps) {
    super(props);
    this.state = {
      displayColorPicker: false,
      color: props.color,
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps: any) {
    this.setState({ color: nextProps.color });
  }

  render() {
    const { small, type, position } = this.props;

    const Picker = pickers[type];

    const styles: any = {
      color: {
        display: 'inline-block',
        width: small ? '16px' : '120px',
        height: small ? '16px' : '24px',
        verticalAlign: 'middle',
        marginRight: '8px',
        borderRadius: '2px',
        padding: '2px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        background: this.state.color,
      },
      swatch: {
        padding: '4px',
        display: 'inline-block',
        cursor: 'pointer',
      },
      popover: {
        position: 'absolute',
        zIndex: '2',
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
      wrapper: {
        position: 'inherit',
        zIndex: '100',
      },
    };

    if (position === 'top') {
      styles.wrapper.transform = 'translateY(-100%)';
      styles.wrapper.paddingBottom = 8;
    }

    const swatch = (
      <div style={styles.swatch} onClick={this.handleClick}>
        <span style={styles.color} />
        <span> {this.props.children}</span>
      </div>
    );
    const picker = this.state.displayColorPicker ? (
      <div style={styles.popover}>
        <div style={styles.cover} onClick={this.handleClose} />
        <div style={styles.wrapper}>
          <Picker
            {...this.props}
            color={this.state.color}
            onChange={this.handleChange}
            onChangeComplete={this.handleChangeComplete}
          />
        </div>
      </div>
    ) : null;

    if (position === 'top') {
      return (
        <div>
          {picker}
          {swatch}
        </div>
      );
    }
    return (
      <div>
        {swatch}
        {picker}
      </div>
    );
  }
}
