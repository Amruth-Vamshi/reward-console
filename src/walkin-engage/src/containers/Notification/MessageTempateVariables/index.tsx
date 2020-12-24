import React from 'react';
import './style.css';
import { Menu, message } from 'antd';
import Button from '../../../components/shared/Button/index';
import Input from '../../../components/shared/Input/index';
import {
  CREATE_MESSAGE_TEMPLATE_VARIABLE,
  ADD_VARIABLE_TO_TEMPLATE,
  UPDATE_MESSAGE_TEMPLATE_VARIABLE,
  REMOVE_VARIABLE_FROM_TEMPLATE,
} from '../../../query/index';
import * as jwt from 'jsonwebtoken';

interface MessageTemplateProps {
  messageTemplateId: any;
  messageTemplateVariables: any;
  client: any;
}

interface MessageTemplateVariablesState {
  templateVariables: any;
  inputKey: string;
  inputValue: string;
  editMode: any;
  editValue: string;
}

export default class MessageTemplateVariables extends React.Component<
  MessageTemplateProps,
  MessageTemplateVariablesState
> {
  constructor(props) {
    super(props);
    this.state = {
      inputKey: '',
      inputValue: '',
      templateVariables: {},
      editMode: 0,
      editValue: '',
    };
  }

  addVariable = (key, value) => {
    let templateVariables = this.state.templateVariables;
    templateVariables[key] = value;
    this.setState({
      templateVariables,
    });
  };

  createTemplateVariable = async () => {
    const jwtToken: any = localStorage.getItem('jwt');
    const { org_id }: any = jwt.decode(jwtToken);

    if (!this.state.inputValue || !this.state.inputKey) {
      message.warn('Please Enter key and value');
      return;
    }

    try {
      let templateVariableResponse = await this.props.client.mutate({
        mutation: CREATE_MESSAGE_TEMPLATE_VARIABLE,
        variables: {
          input: {
            name: this.state.inputKey,
            key: this.state.inputKey,
            type: 'STRING',
            format: 'NO_FORMATING',
            defaultValue: this.state.inputValue,
            required: false,
            organization_id: org_id,
            status: 'ACTIVE',
          },
        },
      });

      let templateVariable = Object.assign(
        templateVariableResponse.data.createMessageTemplateVariable
      );
      this.addVariableToTemplate(
        this.props.messageTemplateId,
        org_id,
        templateVariable.id
      );
      this.addVariable(templateVariable.key, {
        id: templateVariable.id,
        value: templateVariable.defaultValue,
      });
      this.setState({
        inputKey: '',
        inputValue: '',
      });
    } catch (e) {
      console.log(e);
    }
  };

  addVariableToTemplate = async (templateId, org_id, templateVariableId) => {
    try {
      await this.props.client.mutate({
        mutation: ADD_VARIABLE_TO_TEMPLATE,
        variables: {
          input: {
            organization_id: org_id,
            templateId,
            templateVariableId,
          },
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  updateMessageTemplateVariable = async templateVariableId => {
    const jwtToken: any = localStorage.getItem('jwt');
    const { org_id }: any = jwt.decode(jwtToken);

    if (!this.state.editValue) {
      message.warn('Please Enter default value');
      return;
    }

    try {
      let templateVariableResponse = await this.props.client.mutate({
        mutation: UPDATE_MESSAGE_TEMPLATE_VARIABLE,
        variables: {
          input: {
            id: templateVariableId,
            type: 'STRING',
            format: 'NO_FORMATING',
            defaultValue: this.state.editValue,
            required: false,
            organization_id: org_id,
            status: 'ACTIVE',
          },
        },
      });

      let templateVariable =
        templateVariableResponse.data.updateMessageTemplateVariable;
      let currentStateTemplateVariable = this.state.templateVariables;
      currentStateTemplateVariable[templateVariable.key].value =
        templateVariable.defaultValue;
      this.setState({
        templateVariables: currentStateTemplateVariable,
        editValue: '',
        editMode: 0,
      });
    } catch (e) {
      console.log(e);
    }
  };

  removeMessageTemplateVariable = async (templateVariableId, key) => {
    const jwtToken: any = localStorage.getItem('jwt');
    const { org_id }: any = jwt.decode(jwtToken);
    try {
      console.log(org_id, this.props.messageTemplateId, templateVariableId);
      let templateVariableResponse = await this.props.client.mutate({
        mutation: REMOVE_VARIABLE_FROM_TEMPLATE,
        variables: {
          input: {
            organization_id: org_id,
            templateId: this.props.messageTemplateId,
            templateVariableId,
          },
        },
      });
      console.log(templateVariableResponse);
      let templateVariable =
        templateVariableResponse.data.removeVariableFromMessageTemplate;
      let currentStateTemplateVariable = this.state.templateVariables;
      delete currentStateTemplateVariable[key];
      this.setState({
        templateVariables: currentStateTemplateVariable,
      });
    } catch (e) {
      console.log(e);
    }
  };

  init = (nextProps = null) => {
    let updateMessageTemplateVariableState = () => {
      let messageTemplateVariables = nextProps
        ? nextProps.messageTemplateVariables
        : this.props.messageTemplateVariables;
      this.setState({ templateVariables: {} });
      messageTemplateVariables.forEach(variable => {
        this.addVariable(variable.key, {
          id: variable.id,
          value: variable.defaultValue,
        });
      });
    };
    if (nextProps) {
      if (nextProps.messageTemplateId != this.props.messageTemplateId) {
        updateMessageTemplateVariableState();
      }
    } else {
      updateMessageTemplateVariableState();
    }
  };

  async componentWillMount() {
    this.init();
  }

  async componentWillReceiveProps(nextProps) {
    this.init(nextProps);
  }

  handleInputChange = (e, value) => {
    let state = {};
    state[value] = e.target.value;
    this.setState(state);
    return e.target.value;
  };

  render() {
    let menuItems = [];
    let {
      templateVariables,
      inputKey,
      inputValue,
      editMode,
      editValue,
    } = this.state;
    for (const key in templateVariables) {
      menuItems.push(
        <Menu.Item key={key}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              height: '100%',
            }}
          >
            <p>{`${key}:`}</p>
            {editMode == key ? (
              <React.Fragment>
                <input
                  className="edit-input"
                  value={editValue}
                  onChange={e => {
                    this.handleInputChange(e, 'editValue');
                  }}
                  placeholder={`${templateVariables[key].value}`}
                />
                <p
                  className="text-button"
                  onClick={() => {
                    this.updateMessageTemplateVariable(
                      templateVariables[key].id
                    );
                  }}
                >
                  Save
                </p>
                <p
                  className="text-button"
                  onClick={() => {
                    this.setState({ editMode: 0 });
                  }}
                >
                  Cancel
                </p>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <p>{`${templateVariables[key].value}`}</p>
                <p
                  className="text-button"
                  onClick={() => {
                    this.setState({ editMode: key });
                  }}
                >
                  Edit
                </p>
                <p
                  className="text-button"
                  onClick={() => {
                    this.removeMessageTemplateVariable(
                      templateVariables[key].id,
                      key
                    );
                  }}
                >
                  Delete
                </p>
              </React.Fragment>
            )}
          </div>
        </Menu.Item>
      );
    }
    return (
      <Menu style={{ border: '1px solid #D3EFE7', borderRadius: '4px' }}>
        {menuItems}
        <Menu.Divider />
        <div
          style={{
            padding: '10px 0px',
            width: '200px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Input
            value={inputKey}
            placeholder="Key"
            width="150px"
            onChange={this.handleInputChange}
            target1="inputKey"
          />
          <Input
            value={inputValue}
            placeholder="Default value"
            width="150px"
            onChange={this.handleInputChange}
            target1="inputValue"
          />
          <Button
            style="btnn-inline-text"
            size="btnn-medium"
            onClick={this.createTemplateVariable}
          >
            Add
          </Button>
        </div>
      </Menu>
    );
  }
}
