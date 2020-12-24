import { Icon } from 'antd';
import React from 'react';
import Button from '../../shared/Button';

interface launchButtonProps {
  buttonState: string;
  changeButtonState: any;
}

export default class LaunchButton extends React.Component<
  launchButtonProps,
  {}
> {
  render() {
    let { buttonState, changeButtonState } = this.props;
    return (
      <React.Fragment>
        <Button
          size={`${buttonState == 'launch' ? 'btnn-medium' : 'btnn-small'}`}
          style={`${buttonState == 'pause' ? 'btnn-danger' : 'btnn-primary'}`}
          onClick={changeButtonState}
        >
          {buttonState === 'launch' ? (
            'Launch Program'
          ) : buttonState === 'pause' ? (
            <div>
              <Icon type="pause" theme="outlined" />
              <span>Pause Program</span>
            </div>
          ) : (
            <div>
              <Icon type="caret-right" theme="outlined" />
              <span>Resume Program</span>
            </div>
          )}
        </Button>
      </React.Fragment>
    );
  }
}
