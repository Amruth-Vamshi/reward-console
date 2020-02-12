import React from 'react';
import { Row, Col, Icon } from 'antd';

const CounterCard = ({
  title,
  subTitle,
  titleColor,
  subtitleColor,
  showComaprison,
}) => {
  return (
    <div
      style={{
        backgroundColor: '#FFFFFF ',
        height: '105px',
        borderRadius: '4px',
      }}
    >
      <div style={{ paddingTop: '15px' }}>
        <Row>
          <Col span={10}>
            <div
              style={{
                color: titleColor,
                fontSize: '28px',
                paddingLeft: '10px',
                fontWeight: 500,
              }}
            >
              {title}
            </div>
          </Col>
          {showComaprison === true && (
            <Col span={14} style={{ textAlign: 'end' }}>
              <div style={{ marginRight: '10px', paddingTop: '6px' }}>
                <span style={{ fontSize: '18px', color: '#2E2E2E' }}>
                  <Icon type="caret-up" style={{ color: '#46CB92' }} />
                  2/
                </span>
                <span style={{ fontSize: '10px', color: '#2E2E2E' }}>
                  since yesterday
                </span>
              </div>
            </Col>
          )}
        </Row>
        <div
          style={{
            color: subtitleColor,
            marginTop: '12px',
            paddingRight: '1px',
            paddingBottom: '2px',
            width: '100%',
            paddingLeft: '10px',
          }}
        >
          <p style={{ fontWeight: 100, fontSize: '12px' }}>{subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default CounterCard;
