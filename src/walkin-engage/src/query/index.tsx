import gql from 'graphql-tag';

export const GET_USERS = gql`
  query users($organizationId: String!) {
    users(organizationId: $organizationId) {
      data {
        id
        email
      }
    }
  }
`;

export const GET_LOYALTY_PROGRAM = gql`
  query loyaltyPrograms($loyaltyCardCode: String!, $organizationId: ID!) {
    loyaltyPrograms(
      loyaltyCardCode: $loyaltyCardCode
      organizationId: $organizationId
    ) {
      data {
        id
        loyaltyCode
        code
        loyaltyCardCode
        code
        loyaltyBurnRule {
          id
          ruleExpression
        }
        loyaltyEarnRule {
          id
          ruleExpression
        }
        loyaltyExpiryRule {
          id
          ruleExpression
        }
        expiryValue
        campaign {
          id
          name
          status
          campaignStatus
          startTime
        }
      }
    }
  }
`;

export const GET_LOYALTY_CARD = gql`
  query loyaltyCards($organizationId: ID!) {
    loyaltyCards(organizationId: $organizationId) {
      data {
        id
        code
        name
      }
    }
  }
`;

export const GET_BUSINESS_RULE = gql`
  query businessRules($input: SearchBusinessRulesInput!) {
    businessRules(input: $input) {
      id
      ruleLevel
      ruleType
      ruleDefaultValue
    }
  }
`;

export const CREATE_BUSINESS_RULE = gql`
  mutation createBusinessRule($input: CreateBusinessRuleInput) {
    createBusinessRule(input: $input) {
      id
      ruleLevel
      ruleType
      ruleDefaultValue
    }
  }
`;

export const UPDATE_BUSINESS_RULE = gql`
  mutation updateBusinessRule($id: ID!, $input: UpdateBusinessRuleInput!) {
    updateBusinessRule(id: $id, input: $input) {
      id
      ruleType
      ruleDefaultValue
    }
  }
`;

export const CREATE_LOYALTY_PROGRAM = gql`
  mutation createLoyaltyProgram($input: CreateLoyaltyProgramInput!) {
    createLoyaltyProgram(input: $input) {
      id
      expiryValue
      campaign {
        id
        name
        description
        startTime
        endTime
        campaignType
        status
        priority
        campaignStatus
      }
      code
      loyaltyCode
      loyaltyCardCode
      organizationId
      loyaltyEarnRule {
        id
        name
        description
        status
        type
        ruleConfiguration
        ruleExpression
      }
      loyaltyBurnRule {
        id
        name
        description
        status
        type
        ruleConfiguration
        ruleExpression
      }
      loyaltyExpiryRule {
        id
        name
        description
        status
        type
        ruleConfiguration
        ruleExpression
      }
    }
  }
`;

export const UPDATE_LOYALTY_PROGRAM = gql`
  mutation updateLoyaltyProgram($input: UpdateLoyaltyProgramInput) {
    updateLoyaltyProgram(input: $input) {
      id
      expiryValue
      campaign {
        id
        name
        description
        startTime
        endTime
        campaignType
        status
        priority
        campaignStatus
      }
      code
      loyaltyCode
      loyaltyCardCode
      organizationId
      loyaltyEarnRule {
        id
        name
        description
        status
        type
        ruleConfiguration
        ruleExpression
      }
      loyaltyBurnRule {
        id
        name
        description
        status
        type
        ruleConfiguration
        ruleExpression
      }
      loyaltyExpiryRule {
        id
        name
        description
        status
        type
        ruleConfiguration
        ruleExpression
      }
    }
  }
`;

export const GET_COMMUNICATIONS = gql`
  query communications(
    $entityType: COMMUNICATION_ENTITY_TYPE
    $organization_id: ID!
  ) {
    communications(entityType: $entityType, organization_id: $organization_id) {
      id
      entityId
      entityType
      commsChannelName
      messageTemplate {
        id
        messageFormat
        templateBodyText
        templateSubjectText
        messageTemplateVariables {
          id
          name
          required
          defaultValue
          key
        }
      }
      isScheduled
      status
    }
  }
`;

export const UPDATE_COMMUNICATION = gql`
  mutation updateCommunicationWithMessageTempate(
    $communicationInput: UpdateCommunicationInput!
    $messageTemplateInput: UpdateMessageTemplateInput
  ) {
    updateCommunicationWithMessageTempate(
      communicationInput: $communicationInput
      messageTemplateInput: $messageTemplateInput
    ) {
      id
      entityId
      entityType
      isScheduled
      firstScheduleDateTime
      commsChannelName
      status
      repeatRuleConfiguration {
        frequency
        repeatInterval
        endAfter
        byWeekDay
        time
      }
      organization {
        id
        name
      }
      application {
        id
        name
      }
      lastProcessedDateTime
      messageTemplate {
        id
        name
        description
        messageFormat
        templateBodyText
        templateSubjectText
        templateStyle
        messageTemplateVariables {
          id
          name
          key
          status
          defaultValue
        }
        status
      }
    }
  }
`;

