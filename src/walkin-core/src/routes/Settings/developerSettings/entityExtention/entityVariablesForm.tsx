import * as React from 'react';
import './style.css';
import { Select, Input, Button, Switch } from 'antd';

const { Option } = Select;

const SLUG_TYPE = [
  'DATE',
  'TIMESTAMP',
  'TIME',
  'SHORT_TEXT',
  'LONG_TEXT',
  'NUMBER',
  'CHOICES',
  'BOOLEAN',
  'JSON',
];

interface EntityVariablesFormProps {
  entityExtendField: any;
  onSave: (input: any) => void;
  isLoading?: boolean;
}

interface EntityVariablesFormState {
  entityExtendField: {
    id?: string;
    slug?: string;
    help?: string;
    label?: string;
    type?: string;
    required?: boolean;
    defaultValue?: string;
    searchable?: boolean;
    choices?: any;
    description?: any;
  };
}

export default class EntityVariablesForm extends React.Component<
  EntityVariablesFormProps,
  EntityVariablesFormState
> {
  constructor(props: EntityVariablesFormProps) {
    super(props);
    this.state = {
      entityExtendField: {
        slug: '',
        help: '',
        label: '',
        type: 'DATE',
        required: false,
        defaultValue: '',
        searchable: false,
        choices: [],
        description: '',
      },
    };
  }

  UNSAFE_componentWillMount() {
    let { entityExtendField } = this.props;
    console.log(entityExtendField, 'test');

    if (entityExtendField) {
      this.setState({ entityExtendField });
    }
  }

  onChange = (type: string, value: any) => {
    this.setState(
      (
        prevState: Readonly<EntityVariablesFormState>,
        props: Readonly<EntityVariablesFormProps>
      ) => {
        return {
          ...prevState,
          [type]: value,
        };
      }
    );
  };

  onSave = () => {
    this.props.onSave(this.state.entityExtendField);
  };

  render() {
    let { entityExtendField } = this.state;

    let header = 'Edit Variable Details';
    if (!entityExtendField.id) {
      header = 'Add New Variable';
    }

    return (
      <div className="entityVariablesFormContainer">
        <div
          style={{
            width: '60%',
          }}
        >
          <div className="entityVariableFormTitle">{header}</div>
          <div className="entityVariableInputWrapper">
            <div className="InputLabel">
              Label<span className="requiredFieldRedColor">*</span>
            </div>
            <Input
              size="large"
              placeholder="Label"
              defaultValue={entityExtendField.label}
              onChange={(e: any) =>
                this.onChange('entityExtendField', {
                  ...entityExtendField,
                  label: e.target.value,
                })
              }
            />
            <div className="inputDesc">
              Short description about above field.
            </div>
          </div>

          <div className="entityVariableFlexWrapper">
            <div className="entityVariableInputWrapper width45percent">
              <div className="InputLabel">
                Slug<span className="requiredFieldRedColor">*</span>
              </div>

              <Input
                size="large"
                placeholder="Slug"
                defaultValue={entityExtendField.slug}
                onChange={e =>
                  this.onChange('entityExtendField', {
                    ...entityExtendField,
                    slug: e.target.value,
                  })
                }
              />
              <div className="inputDesc">
                Short description about above field.
              </div>
            </div>
            <div
              id="EntityInputWrapper"
              className="entityVariableInputWrapper width45percent"
            >
              <div className="InputLabel">
                Type<span className="requiredFieldRedColor">*</span>
              </div>

              <Select
                getPopupContainer={() =>
                  document.getElementById('EntityInputWrapper')
                }
                style={{ width: '100%' }}
                defaultValue={entityExtendField.type}
                size="large"
                onChange={(event: any) => {
                  this.onChange('entityExtendField', {
                    ...entityExtendField,
                    type: event,
                  });
                }}
              >
                {SLUG_TYPE.map((type, index) => (
                  <Option key={`type${index}`} value={type}>
                    {type}
                  </Option>
                ))}
              </Select>
              <div className="inputDesc">
                Short description about above field.
              </div>
            </div>
          </div>

          {entityExtendField.type === 'CHOICES' && (
            <div className="entityVariableInputWrapper">
              <div className="InputLabel">List of choices</div>
              <Select
                size="large"
                mode="tags"
                style={{ width: '100%' }}
                placeholder="choices"
                defaultValue={entityExtendField.choices}
                onChange={(event: any) => {
                  this.onChange('entityExtendField', {
                    ...entityExtendField,
                    choices: event,
                  });
                }}
                getPopupContainer={() =>
                  document.getElementById('EntityInputWrapper')
                }
              />
              <div className="inputDesc">
                Short description about above field.
              </div>
            </div>
          )}

          <div className="entityVariableFlexWrapper">
            <div className="entityVariableInputWrapper width45percent">
              <div className="InputLabel">
                Default Value<span className="requiredFieldRedColor">*</span>
              </div>

              <Input
                size="large"
                placeholder="Default Value"
                defaultValue={entityExtendField.defaultValue}
                onChange={e =>
                  this.onChange('entityExtendField', {
                    ...entityExtendField,
                    defaultValue: e.target.value,
                  })
                }
              />
              <div className="inputDesc">
                Short description about above field.
              </div>
            </div>
            <div className="entityVariableInputWrapper width45percent">
              <div className="InputLabel">
                Description<span className="requiredFieldRedColor">*</span>
              </div>

              <Input
                size="large"
                placeholder="Description"
                defaultValue={entityExtendField.description}
                onChange={(e: any) =>
                  this.onChange('entityExtendField', {
                    ...entityExtendField,
                    description: e.target.value,
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
                  this.onChange('entityExtendField', {
                    ...entityExtendField,
                    required: value,
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
                  this.onChange('entityExtendField', {
                    ...entityExtendField,
                    searchable: value,
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
            disabled={
              !Boolean(
                entityExtendField.slug.trim() &&
                  entityExtendField.label.trim() &&
                  entityExtendField.description.trim() &&
                  entityExtendField.defaultValue.trim()
              )
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
