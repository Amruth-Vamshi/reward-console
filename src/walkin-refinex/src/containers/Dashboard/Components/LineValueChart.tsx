import * as React from 'react';
import {
  Line,
  LineChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Row, Col, Icon } from 'antd';

const data = [
  { name: '27/11', csat: 0, nps: -100, amt: 2400 },
  { name: '28/11', csat: 3.5, nps: -45, amt: 2210 },
  { name: '29/11', csat: 9, nps: 56, amt: 2290 },
  { name: '30/11', csat: 7, nps: 69, amt: 2000 },
  { name: '01/12', csat: 4, nps: 47, amt: 2181 },
  { name: '02/12', csat: 5.2, nps: 86, amt: 2500 },
  { name: '03/12', csat: 6, nps: 95, amt: 2100 },
];

const LineValueChart = (value: any) => {
  return (
    <div style={{ width: '100%' }}>
      <Row
        style={{
          backgroundColor: value.backgroundColor,
          marginRight: '1px',
          paddingTop: '8px',
          paddingBottom: '8px',
        }}
      >
        <Col
          span={15}
          style={{ textAlign: 'start', fontWeight: 'bold', fontSize: '14px' }}
        >
          {value.title}
        </Col>
        {value.showRange === true && (
          <Col span={9}>
            <div style={{ textAlign: 'end' }}>
              <div
                style={{
                  float: 'left',
                  paddingLeft: '1px',
                  paddingRight: '1px',
                }}
              >
                <span style={{ color: '#666666', fontSize: '14px' }}>Max</span>{' '}
                <Icon type="caret-up" style={{ color: '#46CB92' }} />{' '}
                <span style={{ color: '#333333', fontSize: '14px' }}>42</span>
              </div>
              <div
                style={{
                  float: 'right',
                  paddingLeft: '1px',
                  paddingRight: '1px',
                }}
              >
                <span style={{ color: '#666666', fontSize: '14px' }}>Min</span>{' '}
                <Icon type="caret-down" style={{ color: '#E96B81' }} />{' '}
                <span style={{ color: '#333333', fontSize: '14px' }}>57</span>
              </div>
            </div>
          </Col>
        )}
      </Row>
      <Row
        style={{
          backgroundColor: value.backgroundColor,
          marginRight: '1px',
          padding: '5px 16px 18px 5px',
        }}
      >
        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            data={data}
            margin={{ top: 10, right: 0, left: -15, bottom: 0 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Line
              dataKey={value.chartType}
              stroke={value.strokeColor}
              fill={value.strokeColor}
            />
          </LineChart>
        </ResponsiveContainer>
      </Row>
    </div>
  );
};

export default LineValueChart;
