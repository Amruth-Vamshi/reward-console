import {
  SWITCH_LANGUAGE,
  TOGGLE_COLLAPSED_NAV,
  WINDOW_WIDTH
} from "@walkinsole/walkin-components/src/constants/ActionTypes";
import {
  LAYOUT_TYPE,
  NAV_STYLE,
  THEME_COLOR_SELECTION,
  THEME_TYPE
} from "@walkinsole/walkin-components/src/constants/ThemeSetting";
import gql from "graphql-tag";

const toggleCollapsedSideNav = (_, { navCollapsed }, { client }) => {
  return client.writeQuery({
    query: gql`
      query navCollapsed {
        settings {
          navCollapsed
        }
      }
    `,
    data: {
      settings: {
        navCollapsed,
        __typename: "settings"
      }
    }
  });
};

const updateWindowWidth = (_, { width }, { client }) => {
  return client.writeQuery({
    query: gql`
      query navCollapsed {
        settings {
          width
        }
      }
    `,
    data: {
      settings: {
        width,
        __typename: "settings"
      }
    }
  });
};

const setThemeType = (_, { themeType }, { client }) => {
  return client.writeQuery({
    query: gql`
      query navCollapsed {
        settings {
          themeType
        }
      }
    `,
    data: {
      settings: {
        themeType,
        __typename: "settings"
      }
    }
  });
};

const setThemeColorSelection = (_, { colorSelection }, { client }) => {
  return client.writeQuery({
    query: gql`
      query navCollapsed {
        settings {
          colorSelection
        }
      }
    `,
    data: {
      settings: {
        colorSelection,
        __typename: "settings"
      }
    }
  });
};

const onNavStyleChange = (_, { navStyle }, { client }) => {
  return client.writeQuery({
    query: gql`
      query navCollapsed {
        settings {
          navStyle
        }
      }
    `,
    data: {
      settings: {
        navStyle,
        __typename: "settings"
      }
    }
  });
};

const onLayoutTypeChange = (_, { layoutType }, { client }) => {
  return client.writeQuery({
    query: gql`
      query navCollapsed {
        settings {
          layoutType
        }
      }
    `,
    data: {
      settings: {
        layoutType,
        __typename: "settings"
      }
    }
  });
};

const switchLanguage = (_, input, { client }) => {
  const inpuLocale = input.locale;
  const { icon, languageId, locale, name } = inpuLocale;
  return client.writeQuery({
    query: gql`
      query navCollapsed {
        settings {
          locale {
            icon
            languageId
            locale
            name
          }
        }
      }
    `,
    data: {
      settings: {
        locale: {
          icon,
          languageId,
          locale,
          name,
          __typename: "locale"
        },
        __typename: "settings"
      }
    }
  });
};

const resolvers = {
  Mutation: {
    toggleCollapsedSideNav,
    updateWindowWidth,
    setThemeType,
    setThemeColorSelection,
    onNavStyleChange,
    onLayoutTypeChange,
    switchLanguage
  }
};

export default resolvers;