export const CREATE_COMMUNICATION = gql`
  mutation createCommunicationWithMessageTempate(
    $communicationInput: CreateCommunicationWithoutMessageTemplateInput!
    $messageTemplateInput: CreateMessageTemplateInput
  ) {
    createCommunicationWithMessageTempate(
      communicationInput: $communicationInput
      messageTemplateInput: $messageTemplateInput
    ) {
      id
      entityId
      entityType
      isScheduled
      firstScheduleDateTime
      commsChannelName
      status
      repeatRuleConfiguration {
        frequency
        repeatInterval
        endAfter
        byWeekDay
        time
      }
      organization {
        id
        name
      }
      application {
        id
        name
      }
      lastProcessedDateTime
      messageTemplate {
        id
        name
        description
        messageFormat
        templateBodyText
        templateSubjectText
        templateStyle
        messageTemplateVariables {
          id
          name
          key
          status
          defaultValue
        }
        status
      }
    }
  }
`;

export const GET_CAMPAIGNS = gql`
  query campaigns(
    $status: STATUS!
    $campaignType: [String]
    $organization_id: ID
  ) {
    campaigns(
      status: $status
      campaignType: $campaignType
      organization_id: $organization_id
    ) {
      id
      name
      priority
      campaignStatus
      description
      startTime
      endTime
      status
    }
  }
`;

export const GET_EXPIRY_COMMUNICAIONS = gql`
  query expiryCommunicationByLoyaltyCardCodeAndEventType(
    $organizationId: String
    $eventType: ExpiryCommunicationEventType!
    $loyaltyCardCode: String!
  ) {
    expiryCommunicationByLoyaltyCardCodeAndEventType(
      organizationId: $organizationId
      eventType: $eventType
      loyaltyCardCode: $loyaltyCardCode
    ) {
      id
      loyaltyCard {
        id
        code
        name
      }
      communication {
        id
        entityId
        entityType
        messageTemplate {
          id
          name
          description
          messageFormat
          templateBodyText
          templateSubjectText
          templateStyle
          messageTemplateVariables {
            id
            key
            defaultValue
          }
        }
        isScheduled
        firstScheduleDateTime
        isRepeatable
        lastProcessedDateTime
        repeatRuleConfiguration {
          frequency
          repeatInterval
          endAfter
          byWeekDay
          byMonthDate
          time
          noOfOccurances
        }
        commsChannelName
        status
      }
      eventType
      numberOfDays
    }
  }
`;

export const CREATE_EXPIRY_COMMUNICATION = gql`
  mutation createExpiryCommunication($input: expiryCommunicationInput!) {
    createExpiryCommunication(input: $input) {
      id
      loyaltyCard {
        id
        code
        name
        currency {
          id
          code
          conversionRatio
          name
        }
      }
      communication {
        id
        entityId
        entityType
        messageTemplate {
          id
          name
          description
          messageFormat
          templateBodyText
          templateSubjectText
          templateStyle
          messageTemplateVariables {
            id
            key
            defaultValue
          }
        }
        isScheduled
        firstScheduleDateTime
        isRepeatable
        lastProcessedDateTime
        repeatRuleConfiguration {
          frequency
          repeatInterval
          endAfter
          byWeekDay
          byMonthDate
          time
          noOfOccurances
        }
        commsChannelName
        status
      }
      eventType
      numberOfDays
    }
  }
`;
export const UPDATE_EXPIRY_COMMUNICATION = gql`
  mutation updateExpiryCommunication($input: updateExpiryCommunicationInput!) {
    updateExpiryCommunication(input: $input) {
      id
      loyaltyCard {
        id
        code
        name
        currency {
          id
          code
          conversionRatio
          name
        }
      }
      communication {
        id
        entityId
        entityType
        messageTemplate {
          id
          name
          description
          messageFormat
          templateBodyText
          templateSubjectText
          templateStyle
          messageTemplateVariables {
            id
            key
            defaultValue
          }
        }
        isScheduled
        firstScheduleDateTime
        isRepeatable
        lastProcessedDateTime
        repeatRuleConfiguration {
          frequency
          repeatInterval
          endAfter
          byWeekDay
          byMonthDate
          time
          noOfOccurances
        }
        commsChannelName
        status
      }
      eventType
      numberOfDays
    }
  }
`;

export const CREATE_MESSAGE_TEMPLATE_VARIABLE = gql`
  mutation createMessageTemplateVariable(
    $input: CreateMessageTemplateVariableInput!
  ) {
    createMessageTemplateVariable(input: $input) {
      id
      name
      key
      type
      format
      defaultValue
      required
      status
    }
  }
`;

