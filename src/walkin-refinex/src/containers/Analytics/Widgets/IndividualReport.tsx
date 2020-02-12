import * as React from 'react';
import {
  Col,
  Row,
  DatePicker,
  Button,
  Icon,
  Empty,
  Spin,
  Table,
  Card,
  Select,
  Radio,
  Typography,
  Progress,
} from 'antd';
import {
  IconWithTextCard,
  Widget,
  ChartCard,
  Auxiliary,
  WidgetHeader,
} from 'walkin-components';
import { graphql, compose, withApollo } from 'react-apollo';
import { GET_ANALYTICS } from 'walkin-core/src/PlatformQueries';
import moment from 'moment';
import * as jwt from 'jsonwebtoken';
import Cylinder3DChart from 'walkin-nearx/src/routes/Dashboard/Cylinder3DChart';
import PieChartWithAngle from '../Charts/PieChartWithPaddingAngle';
import PieChartActiveShape from '../Charts/CustomActiveShapePieChart';
import SimpleRadialBarChart from '../Charts/SimpleRadialBarChart';
import MixBarChart from '../Charts/StackedBarChart';
const dateFormat = 'YYYY/MM/DD';
export default class analytics extends React.Component {
  handleChange = (e: any) => {
    console.log(e);
  };
  render() {
    const { Text } = Typography;
    const { Option } = Select;

    const children = [];
    for (let i = 10; i < 36; i++) {
      children.push(
        <Option key={i.toString(36) + i} value={i}>
          {'CCD Feedback' + i}
        </Option>
      );
    }
    return (
      <Widget
        title="Individual Form Report"
        style={{
          backgroundColor: 'white',
          margin: '0px 30px 0px 30px',
        }}
        styleName="gx-card-tabs"
        extra={
          <React.Fragment>
            <Row>
              <div className="ant-row-flex gx-px-2 gx-pt-2">
                <div className="gx-ml-auto">
                  <Text
                    style={{
                      marginRight: '15px',
                    }}
                    disabled
                  >
                    Filter by
                  </Text>
                  <Select
                    className="gx-mb-2 gx-select-lg"
                    defaultValue="month"
                    onChange={this.handleChange}
                  >
                    <Option value="month">Age 25-35</Option>
                  </Select>
                </div>
              </div>
              <div className="ant-row-flex gx-px-2 gx-pt-2">
                <div className="gx-ml-auto">
                  <Select
                    className="gx-mb-2 gx-select-lg"
                    defaultValue="month"
                    onChange={this.handleChange}
                  >
                    <Option value="month">Monthly</Option>
                    <Option value="week">Weekly</Option>
                    <Option value="year">Yearly</Option>
                  </Select>
                </div>
              </div>
            </Row>
          </React.Fragment>
        }
      >
        <Row>
          <Col lg={13} md={13} sm={24} xs={24}>
            <div className="gx-mb-2  gx-pt-2">
              <Text
                disabled
                style={{
                  marginBottom: '15px',
                }}
              >
                Choose Form
              </Text>
            </div>
            <div>
              <Select
                defaultValue="CCD Feedback 1"
                style={{ width: '100%' }}
                onChange={this.handleChange}
              >
                {children}
              </Select>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={13} md={13} sm={24} xs={24}>
            <Row>
              <Col
                style={{
                  marginTop: '4rem',
                }}
                lg={8}
                md={8}
                sm={12}
                xs={12}
              >
                <div className="ant-row-flex">
                  <h2 className="gx-mr-2 gx-mb-0 gx-fs-xxxl gx-font-weight-medium">
                    179,626
                  </h2>
                </div>
                <p
                  style={{
                    marginTop: '1rem',
                  }}
                  className="gx-text-grey"
                >
                  Request Sent
                </p>
              </Col>
              <Col
                style={{
                  marginTop: '4rem',
                }}
                lg={8}
                md={8}
                sm={12}
                xs={12}
              >
                <div className="ant-row-flex">
                  <h2 className="gx-mr-2 gx-mb-0 gx-fs-xxxl gx-font-weight-medium">
                    112,221
                  </h2>
                </div>
                <p
                  style={{
                    marginTop: '1rem',
                  }}
                  className="gx-text-grey"
                >
                  Clicks Opened
                </p>
              </Col>
              <Col
                style={{
                  marginTop: '4rem',
                }}
                lg={8}
                md={8}
                sm={12}
                xs={12}
              >
                <div className="ant-row-flex">
                  <h2 className="gx-mr-2 gx-mb-0 gx-fs-xxxl gx-font-weight-medium">
                    171,211
                  </h2>
                </div>
                <p
                  style={{
                    marginTop: '1rem',
                  }}
                  className="gx-text-grey"
                >
                  Response Rate
                </p>
              </Col>
              <Col
                style={{
                  marginTop: '4rem',
                }}
                lg={8}
                md={8}
                sm={12}
                xs={12}
              >
                <div className="ant-row-flex">
                  <h2 className="gx-mr-2 gx-mb-0 gx-fs-xxxl gx-font-weight-medium">
                    70.01%
                  </h2>
                </div>
                <p
                  style={{
                    marginTop: '1rem',
                  }}
                  className="gx-text-grey"
                >
                  Completion Rate
                </p>
              </Col>
              <Col
                style={{
                  marginTop: '4rem',
                }}
                lg={8}
                md={8}
                sm={12}
                xs={12}
              >
                <div className="ant-row-flex">
                  <h2 className="gx-mr-2 gx-mb-0 gx-fs-xxxl gx-font-weight-medium">
                    22%
                  </h2>
                </div>
                <p
                  style={{
                    marginTop: '1rem',
                  }}
                  className="gx-text-grey"
                >
                  Avg. Time for Completion
                </p>
              </Col>
            </Row>
          </Col>
          <Col lg={11} md={11} sm={24} xs={24}>
            <div
              style={{
                marginLeft: '10rem',
              }}
            >
              <Progress
                type="dashboard"
                width={250}
                gapDegree={100}
                percent={25}
                format={percent => (
                  <React.Fragment>
                    <p></p>
                    <Text style={{ fontSize: '25px' }}>{percent}</Text>
                    <br />
                    <Text style={{ fontSize: '25px' }}>NPS rate</Text>
                  </React.Fragment>
                )}
              />
              {/* <SimpleRadialBarChart /> */}
            </div>
          </Col>
        </Row>
        <Row
          style={{
            marginTop: '10px',
          }}
        >
          <Col lg={12} md={13} sm={24} xs={24}>
            <Row>
              <Col lg={12} md={12} sm={24} xs={24}>
                <Text>Device Split-</Text>
              </Col>
              <Col lg={12} md={12} sm={24} xs={24}></Col>
            </Row>
            <Row>
              <Col lg={20} md={20} sm={24} xs={24}>
                <Text>Audience Split-</Text>
              </Col>
            </Row>
          </Col>
          <Col lg={12} md={11} sm={24} xs={24}>
            <div className="gx-mb-2  gx-pt-2">
              <Text
                style={{
                  marginBottom: '15px',
                }}
              >
                Issue Tag Response
              </Text>
            </div>
            <MixBarChart />
          </Col>
        </Row>
      </Widget>
    );
  }
}
