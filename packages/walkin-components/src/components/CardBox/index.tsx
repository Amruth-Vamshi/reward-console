import * as React from "react";
import PropTypes from "prop-types";

export const CardBox = ({ heading, children, styleName, childrenStyle, style }) => {

  return (
    <div style={style} className={`gx-card ${styleName}`}>
      {heading &&
        <div className="gx-card-head">
          <h3 className="gx-card-title">{heading}</h3>
        </div>}
      <div className={`gx-card-body ${childrenStyle}`}>
        {children}
      </div>
    </div>
  )
};

CardBox.propTypes = {
  children: PropTypes.node.isRequired
};

CardBox.defaultProps = {
  styleName: '',
  childrenStyle: ''
};
