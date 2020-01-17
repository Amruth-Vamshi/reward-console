import * as React from "react";
import PropTypes from "prop-types";
import {
  graphql,
  compose,
  ApolloProviderProps,
  withApollo,
  WithApolloClient
} from "react-apollo";
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
import {
  EVENT_TYPES_FOR_APPLICATION,
  EVENT_SUBSCRIPTION
} from "../../../../../containers/Query";
import { FormProps, FormComponentProps } from "antd/lib/form";
import Events from "./Events/index";
import { ConnectedComponentClass } from "antd/lib/form/interface";

interface EventTypeProps extends FormComponentProps {
  event?: any;
  selectedApplication?: any;
  unlinkCampaignFromApplication?: any;
  application?: any;
  eventType?: any;
  onEventTypeEdited?: any;
  linkCampaignToApplication?: any;
}

interface EventTypeState {
  showEvents: boolean;
  visible: boolean;
}
class EventType extends React.Component<
  WithApolloClient<EventTypeProps>,
  EventTypeState
> {
  constructor(props: WithApolloClient<EventTypeProps>) {
    super(props);
    this.state = {
      showEvents: false,
      visible: false
    };
  }

  componentDidMount() {
    console.log(this.props);
  }

  UNSAFE_componentWillMount() {
    const { event, selectedApplication } = this.props;
    if (selectedApplication) {
      this.props.eventType({
        variables: {
          appId: selectedApplication
        }
      });
      this.setState({
        showEvents: true
      });
    }
  }

  confirm = () => {
    const { showEvents } = this.state;
    const { event, selectedApplication } = this.props;
    this.setState({ visible: false });
    if (showEvents === true && selectedApplication) {
      if (selectedApplication) {
        this.props.unlinkCampaignFromApplication(selectedApplication);
      }

      this.setState({
        showEvents: false
      });
    } else {
      this.setState({
        showEvents: true
      });
    }
  };

  cancel = () => {
    this.setState({ visible: false, showEvents: true });
  };

  onChange = checked => {
    this.handleVisibleChange(checked);
  };

  getApplicationOptions = () => {
    return this.props.application.map(app => {
      return (
        <Select.Option style={{ margin: "13px" }} value={app.id} key={app.id}>
          {app.name}
        </Select.Option>
      );
    });
  };

  handleVisibleChange = visible => {
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
    return this.props.eventType.eventTypesForApplication.map(event => {
      return (
        <Select.Option value={event.id} key={event.id}>
          {event.type}
        </Select.Option>
      );
    });
  };

  render() {
    console.log("this.props inside app", this.props);
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
          <Switch
            defaultChecked={this.state.showEvents}
            checked={this.state.showEvents}
          />
        </Popconfirm>

        <span
          className="gx-text-grey"
          style={{
            marginLeft: "1rem"
          }}
        >
          Enable Triggers/Events for your App
        </span>
        {showEvents ? <Events applications={this.props.application} /> : null}
      </React.Fragment>
    );
  }
}

const EventTypeForm1 = withApollo(EventType);
export const EventTypeForm = Form.create<EventTypeProps>({
  name: "EventType",
  onValuesChange(props: WithApolloClient<EventTypeProps>, values) {
    console.log("values", values);
    if (values.event) {
      props.onEventTypeEdited(values);
    } else if (props.selectedApplication !== values.application) {
      props.linkCampaignToApplication(values.application);
      props.client
        .query({
          query: EVENT_TYPES_FOR_APPLICATION,
          variables: {
            appId: props.selectedApplication
          }
        })
        .then(data => console.log("data", data))
        .catch(err => console.log("err", err));
    }
  },
  mapPropsToFields(props: WithApolloClient<EventTypeProps>) {
    const { event, selectedApplication } = props;
    if (selectedApplication) {
      props.client
        .query({
          query: EVENT_TYPES_FOR_APPLICATION,
          variables: {
            appId: selectedApplication
          }
        })
        .then(data => console.log("data", data))
        .catch(err => console.log("err", err));
    }
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
})(EventTypeForm1);
