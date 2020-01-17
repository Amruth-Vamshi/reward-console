import {
  SWITCH_LANGUAGE,
  TOGGLE_COLLAPSED_NAV,
  WINDOW_WIDTH
} from "walkin-components/src/constants/ActionTypes";
import {
  LAYOUT_TYPE,
  NAV_STYLE,
  THEME_COLOR_SELECTION,
  THEME_TYPE
} from "walkin-components/src/constants/ThemeSetting";
import gql from "graphql-tag";
import { decode } from "jsonwebtoken";
import { configureClient } from "../client";
const toggleCollapsedSideNav = async (_, { navCollapsed }, { client }) => {
  const data = await client.writeQuery({
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

  return data;
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

const signIn = async (_, { input }, { client }) => {
  const LOGIN = gql`
    mutation login($input: LoginInput!) {
      login(input: $input) {
        jwt
      }
    }
  `;

  try {
    const data = await client.mutate({
      mutation: LOGIN,
      variables: { input },
      fetchPolicy: "no-cache"
    });
    if (!data || !data.data || !data.data.login || !data.data.login.jwt) {
      return false;
    }
    const jwt = data.data.login.jwt;
    const { id, org_id } = decode(jwt) as any;
    const query = gql`
      query auth {
        auth {
          organizationId
          userId
        }
      }
    `;
    const writeData = {
      auth: {
        __typename: "auth",
        organizationId: org_id,
        userId: id
      }
    };

    client.writeQuery({
      query,
      data: writeData
    });

    localStorage.setItem("jwt", jwt);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const hideMessage = (_, input, { client }) => {};

const showAuthLoader = (_, input, { client }) => {};

const setRedirectRoute = async (_, { route }, { client }) => {
  await client.writeQuery({
    query: gql`
      query redirectRoute {
        redirectRoute
      }
    `,
    data: {
      redirectRoute: route
    }
  });
  return route;
};

const resolvers = {
  Mutation: {
    toggleCollapsedSideNav,
    updateWindowWidth,
    setThemeType,
    setThemeColorSelection,
    onNavStyleChange,
    onLayoutTypeChange,
    switchLanguage,
    signIn,
    hideMessage,
    showAuthLoader,
    setRedirectRoute
  }
};

export default resolvers;
