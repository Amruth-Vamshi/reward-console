import React, { Component } from "react";
import "./style.css";
import { Select, Input, Button, Switch } from "antd";

const { Option } = Select;

export default class EntityVariablesForm extends Component {
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

  componentWillMount() {}

  onChange = (type, value) => {
    this.setState({ [type]: value });
  };

  onSave = () => {
    this.props.onSave();
  };

  render() {
    let { webhookDetails, headerEntries } = this.state;
    let header = "Edit Variable Details";
    if (!webhookDetails.id) {
      header = "Add New Variable";
    }

    return (
      <div className="entityVariablesFormContainer">
        <div
          style={{
            width: "60%"
          }}
        >
          <div className="entityVariableFormTitle">{header}</div>
          <div className="entityVariableInputWrapper">
            <div className="InputLabel">Label</div>
            <Input
              size="large"
              //   addonBefore={selectBefore}
              placeholder="Label"
              defaultValue={webhookDetails.url}
              onChange={e =>
                this.onChange("webhookDetails", {
                  ...webhookDetails,
                  url: e.target.value
                })
              }
            />
            <div className="inputDesc">
              Short description about above field.
            </div>
          </div>

          <div className="entityVariableFlexWrapper">
            <div className="entityVariableInputWrapper width45percent">
              <div className="InputLabel">Slug</div>

              <Input size="large" placeholder="Slug" />
              <div className="inputDesc">
                Short description about above field.
              </div>
            </div>
            <div className="entityVariableInputWrapper width45percent">
              <div className="InputLabel">Type</div>

              <Select
                defaultValue="lucy"
                style={{ width: "100%" }}
                // onChange={thishandleChange}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
              <div className="inputDesc">
                Short description about above field.
              </div>
            </div>
          </div>

          <div className="entityVariableInputWrapper">
            <div className="InputLabel">Label</div>
            <Select
              mode="multiple"
              style={{ width: "100%" }}
              placeholder="select one country"
              defaultValue={["china"]}
              //   onChange={handleChange}
              optionLabelProp="label"
            >
              <Option value="china" label="China">
                <span role="img" aria-label="China">
                  🇨🇳
                </span>
                China (中国)
              </Option>
              <Option value="usa" label="USA">
                <span role="img" aria-label="USA">
                  🇺🇸
                </span>
                USA (美国)
              </Option>
              <Option value="japan" label="Japan">
                <span role="img" aria-label="Japan">
                  🇯🇵
                </span>
                Japan (日本)
              </Option>
              <Option value="korea" label="Korea">
                <span role="img" aria-label="Korea">
                  🇰🇷
                </span>
                Korea (韩国)
              </Option>
            </Select>
            ,
            <div className="inputDesc">
              Short description about above field.
            </div>
          </div>

          <div className="entityVariableFlexWrapper">
            <div className="entityVariableInputWrapper width45percent">
              <div className="InputLabel">Default Value</div>

              <Input size="large" placeholder="Default Value" />
              <div className="inputDesc">
                Short description about above field.
              </div>
            </div>
            <div className="entityVariableInputWrapper width45percent">
              <div className="InputLabel">Description</div>

              <Input size="large" placeholder="Description" />
              <div className="inputDesc">
                Short description about above field.
              </div>
            </div>
          </div>

          <div className="entityVariableFlexWrapper">
            <div className="entityVariableInputWrapper width15percent ">
              <Switch />
            </div>
            <div className="entityVariableInputWrapper width75percent">
              Short description about above field.
              <div className="inputDesc">
                Short description about above field.
              </div>
            </div>
          </div>
          <div className="entityVariableFlexWrapper">
            <div className="entityVariableInputWrapper width15percent ">
              <Switch />
            </div>
            <div className="entityVariableInputWrapper width75percent ">
              Short description about above field.
              <div className="inputDesc">
                Short description about above field.
              </div>
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
