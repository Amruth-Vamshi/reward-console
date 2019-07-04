import React, { Component } from "react";
import { Drawer, Layout } from "antd";

import CoreSidebarContent from "@walkinsole/walkin-core/src/containers/SidebarContent";
import HyperXSidebarContent from "@walkinsole/walkin-hyperx/src/containers/SidebarContent";
import NearXSidebarContent from "@walkinsole/walkin-nearx/src/containers/SidebarContent";
import RefineXSidebarContent from "@walkinsole/walkin-refinex/src/containers/SidebarContent";

import { withRouter } from "react-router-dom";

import {
  NAV_STYLE_DRAWER,
  NAV_STYLE_FIXED,
  NAV_STYLE_MINI_SIDEBAR,
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  TAB_SIZE,
  THEME_TYPE_LITE
} from "@walkinsole/walkin-components/src/constants/ThemeSetting";
import { Query, compose, graphql } from "react-apollo";
import gql from "graphql-tag";

const { Sider } = Layout;

export class Sidebar extends Component {
  // onToggleCollapsedNav = () => {
  //   this.props.toggleCollapsedSideNav(!this.props.navCollapsed);
  // };

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.props.updateWindowWidth({
        variables: {
          width: window.innerWidth
        }
      });
    });
  }

  getSideBar() {
    const { location } = this.props;
    const appName = location.pathname.split("/")[1];
    switch (appName) {
      case "core":
        return <CoreSidebarContent />;
      case "refinex":
        return <RefineXSidebarContent />;
      case "hyperx":
        return <HyperXSidebarContent />;
      case "nearx":
        return <NearXSidebarContent />;
      default:
        return <CoreSidebarContent />;
    }
  }

  render() {
    const { themeType, navCollapsed, width, navStyle } = this.props;

    let drawerStyle = "gx-collapsed-sidebar";

    if (navStyle === NAV_STYLE_FIXED) {
      drawerStyle = "";
    } else if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
      drawerStyle = "gx-mini-sidebar gx-mini-custom-sidebar";
    } else if (navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) {
      drawerStyle = "gx-custom-sidebar";
    } else if (navStyle === NAV_STYLE_MINI_SIDEBAR) {
      drawerStyle = "gx-mini-sidebar";
    } else if (navStyle === NAV_STYLE_DRAWER) {
      drawerStyle = "gx-collapsed-sidebar";
    }
    if (
      (navStyle === NAV_STYLE_FIXED ||
        navStyle === NAV_STYLE_MINI_SIDEBAR ||
        navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) &&
      width < TAB_SIZE
    ) {
      drawerStyle = "gx-collapsed-sidebar";
    }
    return (
      <Sider
        className={`gx-app-sidebar ${drawerStyle} ${
          themeType !== THEME_TYPE_LITE ? "gx-layout-sider-dark" : null
        }`}
        trigger={null}
        collapsed={
          width < TAB_SIZE
            ? false
            : navStyle === NAV_STYLE_MINI_SIDEBAR ||
              navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR
        }
        theme={themeType === THEME_TYPE_LITE ? "lite" : "dark"}
        collapsible
      >
        {navStyle === NAV_STYLE_DRAWER || width < TAB_SIZE ? (
          <Drawer
            className={`gx-drawer-sidebar ${
              themeType !== THEME_TYPE_LITE ? "gx-drawer-sidebar-dark" : null
            }`}
            placement="left"
            closable={false}
            // onClose={this.onToggleCollapsedNav.bind(this)}
            visible={navCollapsed}
          >
            {this.getSideBar()}
          </Drawer>
        ) : (
          this.getSideBar()
        )}
      </Sider>
    );
  }
}
// const UPDATE_WINDOW_WIDTH = gql`
//   mutation updateWindowWidth($width: Int) {
//     updateWindowWidth(width: $width) @client
//   }
// `;

const GET_SETTINGS = gql`
  query settings {
    settings @client {
      themeType
      navCollapsed
      width
      navStyle
    }
  }
`;

const TOGGLE_COLLAPSED_SIDENAV = gql`
  mutation toggleSideNav($navCollapsed: Boolean) {
    toggleCollapsedSideNav(navCollapsed: $navCollapsed) @client
  }
`;

const mapStateToProps = ({ settings }) => {
  const { themeType, navCollapsed, width, navStyle } = settings.settings;
  return { themeType, navCollapsed, width, navStyle };
};

export default compose(
  withRouter,
  graphql(GET_SETTINGS, { name: "settings", props: mapStateToProps }),
  // graphql(UPDATE_WINDOW_WIDTH, { name: "updateWindowWidth" }),
  graphql(TOGGLE_COLLAPSED_SIDENAV, { name: "toggleCollapsedSideNav" })
)(Sidebar);
