import * as React from 'react';
import { withApollo, ApolloProviderProps } from 'react-apollo';
// import { useQuery } from "@apollo/react-hooks";
import * as jwt from 'jsonwebtoken';
import { RouteChildrenProps } from 'react-router';

import { DatePicker, Button, message, Pagination, List } from 'antd';
import './style.css';
import Box from './Box';
import Iframe from 'react-iframe';
import axios from 'axios';

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
          reports: reportsResponse.data,
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

  getReports = async (organizationId: string, callback) => {
    console.log(process.env);
    var data = { organizationId: organizationId };
    await axios
      .post(`${process.env.REACT_APP_WCORE_API}metabase-report`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
      })
      .then(reportsResponse => {
        callback(reportsResponse);
      });
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
              <Box key={reportIndex} width={'90%'}>
                <Iframe
                  url={item.iframeUrl}
                  width="1500"
                  height="500"
                  frameBorder={0}
                ></Iframe>
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
          <div className="reports-title">Date Range Reports</div>
          <div />
          {/* <Button
            disabled
            className="no-button-bottom-margin reports-auto-schedule-button"
          >
            AUTO SCHEDULE
          </Button> */}
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
