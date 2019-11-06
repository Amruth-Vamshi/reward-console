import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
  NAV_STYLE_DRAWER,
  NAV_STYLE_FIXED,
  NAV_STYLE_MINI_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  TAB_SIZE,
  THEME_TYPE_LITE,
  TAB_SIZE_MAX
} from "@walkinsole/walkin-components/src/constants/ThemeSetting";
import { compose, graphql } from "react-apollo";
import gql from "graphql-tag";
import { Icon, Row, Col } from "antd";

class SidebarLogo extends Component {
  render() {
    const { width, themeType, navCollapsed } = this.props;
    let { navStyle } = this.props;
    if (width < TAB_SIZE && navStyle === NAV_STYLE_FIXED) {
      navStyle = NAV_STYLE_DRAWER;
    }
    return (
      <div className="RefineX-Logo">
        <div className="gx-layout-sider-header">
          {width < TAB_SIZE_MAX && width > TAB_SIZE ?
            <Link to="/refinex/dashboard" className="gx-pointer">
              <img alt="fgd" src={require("@walkinsole/walkin-components/src/assets/images/logo_refine.png")} style={{ maxWidth: 35 }} />
            </Link> : navStyle === NAV_STYLE_FIXED || navStyle === NAV_STYLE_MINI_SIDEBAR ? (
              // <div className="gx-linebar">
              //     <i
              //       className={`gx-icon-btn icon icon-${
              //         navStyle === NAV_STYLE_MINI_SIDEBAR
              //           ? "menu-unfold"
              //           : "menu-fold"
              //         } ${themeType !== THEME_TYPE_LITE ? "gx-text-white" : ""}`}
              //       onClick={() => {
              //         if (navStyle === NAV_STYLE_DRAWER) {
              //           this.props.toggleCollapsedSideNav({
              //             variables: {
              //               navCollapsed: !navCollapsed
              //             }
              //           });
              //         } else if (navStyle === NAV_STYLE_FIXED) {
              //           this.props.onNavStyleChange({
              //             variables: {
              //               navStyle: NAV_STYLE_MINI_SIDEBAR
              //             }
              //           });
              //         } else if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
              //           this.props.toggleCollapsedSideNav({
              //             variables: {
              //               navCollapsed: !navCollapsed
              //             }
              //           });
              //         } else {
              //           this.props.onNavStyleChange({
              //             variables: {
              //               navStyle: NAV_STYLE_FIXED
              //             }
              //           });
              //         }
              //       }}
              //     />
              //     </div> 
              <div className="gx-linebar refinex-header-home">
                <Link to="/">
                  <Icon type="home" className="gx-icon-btn" style={{ padding: "10px", backgroundColor: "#FCFCFC" }} />
                </Link>

              </div>
            ) : null}

          <Link to="/refinex/dashboard" className="gx-site-logo">
            {navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR &&
              width >= TAB_SIZE ? (
                <img
                  alt=""
                  src={require("@walkinsole/walkin-components/src/assets/images/w-logo.png")}
                />
              ) : themeType === THEME_TYPE_LITE ? (
                <img
                  alt=""
                  src={require("@walkinsole/walkin-components/src/assets/images/logo_refine.png")}
                />
              ) : (
                  <img
                    alt=""
                    src={require("@walkinsole/walkin-components/src/assets/images/logo_refine.png")}
                  />
                )}
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ settings }) => {
  const { navStyle, themeType, width, navCollapsed } = settings.settings;
  return { navStyle, themeType, width, navCollapsed };
};

// export default connect(
//   mapStateToProps,
//   {
//     onNavStyleChange,
//     toggleCollapsedSideNav
//   }
// )(SidebarLogo);

const GET_SETTINGS = gql`
  query settings @client {
    settings {
      navStyle
      themeType
      width
      navCollapsed
    }
  }
`;
const TOGGLE_COLLAPSED_SIDENAV = gql`
  mutation toggleCollapsedSideNav($navCollapsed: Boolean) {
    toggleCollapsedSideNav(navCollapsed: $navCollapsed) @client
  }
`;
const ON_NAV_STYLE_CHANGE = gql`
  mutation onNavStyleChange($navStyle: String) {
    onNavStyleChange(navStyle: $navStyle) @client
  }
`;

export default compose(
  graphql(GET_SETTINGS, { name: "settings", props: mapStateToProps }),
  graphql(TOGGLE_COLLAPSED_SIDENAV, { name: "toggleCollapsedSideNav" }),
  graphql(ON_NAV_STYLE_CHANGE, { name: "onNavStyleChange" })
)(SidebarLogo);
