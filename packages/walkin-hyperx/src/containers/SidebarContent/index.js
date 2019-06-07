import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

import { CustomScrollbars, Auxiliary, IntlMessages } from '@walkinsole/walkin-components';
import SidebarLogo from './SidebarLogo';

import UserProfile from './UserProfile';
import AppsNavigation from './AppsNavigation';
import { withRouter } from 'react-router-dom';

import {
	NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
	NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
	THEME_TYPE_LITE,
} from '@walkinsole/walkin-components/src/constants/ThemeSetting';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';

const SubMenu = Menu.SubMenu;

class SidebarContent extends Component {
	getNoHeaderClass = navStyle => {
		if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR || navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) {
			return 'gx-no-header-notifications';
		}
		return '';
	};
	getNavStyleSubMenuClass = navStyle => {
		if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
			return 'gx-no-header-submenu-popup';
		}
		return '';
	};

	render() {
		const { themeType, navStyle, pathname } = this.props;
		const selectedKeys = pathname.substr(1);
		const defaultOpenKeys = selectedKeys.split('/')[1];
		return (
			<Auxiliary>
				<SidebarLogo />
				<div className="gx-sidebar-content">
					<div className={`gx-sidebar-notifications ${this.getNoHeaderClass(navStyle)}`}>
						<UserProfile />
						<AppsNavigation />
					</div>
					<Menu
						defaultOpenKeys={[defaultOpenKeys]}
						selectedKeys={[selectedKeys]}
						theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
						mode="inline"
					>
						<Menu.Item key="core">
							<Link to="/core">
								<i className="icon icon-setting" />
								{/* <IntlMessages id="sidebar.samplePage" /> */}
								Core
							</Link>
						</Menu.Item>
						<SubMenu
							key="hyperx"
							title={
								<span>
									{' '}
									<i className="icon icon-dasbhoard" />
									<span>HyperX</span>
								</span>
							}
						>
							<Menu.Item key="hyperx/campaigns">
								<Link to="/hyperx/campaigns">
									<i className="icon icon-listing-dbrd" />
									Campaigns
								</Link>
							</Menu.Item>

							<Menu.Item key="hyperx/segments">
								<Link to="/hyperx/segments">
									<i className="icon icon-crypto" />
									Segments
								</Link>
							</Menu.Item>
							<Menu.Item key="main/dashboard/listing">
								<a to="/main/dashboard/listing">
									<i className="icon icon-listing-dbrd" />
									Offers
								</a>
							</Menu.Item>
							<Menu.Item key="main/dashboard/crm">
								<a to="/main/dashboard/crm">
									<i className="icon icon-crm" />
									Analytics
								</a>
							</Menu.Item>
							<Menu.Item key="main/dashboard/setting">
								<a to="/main/dashboard/listing">
									<i className="icon icon-listing-dbrd" />
									Settings
								</a>
							</Menu.Item>
						</SubMenu>
						<Menu.Item key="refinex">
							<Link to="/refinex">
								<i className="icon icon-select" />
								{/* <IntlMessages id="sidebar.samplePage" /> */}
								RefineX
							</Link>
						</Menu.Item>
						<Menu.Item key="nearx">
							<Link to="/nearx">
								<i className="icon icon-geo-location" />
								{/* <IntlMessages id="sidebar.samplePage" /> */}
								NearX
							</Link>
						</Menu.Item>
					</Menu>
				</div>
			</Auxiliary>
		);
	}
}

SidebarContent.propTypes = {};

const mapStateToProps = ({ settings, ownProps }) => {
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
		name: 'settings',
	})
)(SidebarContent);
