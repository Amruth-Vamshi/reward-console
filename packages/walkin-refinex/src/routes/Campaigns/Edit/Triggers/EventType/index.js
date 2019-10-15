import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql } from "react-apollo"
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
  message
} from "antd";
import { EVENT_TYPES } from "../../../../../containers/Query"
class EventType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEvents: false,
      visible: false,
    }
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
        <Select.Option value={app.id} key={app.id}>{app.name}</Select.Option>
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
    console.log("eventValues", event, selectedApplication)
    return {
      event: Form.createFormField({
        value: event.event
      }),
      application: Form.createFormField({
        value: selectedApplication
      }),
    };
  }
})(EventType);

export default graphql(EVENT_TYPES, {
  name: "eventType",
  options: {
    fetchPolicy: "cache-first",
    variables: {
      status: "ACTIVE"
    }
  }
})(EventTypeForm);
