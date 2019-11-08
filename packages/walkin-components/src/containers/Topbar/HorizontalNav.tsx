import React, { Component } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import IntlMessages from "../../util/IntlMessages";
import {
  NAV_STYLE_ABOVE_HEADER,
  NAV_STYLE_BELOW_HEADER,
  NAV_STYLE_DEFAULT_HORIZONTAL,
  NAV_STYLE_INSIDE_HEADER_HORIZONTAL
} from "../../constants/ThemeSetting";
import gql from "graphql-tag";
import { compose, graphql } from "react-apollo";

const SubMenu = Menu.SubMenu;

class HorizontalNav extends Component {
  static propTypes: any;
  static defaultProps: any;

  getNavStyleSubMenuClass = navStyle => {
    switch (navStyle) {
      case NAV_STYLE_DEFAULT_HORIZONTAL:
        return "gx-menu-horizontal gx-submenu-popup-curve";
      case NAV_STYLE_INSIDE_HEADER_HORIZONTAL:
        return "gx-menu-horizontal gx-submenu-popup-curve gx-inside-submenu-popup-curve";
      case NAV_STYLE_BELOW_HEADER:
        return "gx-menu-horizontal gx-submenu-popup-curve gx-below-submenu-popup-curve";
      case NAV_STYLE_ABOVE_HEADER:
        return "gx-menu-horizontal gx-submenu-popup-curve gx-above-submenu-popup-curve";
      default:
        return "gx-menu-horizontal";
    }
  };

  render() {
    const { pathname, navStyle } = this.props;
    const selectedKeys = pathname.substr(1);
    const defaultOpenKeys = selectedKeys.split("/")[1];
    return (
      <Menu
        defaultOpenKeys={[defaultOpenKeys]}
        selectedKeys={[selectedKeys]}
        mode="horizontal"
      >
        <SubMenu
          className={this.getNavStyleSubMenuClass(navStyle)}
          key="main"
          title={<IntlMessages id="sidebar.main" />}
        >
          {/* <Menu.Item key="sample">
            <Link to="/sample">
              <i className="icon icon-widgets" />
              <IntlMessages id="sidebar.samplePage" />
            </Link>
          </Menu.Item> */}
        </SubMenu>
      </Menu>
    );
  }
}

HorizontalNav.propTypes = {};
const mapStateToProps = ({ settings }) => {
  const { themeType, navStyle, pathname, locale } = settings.settings;
  return { themeType, navStyle, pathname, locale };
};
// export default connect(mapStateToProps)(HorizontalNav);

const GET_SETTINGS = gql`
  query settings @client {
    settings {
      themeType
      navStyle
      pathname
      locale {
        icon
        languageId
        locale
        name
      }
    }
  }
`;

export default compose(
  graphql(GET_SETTINGS, { name: "settings", props: mapStateToProps })
)(HorizontalNav);
