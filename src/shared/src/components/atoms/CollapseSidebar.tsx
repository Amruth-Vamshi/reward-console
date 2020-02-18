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

interface iProps {
  width?: any;
  themeType?: any;
  navCollapsed?: any;
  navStyle?: any;
  toggleCollapsedSideNav?: any;
  onNavStyleChange?: any;
  style?;
  className?;
}

interface iState {}

class CollapseSidebar extends React.Component<iProps, iState> {
  render() {
    const { width, themeType, navCollapsed } = this.props;
    let { navStyle } = this.props;
    if (width < TAB_SIZE && navStyle === NAV_STYLE_FIXED) {
      navStyle = NAV_STYLE_DRAWER;
    }
    return (
      <div
        style={this.props.style}
        className={`gx-layout-sider-header ${this.props.className}`}
        onClick={() => {
          if (navStyle === NAV_STYLE_DRAWER) {
            this.props.toggleCollapsedSideNav({
              variables: {
                navCollapsed: !navCollapsed,
              },
            });
          } else if (navStyle === NAV_STYLE_FIXED) {
            this.props.onNavStyleChange({
              variables: {
                navStyle: NAV_STYLE_MINI_SIDEBAR,
              },
            });
          } else if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
            this.props.toggleCollapsedSideNav({
              variables: {
                navCollapsed: !navCollapsed,
              },
            });
          } else {
            this.props.onNavStyleChange({
              variables: {
                navStyle: NAV_STYLE_FIXED,
              },
            });
          }
        }}
      >
        {navStyle === NAV_STYLE_FIXED || navStyle === NAV_STYLE_MINI_SIDEBAR ? (
          <div className="gx-linebar">
            <img
              style={
                navStyle === NAV_STYLE_MINI_SIDEBAR
                  ? { padding: '10px' }
                  : { padding: '5px', marginTop: '7px' }
              }
              src={
                navStyle === NAV_STYLE_MINI_SIDEBAR
                  ? require('walkin-refinex/src/Icons/ic_right_arrow.png')
                  : require('walkin-refinex/src/Icons/ic_left_arrow.png')
              }
            />
          </div>
        ) : null}
        <div className="gx-site-logo">
          {navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR &&
          width >= TAB_SIZE ? (
            <div>Collapse Sidebar</div>
          ) : themeType === THEME_TYPE_LITE ? (
            <div>Collapse Sidebar</div>
          ) : (
            <div className={'gx-text-white'}>Collapse Sidebar</div>
          )}
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
// )(CollapseSidebar);

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
)(CollapseSidebar);
