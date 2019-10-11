import React, { Component } from "react";
import jwt from "jsonwebtoken";
import { withApollo } from "react-apollo";
import "./style.css";
import { Button, Switch, Row, Col, Spin, Icon } from "antd";
import WebhookForm from "./webhookForm";
import {
  GET_WEBHOOKS,
  CREATE_WEBHOOK,
  UPDATE_WEBHOOK,
  LIST_WEBHOOK_EVENTS
} from "./../../../../PlatformQueries/index";

const WEBHOOK_STATUS = {
  ACTIVE: "Active",
  INACTIVE: "Inactive"
};

class Webhooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWebhookFormOpen: false,
      webhooks: [],
      events: [],
      selectedWebhookIndex: null,
      isLoading: true
    };
  }

  componentWillMount() {
    const { org_id } = jwt.decode(localStorage.getItem("jwt"));
    this.props.client
      .query({
        query: GET_WEBHOOKS,
        variables: { org_id, status: "ACTIVE" },
        fetchPolicy: "network-only"
      })
      .then(webhooksResponse => {
        this.props.client
          .query({
            query: LIST_WEBHOOK_EVENTS,
            variables: { org_id, status: "ACTIVE" },
            fetchPolicy: "network-only"
          })
          .then(eventsResponse => {
            this.setState({
              org_id,
              webhooks: webhooksResponse.data.webhooks,
              isLoading: false,
              events: eventsResponse.data.webhookEventTypes
            });
          });
      });
  }

  createWebook = input => {
    this.props.client
      .mutate({
        mutation: CREATE_WEBHOOK,
        variables: {
          input
        }
      })
      .then(res => {
        this.setState({
          webhooks: [...this.state.webhooks, res.data.createWebhook],
          isWebhookFormOpen: false,
          selectedWebhookIndex: null,
          isLoading: false
        });
      })
      .catch(error => {
        this.setState({
          isLoading: false
        });
      });
  };

  updateWebook = input => {
    let { webhooks } = this.state;
    this.props.client
      .mutate({
        mutation: UPDATE_WEBHOOK,
        variables: {
          input
        }
      })
      .then(res => {
        webhooks[this.state.selectedWebhookIndex] = res.data.updateWebhook;
        this.setState({
          webhooks,
          isWebhookFormOpen: false,
          selectedWebhookIndex: null,
          isLoading: false
        });
      })
      .catch(error => {
        this.setState({
          isLoading: false
        });
      });
  };

  onAddOrEditWebhooks = (selectedWebhookIndex = null) => {
    this.setState({
      isWebhookFormOpen: !this.state.isWebhookFormOpen,
      selectedWebhookIndex
    });
  };

  onWebhookStatusChange = selectedWebhookIndex => {
    let { webhooks } = this.state;
    const webhookStatus = {
      ACTIVE: "INACTIVE",
      INACTIVE: "ACTIVE"
    };
    webhooks[selectedWebhookIndex].status =
      webhookStatus[webhooks[selectedWebhookIndex].status];
    let input = {
      id: webhooks[selectedWebhookIndex].id,
      status: webhooks[selectedWebhookIndex].status
    };
    this.setState({ isLoading: true, selectedWebhookIndex }, () => {
      this.updateWebook(input);
    });
  };

  // once delete webhook api is availble, onDelete will change
  onDelete = selectedWebhookIndex => {
    let { webhooks } = this.state;
    let input = {
      id: webhooks[selectedWebhookIndex].id,
      status: "INACTIVE"
    };
    this.setState({ isLoading: true, selectedWebhookIndex }, () => {
      this.props.client
        .mutate({
          mutation: UPDATE_WEBHOOK,
          variables: {
            input
          }
        })
        .then(res => {
          webhooks.splice(selectedWebhookIndex, 1);
          this.setState({
            webhooks,
            isWebhookFormOpen: false,
            selectedWebhookIndex: null,
            isLoading: false
          }).catch(error => {
            this.setState({
              isLoading: false
            });
          });
        });
    });
  };

  onSave = input => {
    if (!(this.state.selectedWebhookIndex === null)) {
      this.setState({ isLoading: true }, () => this.updateWebook(input));
    } else {
      input.organizationId = this.state.org_id;
      this.setState({ isLoading: true }, () => this.createWebook(input));
    }
  };

  renderWebhookList = () => {
    let { isLoading, webhooks, selectedWebhookIndex } = this.state;
    if (!this.state.isWebhookFormOpen) {
      if (isLoading && !webhooks.length)
        return (
          <div className="webhookListWrapper">
            <Spin size="large" />
          </div>
        );
      if (!webhooks.length)
        return (
          <div className="webhookListWrapper">
            <div className="emptyWebhookLabel">No Webhook Added</div>
          </div>
        );
      return (
        <div className={"webhookListWrapper"}>
          {this.state.webhooks.map((webhook, index) => (
            <Row key={index}>
              <Col
                className="webhookUrlWrapper "
                xl={11}
                lg={24}
                md={24}
                sm={24}
                xs={24}
              >
                <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                  <img
                    alt=""
                    src={require("@walkinsole/walkin-components/src/assets/images/webhook.png")}
                  />
                </Col>
                <Col xl={18} lg={18} md={18} sm={18} xs={18}>
                  <div className="webhookTitle">Integration with Slack</div>
                  <div className="webhookUrl">
                    {webhook.url} › incoming-webhooks
                  </div>
                </Col>
              </Col>
              <Col
                className="webhookTypeWrapper"
                xl={4}
                lg={8}
                md={8}
                sm={8}
                xs={24}
              >
                Type:
                <span className="webhookType">{webhook.event}</span>
              </Col>
              <Col
                className="webhookStatus"
                xl={4}
                lg={8}
                md={8}
                sm={8}
                xs={24}
              >
                <div>{WEBHOOK_STATUS[webhook.status]}</div>
                <Switch
                  disabled
                  checked={webhook.status === "ACTIVE"}
                  onChange={() => this.onWebhookStatusChange(index)}
                  loading={isLoading && selectedWebhookIndex === index}
                />
              </Col>
              <Col
                className="webhookButtonWrapper"
                xl={4}
                lg={8}
                md={8}
                sm={8}
                xs={24}
              >
                <Button
                  onClick={() => this.onAddOrEditWebhooks(index)}
                  className="buttonBlueBorder"
                >
                  Edit
                </Button>

                <Button
                  className="button"
                  onClick={() => this.onDelete(index)}
                  loading={isLoading && selectedWebhookIndex === index}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          ))}
        </div>
      );
    }
    return (
      <WebhookForm
        onSave={this.onSave}
        webhookDetails={webhooks[this.state.selectedWebhookIndex]}
        events={this.state.events}
        isLoading={isLoading}
      />
    );
  };

  render() {
    let { isWebhookFormOpen } = this.state;
    return (
      <div className="gx-main-content-wrapper">
        <div className="headerWrapper">
          <label className="headerTitle">Webhooks</label>
          {!isWebhookFormOpen && (
            <Button
              className="button"
              type="primary"
              size="large"
              onClick={() => this.onAddOrEditWebhooks()}
            >
              ADD NEW
            </Button>
          )}
        </div>
        {!isWebhookFormOpen ? (
          <div className="headerDescWrapper">
            <div className="headerDesc">
              Outgoing webhooks allow you to send Wcore activity to external
              services and custom integrations. Check out our Webhook API
              documentation for details.
            </div>
          </div>
        ) : (
          <div className="headerDescWrapper">
            <div
              onClick={() => this.onAddOrEditWebhooks()}
              className="cursorPointer"
            >
              <Icon type="arrow-left" />
              Back
            </div>
          </div>
        )}
        {this.renderWebhookList()}
      </div>
    );
  }
}

export default withApollo(Webhooks);
