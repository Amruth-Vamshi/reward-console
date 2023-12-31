import React from 'react';
import './style.css';
import { Menu, message } from 'antd';

import {
  CREATE_MESSAGE_TEMPLATE_VARIABLE,
  ADD_VARIABLE_TO_TEMPLATE,
  GET_MESSAGE_TEMPLATE,
} from '../../../query/index';
import * as jwt from 'jsonwebtoken';

interface MessageTemplateProps {
  messageTemplateId: any;
  messageTemplateVariables: any;
  client: any;
  addVariable: any;
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

  createTemplateVariable = async (key, value, org_id) => {
    if (!value || !key) {
      message.warn('Error while creating template variables!');
      return;
    }

    try {
      let templateVariableResponse = await this.props.client.mutate({
        mutation: CREATE_MESSAGE_TEMPLATE_VARIABLE,
        variables: {
          input: {
            name: key,
            key: key,
            type: 'STRING',
            format: 'NO_FORMATING',
            defaultValue: value,
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

  init = async (nextProps = null) => {
    //Message template Variables are not needed for current backend.
    // const jwtToken: any = localStorage.getItem('jwt');
    // const { org_id }: any = jwt.decode(jwtToken);
    // let defaultValues = {
    //   pointsEarned: {
    //     value: ' ',
    //     exists: false,
    //   },
    //   pointsRedeemed: {
    //     value: ' ',
    //     exists: false,
    //   },
    //   pointsToExpire: {
    //     value: ' ',
    //     exists: false,
    //   },
    //   pointsBalance: {
    //     value: ' ',
    //     exists: false,
    //   },
    //   expiryDate: {
    //     value: ' ',
    //     exists: false,
    //   },
    //   daysToExpire: {
    //     value: ' ',
    //     exists: false,
    //   },
    // };
    // let messageTemplateId = nextProps
    //   ? nextProps.messageTemplateId
    //   : this.props.messageTemplateId;
    // let messageTemplateVariables, messageTemplateResponse;
    // try {
    //   if (!messageTemplateId) return;
    //   messageTemplateResponse = await this.props.client.query({
    //     query: GET_MESSAGE_TEMPLATE,
    //     variables: { id: messageTemplateId, organization_id: org_id },
    //   });
    //   messageTemplateResponse = Object.assign(
    //     messageTemplateResponse.data.messageTemplate
    //   );
    //   if (messageTemplateResponse) {
    //     messageTemplateVariables =
    //       messageTemplateResponse.messageTemplateVariables;
    //   }
    // } catch (e) {
    //   console.log(e);
    // }
    // this.setState({ templateVariables: {} });
    // if (messageTemplateVariables) {
    //   messageTemplateVariables.forEach(variable => {
    //     if (defaultValues[variable.key])
    //       defaultValues[variable.key].exists = true;
    //     this.addVariable(variable.key, {
    //       id: variable.id,
    //       value: variable.defaultValue,
    //     });
    //   });
    // }
    // for (const key in defaultValues) {
    //   //if (messageTemplateResponse.name.indexOf(defaultValues[key].defaultFor) != -1) {
    //   if (!defaultValues[key].exists)
    //     this.createTemplateVariable(key, defaultValues[key].value, org_id);
    //   //}
    // }
  };

  async componentWillMount() {
    this.init();
  }

  async componentWillReceiveProps(nextProps) {
    this.init(nextProps);
  }

  render() {
    let menuItems = [];
    let { templateVariables } = this.state;
    for (const key in templateVariables) {
      menuItems.push(
        <div className="dropdown-item" key={`${key}-variable`}>
          {key}
        </div>
      );
    }
    let display_items = (
      <React.Fragment>
        <div
          onClick={() => {
            this.props.addVariable('pointsEarned');
          }}
          className="dropdown-item"
        >
          pointsEarned
        </div>
        <div
          onClick={() => {
            this.props.addVariable('pointsRedeemed');
          }}
          className="dropdown-item"
        >
          pointsRedeemed
        </div>
        <div
          onClick={() => {
            this.props.addVariable('pointsToExpire');
          }}
          className="dropdown-item"
        >
          pointsToExpire
        </div>
        <div
          onClick={() => {
            this.props.addVariable('pointsBalance');
          }}
          className="dropdown-item"
        >
          pointsBalance
        </div>
        <div
          onClick={() => {
            this.props.addVariable('expiryDate');
          }}
          className="dropdown-item"
        >
          expiryDate
        </div>
        <div
          onClick={() => {
            this.props.addVariable('daysToExpire');
          }}
          className="dropdown-item"
        >
          daysToExpire
        </div>
      </React.Fragment>
    );
    return (
      <Menu>
        <div className="dropdown-container">
          {/*!this.props.messageTemplateId ? display_items : menuItems*/}
          {display_items}
        </div>
      </Menu>
    );
  }
}
