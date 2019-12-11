import * as React from "react";
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
  THEME_TYPE_LITE,
  NAV_STYLE_MINI_SIDEBAR
} from "@walkinsole/walkin-components/src/constants/ThemeSetting";
import SidebarLogo from "./SidebarLogo";
import CollapseSidebar from './CollapseSidebar'
import { compose, graphql } from "react-apollo";
import gql from "graphql-tag";
import Dashboard from "../../Icons/IconComponents/dashboard";
import Survey from "../../Icons/IconComponents/survey";
import Segments from "../../Icons/IconComponents/segemnts";
import Analytics from "../../Icons/IconComponents/analytics";
import { RouteChildrenProps } from "react-router";


interface SidebarContentProps extends RouteChildrenProps {
  themeType: any,
  navStyle: any,
  pathname: any
}

interface SidebarContentState {
  orgId?: any,
  userId?: any
}
class SidebarContent extends React.Component<SidebarContentProps, SidebarContentState> {
  static propTypes: any;
  static defaultProps: any;
  getNoHeaderClass = (navStyle: any) => {
    if (
      navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR ||
      navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR
    ) {
      return "gx-no-header-notifications";
    }
    return "";
  };
  getNavStyleSubMenuClass = (navStyle: any) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
      return "gx-no-header-submenu-popup";
    }
    return "";
  };

  render() {
    const { themeType, navStyle, pathname, match } = this.props;
    const selectedKeys = pathname.substr(1);
    const defaultOpenKeys = selectedKeys.split("/")[1];
    console.log("defaultOpenKeys", defaultOpenKeys);
    return (
      <Auxiliary>
        <SidebarLogo />
        <div
          style={{ height: "100%" }}
          className="RefineX-Sidebar gx-sidebar-content"
        >
          <Menu
            style={{ height: "80%" }}
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[defaultOpenKeys]}
            theme={themeType === THEME_TYPE_LITE ? "light" : "dark"}
            mode="inline"
          >
            <Menu.Item key="dashboard">
              <Link to="/refinex/dashboard">
                <Icon component={Dashboard} style={{ fontSize: "18px" }} />
                <span>Dashboard</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="feedback">
              <Link to="/refinex/feedback">
                <Icon component={Survey} style={{ fontSize: "18px" }} />
                <span>Surveys</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="segment">
              <Link to="/refinex/segment/segmentList">
                <Icon component={Segments} style={{ fontSize: "18px" }} />
                {/* <IntlMessages id="sidebar.samplePage" /> */}
                <span>Segments</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="apps">
              <Link to="/refinex/apps">
                <i className="icon icon-apps" />
                {/* <IntlMessages id="sidebar.samplePage" /> */}
                <span>Apps</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="analytics">
              <Link to="/refinex/analytics">
                <Icon component={Analytics} style={{ fontSize: "18px" }} />
                <span>Analytics</span>
              </Link>
            </Menu.Item>
            {/* <Menu.Item key="settings">
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
                        </Menu.Item> */}
          </Menu>
          <CollapseSidebar />
          {/* <div className="gx-linebar">
                        <i
                            className={`gx-icon-btn icon icon-${
                                navStyle === NAV_STYLE_MINI_SIDEBAR
                                    ? "menu-unfold"
                                    : "menu-fold"
                                } ${themeType !== THEME_TYPE_LITE ? "gx-text-white" : ""}`}
                            onClick={() => {
                                if (navStyle === NAV_STYLE_DRAWER) {
                                    this.props.toggleCollapsedSideNav({
                                        variables: {
                                            navCollapsed: !navCollapsed
                                        }
                                    });
                                } else if (navStyle === NAV_STYLE_FIXED) {
                                    this.props.onNavStyleChange({
                                        variables: {
                                            navStyle: NAV_STYLE_MINI_SIDEBAR
                                        }
                                    });
                                } else if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
                                    this.props.toggleCollapsedSideNav({
                                        variables: {
                                            navCollapsed: !navCollapsed
                                        }
                                    });
                                } else {
                                    this.props.onNavStyleChange({
                                        variables: {
                                            navStyle: NAV_STYLE_FIXED
                                        }
                                    });
                                }
                            }}
                        />
                    </div> */}
        </div>
      </Auxiliary>
    );
  }
}

SidebarContent.propTypes = {};

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
    name: "settings"
  })
)(SidebarContent);
