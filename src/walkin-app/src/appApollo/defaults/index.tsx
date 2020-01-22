import {
  SWITCH_LANGUAGE,
  TOGGLE_COLLAPSED_NAV,
  WINDOW_WIDTH
} from "walkin-components/src/constants/ActionTypes";
import {
  LAYOUT_TYPE,
  LAYOUT_TYPE_FULL,
  NAV_STYLE,
  NAV_STYLE_FIXED,
  THEME_COLOR_SELECTION,
  THEME_COLOR_SELECTION_PRESET,
  THEME_TYPE,
  THEME_TYPE_SEMI_DARK
} from "walkin-components/src/constants/ThemeSetting";

export default {
  settings: {
    __typename: "settings",
    navCollapsed: true,
    navStyle: NAV_STYLE_FIXED,
    layoutType: LAYOUT_TYPE_FULL,
    themeType: THEME_TYPE_SEMI_DARK,
    colorSelection: THEME_COLOR_SELECTION_PRESET,
    pathname: "",
    width: window.innerWidth,
    isDirectionRTL: false,
    locale: {
      __typename: "locale",
      languageId: "english",
      locale: "en",
      name: "English",
      icon: "us"
    }
  },
  auth: {
    __typename: "auth",
    loader: false,
    alertMessage: "",
    showMessage: false,
    initURL: "",
    userId: null,
    organizationId: null,
    firstName: null,
    lastName: null
  }
};
