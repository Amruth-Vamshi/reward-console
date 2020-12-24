import React from 'react';
import './style.css';
import { Row, Col } from 'antd';
import Button from '../../../components/shared/Button';
import { Link } from 'react-router-dom';

export default () => (
  <React.Fragment>
    <Row gutter={16}>
      <Col span={24}>
        <p className="nn-header">Customer Notifications</p>
      </Col>
    </Row>

    <Row
      gutter={16}
      style={{
        paddingBottom: '20px',
        borderBottom: '0.5px solid #DCE7E4',
        marginBottom: '20px',
      }}
    >
      <Col xs={{ span: 24 }} sm={{ span: 12 }}>
        <p className="nn-sub-header">
          Customer Notifications, Triggered by the associated actions
        </p>
      </Col>

      <Col xs={{ span: 24 }} sm={{ span: 12 }}>
        <div className="notification-edit">
          <div className="edit-text">
            Currently notifies on every earn and sends expiry reminder
          </div>

          <Link to="/engage/notification">
            <Button style="btnn-secondary" size="btnn-small">
              Edit
            </Button>
          </Link>
        </div>
      </Col>
    </Row>
  </React.Fragment>
);
