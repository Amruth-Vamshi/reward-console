import React, { Component } from "react";
import { Col, Row, Button, Select, Modal } from "antd";
import { withRouter, Redirect } from "react-router-dom";
import {
  Area,
  AreaChart,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip
} from "recharts";
import {
  ChartCard,
  Auxiliary,
  Portfolio,
  BalanceHistory,
  SendMoney,
  RewardCard,
  CurrencyCalculator,
  CryptoNews,
  DownloadMobileApps,
  OrderHistory,
  CardBox,
  ErrorBoundary
} from "@walkinsole/walkin-components";
import { increamentData, lineData } from "../../Dashboard/data";
import gql from "graphql-tag";
import { compose, withApollo, Mutation, graphql } from "react-apollo";
import CreateCampaignRow from "./CreateCampaignRow";
import CampaignOverviewGrid from "./CampaignOverviewGrid";
class CampaignOverview extends Component {
  render() {
    const { history, match, auth } = this.props;

    return (
      <ErrorBoundary>
        {/* <CreateCampaignRow
          createFeedbackCampaign={this.createFeedbackCampaign}
          auth={auth}
          history={history}
        /> */}
        <CampaignOverviewGrid auth={auth} history={history} />
      </ErrorBoundary>
    );
  }
}

const GET_USER_IDENTITY = gql`
  query auth {
    auth {
      userId
      organizationId
    }
  }
`;

export default compose(
  graphql(GET_USER_IDENTITY, {
    name: "auth"
  })
)(CampaignOverview);
