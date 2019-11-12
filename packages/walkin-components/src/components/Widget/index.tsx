import * as React from "react";
import { Card } from "antd";
import * as PropTypes from "prop-types";
import { CardGridProps, CardProps } from "antd/lib/card";

export const Widget = ({
  title,
  children,
  styleName,
  cover,
  style,
  extra,
  actions
}: {
  title?: any;
  children?: any;
  styleName?: string;
  cover?: any;
  style?: any;
  extra?: any;
  actions?: any;
}) => {
  return (
    <Card
      title={title}
      style={style}
      actions={actions}
      cover={cover}
      className={`gx-card-widget ${styleName}`}
      extra={extra}
    >
      {children}
    </Card>
  );
};

Widget.defaultProps = {
  styleName: ""
};

Widget.propTypes = {
  title: PropTypes.node,
  extra: PropTypes.node,
  cover: PropTypes.node,
  actions: PropTypes.node,
  children: PropTypes.node.isRequired
};
