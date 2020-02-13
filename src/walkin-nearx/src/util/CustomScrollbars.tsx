import * as React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

const CustomScrollbars = props => (
  <Scrollbars
    {...props}
    autoHide
    renderTrackHorizontal={props => (
      <div
        {...props}
        style={{ display: 'none', overflowX: 'hidden' }}
        className="track-horizontal"
      />
    )}
  />
);

export default CustomScrollbars;
