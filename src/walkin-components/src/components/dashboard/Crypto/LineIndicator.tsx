import * as React from 'react';
import PropTypes from 'prop-types';
import { Auxiliary } from '../../../util/Auxiliary';

const LineIndicator = ({ title, title2, width, value, color }) => {
  return (
    <Auxiliary>
      <div className="ant-row-flex">
        <p className="gx-mr-1">{title}</p>
        <p className="gx-text-grey">| {title2}</p>
      </div>
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
