import * as React from "react";
import { Icon } from "antd";

import { Widget } from "../../../index";
import { CardProps } from "antd/lib/card";

interface IconWithTextCardProps {
  cardColor?: string,
  icon?: string,
  title?: string | number,
  antIcon?: string,
  subTitle?: string,
  iconColor?: string
}

export const IconWithTextCard: React.FunctionComponent<IconWithTextCardProps> = ({
  cardColor,
  icon,
  title,
  antIcon,
  subTitle,
  iconColor
}) => {
  return (
    <Widget styleName={`gx-card-full gx-p-3 gx-bg-${cardColor} gx-text-white`}>
      <div className="gx-media gx-align-items-center gx-flex-nowrap">
        <div className="gx-mr-2 gx-mr-xxl-4">
          <i className={`icon icon-${icon} gx-fs-icon-lg`} />
          <Icon className={`icon gx-fs-icon-lg`} type={antIcon} />
        </div>
        <div className="gx-media-body">
          <h1 className="gx-fs-xxxl gx-font-weight-semi-bold gx-mb-1 gx-text-white">
            {title}
          </h1>
          <p className="gx-mb-1">{subTitle}</p>
        </div>
      </div>
    </Widget>
  );
};
