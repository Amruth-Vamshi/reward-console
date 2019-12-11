import * as React from "react";
import "./style.css";
import { Select, Input, Button } from "antd";

const { Option } = Select;

interface WebhookFormProps {
  webhookDetails: any;
  events: any;
  isLoading: boolean;
  onSave: (a: any) => void;
}

interface WebhookFormState {
  headerEntries: any;
  webhookDetails: {
    id: string;
    event: string;
    url: string;
    name: string;
    headers: any;
    method: string;
    status: string;
  };
}
export default class WebhookForm extends React.Component<
  WebhookFormProps,
  WebhookFormState
> {
  constructor(props: WebhookFormProps) {
    super(props);
    this.state = {
      headerEntries: [[]],
      webhookDetails: {
        id: "",
        event: "",
        url: "",
        name: "",
        headers: {},
        method: "GET",
        status: "ACTIVE"
      }
    };
  }

  UNSAFE_componentWillMount() {
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

  onChange = (type: string, value: any) => {
    this.setState(
      (
        prevState: Readonly<WebhookFormState>,
        props: Readonly<WebhookFormProps>
      ) => {
        return {
          ...prevState,
          [type]: value
        };
      }
    );
  };

  onChangeHeadersHandler = (value: any, index: number, subIndex: number) => {
    let { headerEntries } = this.state;
    headerEntries[index][subIndex] = value;
    this.setState({ headerEntries });
  };

  onAddHeaderField = () => {
    let { headerEntries } = this.state;

    // headerEntries.map((headerEntry: Array<any>, index: number) => {
    //   if (headerEntry.length === 2)
    // });
    this.setState({ headerEntries: [...headerEntries, []] });
  };

  //Object.fromEntries is not supported in typescript and in some older browser, following function is the alternative.
  ObjectFromEntries = iter => {
    const obj = {};

    for (const pair of iter) {
      if (Object(pair) !== pair) {
        throw new TypeError("iterable for fromEntries should yield objects");
      }

      // Consistency with Map: contract is that entry has "0" and "1" keys, not
      // that it is an array or iterable.

      const { "0": key, "1": val } = pair;

      Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: true,
        writable: true,
        value: val
      });
    }

    return obj;
  };

  onSave = () => {
    let { headerEntries, webhookDetails } = this.state;
    let filteredHeaderEntries = this.ObjectFromEntries(
      headerEntries.filter((headerEntry: Array<any>, index: number) => {
        return headerEntry.length === 2;
      })
    );

    let headers = JSON.stringify(filteredHeaderEntries);

    let input: any = {
      headers,
      method: webhookDetails.method,
      url: webhookDetails.url,
      name: webhookDetails.name
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
    let { events } = this.props;
    let header = "Edit Webhook Details";
    if (!webhookDetails.id) {
      header = "Create New Webhook";
    }
    const selectBefore = (
      <Select
        getPopupContainer={() => document.getElementById("WebhookInputWrapper")}
        onChange={(method: any) => {
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

    let eventTypeDescription = events.filter((item: any, index: number) => {
      return item.event === webhookDetails.event;
    });
    eventTypeDescription = eventTypeDescription[0]
      ? eventTypeDescription[0].description
      : "--";

    return (
      <div className="webhookFormContainer">
        <div
          style={{
            width: "60%"
          }}
        >
          <div className="webhookEditTitle">{header}</div>
          <div id="WebhookInputWrapper" className="webhookTypeInputWrapper">
            <div className="InputLabel">
              Select Event Type<span className="requiredFieldRedColor">*</span>
            </div>
            <Select
              showSearch
              getPopupContainer={() =>
                document.getElementById("WebhookInputWrapper")
              }
              disabled={Boolean(webhookDetails.id)}
              defaultValue={webhookDetails.event}
              style={{ width: "100%" }}
              size="large"
              onChange={(event: any) => {
                this.onChange("webhookDetails", {
                  ...webhookDetails,
                  event
                });
              }}
            >
              {events.map((item: any, index: number) => (
                <Option key={index} value={item.event}>
                  {item.event}
                </Option>
              ))}
            </Select>
            <div className="inputDesc">{eventTypeDescription}</div>
          </div>
          <div className="webhookLabelInputWrapper">
            <div className="InputLabel">
              Label<span className="requiredFieldRedColor">*</span>
            </div>

            <Input
              size="large"
              placeholder="Integration with slack"
              defaultValue={webhookDetails.name}
              onChange={e =>
                this.onChange("webhookDetails", {
                  ...webhookDetails,
                  name: e.target.value
                })
              }
            />
          </div>
          <div className="webhookURLInputWrapper">
            <div className="InputLabel">
              URL<span className="requiredFieldRedColor">*</span>
            </div>
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
            <div className="InputLabel">Request Header (Optional)</div>
            <div className="headerInputFlex">
              {headerEntries.map((item: any, index: number) => {
                return (
                  <div
                    key={`header${index}`}
                    className="requestHeaderrowWrapper"
                  >
                    <Input
                      style={{ width: "45%" }}
                      size="large"
                      defaultValue={headerEntries[index][0]}
                      value={headerEntries[index][0]}
                      onChange={e =>
                        this.onChangeHeadersHandler(e.target.value, index, 0)
                      }
                    />
                    <Input
                      style={{ width: "45%" }}
                      size="large"
                      defaultValue={headerEntries[index][1]}
                      value={headerEntries[index][1]}
                      onChange={e =>
                        this.onChangeHeadersHandler(e.target.value, index, 1)
                      }
                    />
                    <div
                      style={{
                        marginRight: "2%"
                      }}
                      onClick={() => {
                        headerEntries.splice(index, 1);
                        this.setState({
                          headerEntries
                        });
                      }}
                    >
                      <label style={{ fontSize: 20, cursor: "pointer" }}>
                        X
                      </label>
                    </div>
                  </div>
                );
              })}

              <Button
                // disabled
                className="buttonBlueBorder"
                size="large"
                onClick={() => this.onAddHeaderField()}
              >
                +Add
              </Button>
            </div>
          </div>
          <Button
            disabled={
              !Boolean(webhookDetails.url.trim() && webhookDetails.name.trim())
            }
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