export const ADD_VARIABLE_TO_TEMPLATE = gql`
  mutation addVariableToMessageTemplate(
    $input: AddVariableToMessageTemplateInput!
  ) {
    addVariableToMessageTemplate(input: $input) {
      id
      name
      description
      messageFormat
      templateBodyText
      templateSubjectText
      templateStyle
      messageTemplateVariables {
        id
        name
        key
        status
        defaultValue
      }
      status
    }
  }
`;

export const REMOVE_VARIABLE_FROM_TEMPLATE = gql`
  mutation removeVariableFromMessageTemplate(
    $input: RemoveVariableFromMessageTemplateInput!
  ) {
    removeVariableFromMessageTemplate(input: $input) {
      id
      name
      description
      messageFormat
      templateBodyText
      templateSubjectText
      templateStyle
      messageTemplateVariables {
        id
        name
        key
        status
        defaultValue
      }
      status
    }
  }
`;

export const PAUSE_CAMPAIGN = gql`
  mutation pauseCampaign($id: ID!) {
    pauseCampaign(id: $id) {
      id
      name
      priority
      campaignStatus
      description
      startTime
      endTime
      status
    }
  }
`;

export const LAUNCH_CAMPAIGN = gql`
  mutation launchCampaign($id: ID!) {
    launchCampaign(id: $id) {
      id
      name
      priority
      campaignStatus
      description
      startTime
      endTime
      status
    }
  }
`;

export const UNPAUSE_CAMPAIGN = gql`
  mutation unpauseCampaign($id: ID!) {
    unpauseCampaign(id: $id) {
      id
      name
      priority
      campaignStatus
      description
      startTime
      endTime
      status
    }
  }
`;
export const SEND_MESSAGE = gql`
  mutation sendMessage($input: SendMessageInput!) {
    sendMessage(input: $input)
  }
`;

export const GET_MESSAGE_TEMPLATE_AND_SEND_SMS = gql`
  mutation getMessageTemplateAndSendSMS($input: MessageTemplateSMSInput) {
    getMessageTemplateAndSendSMS(input: $input) {
      status
    }
  }
`;

export const GET_RULE_ENTITIES = gql`
  query ruleEntities($input: SearchRuleEntityInput) {
    ruleEntities(input: $input) {
      id
      entityName
      entityCode
      status
      ruleAttributes {
        id
        attributeName
        status
      }
    }
  }
`;
export const CREATE_RULE_ENTITY = gql`
  mutation createRuleEntity($input: CreateRuleEntityInput!) {
    createRuleEntity(input: $input) {
      id
      entityName
      entityCode
      ruleAttributes {
        id
        attributeName
        status
      }
    }
  }
`;

export const CREATE_RULE_ATTRIBUTE = gql`
  mutation createRuleAttribute($input: CreateRuleAttributeInput!) {
    createRuleAttribute(input: $input) {
      id
      attributeName
      status
    }
  }
`;

export const GET_ALL_EXPIRY_COMMUNICATION = gql`
  query expiryCommunications(
    $organizationId: String
    $loyaltyCardCode: String
  ) {
    expiryCommunications(
      organizationId: $organizationId
      loyaltyCardCode: $loyaltyCardCode
    ) {
      data {
        id
        loyaltyCard {
          id
          code
          name
          currency {
            id
            code
            conversionRatio
            name
          }
        }
        communication {
          id
          entityId
          entityType
          messageTemplate {
            id
            name
            description
            messageFormat
            templateBodyText
            templateSubjectText
            templateStyle
            messageTemplateVariables {
              id
              key
              defaultValue
            }
          }
          isScheduled
          firstScheduleDateTime
          isRepeatable
          lastProcessedDateTime
          repeatRuleConfiguration {
            frequency
            repeatInterval
            endAfter
            byWeekDay
            byMonthDate
            time
            noOfOccurances
          }
          commsChannelName
          status
        }
        eventType
        numberOfDays
      }
    }
  }
`;

export const GET_MESSAGE_TEMPLATE = gql`
  query messageTemplate($id: ID!, $organization_id: ID!) {
    messageTemplate(id: $id, organization_id: $organization_id) {
      id
      name
      description
      messageFormat
      templateBodyText
      templateSubjectText
      templateStyle
      messageTemplateVariables {
        id
        name
        key
        status
        defaultValue
      }
      status
    }
  }
`;

export const UPDATE_RULE = gql`
  mutation updateRule($id: ID!, $input: UpdateRuleInput!) {
    updateRule(id: $id, input: $input) {
      id
      name
      description
      status
      type
      ruleConfiguration
      ruleExpression
      organization {
        id
      }
    }
  }
`;
