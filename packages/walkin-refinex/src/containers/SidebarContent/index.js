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
                <i className="icon icon-setting" />
                <IntlMessages id="sidebar.refinex.dashboard" />
              </Link>
            </Menu.Item>
            <Menu.Item key="campaigns">
              <Link to="/refinex/campaign">
                <i className="icon icon-alert" />
                <IntlMessages id="sidebar.refinex.campaigns" />
              </Link>
            </Menu.Item>
            <Menu.Item key="settings">
              {/* <Link to="/refinex"> */}
              <i className="icon icon-select" />
              <IntlMessages id="sidebar.refinex.settings" />
              {/* </Link> */}
            </Menu.Item>
            <Menu.Item key="feedbacks">
              {/* <Link to="/nearx"> */}
              <i className="icon icon-geo-location" />
              <IntlMessages id="sidebar.refinex.feedbacks" />

              {/* </Link> */}
            </Menu.Item>{" "}
            <Menu.Item key="analytics">
              {/* <Link to="/nearx"> */}
              <i className="icon icon-geo-location" />
              <IntlMessages id="sidebar.refinex.analytics" />

              {/* </Link> */}
            </Menu.Item>
            <Menu.Item key="help">
              {/* <Link to="/nearx"> */}
              <i className="icon icon-geo-location" />
              <IntlMessages id="sidebar.refinex.help" />

              {/* </Link> */}
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
