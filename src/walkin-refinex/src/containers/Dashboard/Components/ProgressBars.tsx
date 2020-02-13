import * as React from 'react';
import { Col, Row, Progress } from 'antd';

const data = [
  {
    title: 'Promoters',
    color: '#46CB92',
    percent: 55,
    iconComponent: require('walkin-refinex/src/Icons/happy.svg'),
  },
  {
    title: 'Neutrals',
    color: '#FCAD78',
    percent: 20,
    iconComponent: require('walkin-refinex/src/Icons/neutral.svg'),
  },
  {
    title: 'Detractors',
    color: '#E96B81',
    percent: 35,
    iconComponent: require('walkin-refinex/src/Icons/unhappy.svg'),
  },
];

const ProgressBars = (value: any) => {
  return (
    <div style={{ width: '100%' }}>
      <Row
        style={{
          backgroundColor: value.backgroundColor,
          marginLeft: '1px',
          paddingTop: '8px',
          paddingBottom: '8px',
        }}
      >
        <Col
          span={8}
          style={{ textAlign: 'start', fontWeight: 'bold', fontSize: '14px' }}
        >
          {value.title}
        </Col>
      </Row>
      <Row
        style={{
          height: '18px',
          backgroundColor: value.backgroundColor,
          marginLeft: '1px',
        }}
      ></Row>
      <Row
        style={{
          backgroundColor: value.backgroundColor,
          marginLeft: '1px',
          padding: '5px 16px 18px 5px',
        }}
      >
        <div style={{ width: '100%' }}>
          <Col span={24}>
            {data.map((element, index) => {
              return (
                <Row
                  key={index}
                  style={{ paddingTop: '15px', paddingBottom: '15px' }}
                >
                  <Col span={4}>
                    <img
                      src={element.iconComponent}
                      style={{
                        height: '42px',
                        width: '42px',
                        marginTop: '-10px',
                      }}
                    />
                  </Col>
                  <Col span={20}>
                    <Progress
                      type={'line'}
                      showInfo={true}
                      strokeColor={element.color}
                      percent={element.percent}
                    />
                  </Col>
                </Row>
              );
            })}
          </Col>
        </div>
      </Row>
    </div>
  );
};

export default ProgressBars;
