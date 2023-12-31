import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Row,
  Typography,
  Divider,
  Form,
  Select,
  Input,
  Button,
} from 'antd';
import Delay from './Delay';
import { EventTypeForm } from './EventType';
import Filter from './Filter';
const { Title } = Typography;

interface TriggersProps {
  unlinkCampaignFromApplication?: any;
  selectedApplication?: any;
  linkCampaignToApplication?: any;
  applications?: any;
  eventValues?: any;
  onEventTypeEdited?: any;
  query?: any;
  attributeData?: any;
  logQuery?: any;
}
class Triggers extends React.Component<TriggersProps, {}> {
  constructor(props: TriggersProps) {
    super(props);
  }

  render() {
    return (
      <Row
        style={{
          margin: '1rem',
          height: '-webkit-fill-available',
          paddingBottom: '5rem',
          overflowX: 'scroll',
        }}
      >
        <Row>
          <Col span={24}>
            <Title level={3} className="gx-text-grey">
              Triggers
            </Title>
          </Col>
        </Row>
        <Divider />
        <Col span={24}>
          <EventTypeForm
            unlinkCampaignFromApplication={
              this.props.unlinkCampaignFromApplication
            }
            selectedApplication={this.props.selectedApplication}
            linkCampaignToApplication={this.props.linkCampaignToApplication}
            application={this.props.applications}
            event={this.props.eventValues}
            onEventTypeEdited={this.props.onEventTypeEdited}
          />
        </Col>

        <Divider />
        <Col span={24}>
          <Filter
            query={this.props.query}
            attributeData={this.props.attributeData}
            logQuery={this.props.logQuery}
          />
        </Col>

        {/* <Divider />
        <Col span={24}>
          <Delay />
        </Col> */}
      </Row>
    );
  }
}

export default Triggers;
