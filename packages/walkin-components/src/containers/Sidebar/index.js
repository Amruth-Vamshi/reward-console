import React, { Component } from "react";
import { Drawer, Layout } from "antd";

import SidebarContent from "./SidebarContent";
import {
  NAV_STYLE_DRAWER,
  NAV_STYLE_FIXED,
  NAV_STYLE_MINI_SIDEBAR,
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  TAB_SIZE,
  THEME_TYPE_LITE
} from "../../constants/ThemeSetting";
import { Query, compose, graphql } from "react-apollo";
import gql from "graphql-tag";

const { Sider } = Layout;

export class Sidebar extends Component {
  onToggleCollapsedNav = () => {
    this.props.toggleCollapsedSideNav({
      variables: {
        navCollapsed: !this.props.navCollapsed
      }
    });
  };

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.props.updateWindowWidth({
        variables: {
          width: window.innerWidth
        }
      });
    });
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

    const QUERY_STRING = gql`
      query SIDEBAR_QUERY {
        themeType @client
        navStyle @client
        navCollapsed @client
        width @client
        locale @client
      }
    `;

    return (
      <Query query={QUERY_STRING}>
        {({ data, client }) => (
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
                  themeType !== THEME_TYPE_LITE
                    ? "gx-drawer-sidebar-dark"
                    : null
                }`}
                placement="left"
                closable={false}
                onClose={this.onToggleCollapsedNav.bind(this)}
                visible={navCollapsed}
              >
                <SidebarContent />
              </Drawer>
            ) : (
              <SidebarContent />
            )}
          </Sider>
        )}
      </Query>
    );
  }
}

const UPDATE_WINDOW_WIDTH = gql`
  mutation updateWindowWidth($width: Int) {
    updateWindowWidth(width: $width) @client
  }
`;

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
  graphql(GET_SETTINGS, { name: "settings", props: mapStateToProps }),
  graphql(UPDATE_WINDOW_WIDTH, { name: "updateWindowWidth" }),
  graphql(TOGGLE_COLLAPSED_SIDENAV, { name: "toggleCollapsedSideNav" })
)(Sidebar);
