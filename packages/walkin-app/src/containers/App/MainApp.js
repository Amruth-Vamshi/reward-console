import React, { Component } from "react";
import { Layout } from "antd";

import {
  HorizontalDefault,
  HorizontalDark,
  InsideHeader,
  AboveHeader,
  BelowHeader,
  footerText,
  Customizer,
  NoHeaderNotification,
  Topbar
} from "@walkinsole/walkin-components";
import Sidebar from "../Sidebar";
import App from "../../routes";

import {
  NAV_STYLE_ABOVE_HEADER,
  NAV_STYLE_BELOW_HEADER,
  NAV_STYLE_DARK_HORIZONTAL,
  NAV_STYLE_DEFAULT_HORIZONTAL,
  NAV_STYLE_DRAWER,
  NAV_STYLE_FIXED,
  NAV_STYLE_INSIDE_HEADER_HORIZONTAL,
  NAV_STYLE_MINI_SIDEBAR,
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  TAB_SIZE
} from "@walkinsole/walkin-components/src/constants/ThemeSetting";
import gql from "graphql-tag";
import { compose, graphql } from "react-apollo";

const { Content, Footer } = Layout;

export class MainApp extends Component {
  getContainerClass = navStyle => {
    switch (navStyle) {
      case NAV_STYLE_DARK_HORIZONTAL:
        return "gx-container-wrap";
      case NAV_STYLE_DEFAULT_HORIZONTAL:
        return "gx-container-wrap";
      case NAV_STYLE_INSIDE_HEADER_HORIZONTAL:
        return "gx-container-wrap";
      case NAV_STYLE_BELOW_HEADER:
        return "gx-container-wrap";
      case NAV_STYLE_ABOVE_HEADER:
        return "gx-container-wrap";
      default:
        return "";
    }
  };
  getNavStyles = navStyle => {
    switch (navStyle) {
      case NAV_STYLE_DEFAULT_HORIZONTAL:
        return <HorizontalDefault />;
      case NAV_STYLE_DARK_HORIZONTAL:
        return <HorizontalDark />;
      case NAV_STYLE_INSIDE_HEADER_HORIZONTAL:
        return <InsideHeader />;
      case NAV_STYLE_ABOVE_HEADER:
        return <AboveHeader />;
      case NAV_STYLE_BELOW_HEADER:
        return <BelowHeader />;
      case NAV_STYLE_FIXED:
        return <Topbar />;
      case NAV_STYLE_DRAWER:
        return <Topbar />;
      case NAV_STYLE_MINI_SIDEBAR:
        return <Topbar />;
      case NAV_STYLE_NO_HEADER_MINI_SIDEBAR:
        return <NoHeaderNotification />;
      case NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR:
        return <NoHeaderNotification />;
      default:
        return null;
    }
  };

  getSidebar = (navStyle, width) => {
    if (width < TAB_SIZE) {
      return <Sidebar />;
    }
    switch (navStyle) {
      case NAV_STYLE_FIXED:
        return <Sidebar />;
      case NAV_STYLE_DRAWER:
        return <Sidebar />;
      case NAV_STYLE_MINI_SIDEBAR:
        return <Sidebar />;
      case NAV_STYLE_NO_HEADER_MINI_SIDEBAR:
        return <Sidebar />;
      case NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR:
        return <Sidebar />;
      default:
        return null;
    }
  };

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.props.updateWindowWidth({ variables: { width: window.innerWidth } })
      console.log(window.innerWidth)
    });
  }

  render() {
    const { match, navStyle, location } = this.props;
    // console.log(location)
    let width = window.innerWidth
    return (
      <Layout className="gx-app-layout">
        {this.getSidebar(navStyle, width)}
        <Layout>
          {this.getNavStyles(navStyle, location)}
          <Content
            className={`gx-layout-content ${this.getContainerClass(navStyle)} `}
          >
            <App />
          </Content>
          {/* <Footer>  <div className="gx-layout-footer-content">Copyright First Walkin Technologies © 2019</div> </Footer> */}
        </Layout>
        {/* <Customizer /> */}
      </Layout>
    );
  }
}

const UPDATE_WINDOW_WIDTH = gql`
  mutation updateWindowWidth($width: Int) {
    updateWindowWidth(width: $width) @client
  }
`;

const mapStateToProps = ({ settings }) => {
  const { width, navStyle } = settings.settings;
  return { width, navStyle };
};

const GET_SETTINGS = gql`
  query getSettings {
    settings @client {
      width
      navStyle
    }
  }
`;

export default compose(
  graphql(UPDATE_WINDOW_WIDTH, { name: "updateWindowWidth" }),
  graphql(GET_SETTINGS, {
    props: mapStateToProps,
    name: "settings"
  })
)(MainApp);
