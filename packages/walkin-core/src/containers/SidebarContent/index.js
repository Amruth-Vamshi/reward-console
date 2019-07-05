import React, { Component } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import {
  CustomScrollbars,
  Auxiliary,
  IntlMessages
} from "@walkinsole/walkin-components";
import SidebarLogo from "./SidebarLogo";

import UserProfile from "./UserProfile";
import AppsNavigation from "./AppsNavigation";
import { withRouter } from "react-router-dom";

import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE
} from "@walkinsole/walkin-components/src/constants/ThemeSetting";
import { compose, graphql } from "react-apollo";
import gql from "graphql-tag";

class SidebarContent extends Component {
  getNoHeaderClass = navStyle => {
    if (
      navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR ||
      navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR
    ) {
      return "gx-no-header-notifications";
    }
    return "";
  };
  getNavStyleSubMenuClass = navStyle => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
      return "gx-no-header-submenu-popup";
    }
    return "";
  };

  render() {
    const { themeType, navStyle, pathname } = this.props;
    const selectedKeys = pathname.substr(1);
    const defaultOpenKeys = selectedKeys.split("/")[1];
    return (
      <Auxiliary>
        <SidebarLogo />
        <div className="gx-sidebar-content">
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme={themeType === THEME_TYPE_LITE ? "lite" : "dark"}
            mode="inline"
          >
            <Menu.Item key="core/apps">
              <Link to="/core/apps">
                <i className="icon icon-apps" />
                <span>Core Apps</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="core/user">
              <Link to="/core/user">
                <i className="icon icon-geo-location" />
                {/* <IntlMessages id="sidebar.samplePage" /> */}
                <span>User Info</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="core/organisation">
              <Link to="/core/organisation">
                <i className="icon icon-setting" />
                {/* <IntlMessages id="sidebar.samplePage" /> */}
                <span>Organisation Info</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="core/customer">
              <Link to="/core/customer">
                <i className="icon icon-setting" />
                {/* <IntlMessages id="sidebar.samplePage" /> */}
                <span>Customer Info</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="core/analytics">
              <Link to="/core/analytics">
                <i className="icon icon-chart" />
                {/* <IntlMessages id="sidebar.samplePage" /> */}
                <span>Analytics</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="core/settings">
              <Link to="/core/settings">
                <i className="icon icon-setting" />
                {/* <IntlMessages id="sidebar.samplePage" /> */}
                <span>Global Settings</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="core/help">
              <Link to="/core/help">
                <i className="icon icon-setting" />
                {/* <IntlMessages id="sidebar.samplePage" /> */}
                <span>Help</span>
              </Link>
            </Menu.Item>
          </Menu>
        </div>
      </Auxiliary>
    );
  }
}

SidebarContent.propTypes = {};

const mapStateToProps = ({ settings, ownProps }) => {
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
    name: "settings"
  })
)(SidebarContent);
