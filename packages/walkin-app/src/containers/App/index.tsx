import * as React from "react";
import URLSearchParams from "url-search-params";
import { Redirect, Route, Switch } from "react-router-dom";
import { LocaleProvider } from "antd";
import { IntlProvider } from "react-intl";

import AppLocale from "../../lngProvider";
import MainApp from "./MainApp";
import SignIn from "../../routes/SignIn";
import SignUp from "../../routes/SignUp";

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
import { graphql, compose, MutationFunc } from "react-apollo";
import ForgotPassword from "../../routes/ForgotPassword";
import ChangePassword from "../../routes/ForgotPassword/ChangePassword";
import { Location } from "history";

const RestrictedRoute = ({
  setRedirectRoute,
  component: Component,
  // userId,
  ...rest
}: any) => (
  <Route
    {...rest}
    render={props => {
      if (localStorage.getItem("jwt")) {
        // console.log("Authenticated!");

        return <Component {...props} />;
      } else {
        // console.log("Redirecting!");
        setRedirectRoute({
          variables: {
            route: props.location.pathname
          }
        });
        return (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: props.location }
            }}
          />
        );
      }
    }}
  />
);

interface IProps {
  location: Location;
  setThemeType: any;
  onNavStyleChange: any;
  onLayoutTypeChange: any;
  locale: {
    locale: any;
  };
  navStyle: string;
  themeType: string;
  layoutType: string;
  userId: string;
}

interface IState {}

class App extends React.Component<IProps, IState> {
  setLayoutType(layoutType: string) {
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

  setNavStyle(navStyle: string) {
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
      this.props.onNavStyleChange({
        variables: {
          themeType: params.get("nav-style")
        }
      });
    }
    if (params.has("layout-type")) {
      this.props.onLayoutTypeChange(params.get("layout-type"));
    }
  }

  render() {
    const {
      location,
      themeType,
      layoutType,
      navStyle,
      locale,
      userId
    } = this.props;

    if (themeType === THEME_TYPE_DARK) {
      document.body.classList.add("dark-theme");
    }

    if (location.pathname === "/") {
      return <Redirect to={"/core"} />;
    }

    this.setLayoutType(layoutType);

    this.setNavStyle(navStyle);
    //TODO: Handle location
    const currentAppLocale = AppLocale.en;
    return (
      <LocaleProvider locale={currentAppLocale.antd}>
        <IntlProvider
          locale={currentAppLocale.locale}
          messages={currentAppLocale.messages}
        >
          <Switch>
            <Route
              exact
              path="/signin"
              render={props => <SignIn {...props} />}
            />
            <Route
              exact
              path="/signup"
              render={props => <SignUp {...props} />}
            />
            <Route
              exact
              path="/changepassword"
              render={props => <ChangePassword {...props} />}
            />
            <Route exact path="/forgotpassword" component={ForgotPassword} />
            {/* <RestrictedRoute
              path={`${match.url}`}
              // userId={userId}
              component={MainApp}
            /> */}
          </Switch>
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
  query localData {
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
    auth @client {
      userId
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

const mapStateToProps = ({ localData }: any) => {
  const { locale, navStyle, themeType, layoutType } = localData.settings;
  const { userId } = localData.auth;
  return { locale, navStyle, themeType, layoutType, userId };
};

const SET_REDIRECT_ROUTE = gql`
  mutation setRedirectRoute($route: String) {
    setRedirectRoute(route: $route) @client
  }
`;

export default compose(
  graphql(SET_REDIRECT_ROUTE, { name: "setRedirectRoute" }),
  graphql(SET_THEME_TYPE, { name: "setThemeType" }),
  graphql(ON_NAV_STYLE_CHANGE, { name: "onNavStyleChange" }),
  graphql(ON_LAYOUT_TYPE_CHANGE, { name: "onLayoutTypeChange" }),
  graphql(GET_SETTINGS, {
    props: mapStateToProps,
    name: "localData"
  })
)(App);
