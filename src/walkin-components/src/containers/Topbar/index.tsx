import * as React from "react";
import { Layout } from "antd";
import { Link, RouteComponentProps } from "react-router-dom";

import { CustomScrollbars } from "../../util/CustomScrollbars";
import languageData from "./languageData";
import UserInfo from "../../components/UserInfo";
import { Auxiliary } from "../../util/Auxiliary";
import "../../styles/styles.css";

import {
  NAV_STYLE_DRAWER,
  NAV_STYLE_FIXED,
  NAV_STYLE_MINI_SIDEBAR,
  TAB_SIZE
} from "../../constants/ThemeSetting";
import { compose, graphql } from "react-apollo";
import gql from "graphql-tag";
import { withRouter } from "react-router-dom";

const { Header } = Layout;

interface iProps extends RouteComponentProps {
  width: Number;
  navCollapsed: Boolean;
  navStyle: string;
  switchLanguage: any;
  toggleCollapsedSideNav: any;
  locale: string;
}

interface iState {
  searchText: string;
}

class Topbar extends React.Component<iProps, iState> {
  state = {
    searchText: ""
  };

  languageMenu = () => (
    <CustomScrollbars className="gx-popover-lang-scroll">
      <ul className="gx-sub-popover">
        {languageData.map(language => (
          <li
            className="gx-media gx-pointer"
            key={JSON.stringify(language)}
            onClick={e =>
              this.props.switchLanguage({
                variables: {
                  locale: language
                }
              })
            }
          >
            <i className={`flag flag-24 gx-mr-2 flag-${language.icon}`} />
            <span className="gx-language-text">{language.name}</span>
          </li>
        ))}
      </ul>
    </CustomScrollbars>
  );

  updateSearchChatUser = (evt: any) => {
    this.setState({
      searchText: evt.target.value
    });
  };

  getLocalHeaderStyle() {
    // console.log("TOPBAR>>> ", this.props)
    const { location } = this.props;
    const appName = location.pathname.split("/")[1];
    switch (appName) {
      case "nearx":
        return "NearX-Topbar";
      case "hyperx":
        return "HyperX-Topbar";
      case "rewardx":
        return "Rewardx-Topbar";
      case "core":
        return "HyperX-Topbar";
      case "refinex":
        return "RefineX-Topbar";
      default:
        return "";
    }
  }

  render() {
    const { locale, width, navCollapsed, navStyle } = this.props;
    return (
      <Auxiliary>
        <Header className={`${this.getLocalHeaderStyle()} `}>
          {navStyle === NAV_STYLE_DRAWER ||
          ((navStyle === NAV_STYLE_FIXED ||
            navStyle === NAV_STYLE_MINI_SIDEBAR) &&
            width < TAB_SIZE) ? (
            <div className="gx-linebar gx-mr-3" style={{ color: "#ffffff" }}>
              <i
                className="gx-icon-btn icon icon-menu"
                style={{ color: "#000000" }}
                onClick={() => {
                  this.props.toggleCollapsedSideNav({
                    variables: { navCollapsed: !navCollapsed }
                  });
                }}
              />
            </div>
          ) : null}
          <Link to="/" className="gx-d-block gx-d-lg-none gx-pointer">
            <img
              alt=""
              src={require("../../assets/images/walkin_logo_mini.png")}
              style={{ maxWidth: 40 }}
            />
          </Link>

          {/* <SearchBox
            styleName="gx-d-none gx-d-lg-block gx-lt-icon-search-bar-lg"
            placeholder="Search in app..."
            onChange={this.updateSearchChatUser.bind(this)}
            value={this.state.searchText}
          /> */}
          <ul className="gx-header-notifications gx-ml-auto">
            {/* <li className="gx-notify gx-notify-search gx-d-inline-block gx-d-lg-none">
              <Popover
                overlayClassName="gx-popover-horizantal"
                placement="bottomRight"
                content={
                  <SearchBox
                    styleName="gx-popover-search-bar"
                    placeholder="Search in app..."
                    onChange={this.updateSearchChatUser.bind(this)}
                    value={this.state.searchText}
                  />
                }
                trigger="click"
              >
                <span className="gx-pointer gx-d-block">
                  <i className="icon icon-search-new" />
                </span>
              </Popover>
            </li> */}
            {/* {width >= TAB_SIZE ? null : (
              <Auxiliary>
                <li className="gx-notify">
                  <Popover
                    overlayClassName="gx-popover-horizantal"
                    placement="bottomRight"
                    content={<AppNotification />}
                    trigger="click"
                  >
                    <span className="gx-pointer gx-d-block">
                      <i className="icon icon-notification" />
                    </span>
                  </Popover>
                </li>

                <li className="gx-msg">
                  <Popover
                    overlayClassName="gx-popover-horizantal"
                    placement="bottomRight"
                    content={<MailNotification />}
                    trigger="click"
                  >
                    <span className="gx-pointer gx-status-pos gx-d-block">
                      <i className="icon icon-chat-new" />
                      <span className="gx-status gx-status-rtl gx-small gx-orange" />
                    </span>
                  </Popover>
                </li>
              </Auxiliary>
            )} */}
            {/* <li className="gx-language">
              <Popover
                overlayClassName="gx-popover-horizantal"
                placement="bottomRight"
                content={this.languageMenu()}
                trigger="click"
              >
                <span className="gx-pointer gx-flex-row gx-align-items-center">
                  <i className={`flag flag-24 flag-${locale.icon}`} />
                  <span className="gx-pl-2 gx-language-name">
                    {locale.name}
                  </span>
                  <i className="icon icon-chevron-down gx-pl-2" />
                </span>
              </Popover>
            </li> */}
            <Auxiliary>
              <li className="gx-user-nav">
                <UserInfo />
              </li>
            </Auxiliary>
          </ul>
        </Header>
      </Auxiliary>
    );
  }
}

const mapStateToProps = ({ settings }: any) => {
  const { locale, navStyle, navCollapsed, width } = settings.settings;
  return { locale, navStyle, navCollapsed, width };
};

// export default connect(
//   mapStateToProps,
//   { toggleCollapsedSideNav, switchLanguage }
// )(Topbar);

const GET_SETTINGS = gql`
  query settings {
    settings @client {
      locale {
        locale
        name
        languageId
        icon
      }
      navStyle
      navCollapsed
      width
    }
  }
`;

const TOGGLE_COLLAPSED_SIDE_NAV = gql`
  mutation toggleCollapsedSideNav($navCollapsed: Boolean) {
    toggleCollapsedSideNav(navCollapsed: $navCollapsed) @client
  }
`;

const SWITCH_LANGUAGE = gql`
  mutation switchLanguage($locale: LocaleInput) {
    switchLanguage(locale: $locale) @client
  }
`;

export const TopbarModule = compose(
  withRouter,
  graphql(TOGGLE_COLLAPSED_SIDE_NAV, { name: "toggleCollapsedSideNav" }),
  graphql(SWITCH_LANGUAGE, { name: "switchLanguage" }),
  graphql(GET_SETTINGS, { props: mapStateToProps, name: "settings" })
)(Topbar);
