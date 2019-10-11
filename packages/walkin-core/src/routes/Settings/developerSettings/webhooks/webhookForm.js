import React, { Component } from "react";
import "./style.css";
import { Select, Input, Button } from "antd";

const { Option } = Select;

export default class WebhookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerEntries: [[]],
      webhookDetails: {
        event: "",
        url: "",
        headers: {},
        method: "GET",
        status: "ACTIVE"
      }
    };
  }

  componentWillMount() {
    let { webhookDetails, events } = this.props;
    let defaultEventValue = events[0] ? events[0].event : "";

    if (webhookDetails) {
      let headerEntries = Object.entries(webhookDetails.headers);
      this.setState({
        webhookDetails,
        headerEntries
      });
    } else {
      this.setState({
        webhookDetails: {
          ...this.state.webhookDetails,
          event: defaultEventValue
        }
      });
    }
  }

  onChange = (type, value) => {
    this.setState({ [type]: value });
  };

  onChangeHeadersHandler = (value, index, subIndex) => {
    let { headerEntries } = this.state;
    headerEntries[index][subIndex] = value;
    this.setState({ headerEntries });
  };

  onSave = () => {
    let { headerEntries, webhookDetails } = this.state;
    let filteredHeaderEntries = headerEntries.filter((headerEntry, index) => {
      return headerEntry.length === 2;
    });
    let headers = JSON.stringify(Object.fromEntries(filteredHeaderEntries));
    let input = {
      headers,
      method: webhookDetails.method,
      url: webhookDetails.url
    };
    //for update webhooks
    if (webhookDetails.id) {
      input.id = webhookDetails.id;
      input.status = webhookDetails.status;
    }
    //for create webhooks
    else {
      input.event = webhookDetails.event;
    }
    this.props.onSave(input);
  };

  render() {
    let { webhookDetails, headerEntries } = this.state;
    let header = "Edit Webhook Details";
    if (!webhookDetails.id) {
      header = "Create New Webhook";
    }
    const selectBefore = (
      <Select
        onChange={method => {
          this.onChange("webhookDetails", {
            ...webhookDetails,
            method
          });
        }}
        defaultValue={webhookDetails.method}
        style={{ width: 90 }}
      >
        <Option value="GET">GET</Option>
        <Option value="POST">POST</Option>
      </Select>
    );

    return (
      <div className="webhookFormContainer">
        <div
          style={{
            width: "60%"
          }}
        >
          <div className="webhookEditTitle">{header}</div>
          <div className="webhookTypeInputWrapper">
            <div className="InputLabel">Select Type</div>
            <Select
              defaultValue={webhookDetails.event}
              style={{ width: "100%" }}
              size="large"
              onChange={event => {
                this.onChange("webhookDetails", {
                  ...webhookDetails,
                  event
                });
              }}
            >
              {this.props.events.map((item, index) => (
                <Option key={index} value={item.event}>
                  {item.event}
                </Option>
              ))}
            </Select>
            <div className="inputDesc">
              This description is about create customer. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua.
            </div>
          </div>
          <div className="webhookLabelInputWrapper">
            <div className="InputLabel">Label</div>

            <Input size="large" placeholder="Integration with slack" />
          </div>
          <div className="webhookURLInputWrapper">
            <div className="InputLabel">URL</div>
            <Input
              size="large"
              addonBefore={selectBefore}
              placeholder="https://www.getwalk.in"
              defaultValue={webhookDetails.url}
              onChange={e =>
                this.onChange("webhookDetails", {
                  ...webhookDetails,
                  url: e.target.value
                })
              }
            />
          </div>
          <div className="webhookHeaderInputWrapper">
            <div className="InputLabel">Request Header</div>
            <div className="headerInputFlex">
              {headerEntries.map((item, index) => {
                return (
                  <div key={index} className="requestHeaderrowWrapper">
                    <Input
                      style={{ width: "40%" }}
                      size="large"
                      defaultValue={headerEntries[index][0]}
                      onChange={e =>
                        this.onChangeHeadersHandler(e.target.value, index, 0)
                      }
                    />
                    <Input
                      style={{ width: "40%" }}
                      size="large"
                      defaultValue={headerEntries[index][1]}
                      onChange={e =>
                        this.onChangeHeadersHandler(e.target.value, index, 1)
                      }
                    />
                    <div
                      style={{
                        width: "8%"
                      }}
                      onClick={() => {
                        headerEntries.pop();
                        this.setState({
                          headerEntries
                        });
                      }}
                    >
                      X
                    </div>
                  </div>
                );
              })}

              <Button
                className="buttonBlueBorder"
                size="large"
                onClick={() => {
                  this.setState({ headerEntries: [...headerEntries, []] });
                }}
              >
                +Add
              </Button>
            </div>
          </div>
          <Button
            className="button"
            type="primary"
            size="large"
            onClick={() => this.onSave()}
            loading={this.props.isLoading}
          >
            SAVE
          </Button>
        </div>
      </div>
    );
  }
}
