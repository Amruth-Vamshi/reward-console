import * as React from "react";
import { Menu, Icon } from "antd";
import { Link, RouteComponentProps } from "react-router-dom";
import { CustomScrollbars, Auxiliary, IntlMessages } from "walkin-components";
import SidebarLogo from "./SidebarLogo";
import { withRouter } from "react-router-dom";
import campaigns from "../../Icons/campaign";
import Segments from "../../Icons/Segment";
import offers from "../../Icons/offers";
import analytics from "../../Icons/analytics";
import settings from "../../Icons/settings";
import messages from "../../Icons/messages";
// import Segments from "../../Icons/IconComponents/segemnts";
// import Analytics from "../../Icons/help.svg";
// const help = require("../../Icons/help.svg")

import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE
} from "walkin-components/src/constants/ThemeSetting";
import { compose, graphql } from "react-apollo";
import gql from "graphql-tag";
import {
  CAMPAIGN_MANAGEMENT,
  SEGMENT_LIST,
  OFFER_LIST,
  OFFER_DASHBOARD
} from "../../constants/RouterConstants";
import { CollapseSidebar } from "../../../../shared";

const SubMenu = Menu.SubMenu;

interface SidebarContentProps extends RouteComponentProps {
  themeType: any;
  navStyle: any;
  pathname: any;
}

interface SidebarContentState {
  orgId?: any;
  userId?: any;
}

class SidebarContent extends React.Component<
  SidebarContentProps,
  SidebarContentState
> {
  getNoHeaderClass = navStyle => {
    if (
      navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR ||
      navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR
    ) {
      return "gx-no-header-notifications";
    }
    return "";
  };
  getNavStyleSubMenuClass = navStyle => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
      return "gx-no-header-submenu-popup";
    }
    return "";
  };

  render() {
    const { themeType, navStyle, pathname } = this.props;
    const selectedKeys = pathname.substr(1);
    const defaultOpenKeys = selectedKeys.split("/")[1];

    // let isSettingsSideBar = defaultOpenKeys[1] === "settings";
    // let sidebarTheme: MenuTheme = "dark";
    // if (themeType === THEME_TYPE_LITE || isSettingsSideBar)
    // 	sidebarTheme = "light";

    return (
      <Auxiliary>
        <SidebarLogo />
        <div
          style={{ height: "100%" }}
          className="HyperX-Sidebar gx-sidebar-content"
        >
          {/* <div></div> */}
          <Menu
            // style={{ height: '85vh' }}
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme={themeType === THEME_TYPE_LITE ? "light" : "dark"}
            mode="inline"
          >
            <Menu.Item key="hyperx/campaigns">
              <Link to={CAMPAIGN_MANAGEMENT}>
                {/* <i className="icon icon-alert" /> */}
                <Icon component={campaigns} className="sidebar-icon" />
                <span>Campaigns</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="hyperx/segments">
              <Link to={SEGMENT_LIST}>
                {/* <i className="icon icon-chart-radial" /> */}
                <Icon component={Segments} className="sidebar-icon" />
                <span>Segments</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="hyperx/offers">
              <Link to={OFFER_LIST}>
                {/* <i className="icon icon-tag" /> */}

                <Icon component={offers} className="sidebar-icon" />
                <span>Offers</span>
              </Link>
            </Menu.Item>
            {/* <Menu.Item key="analytics">
							<Link to="/nearx">
								// <i className="icon icon-geo-location" />
								<Icon component={Analytics} className='' />
								Analytics
							</Link>
						</Menu.Item>
						<Menu.Item key="settings">
							<Link to="/nearx">
								<i className="icon icon-setting" />
								Settings
							</Link>
						</Menu.Item>
						<Menu.Item key="settings">
							<Link to="/nearx">
								<i className="icon icon-team" />
								Help
							</Link>
						</Menu.Item> */}
          </Menu>
          <CollapseSidebar className="collapseBarStyle" />
        </div>
        {/* </div> */}
      </Auxiliary>
    );
  }
}

const mapStateToProps = ({ settings, ownProps }: any) => {
  const { navStyle, themeType, locale } = settings.settings;
  const { pathname } = ownProps.location;
  return { navStyle, themeType, locale, pathname };
};

const GET_SETTINGS = gql`
  query settings {
    settings @client {
      navStyle
      themeType
      locale {
        icon
        languageId
        locale
        name
      }
      pathname
    }
  }
`;

export default compose(
  withRouter,
  graphql(GET_SETTINGS, {
    props: mapStateToProps,
    name: "settings"
  })
)(SidebarContent);
