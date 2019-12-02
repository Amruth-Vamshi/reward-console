import * as React from "react";
import PropTypes from "prop-types";
import { graphql, compose, ApolloProviderProps } from "react-apollo"
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
import { EVENT_TYPES_FOR_APPLICATION, EVENT_SUBSCRIPTION } from "../../../../../containers/Query"
import { FormProps, FormComponentProps } from "antd/lib/form";
import Events from "./Events/index";
interface EventTypeProps extends FormComponentProps, ApolloProviderProps<any> {
  event?: any,
  selectedApplication?: any
  unlinkCampaignFromApplication?: any
  application?: any
  eventType?: any
  onEventTypeEdited?: any
  linkCampaignToApplication?: any
}

interface EventTypeState {
  showEvents: boolean,
  visible: boolean,
}
class EventType extends React.Component<EventTypeProps, EventTypeState> {
  constructor(props: EventTypeProps) {
    super(props);
    this.state = {
      showEvents: false,
      visible: false,
    }
  }

  componentDidMount() {
    console.log(this.props)
  }

  UNSAFE_componentWillMount() {
    const { event, selectedApplication } = this.props;
    if (selectedApplication) {
      this.props.eventType({
        variables: {
          appId: selectedApplication
        }
      })
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
    return this.props.eventType.eventTypesForApplication.map(event => {
      return (
        <Select.Option value={event.id} key={event.id}>{event.type}</Select.Option>
      )
    })
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
          <Events applications={this.props.application} /> : null}
      </React.Fragment>
    );
  }
}

const EventTypeForm = Form.create<EventTypeProps>({
  name: "EventType",
  onValuesChange(props: EventTypeProps, values) {
    if (values.event) {
      props.onEventTypeEdited(values);
    } else if (props.selectedApplication !== values.application) {
      props.linkCampaignToApplication(values.application)
    }

  },
  mapPropsToFields(props: EventTypeProps) {
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
})(EventType);

export default compose(
  graphql(EVENT_TYPES_FOR_APPLICATION, {
    name: "eventType"
  })
)(EventTypeForm);
