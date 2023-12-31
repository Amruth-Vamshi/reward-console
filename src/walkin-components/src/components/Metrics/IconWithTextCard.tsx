import * as React from 'react';

import { THEME_TYPE_DARK } from '../../constants/ThemeSetting';
import gql from 'graphql-tag';
import { Widget } from '../Widget';
import { graphql } from 'react-apollo';

const IconWithTextCard = props => {
  const { icon, title, subTitle } = props;
  let { iconColor } = props;
  if (props.themeType === THEME_TYPE_DARK) {
    iconColor = 'white';
  }

  return (
    <Widget>
      <div className="gx-media gx-align-items-center gx-flex-nowrap">
        <div className="gx-mr-lg-4 gx-mr-3">
          <i
            className={`icon icon-${icon} gx-fs-xlxl gx-text-${iconColor} gx-d-flex`}
            style={{ fontSize: 45 }}
          />
        </div>
        <div className="gx-media-body">
          <h1 className="gx-fs-xxxl gx-font-weight-medium gx-mb-1">{title}</h1>
          <p className="gx-text-grey gx-mb-0">{subTitle}</p>
        </div>
      </div>
    </Widget>
  );
};

const mapStateToProps = ({ settings }: any) => {
  const { themeType } = settings.settings;
  return { themeType };
};
// export default connect(mapStateToProps, null)(IconWithTextCard);
const GET_SETTINGS = gql`
  query getSettings {
    settings @client {
      themeType
    }
  }
`;

export default graphql(GET_SETTINGS, {
  props: mapStateToProps,
  name: 'settings',
})(IconWithTextCard);
