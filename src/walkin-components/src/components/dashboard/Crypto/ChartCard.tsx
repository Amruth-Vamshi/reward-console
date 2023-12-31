import * as React from 'react';

import { Widget } from '../../Widget';

interface ChartCardProps {
  prize?: string | number;
  title?: string;
  children?: React.ReactChildren | React.ReactElement;
  styleName?: string;
  desc?: string;
  icon?: string;
}

export const ChartCard: React.FunctionComponent<ChartCardProps> = ({
  prize,
  title,
  children,
  styleName,
  desc,
  icon,
}) => {
  return (
    <Widget styleName="gx-card-full">
      <div className="gx-actchart gx-px-3 gx-pt-3">
        <div className="ant-row-flex">
          <h2 className="gx-mb-0 gx-fs-xxl gx-font-weight-medium">
            {prize}
            {title ? (
              <span
                className={`gx-mb-0 gx-ml-2 gx-pt-xl-2 gx-fs-lg gx-chart-${styleName}`}
              >
                {title}% <i className="icon icon-menu-up gx-fs-sm" />
              </span>
            ) : (
              ''
            )}
          </h2>
          <i
            className={`icon icon-${icon} gx-fs-xl gx-ml-auto gx-text-primary gx-fs-xxxl`}
          />
        </div>
        <p className="gx-mb-0 gx-fs-sm gx-text-grey">{desc}</p>
      </div>
      {children}
    </Widget>
  );
};
