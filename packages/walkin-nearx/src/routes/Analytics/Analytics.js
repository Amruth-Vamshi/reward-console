import React from "react";
import { Col, Row, Card } from "antd";
import Auxiliary from "../../util/Auxiliary";

const Device = ({ match }) => {
  return (
    <Auxiliary>
      <Row>
        <Col span={24}>
          <div className="gx-card">
            <div className="gx-card-body">
              <Card title="Analytics Data">
                <div>Device Analytics Here</div>
              </Card>
            </div>
          </div>
        </Col>
      </Row>
    </Auxiliary>
  );
};

export default Device;
