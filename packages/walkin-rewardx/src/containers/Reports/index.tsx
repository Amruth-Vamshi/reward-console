import * as React from "react";
import moment from "moment";
import {
  withApollo,
  graphql,
  compose,
  Query,
  ApolloProviderProps
} from "react-apollo";
// import { useQuery } from "@apollo/react-hooks";
import * as jwt from "jsonwebtoken";
import { RouteChildrenProps, withRouter } from "react-router";

import { DatePicker, Button, Spin, message } from "antd";
import "./style.css";
import Box from "./Box";
import { REPORT_CONFIGS, REPORTS } from "./../../query";

interface ReportsProps extends RouteChildrenProps, ApolloProviderProps<any> {
  loading?: boolean;
  reportConfigs?: any;
}

interface ReportsState {
  selectedDates?: any;
  isFetching?: boolean;
  activeReportIndex?: any;
}

class Reports extends React.Component<ReportsProps, ReportsState> {
  constructor(props: ReportsProps) {
    super(props);
    this.state = {
      selectedDates: {}
    };
  }

  getDownloadLink = reportIndex => {
    this.setState({ isFetching: true, activeReportIndex: reportIndex }, () => {
      let { selectedDates } = this.state;
      const { org_id }: any = jwt.decode(localStorage.getItem("jwt"));
      let inputVariables = {
        reportDate: selectedDates[reportIndex],
        reportConfigId: this.props.reportConfigs[reportIndex].id,
        organizationId: org_id
      };
      this.props.client
        .query({
          query: REPORTS,
          variables: inputVariables,
          fetchPolicy: "network-only"
        })
        .then(reportsResponse => {
          this.setState({ isFetching: false, activeReportIndex: null });
          if (
            !reportsResponse.data.reports.length &&
            !reportsResponse.data.reports.length[0].reportFile.publicUrl
          ) {
            message.info("Report not found");
            return;
          }
          this.onDownloadFileFromLink(
            reportsResponse.data.reports[0].reportFile.publicUrl
          );
        })
        .catch(error => {
          message.info("Report not available for selected date");
        });
    });
  };

  onDownloadFileFromLink = url => {
    const link = document.createElement("a");
    link.href = url;
    link.download = "myreport";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  onSelectDate = (date, dateString, reportIndex) => {
    let { selectedDates } = this.state;
    selectedDates[reportIndex] = dateString;
    this.setState({ selectedDates });
  };

  disabledDate = current => {
    return current && current > moment().endOf("day");
  };

  rendeReportsList = () => {
    if (this.props.loading)
      return (
        <div className={"reports-list-wrapper"}>
          <Box
            width={"90%"}
            justifyContent={"center"}
            border={"1px solid #707070"}
          >
            <Spin size="large" />
          </Box>
        </div>
      );
    else if (!this.props.reportConfigs && !this.props.reportConfigs.length)
      return (
        <div className={"reports-list-wrapper"}>
          <Box
            width={"90%"}
            justifyContent={"center"}
            border={"1px solid #707070"}
            padding={30}
          >
            No Reports yet
          </Box>
        </div>
      );
    else {
      return (
        <div className={"reports-list-wrapper"}>
          {this.props.reportConfigs.map((item, reportIndex) => (
            <Box key={reportIndex} width={"90%"} border={"1px solid #707070"}>
              <Box
                width="45%"
                border="0px solid"
                display="block"
                padding={0}
                margin={"0"}
              >
                <p className="reports-name">{item.name}</p>
                <p className="reports-description">{item.description}</p>
              </Box>
              <Box
                width="35%"
                border="0px solid"
                padding={0}
                margin={"0"}
                minWidth={270}
                maxWidth={280}
              >
                <span className="reports-description">Select date</span>
                <DatePicker
                  disabledDate={this.disabledDate}
                  onChange={(date, dateString) => {
                    this.onSelectDate(date, dateString, reportIndex);
                  }}
                />
              </Box>
              <Button
                disabled={!this.state.selectedDates[reportIndex]}
                loading={
                  this.state.isFetching &&
                  reportIndex === this.state.activeReportIndex
                }
                className="no-button-bottom-margin"
                onClick={() => {
                  this.getDownloadLink(reportIndex);
                }}
                type="primary"
              >
                DOWNLOAD
              </Button>
            </Box>
          ))}
        </div>
      );
    }
  };

  render() {
    return (
      <div className="gx-main-content-wrapper">
        <div className="reports-flex-row reports-justify-content-space-between margin-bottom-30">
          <div className="reports-title">Reports</div>
          <Button
            disabled
            className="no-button-bottom-margin reports-auto-schedule-button"
          >
            AUTO SCHEDULE
          </Button>
        </div>
        {this.rendeReportsList()}
      </div>
    );
  }
}

export default withRouter(
  compose(
    graphql(REPORT_CONFIGS, {
      options: () => {
        const { org_id }: any = jwt.decode(localStorage.getItem("jwt"));
        return {
          variables: {
            organizationId: org_id
          },
          fetchPolicy: "network-only"
        };
      },
      props: ({ data: { loading, error, reportConfigs, refetch } }: any) => ({
        loading,
        reportConfigs,
        error,
        refetch
      })
    })
  )(withApollo(Reports))
);
