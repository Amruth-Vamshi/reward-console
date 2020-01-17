import * as React from "react";
import * as PropTypes from "prop-types";

interface CardBoxProps {
  heading?: any;
  children?: any;
  styleName?: any;
  childrenStyle?: any;
  style?: any;
}

export const CardBox: React.FunctionComponent<CardBoxProps> = ({
  heading,
  children,
  styleName,
  childrenStyle,
  style
}) => {
  return (
    <div style={style} className={`gx-card ${styleName}`}>
      {heading && (
        <div className="gx-card-head">
          <h3 className="gx-card-title">{heading}</h3>
        </div>
      )}
      <div className={`gx-card-body ${childrenStyle}`}>{children}</div>
    </div>
  );
};

CardBox.propTypes = {
  children: PropTypes.node.isRequired
};

CardBox.defaultProps = {
  styleName: "",
  childrenStyle: ""
};
