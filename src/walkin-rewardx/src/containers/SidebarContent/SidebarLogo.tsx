import * as React from 'react';
import { Link } from 'react-router-dom';

import {
  NAV_STYLE_DRAWER,
  NAV_STYLE_FIXED,
  NAV_STYLE_MINI_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  TAB_SIZE,
  THEME_TYPE_LITE,
  TAB_SIZE_MAX,
} from 'walkin-components/src/constants/ThemeSetting';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Icon, Row, Col } from 'antd';
import './index.css';

interface SidebarLogoProps {
  width?: any;
  themeType?: any;
  navCollapsed?: any;
  navStyle?: any;
  toggleCollapsedSideNav?: (a: any) => void;
  onNavStyleChange?: (a: any) => void;
}

class SidebarLogo extends React.Component<SidebarLogoProps, {}> {
  render() {
    const { width, themeType, navCollapsed } = this.props;
    let { navStyle } = this.props;
    if (width < TAB_SIZE && navStyle === NAV_STYLE_FIXED) {
      navStyle = NAV_STYLE_DRAWER;
    }
    return (
      <div className="Rewardx-Logo">
        <div className="gx-layout-sider-header">
          {width < TAB_SIZE_MAX && width > TAB_SIZE ? (
            <Link to="/rewardx/dashboard" className="gx-pointer">
              <img
                alt="fgd"
                src={require('walkin-components/src/assets/images/logo_rewardx.png')}
                style={{ maxWidth: 35 }}
              />
            </Link>
          ) : navStyle === NAV_STYLE_FIXED ||
            navStyle === NAV_STYLE_MINI_SIDEBAR ? (
            <div className="gx-linebar">
              <Link to="/">
                <Icon
                  type="home"
                  theme="filled"
                  className="gx-icon-btn"
                  style={{
                    padding: '10px',
                    color: '',
                    backgroundColor: '#FCFCFC',
                  }}
                />
              </Link>
            </div>
          ) : null}

          <Link to="/rewardx/dashboard" className="gx-site-logo">
            {navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR &&
            width >= TAB_SIZE ? (
              <img
                alt=""
                src={require('walkin-components/src/assets/images/logo_rewardx.png')}
              />
            ) : themeType === THEME_TYPE_LITE ? (
              <img
                alt=""
                src={require('walkin-components/src/assets/images/logo_rewardx.png')}
              />
            ) : (
              <img
                alt=""
                src={require('walkin-components/src/assets/images/logo_rewardx.png')}
              />
            )}
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ settings }: any) => {
  const { navStyle, themeType, width, navCollapsed } = settings.settings;
  return { navStyle, themeType, width, navCollapsed };
};

// export default connect(
//   mapStateToProps,
//   {
//     onNavStyleChange,
//     toggleCollapsedSideNav
//   }
// )(SidebarLogo);

const GET_SETTINGS = gql`
  query settings @client {
    settings {
      navStyle
      themeType
      width
      navCollapsed
    }
  }
`;
const TOGGLE_COLLAPSED_SIDENAV = gql`
  mutation toggleCollapsedSideNav($navCollapsed: Boolean) {
    toggleCollapsedSideNav(navCollapsed: $navCollapsed) @client
  }
`;
const ON_NAV_STYLE_CHANGE = gql`
  mutation onNavStyleChange($navStyle: String) {
    onNavStyleChange(navStyle: $navStyle) @client
  }
`;

export default compose(
  graphql(GET_SETTINGS, { name: 'settings', props: mapStateToProps }),
  graphql(TOGGLE_COLLAPSED_SIDENAV, { name: 'toggleCollapsedSideNav' }),
  graphql(ON_NAV_STYLE_CHANGE, { name: 'onNavStyleChange' })
)(SidebarLogo);
