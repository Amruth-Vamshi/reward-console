import * as React from 'react';
import * as jwt from 'jsonwebtoken';
import { withApollo, ApolloProviderProps } from 'react-apollo';
import './style.css';
import { Button, Switch, Row, Col, Spin, Icon, List, Pagination } from 'antd';
import WebhookForm from './webhookForm';
import {
  GET_WEBHOOKS,
  CREATE_WEBHOOK,
  UPDATE_WEBHOOK,
  LIST_WEBHOOK_EVENTS,
} from './../../../../PlatformQueries/index';

interface WebhooksProps extends ApolloProviderProps<any> { }

interface WebhooksState {
  isWebhookFormOpen: boolean;
  webhooks: any;
  events: any;
  selectedWebhookIndex: any;
  isLoading: boolean;
  isListLoading: boolean;
  org_id: string;
  currentPage: number;
  totalPages: number;
  totalItems: number;
}

class Webhooks extends React.Component<WebhooksProps, WebhooksState> {
  constructor(props: WebhooksProps) {
    super(props);
    this.state = {
      isWebhookFormOpen: false,
      webhooks: [],
      events: [],
      selectedWebhookIndex: null,
      isLoading: true,
      isListLoading: false,
      org_id: '',
      currentPage: 1,
      totalPages: 0,
      totalItems: 0,
    };
  }

  UNSAFE_componentWillMount() {
    const jwtToken: any = localStorage.getItem('jwt');
    const { org_id }: any = jwt.decode(jwtToken);

    this.getWebhooks(org_id, webhooksResponse => {
      this.props.client
        .query({
          query: LIST_WEBHOOK_EVENTS,
          variables: { org_id, status: 'ACTIVE' },
          fetchPolicy: 'network-only',
        })
        .then(eventsResponse => {
          this.setState({
            org_id,
            webhooks: webhooksResponse.data.webhooks.data,
            isLoading: false,
            events: eventsResponse.data.webhookEventTypes.data,
            totalPages:
              webhooksResponse.data.webhooks.paginationInfo.totalPages,
            totalItems:
              webhooksResponse.data.webhooks.paginationInfo.totalItems,
          });
        });
    });
  }

  getWebhooks = (org_id: string, callback) => {
    this.props.client
      .query({
        query: GET_WEBHOOKS,
        variables: {
          org_id,
          status: 'ACTIVE',
          pageOptions: { page: this.state.currentPage, pageSize: 5 },
        },
        fetchPolicy: 'network-only',
      })
      .then(webhooksResponse => {
        callback(webhooksResponse);
      });
  };

  createWebook = (input: any) => {
    this.props.client
      .mutate({
        mutation: CREATE_WEBHOOK,
        variables: {
          input,
        },
      })
      .then(res => {
        this.getWebhooks(this.state.org_id, webhooksResponse => {
          this.setState({
            // webhooks: [res.data.createWebhook, ...this.state.webhooks],
            webhooks: webhooksResponse.data.webhooks.data,
            isWebhookFormOpen: false,
            selectedWebhookIndex: null,
            isLoading: false,
          });
        });
      })
      .catch(error => {
        this.setState({
          isLoading: false,
        });
      });
  };

  updateWebook = (input: any, type?: string) => {
    // let { webhooks, selectedWebhookIndex } = this.state;
    this.props.client
      .mutate({
        mutation: UPDATE_WEBHOOK,
        variables: {
          input,
        },
      })
      .then(res => {
        this.getWebhooks(this.state.org_id, webhooksResponse => {
          this.setState({
            // webhooks: [res.data.createWebhook, ...this.state.webhooks],
            webhooks: webhooksResponse.data.webhooks.data,
            isWebhookFormOpen: false,
            selectedWebhookIndex: null,
            isLoading: false,
          });
        });
        // if (type === "delete") {
        //   webhooks.splice(selectedWebhookIndex, 1);
        // } else {
        //   webhooks[selectedWebhookIndex] = res.data.updateWebhook;
        // }
        // this.setState({
        //   webhooks,
        //   isWebhookFormOpen: false,
        //   selectedWebhookIndex: null,
        //   isLoading: false
        // });
      })
      .catch(error => {
        this.setState({
          isLoading: false,
        });
      });
  };

  onAddOrEditWebhooks = (selectedWebhookIndex: any = null) => {
    this.setState({
      isWebhookFormOpen: !this.state.isWebhookFormOpen,
      selectedWebhookIndex,
    });
  };

  onEnableOrDisableWebhook = (selectedWebhookIndex: number) => {
    let { webhooks } = this.state;
    webhooks[selectedWebhookIndex].enabled = !webhooks[selectedWebhookIndex]
      .enabled;
    let input = {
      id: webhooks[selectedWebhookIndex].id,
      enabled: webhooks[selectedWebhookIndex].enabled,
      organizationId: this.state.org_id,
    };
    this.setState({ isLoading: true, selectedWebhookIndex }, () => {
      this.updateWebook(input);
    });
  };

  // once delete webhook api is availble, onDelete will change
  onDelete = (selectedWebhookIndex: number) => {
    let { webhooks } = this.state;
    let input = {
      id: webhooks[selectedWebhookIndex].id,
      status: 'INACTIVE',
      organizationId: this.state.org_id,
    };
    this.setState({ isLoading: true, selectedWebhookIndex }, () => {
      this.updateWebook(input, 'delete');
    });
  };

