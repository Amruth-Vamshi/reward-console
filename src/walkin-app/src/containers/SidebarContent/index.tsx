import * as React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

import { CustomScrollbars, Auxiliary, IntlMessages } from 'walkin-components';
import SidebarLogo from './SidebarLogo';

import UserProfile from './UserProfile';
import AppsNavigation from './AppsNavigation';
import { withRouter } from 'react-router-dom';

import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE,
} from 'walkin-components/src/constants/ThemeSetting';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';

interface IProps {
  themeType?: string;
  navStyle?: string;
  pathname?: string;
}

interface IState {}

class SidebarContent extends React.Component<IProps, IState> {
  getNoHeaderClass = (navStyle: string) => {
    if (
      navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR ||
      navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR
    ) {
      return 'gx-no-header-notifications';
    }
    return '';
  };
  getNavStyleSubMenuClass = (navStyle: string) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
      return 'gx-no-header-submenu-popup';
    }
    return '';
  };

  render() {
    const { themeType, navStyle, pathname } = this.props;
    const selectedKeys = pathname.substr(1);
    const defaultOpenKeys = selectedKeys.split('/')[1];
    return (
      <Auxiliary>
        <SidebarLogo />
        <div className="gx-sidebar-content">
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme={themeType === THEME_TYPE_LITE ? 'light' : 'dark'}
            mode="inline"
          >
            <Menu.Item key="core">
              <Link to="/core">
                <i className="icon icon-setting" />
                <IntlMessages id="sidebar.core" />
                {/* Core */}
              </Link>
            </Menu.Item>
            <Menu.Item key="hyperx">
              <Link to="/hyperx">
                <i className="icon icon-alert" />
                <IntlMessages id="sidebar.hyperx" />
                {/* HyperX */}
              </Link>
            </Menu.Item>
            <Menu.Item key="refinex">
              <Link to="/refinex">
                <i className="icon icon-select" />
                <IntlMessages id="sidebar.refinex" />
                {/* RefineX */}
              </Link>
            </Menu.Item>
            <Menu.Item key="nearx">
              <Link to="/nearx">
                <i className="icon icon-geo-location" />
                <IntlMessages id="sidebar.nearx" />
                {/* NearX */}
              </Link>
            </Menu.Item>
          </Menu>
        </div>
      </Auxiliary>
    );
  }
}

const mapStateToProps = ({ settings, ownProps }: any) => {
  const { navStyle, themeType, locale } = settings.settings;
  const { pathname } = ownProps.location;
  return { navStyle, themeType, locale, pathname };
};

const GET_SETTINGS = gql`
  query settings {
    settings @client {
      navStyle
      themeType
      locale {
        icon
        languageId
        locale
        name
      }
      pathname
    }
  }
`;

export default compose(
  withRouter,
  graphql(GET_SETTINGS, {
    props: mapStateToProps,
    name: 'settings',
  })
)(SidebarContent);
