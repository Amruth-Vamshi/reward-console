import * as React from 'react';
import { List, Col, Row } from 'antd';

const data = [
  {
    title: 'Survey Completion Rate',
    value: '86.56%',
  },
  {
    title: 'Responses',
    value: '0.87k',
  },
  {
    title: 'Partial Responses',
    value: '113',
  },
  {
    title: 'Avg Time Taken',
    value: '5.04',
  },
];

const LiveSurvey = () => {
  return (
    <List
      style={{ width: '100%' }}
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item style={{ marginRight: '16px', marginLeft: '20px' }}>
          <Row style={{ width: '100%' }}>
            <Col span={20} style={{ color: '#2E2E2E' }}>
              {item.title}
            </Col>
            <Col span={4} style={{ textAlign: 'end', color: '#2E2E2E' }}>
              {item.value}
            </Col>
          </Row>
        </List.Item>
      )}
    />
  );
};

export default LiveSurvey;
