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

const toggleCollapsedSideNav = (_, { navCollapsed }, { client }) => {
  return client.writeData({
    data: { type: TOGGLE_COLLAPSED_NAV, navCollapsed }
  });
};

const updateWindowWidth = (_, { width }, { client }) => {
  return client.writeData({
    data: { type: WINDOW_WIDTH, width }
  });
};

const setThemeType = (_, { themeType }, { client }) => {
  return client.writeData({
    data: { type: THEME_TYPE, themeType }
  });
};

const setThemeColorSelection = (_, { colorSelection }, { client }) => {
  return client.writeData({
    data: { type: THEME_COLOR_SELECTION, colorSelection }
  });
};

const onNavStyleChange = (_, { navStyle }, { client }) => {
  return client.writeData({
    data: { type: NAV_STYLE, navStyle }
  });
};

const onLayoutTypeChange = (_, { layoutType }, { client }) => {
  return client.writeData({
    data: { type: LAYOUT_TYPE, layoutType }
  });
};

const switchLanguage = (_, { locale }, { client }) => {
  return client.writeData({
    data: {
      type: SWITCH_LANGUAGE,
      payload: locale
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
