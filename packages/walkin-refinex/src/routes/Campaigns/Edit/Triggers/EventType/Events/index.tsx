import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import "./index.css";
import { ApolloProviderProps } from "react-apollo";
import {
  EVENT_SUBSCRITPION_FOR_EVENT_TYPE,
  EVENT_TYPE_FOR_APPLICATION,
  CREATE_EVENT_TYPE,
  CREATE_EVENT_SUBSCRIPTIONS
} from "../../../../../../containers/Query";

import { Row, Col, Form, Select, Divider, Button, Icon, Spin } from "antd";
import { FormComponentProps } from "antd/lib/form";
interface EventsProps extends FormComponentProps, ApolloProviderProps<any> {
  applications?: any;
  eventType?: any;
}

interface EventsState {}

class Events extends Component<EventsProps, EventsState> {
  constructor(props: EventsProps) {
    super(props);
    this.state = {};
  }

  getOptions = () => {
    // return this.props.eventType.eventTypesForApplication.map(event => {
    //     return (
    //         <Select.Option value={event.id} key={event.id}>{event.type}</Select.Option>
    //     )
    // })

    return (
      <Select.Option key={1} value={1}>
        Hello
      </Select.Option>
    );
  };

  getApplicationOptions = () => {
    return this.props.applications.map(app => {
      return (
        <Select.Option style={{ margin: "13px" }} value={app.id} key={app.id}>
          {app.name}
        </Select.Option>
      );
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    console.log(this.props);
    return (
      <Row style={{ marginTop: "2rem" }}>
        <Col span={24}>
          <Row>
            <Col span={6}>
              <h2>App</h2>
            </Col>
            <Col span={12}>
              <Form layout="vertical" onSubmit={() => console.log("submit")}>
                <Form.Item label="Choose an App">
                  {getFieldDecorator("application", {
                    rules: [
                      {
                        required: true,
                        message: "Please select an event type!"
                      }
                    ]
                  })(
                    <Select
                      style={{
                        width: 250
                      }}
                      notFoundContent={
                        this.props.eventType.loading ? (
                          <Spin size="small" />
                        ) : null
                      }
                      placeholder="Select an Application"
                    >
                      <Select.Option key="addnewApplication">
                        <div style={{ padding: "8px", cursor: "pointer" }}>
                          <Button style={{ margin: "auto", left: "15%" }}>
                            {" "}
                            <Icon type="plus" /> Add new App{" "}
                          </Button>
                        </div>
                        <Divider style={{ margin: "4px 0" }} />
                      </Select.Option>
                      {this.props.eventType.loading ? (
                        <Select.Option value="loading" key="999999">
                          loading
                        </Select.Option>
                      ) : (
                        this.getApplicationOptions()
                      )}
                    </Select>
                  )}
                </Form.Item>
              </Form>
            </Col>
          </Row>

          <Divider
            style={{
              color: "white"
            }}
          />
          <Row>
            <Col span={6}>
              <h2>Event</h2>
            </Col>
            <Col span={12}>
              <Form layout="vertical" onSubmit={() => console.log("submit")}>
                <Form.Item label="Choose an event type">
                  {getFieldDecorator("event", {
                    rules: [
                      {
                        required: true,
                        message: "Please select an event type!"
                      }
                    ]
                  })(
                    <Select
                      style={{
                        width: 500
                      }}
                      notFoundContent={
                        this.props.eventType.loading ? (
                          <Spin size="small" />
                        ) : null
                      }
                      placeholder="Select an Event"
                    >
                      {this.props.eventType.loading ? (
                        <Select.Option value="loading" key="999999">
                          loading
                        </Select.Option>
                      ) : (
                        this.getOptions()
                      )}
                    </Select>
                  )}
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

const EventsForm = Form.create<EventsProps>({
  name: "Events",
  onValuesChange(props: EventsProps, values) {
    console.log(values);
    // if (values.event) {
    //   props.onEventTypeEdited(values);
    // } else if (props.selectedApplication !== values.application) {
    //   props.linkCampaignToApplication(values.application)
    // }
  },
  mapPropsToFields(props: EventsProps) {
    //const { event, selectedApplication } = props;
    // if (selectedApplication) {
    //   props.eventSubscription.refetch()
    // }
    // let eventValue = event.event;
    // if (props.eventSubscription && props.eventSubscription.eventSubscriptions) {
    //   eventValue = props.eventSubscription.eventSubscriptions[0].event_type.type
    // }
    // return {
    //   event: Form.createFormField({
    //     value: eventValue
    //   }),
    //   application: Form.createFormField({
    //     value: selectedApplication
    //   }),
    // };
  }
})(Events);

export default compose(
  graphql(EVENT_TYPE_FOR_APPLICATION, {
    name: "eventType"
  }),
  graphql(EVENT_SUBSCRITPION_FOR_EVENT_TYPE, {
    name: "eventSubscrptionForEvent"
  }),
  graphql(CREATE_EVENT_TYPE, {
    name: "createEventTYpe"
  }),
  graphql(CREATE_EVENT_SUBSCRIPTIONS, {
    name: "createEventSubscription"
  })
)(EventsForm);
