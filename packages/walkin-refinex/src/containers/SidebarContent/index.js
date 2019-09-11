import React, { Component } from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";

import {
  CustomScrollbars,
  Auxiliary,
  IntlMessages
} from "@walkinsole/walkin-components";

import UserProfile from "./UserProfile";
import AppsNavigation from "./AppsNavigation";
import { withRouter } from "react-router-dom";

import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE
} from "@walkinsole/walkin-components/src/constants/ThemeSetting";
import SidebarLogo from "@walkinsole/walkin-core/src/containers/SidebarContent/SidebarLogo";
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
    const { themeType, navStyle, pathname, match } = this.props;
    const selectedKeys = pathname.substr(1);
    const defaultOpenKeys = selectedKeys.split("/")[1];
    return (
      <Auxiliary>
        <SidebarLogo />
        <div className="gx-sidebar-content">
          <Menu theme={themeType === THEME_TYPE_LITE ? "lite" : "dark"}>
            <Menu.Item key="dashboard">
              <Link to="/refinex/dashboard">
                <Icon type="dashboard" style={{ fontSize: '18px' }} />
                <IntlMessages id="sidebar.refinex.dashboard" />
              </Link>
            </Menu.Item>
            <Menu.Item key="feedbacks">
              <Link to="/refinex/feedback">
                <i className="icon icon-alert" />
                <IntlMessages id="sidebar.refinex.feedbacks" />
              </Link>
            </Menu.Item>
            <Menu.Item key="segment">
              <Link to="/refinex/segment/segmentList">
                <i className="icon icon-select" />
                {/* <IntlMessages id="sidebar.samplePage" /> */}
                Segments
							</Link>
            </Menu.Item>
            <Menu.Item key="settings">
              <Link to="/refinex/settings">
                <i className="icon icon-setting" />
                <IntlMessages id="sidebar.refinex.settings" />
              </Link>
            </Menu.Item>{" "}
            <Menu.Item key="analytics">
              <Link to="/refinex/analytics">
                <i className="icon icon-chart" />
                <IntlMessages id="sidebar.refinex.analytics" />
              </Link>
            </Menu.Item>
            <Menu.Item key="help">
              <Link to="/refinex/help">
                <i className="icon icon-geo-location" />
                <IntlMessages id="sidebar.refinex.help" />
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
