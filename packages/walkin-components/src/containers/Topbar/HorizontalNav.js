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
import { withApollo, graphql } from "react-apollo";
import gql from "graphql-tag";

const SubMenu = Menu.SubMenu;

class HorizontalNav extends Component {
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

  async componentWillMount() {
    const LOCALE_QUERY = gql`
      query LocaleQuery {
        locale @client
      }
    `;
    this.props.client
      .query({
        query: LOCALE_QUERY
      })
      .then(({ data }) => {
        console.log(data);
      })
      .catch(err => {
        console.log("componentWillMount", err);
      });
  }

  render() {
    // const { pathname, navStyle } = this.props;
    // const selectedKeys = pathname.substr(1);
    // const defaultOpenKeys = selectedKeys.split("/")[1];
    return (
      // <Menu
      //   defaultOpenKeys={[defaultOpenKeys]}
      //   selectedKeys={[selectedKeys]}
      //   mode="horizontal"
      // >
      //   <SubMenu
      //     className={this.getNavStyleSubMenuClass(navStyle)}
      //     key="main"
      //     title={<IntlMessages id="sidebar.main" />}
      //   >
      //     <Menu.Item key="sample">
      //       <Link to="/sample">
      //         <i className="icon icon-widgets" />
      //         <IntlMessages id="sidebar.samplePage" />
      //       </Link>
      //     </Menu.Item>
      //   </SubMenu>
      // </Menu>
      <div>Horizontal</div>
    );
  }
}

export default withApollo(HorizontalNav);
