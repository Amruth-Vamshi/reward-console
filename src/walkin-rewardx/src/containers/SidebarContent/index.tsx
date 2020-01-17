import * as React from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { compose, graphql } from "react-apollo";
import gql from "graphql-tag";
import { RouteChildrenProps } from "react-router";

import { Auxiliary } from "walkin-components";
import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE
} from "walkin-components/src/constants/ThemeSetting";
import SidebarLogo from "./SidebarLogo";
import { CollapseSidebar } from "../../../../shared/src";

// import Dashboard from "../../Icons/IconComponents/dashboard";
// import Survey from "../../Icons/IconComponents/survey";
// import Segments from "../../Icons/IconComponents/segemnts";
// import Analytics from "../../Icons/IconComponents/analytics";

interface SidebarContentProps extends RouteChildrenProps {
  themeType: any;
  navStyle: any;
  pathname: any;
}

interface SidebarContentState {
  orgId?: any;
  userId?: any;
}
class SidebarContent extends React.Component<
  SidebarContentProps,
  SidebarContentState
> {
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
    return (
      <Auxiliary>
        <SidebarLogo />
        <div
          style={{ height: "100%" }}
          className="Rewardx-Sidebar gx-sidebar-content"
        >
          <Menu
            style={{ height: "100%" }}
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[defaultOpenKeys]}
            theme={themeType === THEME_TYPE_LITE ? "light" : "dark"}
            mode="inline"
          >
            <Menu.Item key="dashboard">
              <Link to="/rewardx/dashboard">
                <Icon type="dashboard" />
                {/* <Icon component={Dashboard} style={{ fontSize: "18px" }} /> */}
                <span>Dashboard</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="reports">
              <Link to="/rewardx/reports">
                <Icon type="profile" />
                {/* <Icon component={Dashboard} style={{ fontSize: "18px" }} /> */}
                <span>Reports</span>
              </Link>
            </Menu.Item>
          </Menu>
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
