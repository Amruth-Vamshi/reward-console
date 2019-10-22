import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql, compose } from "react-apollo"
import {
  Col,
  Row,
  Typography,
  Divider,
  Form,
  Select,
  Input,
  Button,
  Spin,
  Switch,
  Popconfirm,
  message,
  Icon
} from "antd";
import jwt from "jsonwebtoken";
import { EVENT_TYPES, EVENT_SUBSCRIPTION } from "../../../../../containers/Query"
class EventType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEvents: false,
      visible: false,
    }
  }

  componentDidMount() {
    console.log(this.props)
  }

  componentWillMount() {
    const { event, selectedApplication } = this.props;
    if (selectedApplication) {
      this.setState({
        showEvents: true
      })
    }
  }

  confirm = () => {
    const { showEvents } = this.state;
    const { event, selectedApplication } = this.props;
    this.setState({ visible: false });
    if (showEvents === true && selectedApplication) {
      if (selectedApplication) {
        this.props.unlinkCampaignFromApplication(selectedApplication)
      }

      this.setState({
        showEvents: false
      })
    } else {
      this.setState({
        showEvents: true
      })
    }

  };

  cancel = () => {
    this.setState({ visible: false, showEvents: true });
  };

  onChange = (checked) => {
    this.handleVisibleChange(checked);
  }

  getApplicationOptions = () => {
    return this.props.application.map(app => {
      return (
        <Select.Option style={{ margin: "13px" }} value={app.id} key={app.id}>{app.name}</Select.Option>
      )
    })
  }

  handleVisibleChange = (visible) => {
    const { showEvents } = this.state;
    const { event, selectedApplication } = this.props;
    if (!visible) {
      this.setState({ visible });
      return;
    }
    if (!this.state.showEvents) {
      this.confirm(); // next step
    } else {
      this.setState({ visible }); // show the popconfirm
    }
  };
  getOptions = () => {
    return this.props.eventType.eventTypes.map(event => {
      return (
        <Select.Option value={event.id} key={event.id}>{event.type}</Select.Option>
      )
    })
  }
  getEvent = () => {
    const { getFieldDecorator } = this.props.form;
    return (
      <Row style={{ marginTop: "2rem" }}>
        <Col span={24}>
          <Row>
            <Col span={6}>
              <h2>App</h2>
            </Col>
            <Col span={12}>
              <Form layout="vertical" onSubmit={this.handleSubmit}>


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
                      notFoundContent={this.props.eventType.loading ? <Spin size="small" /> : null}
                      placeholder="Select an Application"
                      onChange={this.handleSelectChange}
                    >
                      <Select.Option key="addnewApplication">
                        <div style={{ padding: '8px', cursor: 'pointer' }}>
                          <Button style={{ margin: "auto", left: "15%" }} > <Icon type="plus" /> Add new App </Button>
                        </div>
                        <Divider style={{ margin: '4px 0' }} />
                      </Select.Option>
                      {
                        this.props.eventType.loading ? (
                          <Select.Option value="loading" key="999999">loading</Select.Option>
                        ) : this.getApplicationOptions()
                      }

                    </Select>
                  )}
                </Form.Item>

              </Form>
            </Col>
          </Row>

          <Divider style={{
            color: "white"
          }} />
          <Row>
            <Col span={6}>
              <h2>Event</h2>
            </Col>
            <Col span={12}>
              <Form layout="vertical" onSubmit={this.handleSubmit}>


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
                      notFoundContent={this.props.eventType.loading ? <Spin size="small" /> : null}
                      placeholder="Select an Event"
                      onChange={this.handleSelectChange}
                    >
                      {
                        this.props.eventType.loading ? (
                          <Select.Option value="loading" key="999999">loading</Select.Option>
                        ) : this.getOptions()
                      }

                    </Select>
                  )}
                </Form.Item>

              </Form>
            </Col>
          </Row>


        </Col>
      </Row>
    )
  }
  render() {
    const { showEvents } = this.state;
    return (
      <React.Fragment>
        <Popconfirm
          title="Are you sure you want to unlink this application from campaign?"
          visible={this.state.visible}
          onVisibleChange={this.handleVisibleChange}
          onConfirm={this.confirm}
          onCancel={this.cancel}
          okText="Yes"
          cancelText="No"
        >
          <Switch defaultChecked={this.state.showEvents} checked={this.state.showEvents} />
        </Popconfirm>

        <span className="gx-text-grey" style={{
          marginLeft: "1rem"
        }}>Enable Triggers/Events for your App</span>
        {showEvents ?
          this.getEvent() : null}
      </React.Fragment>
    );
  }
}

const EventTypeForm = Form.create({
  name: "EventType",
  onValuesChange(props, values) {
    if (values.event) {
      props.onEventTypeEdited(values);
    } else if (props.selectedApplication !== values.application) {
      props.linkCampaignToApplication(values.application)
    }

  },
  mapPropsToFields(props) {
    const { event, selectedApplication } = props;
    if (selectedApplication) {
      props.eventSubscription.refetch()
    }
    let eventValue = event.event;
    if (props.eventSubscription && props.eventSubscription.eventSubscriptions) {
      eventValue = props.eventSubscription.eventSubscriptions[0].event_type.type
    }
    return {
      event: Form.createFormField({
        value: eventValue
      }),
      application: Form.createFormField({
        value: selectedApplication
      }),
    };
  }
})(EventType);

export default compose(
  graphql(EVENT_TYPES, {
    name: "eventType",
    options: {
      fetchPolicy: "cache-first",
      variables: {
        status: "ACTIVE"
      }
    }
  }),
  graphql(EVENT_SUBSCRIPTION, {
    name: "eventSubscription",
    options: props => ({
      fetchPolicy: "cache-first",
      variables: {
        status: "ACTIVE",
        organization_id: jwt.decode(localStorage.getItem("jwt")).org_id,
        application_id: props.selectedApplication
      }
    })
  })
)(EventTypeForm);
