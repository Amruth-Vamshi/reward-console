import * as React from 'react';
import { withApollo, ApolloProviderProps } from 'react-apollo';
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
}

// const PAGE_SIZE = 8;
class Reports extends React.Component<ReportsProps, ReportsState> {
  constructor(props: ReportsProps) {
    super(props);
    this.state = {
      reports: [],
      organizationId: '',
      selectedDates: {},
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

  render() {
    return (
      <div className="gx-main-content-wrapper">
        <div className="reports-flex-row reports-justify-content-space-between margin-bottom-30">
          <div className="reports-title">Date Range Reports</div>
          <div />
          {}
        </div>
        {this.rendeReportsList()}
        {}
      </div>
    );
  }
}

export default withApollo(Reports);
