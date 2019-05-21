import React, { Component } from "react";
import URLSearchParams from "url-search-params";
import { Redirect, Route, Switch } from "react-router-dom";
import { LocaleProvider } from "antd";
import { IntlProvider } from "react-intl";

import AppLocale from "../../lngProvider";
import MainApp from "./MainApp";
// import { SignIn, SignUp } from "@walkinsole/walkin-components";

import {
  LAYOUT_TYPE_BOXED,
  LAYOUT_TYPE_FRAMED,
  LAYOUT_TYPE_FULL,
  NAV_STYLE_ABOVE_HEADER,
  NAV_STYLE_BELOW_HEADER,
  NAV_STYLE_DARK_HORIZONTAL,
  NAV_STYLE_DEFAULT_HORIZONTAL,
  NAV_STYLE_INSIDE_HEADER_HORIZONTAL,
  THEME_TYPE_DARK
} from "@walkinsole/walkin-components/src/constants/ThemeSetting";

import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";

class App extends Component {
  constructor() {
    super();
  }

  setLayoutType(layoutType) {
    if (layoutType === LAYOUT_TYPE_FULL) {
      document.body.classList.remove("boxed-layout");
      document.body.classList.remove("framed-layout");
      document.body.classList.add("full-layout");
    } else if (layoutType === LAYOUT_TYPE_BOXED) {
      document.body.classList.remove("full-layout");
      document.body.classList.remove("framed-layout");
      document.body.classList.add("boxed-layout");
    } else if (layoutType === LAYOUT_TYPE_FRAMED) {
      document.body.classList.remove("boxed-layout");
      document.body.classList.remove("full-layout");
      document.body.classList.add("framed-layout");
    }
  }

  setNavStyle(navStyle) {
    if (
      navStyle === NAV_STYLE_DEFAULT_HORIZONTAL ||
      navStyle === NAV_STYLE_DARK_HORIZONTAL ||
      navStyle === NAV_STYLE_INSIDE_HEADER_HORIZONTAL ||
      navStyle === NAV_STYLE_ABOVE_HEADER ||
      navStyle === NAV_STYLE_BELOW_HEADER
    ) {
      document.body.classList.add("full-scroll");
      document.body.classList.add("horizontal-layout");
    } else {
      document.body.classList.remove("full-scroll");
      document.body.classList.remove("horizontal-layout");
    }
  }

  componentWillMount() {
    const params = new URLSearchParams(this.props.location.search);

    if (params.has("theme")) {
      this.props.setThemeType(params.get("theme"));
    }
    if (params.has("nav-style")) {
      this.props.onNavStyleChange(params.get("nav-style"));
    }
    if (params.has("layout-type")) {
      this.props.onLayoutTypeChange(params.get("layout-type"));
    }
  }

  render() {
    const {
      match,
      location,
      themeType,
      layoutType,
      navStyle,
      locale
    } = this.props;

    if (themeType === THEME_TYPE_DARK) {
      document.body.classList.add("dark-theme");
    }

    if (location.pathname === "/") {
      return <Redirect to={"/sample"} />;
    }

    this.setLayoutType(layoutType);

    this.setNavStyle(navStyle);

    const currentAppLocale = AppLocale[locale.locale];
    return (
      <LocaleProvider locale={currentAppLocale.antd}>
        <IntlProvider
          locale={currentAppLocale.locale}
          messages={currentAppLocale.messages}
        >
          <Route path={`${match.url}`} component={MainApp} />
        </IntlProvider>
      </LocaleProvider>
    );
  }
}
// Old code
// const mapStateToProps = ({ settings }) => {
//   const { locale, navStyle, themeType, layoutType } = settings;
//   return { locale, navStyle, themeType, layoutType };
// };
// export default connect(
//   mapStateToProps,
//   { setThemeType, onNavStyleChange, onLayoutTypeChange }
// )(App);

// New graphql code

const GET_SETTINGS = gql`
  query settings {
    settings @client {
      locale {
        locale
        name
        languageId
        icon
      }
      navStyle
      themeType
      layoutType
    }
  }
`;

const SET_THEME_TYPE = gql`
  mutation setThemeType($themeType: String) {
    setThemeType(themeType: $themeType) @client
  }
`;

const ON_NAV_STYLE_CHANGE = gql`
  mutation onNavStyleChange($navStyle: String) {
    onNavStyleChange(navStyle: $navStyle) @client
  }
`;
const ON_LAYOUT_TYPE_CHANGE = gql`
  mutation onLayoutTypeChange($layoutType: String) {
    onLayoutTypeChange(layoutType: $layoutType) @client
  }
`;

const mapStateToProps = ({ settings }) => {
  const { locale, navStyle, themeType, layoutType } = settings.settings;
  return { locale, navStyle, themeType, layoutType };
};

export default compose(
  graphql(SET_THEME_TYPE, { name: "setThemeType" }),
  graphql(ON_NAV_STYLE_CHANGE, { name: "onNavStyleChange" }),
  graphql(ON_LAYOUT_TYPE_CHANGE, { name: "onLayoutTypeChange" }),
  graphql(GET_SETTINGS, {
    props: mapStateToProps,
    name: "settings"
  })
)(App);
