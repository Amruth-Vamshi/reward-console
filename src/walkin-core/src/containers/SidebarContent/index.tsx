import * as React from 'react';
import { Menu } from 'antd';
import { Link, RouteComponentProps } from 'react-router-dom';
import { CustomScrollbars, Auxiliary, IntlMessages } from 'walkin-components';
import SidebarLogo from './SidebarLogo';
import 'walkin-hyperx/src/styles/styles.css';
import { withRouter } from 'react-router-dom';

import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE,
} from 'walkin-components/src/constants/ThemeSetting';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import * as jwt from 'jsonwebtoken';
import { CollapseSidebar } from 'shared';
// import { MenuTheme } from "antd/lib/menu";

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
  constructor(props: SidebarContentProps) {
    super(props);
    this.state = {
      orgId: '',
      userId: '',
    };
  }

  UNSAFE_componentWillMount() {
    const jwtToken = localStorage.getItem('jwt');
    const { id, org_id }: any = jwt.decode(jwtToken);
    this.setState({ userId: id, orgId: org_id });
  }

  getNoHeaderClass = (navStyle: any) => {
    if (
      navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR ||
      navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR
    ) {
      return 'gx-no-header-notifications';
    }
    return '';
  };

  getNavStyleSubMenuClass = (navStyle: any) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
      return 'gx-no-header-submenu-popup';
    }
    return '';
  };

  sidebarContentSwitcher = () => {
    const { themeType, navStyle, pathname } = this.props;
    const { orgId, userId } = this.state;

    const selectedKeys = pathname.substr(1);
    const defaultOpenKeys = selectedKeys.split('/');
    let isSettingsSideBar = defaultOpenKeys[1] === 'settings';

    let sidebarTheme = 'dark';
    if (themeType === THEME_TYPE_LITE || isSettingsSideBar)
      sidebarTheme = 'light';

    if (!isSettingsSideBar) {
      return (
        <div
          style={{ height: '100%' }}
          className="HyperX-Sidebar gx-sidebar-content"
        >
          <Menu
            style={{ height: '100%' }}
            defaultOpenKeys={[]}
            selectedKeys={[]}
            theme={themeType === THEME_TYPE_LITE ? 'light' : 'dark'}
            mode="inline"
          >
            <Menu.Item key="core">
              <Link to="/core">
                <i className="icon icon-apps" />
                <span>Core suite</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="core/users">
              <Link to="/core/users">
                <i className="icon icon-contacts" />
                {/* <IntlMessages id="sidebar.refinex" /> */}
                <span>User Info</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="organizationInfo">
              <Link
                to={`/core/organization/${orgId ? orgId : ''}`}
                // to="core/organization"
              >
                <i className="icon icon-inbox" />
                {/* <IntlMessages id="sidebar.nearx" /> */}
                <span>Organization Info</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="business-rules">
              <Link to={`/core/business-rules`}>
                <i className="icon icon-inbox" />
                <span>Rules</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="stores">
              <Link to={`/core/stores`}>
                <i className="icon icon-inbox" />
                <span>Stores</span>
              </Link>
            </Menu.Item>
          </Menu>
        </div>
      );
    }

    return (
      <Menu
        style={{ height: '100%', backgroundColor: '#F3F3F3' }}
        defaultOpenKeys={[defaultOpenKeys[2]]}
        selectedKeys={[defaultOpenKeys[3]]}
        // theme={sidebarTheme}
        mode="inline"
      >
        {/* <Menu.SubMenu
          key="profile"
          title={
            <span>
              {' '}
              <i className="icon icon-profile" /> <span>My Profile</span>{' '}
            </span>
          }
        ></Menu.SubMenu>

        <Menu.SubMenu
          key="account"
          title={
            <span>
              <i className="icon icon-setting" />
              <span>Account & Privacy Settings</span>
            </span>
          }
        ></Menu.SubMenu> */}

        <Menu.SubMenu
          style={{ backgroundColor: '#F3F3F3' }}
          key="developer"
          title={
            <span>
              <i className="icon icon-setting" />
              <span>Developer Settings</span>
            </span>
          }
        >
          <Menu.Item style={{ backgroundColor: '#F3F3F3' }} key="webhooks">
            <Link to="/core/settings/developer/webhooks">Webhooks</Link>
          </Menu.Item>
          <Menu.Item
            style={{ backgroundColor: '#F3F3F3' }}
            key="entity-extention"
          >
            <Link to="/core/settings/developer/entity-extention">
              Entity Management
            </Link>
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    );
  };

  render() {
    return (
      <Auxiliary>
        <SidebarLogo />
        <div style={{ height: '100%' }} className="gx-sidebar-content">
          {this.sidebarContentSwitcher()}
          {/* <CollapseSidebar className='collapseBarStyle' /> */}
        </div>
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
        languageId
        locale
        name
      }
      pathname
    }
  }
`;

export default withRouter(
  compose(
    graphql(GET_SETTINGS, {
      props: mapStateToProps,
      name: 'settings',
    })
  )(SidebarContent)
);
