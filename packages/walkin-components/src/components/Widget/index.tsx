import * as React from "react";
import { Card } from "antd";
import PropTypes from "prop-types";

export const Widget = ({ title, children, styleName, cover, style, extra, actions }) => {

  return (
    <Card title={title} style={style} actions={actions} cover={cover} className={`gx-card-widget ${styleName}`} extra={extra}>
      {children}
    </Card>
  )
};

Widget.defaultProps = {
  styleName: '',
};

Widget.propTypes = {
  title: PropTypes.node,
  extra: PropTypes.node,
  cover: PropTypes.node,
  actions: PropTypes.node,
  children: PropTypes.node.isRequired
};
