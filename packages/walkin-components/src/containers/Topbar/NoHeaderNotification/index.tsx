import React, { Component } from "react";

import IntlMessages from "../../../util/IntlMessages";
import gql from "graphql-tag";
import { compose, graphql } from "react-apollo";

interface IProps {
  navCollapsed?;
  toggleCollapsedSideNav?;
}
interface IState {}
class NoHeaderNotification extends Component<IProps, IState> {
  render() {
    const { navCollapsed } = this.props;
    return (
      <div className="gx-no-header-horizontal">
        <div className="gx-d-block gx-d-lg-none gx-linebar gx-mr-xs-3">
          <i
            className="gx-icon-btn icon icon-menu"
            onClick={() => {
              this.props.toggleCollapsedSideNav(!navCollapsed);
            }}
          />
        </div>
        <div className="gx-no-header-horizontal-top">
          <div className="gx-no-header-horizontal-top-center">
            <i className="icon icon-alert gx-mr-3" />
            <p className="gx-mb-0 gx-text-truncate">
              <IntlMessages id="app.announced" />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ settings }: any) => {
  const { navCollapsed } = settings.settings;
  return { navCollapsed };
};
// export default connect(
//   mapStateToProps,
//   { toggleCollapsedSideNav }
// )(NoHeaderNotification);

const GET_SETTINGS = gql`
  query settings {
    settings @client {
      navCollapsed
    }
  }
`;

const TOGGLE_COLLAPSED_SIDE_NAV = gql`
  mutation toggleCollapsedSideNav($navCollapsed: Boolean) {
    toggleCollapsedSideNav(navCollapsed: $navCollapsed) @client
  }
`;

export const NoHeaderNotificationModule = compose(
  graphql(TOGGLE_COLLAPSED_SIDE_NAV, { name: "toggleCollapsedSideNav" }),
  graphql(GET_SETTINGS, {
    props: mapStateToProps,
    name: "settings"
  })
)(NoHeaderNotification);
