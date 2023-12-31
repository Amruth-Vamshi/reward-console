import * as React from 'react';
import { Link } from 'react-router-dom';

import {
  NAV_STYLE_DRAWER,
  NAV_STYLE_FIXED,
  NAV_STYLE_MINI_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  TAB_SIZE,
  TAB_SIZE_MAX,
  THEME_TYPE_LITE,
} from 'walkin-components/src/constants/ThemeSetting';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';

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
      <div className="HyperX-Logo">
        <div className="gx-layout-sider-header">
          {width < TAB_SIZE_MAX && width > TAB_SIZE ? (
            <Link to="/" className="gx-pointer">
              <img
                alt="fgd"
                src={require('walkin-components/src/assets/images/walkin_logo_mini.png')}
                style={{ maxWidth: 35 }}
              />
            </Link>
          ) : navStyle === NAV_STYLE_FIXED ||
            navStyle === NAV_STYLE_MINI_SIDEBAR ? (
            <div className="gx-linebar">
              <i
                style={{ backgroundColor: 'white' }}
                className={`gx-icon-btn icon icon-${
                  navStyle === NAV_STYLE_MINI_SIDEBAR
                    ? 'menu-unfold'
                    : 'menu-fold'
                }
                    gx-text-black`}
                onClick={() => {
                  if (navStyle === NAV_STYLE_DRAWER) {
                    this.props.toggleCollapsedSideNav({
                      variables: { navCollapsed: !navCollapsed },
                    });
                  } else if (navStyle === NAV_STYLE_FIXED) {
                    this.props.onNavStyleChange({
                      variables: { navStyle: NAV_STYLE_MINI_SIDEBAR },
                    });
                  } else if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
                    this.props.toggleCollapsedSideNav({
                      variables: { navCollapsed: !navCollapsed },
                    });
                  } else {
                    this.props.onNavStyleChange({
                      variables: { navStyle: NAV_STYLE_FIXED },
                    });
                  }
                }}
              />
            </div>
          ) : null}

          <Link to="/" className="gx-site-logo">
            {navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR &&
            width >= TAB_SIZE ? (
              <img
                alt=""
                src={require('walkin-components/src/assets/images/w-logo.png')}
              />
            ) : themeType === THEME_TYPE_LITE ? (
              <img
                alt=""
                src={require('walkin-components/src/assets/images/logo-white.png')}
              />
            ) : (
              <img
                style={{ width: 125 }}
                alt=""
                src={require('walkin-components/src/assets/images/walkin_logo_whitebg.jpg')}
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
