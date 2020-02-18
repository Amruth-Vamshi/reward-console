import * as React from 'react';
import PropTypes from 'prop-types';
import { Auxiliary } from '../../../..';

const LineIndicator = ({ title, width, value, color }) => {
  return (
    <Auxiliary>
      <p>{title}</p>
      <div className="gx-line-indi-info">
        <div
          className={`gx-line-indi gx-bg-${color}`}
          style={{
            width: Number.parseInt(width, 10) * 4,
          }}
        />

        <span className="gx-line-indi-count gx-ml-2">{value}</span>
      </div>
    </Auxiliary>
  );
};

export default LineIndicator;

LineIndicator.propTypes = {
  title: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
