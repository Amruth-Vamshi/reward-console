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
import { decode } from "jsonwebtoken";
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
      variables: { input }
    });
    if (!data || !data.data || !data.data.login || !data.data.login.jwt) {
      return false;
    }
    const jwt = data.data.login.jwt;
    const { id, org_id } = decode(jwt);

    const USER_DATA = gql`
      query queryUser($id: ID!) {
        user(id: $id) {
          firstName
          email
          lastName
          organization {
            name
          }
        }
      }
    `;
    const userData = await client.query({
      query: USER_DATA,
      variables: { id }
    });

    localStorage.setItem("jwt", jwt);

    await client.writeQuery({
      query: gql`
        query auth {
          auth {
            jwt
            organizationId
            userId
            firstName
            lastName
          }
        }
      `,
      data: {
        auth: {
          __typename: "auth",
          jwt,
          organizationId: org_id,
          userId: id,
          firstName: userData.data.user.firstName,
          lastName: userData.data.user.lastName
        }
      }
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const hideMessage = (_, input, { client }) => { };

const showAuthLoader = (_, input, { client }) => { };

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
    showAuthLoader
  }
};

export default resolvers;
