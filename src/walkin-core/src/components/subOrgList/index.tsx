import * as React from "react";
import { Button, List, Row, Avatar, Col, Card, Empty, Icon } from "antd";
import "./style.css";
import { object } from "prop-types";
const org = require("walkin-components/src/assets/images/org.png");

const SubOrgDetails = ({
  subOrgDetails,
  onNewSubOrg,
  onSubOrgCardClick,
  onSubOrgDelete
}: any) => {
  return (
    <React.Fragment>
      <div className="subOrgButtonContainer">
        <Button onClick={onNewSubOrg} type="primary">
          New Sub Organization
        </Button>
      </div>
      {subOrgDetails && subOrgDetails.length ? (
        <List
          grid={{ gutter: 16, column: 2 }}
          dataSource={subOrgDetails}
          renderItem={(val: any) => (
            <List.Item
              onClick={e => {
                e.preventDefault();
                e.stopPropagation();
                onSubOrgCardClick(val.id);
              }}
            >
              <Card className="gx-product-item subOrgCardDetails">
                <Row gutter={8}>
                  <Col span={4}>
                    <Avatar size={64} shape="square" src={org} icon="user" />
                  </Col>
                  <Col span={19}>
                    <p className="gx-mb-0 gx-text-grey">{val.name}</p>
                    <p className="gx-text-grey gx-fs-sm gx-mb-0">
                      {val.addressLine1}
                    </p>
                  </Col>
                  <Col span={1}>
                    <Icon
                      onClick={e => {
                        e.stopPropagation();
                        onSubOrgDelete(val.id);
                      }}
                      type="close"
                    />
                  </Col>
                </Row>
              </Card>
            </List.Item>
          )}
        />
      ) : (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      )}
    </React.Fragment>
  );
};
export default SubOrgDetails;
