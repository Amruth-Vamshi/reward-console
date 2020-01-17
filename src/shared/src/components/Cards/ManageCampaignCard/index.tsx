import * as React from "react";
import { Row, Col, Tag, Button } from "antd";
import { Widget } from "walkin-components";

import { History } from "history";

interface iProps {
  history: History;
  campaign: any;
}

const ManageCampaignCard = ({ campaign, history }: iProps) => {
  return (
    <Widget
      styleName="gx-card-full"
      extra={<i className="icon icon-setting gx-text-grey gx-fs-xl" />}
    >
      <Row type="flex" justify="center">
        <Col>
          <h2>{campaign.name ? campaign.name : "No Title"}</h2>
        </Col>
      </Row>
      <Row type="flex" justify="center">
        <Col>
          <p className="gx-text-grey">{campaign.status}</p>
        </Col>
      </Row>
      <Row type="flex" justify="center">
        <Col>
          <Tag> {campaign.organization.name} </Tag>
          <Tag> {campaign.application.name} </Tag>
        </Col>
      </Row>
      <Row
        style={{
          paddingTop: "2%"
        }}
        type="flex"
        justify="center"
      >
        <Col>
          {campaign.status == "ACTIVE" ? (
            <Button
              type={"primary"}
              onClick={() => {
                console.log("clicked");
                history.push("/refinex/campaign/" + campaign.id + "/edit");
              }}
            >
              Edit
            </Button>
          ) : (
            <Button
              type={"primary"}
              onClick={() => {
                console.log("clicked");
                history.push("/refinex/campaign/" + campaign.id + "/edit");
              }}
            >
              Continue Editing
            </Button>
          )}
        </Col>
      </Row>
    </Widget>
  );
};

export default ManageCampaignCard;
