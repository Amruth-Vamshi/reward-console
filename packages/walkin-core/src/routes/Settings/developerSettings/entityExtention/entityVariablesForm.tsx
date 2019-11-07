import * as React from "react";
import "./style.css";
import { Select, Input, Button, Switch } from "antd";

const { Option } = Select;

const SLUG_TYPE = [
  "DATE",
  "TIMESTAMP",
  "TIME",
  "SHORT_TEXT",
  "LONG_TEXT",
  "NUMBER",
  "CHOICES",
  "BOOLEAN",
  "JSON"
];


interface EntityVariablesFormProps {
  entityExtendField: any,
  onSave: (input: any) => void,
  isLoading?: boolean
}

interface EntityVariablesFormState {
  entityExtendField: {
    id?: string,
    slug?: string,
    help?: string,
    label?: string,
    type?: string,
    required?: boolean,
    defaultValue?: string,
    searchable?: boolean,
    choices?: any,
    description?: any
  }
}

export default class EntityVariablesForm extends React.Component<EntityVariablesFormProps, EntityVariablesFormState> {
  constructor(props: EntityVariablesFormProps) {
    super(props);
    this.state = {
      entityExtendField: {
        id: '',
        slug: "",
        help: "",
        label: "",
        type: "DATE",
        required: false,
        defaultValue: "",
        searchable: false,
        choices: '',
        description: ''
      }
    };
  }

  componentWillMount() {
    let { entityExtendField } = this.props;
    if (entityExtendField) {
      this.setState({ entityExtendField });
    }
  }

  onChange = (type: string, value: any) => {
    this.setState((prevState: Readonly<EntityVariablesFormState>, props: Readonly<EntityVariablesFormProps>) => {
      return {
        ...prevState,
        [type]: value
      }
    });
  };

  onSave = () => {
    this.props.onSave(this.state.entityExtendField);
  };

  render() {
    let { entityExtendField } = this.state;

    let header = "Edit Variable Details";
    if (!entityExtendField.id) {
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
              placeholder="Label"
              defaultValue={entityExtendField.label}
              onChange={(e: any) =>
                this.onChange("entityExtendField", {
                  ...entityExtendField,
                  label: e.target.value
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

              <Input
                size="large"
                placeholder="Slug"
                defaultValue={entityExtendField.slug}
                onChange={e =>
                  this.onChange("entityExtendField", {
                    ...entityExtendField,
                    slug: e.target.value
                  })
                }
              />
              <div className="inputDesc">
                Short description about above field.
              </div>
            </div>
            <div className="entityVariableInputWrapper width45percent">
              <div className="InputLabel">Type</div>

              <Select
                style={{ width: "100%" }}
                defaultValue={entityExtendField.type}
                size="large"
                onChange={(event: any) => {
                  this.onChange("entityExtendField", {
                    ...entityExtendField,
                    type: event
                  });
                }}
              >
                {SLUG_TYPE.map((type, index) => (
                  <Option value={type}>{type}</Option>
                ))}
              </Select>
              <div className="inputDesc">
                Short description about above field.
              </div>
            </div>
          </div>

          {entityExtendField.type === "CHOICES" && (
            <div className="entityVariableInputWrapper">
              <div className="InputLabel">Label</div>
              <Select
                size="large"
                mode="tags"
                style={{ width: "100%" }}
                placeholder="choices"
                defaultValue={entityExtendField.choices}
                onChange={(event: any) => {
                  this.onChange("entityExtendField", {
                    ...entityExtendField,
                    choices: event
                  });
                }}
              />
              <div className="inputDesc">
                Short description about above field.
              </div>
            </div>
          )}

          <div className="entityVariableFlexWrapper">
            <div className="entityVariableInputWrapper width45percent">
              <div className="InputLabel">Default Value</div>

              <Input
                size="large"
                placeholder="Default Value"
                defaultValue={entityExtendField.defaultValue}
                onChange={e =>
                  this.onChange("entityExtendField", {
                    ...entityExtendField,
                    defaultValue: e.target.value
                  })
                }
              />
              <div className="inputDesc">
                Short description about above field.
              </div>
            </div>
            <div className="entityVariableInputWrapper width45percent">
              <div className="InputLabel">Description</div>

              <Input
                size="large"
                placeholder="Description"
                defaultValue={entityExtendField.description}
                onChange={(e: any) =>
                  this.onChange("entityExtendField", {
                    ...entityExtendField,
                    description: e.target.value
                  })
                }
              />
              <div className="inputDesc">
                Short description about above field.
              </div>
            </div>
          </div>

          <div className="entityVariableFlexWrapper">
            <div className="entityVariableInputWrapper width15percent ">
              <Switch
                checked={entityExtendField.required}
                onChange={(value: any) =>
                  this.onChange("entityExtendField", {
                    ...entityExtendField,
                    required: value
                  })
                }
              />
            </div>
            <div className="entityVariableInputWrapper width75percent">
              Required
              <div className="inputDesc">
                Short description about above field.
              </div>
            </div>
          </div>
          <div className="entityVariableFlexWrapper">
            <div className="entityVariableInputWrapper width15percent ">
              <Switch
                checked={entityExtendField.searchable}
                onChange={(value: any) =>
                  this.onChange("entityExtendField", {
                    ...entityExtendField,
                    searchable: value
                  })
                }
              />
            </div>
            <div className="entityVariableInputWrapper width75percent ">
              Searchable
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
