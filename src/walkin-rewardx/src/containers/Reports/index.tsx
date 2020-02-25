import * as React from 'react';
import moment from 'moment';
import { withApollo, ApolloProviderProps } from 'react-apollo';
// import { useQuery } from "@apollo/react-hooks";
import * as jwt from 'jsonwebtoken';
import { RouteChildrenProps } from 'react-router';

import { DatePicker, Button, message, Pagination, List } from 'antd';
import './style.css';
import Box from './Box';
import { REPORT_CONFIGS, REPORTS } from './../../query';

interface ReportsProps extends RouteChildrenProps, ApolloProviderProps<any> {
  loading?: boolean;
  reportConfigs?: any;
  refetch?: any;
}

interface ReportsState {
  reports?: Object[];
  organizationId?: string;
  selectedDates?: any;
  isFetching?: boolean;
  initLoading?: boolean;
  activeReportIndex?: any;
  // currentPage: number;
  // totalPages: number;
  // totalItems: number;
}

// const PAGE_SIZE = 8;
class Reports extends React.Component<ReportsProps, ReportsState> {
  constructor(props: ReportsProps) {
    super(props);
    this.state = {
      reports: [],
      organizationId: '',
      selectedDates: {},
      // currentPage: 1,
      // totalPages: 0,
      // totalItems: 0,
      initLoading: true,
    };
  }

  UNSAFE_componentWillMount() {
    const jwtToken: any = localStorage.getItem('jwt');
    const roles: any = localStorage.getItem('role');
    if (['ADMIN', 'Finance'].includes(roles)) {
      const { org_id }: any = jwt.decode(jwtToken);
      this.getReports(org_id, reportsResponse => {
        this.setState({
          initLoading: false,
          organizationId: org_id,
          reports: reportsResponse.data.reportConfigs,
          // totalPages:
          //   reportsResponse.data.reportConfigs.paginationInfo.totalPages,
          // totalItems:
          //   reportsResponse.data.reportConfigs.paginationInfo.totalItems,
        });
      });
    } else {
      message.warn('You do not have access to this page');
      this.props.history.push({
        pathname: '/rewardx/customer_search',
      });
    }
  }

  getReports = (organizationId: string, callback) => {
    this.props.client
      .query({
        query: REPORT_CONFIGS,
        variables: {
          organizationId,
          //   pageOptions: {
          //     page: this.state.currentPage,
          //     pageSize: PAGE_SIZE
          //  },
        },
        fetchPolicy: 'network-only',
      })
      .then(reportsResponse => {
        callback(reportsResponse);
      });
  };

  getDownloadLink = reportIndex => {
    console.log(this.state.reports[reportIndex]);

    this.setState({ isFetching: true, activeReportIndex: reportIndex }, () => {
      let { selectedDates } = this.state;
      const { org_id }: any = jwt.decode(localStorage.getItem('jwt'));
      let inputVariables = {
        reportDate: selectedDates[reportIndex],
        reportConfigId: this.state.reports[reportIndex]['id'],
        organizationId: org_id,
      };
      this.props.client
        .query({
          query: REPORTS,
          variables: inputVariables,
          fetchPolicy: 'network-only',
        })
        .then(reportsResponse => {
          this.setState({ isFetching: false, activeReportIndex: null });
          if (
            !reportsResponse.data.reports.length &&
            !reportsResponse.data.reports.length[0].reportFile.publicUrl
          ) {
            message.info('Report not found');
            return;
          }
          this.onDownloadFileFromLink(
            reportsResponse.data.reports[0].reportFile.publicUrl
          );
        })
        .catch(error => {
          message.info('Report not available for selected date');
        });
    });
  };

  onDownloadFileFromLink = url => {
    const link = document.createElement('a');
    link.href = url;
    link.download = 'myreport';
    link.target = '_blank';
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
    return current && current > moment().endOf('day');
  };

  rendeReportsList = () => {
    return (
      <List
        loading={this.state.initLoading}
        itemLayout="vertical"
        size="large"
        dataSource={this.state.reports}
        renderItem={(item: any, reportIndex: number) => {
          return (
            <div className={'reports-list-wrapper'}>
              <Box key={reportIndex} width={'90%'} border={'1px solid #707070'}>
                <Box
                  width="45%"
                  border="0px solid"
                  display="block"
                  padding={0}
                  margin={'0'}
                >
                  <p className="reports-name">{item.name}</p>
                  <p className="reports-description">{item.description}</p>
                </Box>
                <Box
                  width="35%"
                  border="0px solid"
                  padding={0}
                  margin={'0'}
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
            </div>
          );
        }}
      />
    );
  };

  // onChangePage = (page: number) => {
  //   this.setState(
  //     {
  //       currentPage: page,
  //       initLoading: true,
  //     },
  //     () => {
  //       this.getReports(this.state.organizationId, reportsResponse => {
  //         this.setState({
  //           initLoading: false,
  //           reports: reportsResponse.data.reportConfigs.data,
  //           totalPages:
  //             reportsResponse.data.reportConfigs.paginationInfo.totalPages,
  //           totalItems:
  //             reportsResponse.data.reportConfigs.paginationInfo.totalItems,
  //         });
  //       });
  //     }
  //   );
  // };

  render() {
    // let { totalItems, currentPage, totalPages } = this.state;
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
        {/* {totalPages > 1 ? (
          <div className={'reports-list-wrapper'}>
            <Box width={'90%'} justifyContent="flex-end" border={'0px'}>
              <Pagination
                onChange={page => this.onChangePage(page)}
                pageSize={PAGE_SIZE}
                total={totalItems}
                current={currentPage}
              />
            </Box>
          </div>
        ) : null} */}
      </div>
    );
  }
}

export default withApollo(Reports);
