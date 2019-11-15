import * as React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import '../../styles/sidebar.css'
import { Auxiliary } from "@walkinsole/walkin-components";
import SidebarLogo from "./SidebarLogo";
import { withRouter } from "react-router-dom";

import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE
} from "@walkinsole/walkin-components/src/constants/ThemeSetting";
import { compose, graphql } from "react-apollo";
import gql from "graphql-tag";

interface iProps {
  themeType?: any,
  navStyle?: any,
  pathname?: any
}

interface iState {
  propTypes?: any
}

class SidebarContent extends React.Component<iProps, iState> {
  static propTypes: any;
  static defaultProps: any;
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
        <div className="gx-sidebar-content NearX-sidebar">
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme={themeType === THEME_TYPE_LITE ? "light" : "dark"}
            mode="inline"
          >
            {/* <Menu.Item key="nearx/home/landing">
              <Link to="/nearx/home/landing">
                <i className="icon icon-home" />
                <span>Home</span>
              </Link>
            </Menu.Item> */}
            {/* <Menu.Item key="nearx/dashboard">
              <Link to="/nearx/dashboard">
                <i className="icon icon-dasbhoard" />
                <span>Dashboard</span>
              </Link>
            </Menu.Item> */}
            <Menu.Item key="nearx/places">
              <Link to="/nearx/places">
                <i className="icon icon-geo-location" />
                {/* <IntlMessages id="sidebar.samplePage" /> */}
                <span>Places</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="nearx/apps">
              <Link to="/nearx/apps">
                <i className="icon icon-apps" />
                {/* <IntlMessages id="sidebar.samplePage" /> */}
                <span>Apps</span>
              </Link>
            </Menu.Item>
            {/* <Menu.Item key="nearx/hooks">
              <Link to="/nearx/hooks">
                <i className="icon icon-link" />
                <span>Web Hooks</span>
              </Link>
            </Menu.Item> */}
            <Menu.Item key="nearx/documentation">
              <a
                target="_blank"
                href="https://distracted-easley-4dc5d1.netlify.com/docs/overview"
              >
                <i className="icon icon-timeline-left-align" />
                {/* <IntlMessages id="sidebar.samplePage" /> */}
                <span>Documentation</span>
              </a>
            </Menu.Item>
            <Menu.Item key="nearx/settings">
              <Link to="/nearx/settings">
                <i className="icon icon-setting" />
                {/* <IntlMessages id="sidebar.samplePage" /> */}
                <span>Settings</span>
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
