import React, { Component, Fragment } from "react";
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
import camelCase from "lodash/camelCase";

import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE
} from "@walkinsole/walkin-components/src/constants/ThemeSetting";
import { compose, graphql, withApollo } from "react-apollo";
import gql from "graphql-tag";
import jwt from "jsonwebtoken";

class SidebarContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orgId: "",
      userId: ""
    };
  }

  componentWillMount() {
    const { id, org_id } = jwt.decode(localStorage.getItem("jwt"));
    this.setState({ userId: id, orgId: org_id });
  }

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

  sidebarContentSwitcher = isSettingsSideBar => {
    const { themeType, navStyle, pathname } = this.props;
    const { orgId, userId } = this.state;

    let sidebarTheme = "dark";
    if (themeType === THEME_TYPE_LITE || isSettingsSideBar)
      sidebarTheme = "lite";

    if (!isSettingsSideBar) {
      return (
        <Menu
          style={{
            height: "100%"
          }}
          defaultOpenKeys={[]}
          selectedKeys={[]}
          theme={sidebarTheme}
          mode="inline"
        >
          <Menu.Item key="core">
            <Link to="/core">
              <i className="icon icon-apps" />
              <span>Core suite</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="core/users">
            <Link to="/core/users">
              <i className="icon icon-contacts" />
              {/* <IntlMessages id="sidebar.refinex" /> */}
              <span>User Info</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="organizationInfo">
            <Link
              to={`/core/organization/${orgId ? orgId : ""}`}
              // to="core/organization"
            >
              <i className="icon icon-inbox" />
              {/* <IntlMessages id="sidebar.nearx" /> */}
              <span>Organization Info</span>
            </Link>
          </Menu.Item>
        </Menu>
      );
    }

    return (
      <Menu
        style={{
          height: "100%",
          backgroundColor: "#F3F3F3"
        }}
        defaultOpenKeys={["developer"]}
        selectedKeys={["webhooks"]}
        theme={sidebarTheme}
        mode="inline"
      >
        <Menu.SubMenu
          key="profile"
          title={
            <span>
              <i className="icon icon-profile" />
              <span>My Profile</span>
            </span>
          }
        ></Menu.SubMenu>
        <Menu.SubMenu
          key="account"
          title={
            <span>
              <i className="icon icon-setting" />

              <span>Account & Privacy Settings</span>
            </span>
          }
        ></Menu.SubMenu>
        <Menu.SubMenu
          style={{ backgroundColor: "#F3F3F3" }}
          key="developer"
          title={
            <span>
              <i className="icon icon-setting" />
              <span>Developer Settings</span>
            </span>
          }
        >
          <Menu.Item style={{ backgroundColor: "#F3F3F3" }} key="webhooks">
            Webhooks
          </Menu.Item>
          <Menu.Item
            style={{ backgroundColor: "#F3F3F3" }}
            key="entity-extentions"
          >
            Entity Extention
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    );
  };

  render() {
    const { pathname } = this.props;
    const selectedKeys = pathname.substr(1);
    const defaultOpenKeys = selectedKeys.split("/")[1];
    let isSettingsSideBar = defaultOpenKeys === "settings";

    return (
      <Auxiliary>
        <SidebarLogo />
        <div style={{ height: "100%" }} className="gx-sidebar-content">
          {this.sidebarContentSwitcher(isSettingsSideBar)}
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
        languageId
        locale
        name
      }
      pathname
    }
  }
`;

export default withRouter(
  withApollo(
    compose(
      graphql(GET_SETTINGS, {
        props: mapStateToProps,
        name: "settings"
      })
    )(SidebarContent)
  )
);