  onSave = (formInput: any) => {
    let input = { ...formInput, organizationId: this.state.org_id };
    if (!(this.state.selectedWebhookIndex === null)) {
      this.setState({ isLoading: true }, () => this.updateWebook(input));
    } else {
      input.organizationId = this.state.org_id;
      this.setState({ isLoading: true }, () => this.createWebook(input));
    }
  };

  onLoadMore = page => {
    this.setState({ currentPage: page, isListLoading: true }, () => {
      this.getWebhooks(this.state.org_id, response => {
        this.setState({
          webhooks: response.data.webhooks.data,
          isListLoading: false,
        });
      });
    });
  };

  // renderLoadMoreUi = () => {
  //   return <div
  //     style={{
  //       textAlign: 'center',
  //       marginTop: 12,
  //       height: 32,
  //       lineHeight: '32px',
  //     }}
  //   >
  //     <Button onClick={this.onLoadMore}>loading more</Button>
  //   </div>
  // }

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
            <div className="emptyWebhookLabel">No Webhook Found</div>
          </div>
        );

      return (
        <div className={'webhookListWrapper'}>
          <List
            loading={this.state.isListLoading}
            itemLayout="vertical"
            size="large"
            dataSource={this.state.webhooks}
            renderItem={(webhook: any, index: number) => {
              return (
                <Row className="webhookListRow" key={index}>
                  <Col
                    className="webhookUrlWrapper "
                    xl={8}
                    lg={24}
                    md={24}
                    sm={24}
                    xs={24}
                  >
                    <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                      <img
                        alt=""
                        src={require('walkin-components/src/assets/images/webhook.png')}
                      />
                    </Col>
                    <Col xl={18} lg={18} md={18} sm={18} xs={18}>
                      <div className="webhookTitle">{webhook.name}</div>
                      <div className="webhookUrl">{webhook.url}</div>
                    </Col>
                  </Col>
                  <Col
                    className="webhookTypeWrapper"
                    xl={6}
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
                    <div>{webhook.enabled ? 'Active' : 'Inactive'}</div>
                    <Switch
                      className={webhook.enabled ? 'webhookStatusSwitch' : ''}
                      checked={webhook.enabled}
                      onChange={() => this.onEnableOrDisableWebhook(index)}
                      loading={isLoading && selectedWebhookIndex === index}
                    />
                  </Col>
                  <Col
                    className="webhookButtonWrapper"
                    xl={5}
                    lg={8}
                    md={8}
                    sm={8}
                    xs={24}
                  >
                    <Button
                      onClick={() => this.onAddOrEditWebhooks(index)}
                      className="buttonBlueBorder webhookButtonMargin0"
                    >
                      Edit
                    </Button>

                    <Button
                      className=" webhookButtonMargin0"
                      onClick={() => this.onDelete(index)}
                      loading={isLoading && selectedWebhookIndex === index}
                    >
                      Delete
                    </Button>
                  </Col>
                </Row>
              );
            }}
          />

          {/* {this.state.webhooks.map((webhook: any, index: number) => (
            <Row className="webhookListRow" key={index}>
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
                    src={require("walkin-components/src/assets/images/webhook.png")}
                  />
                </Col>
                <Col xl={18} lg={18} md={18} sm={18} xs={18}>
                  <div className="webhookTitle">{webhook.name}</div>
                  <div className="webhookUrl">{webhook.url}</div>
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
                <div>{webhook.enabled ? "Active" : "Inactive"}</div>
                <Switch
                  className={webhook.enabled ? "webhookStatusSwitch" : ""}
                  checked={webhook.enabled}
                  onChange={() => this.onEnableOrDisableWebhook(index)}
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
                  className="buttonBlueBorder webhookButtonMargin0"
                >
                  Edit
                </Button>

                <Button
                  className=" webhookButtonMargin0"
                  onClick={() => this.onDelete(index)}
                  loading={isLoading && selectedWebhookIndex === index}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          ))} */}
        </div>
      );
    }
    return (
      <WebhookForm
        onSave={this.onSave}
        webhookDetails={webhooks[selectedWebhookIndex]}
        events={this.state.events}
        isLoading={isLoading}
      />
    );
  };

  render() {
    let { isWebhookFormOpen, totalPages } = this.state;
    return (
      <div className="gx-main-content-wrapper">
        <div className="headerWrapper">
          <label className="webhooksHeaderTitle">Webhooks</label>
          {!isWebhookFormOpen && (
            <Button
              className="webhookButtonMargin0"
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
                className="cursorPointer webhookBackButton"
              >
                <Icon type="arrow-left" />
                Back
            </div>
            </div>
          )}
        {this.renderWebhookList()}
        {!isWebhookFormOpen && totalPages > 1 ? (
          <Pagination
            onChange={page => {
              this.onLoadMore(page);
            }}
            pageSize={5}
            total={this.state.totalItems}
            current={this.state.currentPage}
          />
        ) : null}
      </div>
    );
  }
}

export default withApollo(Webhooks);
