import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { CustomScrollbars, Auxiliary, IntlMessages } from '@walkinsole/walkin-components';
import SidebarLogo from './SidebarLogo';

import UserProfile from './UserProfile';
import AppsNavigation from './AppsNavigation';
import { withRouter } from 'react-router-dom';
import camelCase from 'lodash/camelCase';

import {
	NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
	NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
	THEME_TYPE_LITE,
} from '@walkinsole/walkin-components/src/constants/ThemeSetting';
import { compose, graphql, withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import jwt from "jsonwebtoken";

class SidebarContent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			orgId: '',
		};
	}

	componentWillMount() {
		const { id, org_id } = jwt.decode(localStorage.getItem("jwt"));
		this.setState({ userId: id, orgId: org_id });
	}

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
				<div style={{ height: '100%' }} className="gx-sidebar-content">
					<Menu
						style={{ height: '100%' }}
						defaultOpenKeys={[defaultOpenKeys]}
						selectedKeys={[selectedKeys]}
						theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
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
								to={`/core/organization/${this.state.orgId ? this.state.orgId : ''}`}
							// to="core/organization"
							>
								<i className="icon icon-inbox" />
								{/* <IntlMessages id="sidebar.nearx" /> */}
								<span>Organization Info</span>
							</Link>
						</Menu.Item>
						{/* <Menu.Item key="customerInfo">
              <Link to="/cust">
                <i className="icon icon-auth-screen" />
                Customer Info
							</Link>
            </Menu.Item> */}
						<Menu.Item key="help">
							{/* <Link to="/nearx"> */}
							<i className="icon icon-queries" />
							<span>Help</span>
							{/* </Link> */}
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
				languageId
				locale
				name
			}
			pathname
		}
	}
`;

export default withRouter(
	withApollo(
		compose(
			graphql(GET_SETTINGS, {
				props: mapStateToProps,
				name: 'settings',
			})
		)(SidebarContent)
	)
);
