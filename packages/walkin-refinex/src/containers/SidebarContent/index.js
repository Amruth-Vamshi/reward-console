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
import SidebarLogo from "./SidebarLogo";
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
        console.log("defaultOpenKeys", defaultOpenKeys)
        return (
            <Auxiliary>
                <SidebarLogo />
                <div style={{ height: '100%' }} className="RefineX-Sidebar gx-sidebar-content">
                    <Menu
                        style={{ height: '100%' }}
                        defaultOpenKeys={[defaultOpenKeys]}
                        selectedKeys={[defaultOpenKeys]}
                        theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
                        mode="inline"
                    >
                        <Menu.Item key="dashboard">
                            <Link to="/refinex/dashboard">
                                <Icon type="dashboard" style={{ fontSize: '18px' }} />
                                <span >Dashboard</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="feedback">
                            <Link to="/refinex/feedback">
                                <i className="icon icon-feedback" />
                                <span>Surveys</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="segment">
                            <Link to="/refinex/segment/segmentList">
                                <i className="icon icon-select" />
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
                                <i className="icon icon-chart" />
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
