import gql from "graphql-tag";

const typeDefs = gql`
  extend type Query {
    settings: settings
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

  extend type Mutation {
    toggleCollapsedSideNav(navCollapsed: Boolean): String
    updateWindowWidth(width: Int): String
    setThemeType(themeType: String): String
    setThemeColorSelection(colorSelection: String): String
    onNavStyleChange(navStyle: String): String
    onLayoutTypeChange(layoutType: String): String
    switchLanguage(locale: LocaleInput): String
  }
`;

export default typeDefs;
