import gql from "graphql-tag";

const typeDefs = gql`
  extend type Query {
    settings: settings
    auth: auth
    redirectRoute: String
  }

  type auth {
    loader: Boolean
    alertMessage: String
    showMessage: Boolean
    initURL: String
    userId: String
    organizationId: String
    jwt: String
    firstName: String
    lastName: String
  }

  type settings {
    navCollapsed: Boolean
    navStyle: String
    layoutType: String
    themeType: String
    colorSelection: String
    pathname: String
    width: String
    isDirectionRTL: Boolean
    locale: locale
  }

  type locale {
    languageId: String
    locale: String
    name: String
    icon: String
  }

  input LocaleInput {
    languageId: String
    locale: String
    name: String
    icon: String
  }

  input SignInInput {
    email: String
    password: String
  }

  extend type Mutation {
    toggleCollapsedSideNav(navCollapsed: Boolean): String
    updateWindowWidth(width: Int): String
    setThemeType(themeType: String): String
    setThemeColorSelection(colorSelection: String): String
    onNavStyleChange(navStyle: String): String
    onLayoutTypeChange(layoutType: String): String
    switchLanguage(locale: LocaleInput): String
    signIn(input: SignInInput!): Boolean
    hideMessage: String
    showAuthLoader: String
    setRedirectRoute(route: String): String
    setLocalUserData: Boolean
  }
`;

export default typeDefs;
