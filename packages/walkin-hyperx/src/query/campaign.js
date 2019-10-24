import gql from 'graphql-tag';
export const campaigns = gql`
	query campaigns($status: STATUS!,$campaignType:String,$organization_id:ID) {
		campaigns(status: $status,campaignType:$campaignType,organization_id: $organization_id) {
			id name priority
      campaignStatus
			description
			startTime
			endTime
			status
		}
	}
`;

export const GET_CAMPAIGN = gql`
  query campaign($id: ID!) {
    campaign(id: $id) {
      id
      name
      description
      startTime
      endTime
      status
      triggerRule{
        id
        name
        status
        ruleConfiguration
      }
      application{
        id
        name
        
      }
      audienceFilterRule{
        id
        name
        status
        ruleConfiguration
      }
      campaignType
      status
      feedbackForm {
        id
        title
      }
    }
  }
`;

export const CREATE_CAMPAIGN = gql`
  mutation createCampaign($input: CampaingAddInput) {
    createCampaign(input: $input) {
      id
      name
      description
      startTime
      endTime
      status
    }
  }
`;

export const UPDATE_CAMPAIGN = gql`
  mutation updateCampaign($id:ID! $input: CampaignUpdateInput) {
    updateCampaign(id:$id, input: $input) {
      id name description
      startTime endTime
      status triggerRule { id }
      campaignType priority
    }
  }
`;

export const DISABLE_CAMPAIGN = gql`
  mutation disableCampaign($id:ID!) {
    disableCampaign(id:$id) {
      id name description
      startTime endTime
      status triggerRule { id }
      campaignType priority
      campaignStatus
    }
  }
`;

export const CREATE_MESSAGE_TEMPLETE = gql`
  mutation createMessageTemplate($input: CreateMessageTemplateInput!) {
    createMessageTemplate(input: $input) {
      id name description
      messageFormat status
      templateBodyText
      templateSubjectText
      templateStyle
    }
  }
`;
export const COMMUNICATIONS = gql`
  query communications($entityId: ID!,$entityType:COMMUNICATION_ENTITY_TYPE,$organization_id: ID!) {
      communications(entityId: $entityId, entityType:$entityType, organization_id:$organization_id, status: ACTIVE) {
        id
        entityId
        entityType
        messageTemplate{
          id
          name
          messageFormat
          templateBodyText
          templateSubjectText
        }
      }
    }
`;

export const CREATE_COMMUNICATION = gql`
  mutation createCommunication($input: CreateCommunicationInput!) {
    createCommunication(input: $input) {
      id entityId entityType status isScheduled isRepeatable
      messageTemplate { id name templateBodyText templateSubjectText }
      commsChannelName
    }
  }
`;

export const LAUNCH_CAMPAIGN = gql`
  mutation launchCampaign($id:ID!) {
    launchCampaign(id:$id) {
      id name description
      startTime endTime
      status triggerRule { id }
      campaignType priority
      campaignStatus
    }
  }
`;

export const PAUSE_CAMPAIGN = gql`
  mutation pauseCampaign($id:ID!) {
    pauseCampaign(id:$id) {
      id name description
      startTime endTime
      status triggerRule { id }
      campaignType priority
      campaignStatus
    }
  }
`;

export const UNPAUSE_CAMPAIGN = gql`
  mutation unpauseCampaign($id:ID!) {
    unpauseCampaign(id:$id) {
      id name description
      startTime endTime
      status triggerRule { id }
      campaignType priority
      campaignStatus
    }
  }
`;

export const ABANDON_CAMPAIGN = gql`
  mutation abandonCampaign($id:ID!) {
    abandonCampaign(id:$id) {
      id name description
      startTime endTime
      status triggerRule { id }
      campaignType priority
      campaignStatus
    }
  }
`;

export const GET_CAMPAIGN_DASHBOARD = gql`
query campaign($id:ID!){
	campaign( id:$id){
    id name description status campaignStatus
    startTime endTime campaignType priority
    createdBy lastModifiedBy createdTime lastModifiedTime
    organization{ id name } application{id name}
    audienceFilterRule{ id name ruleConfiguration ruleExpression }
    # communication{ id entityId entityType  isScheduled isRepeatable status
    #   messageTemplate{id name templateBodyText templateSubjectText status}}
  }
}`;


export const CREATE_COMMUNICATION_WITH_MESSAGE_TEMPLETE = gql`
  mutation createCommunicationWithMessageTempate($communicationInput:CreateCommunicationWithoutMessageTemplateInput! $messageTemplateInput:CreateMessageTemplateInput){
      createCommunicationWithMessageTempate(communicationInput:$communicationInput, messageTemplateInput:$messageTemplateInput){
        id entityId entityType isScheduled firstScheduleDateTime commsChannelName status
        repeatRuleConfiguration{ frequency repeatInterval endAfter byWeekDay time}
        organization{ id name } application{ id name } lastProcessedDateTime
        messageTemplate{ id name description messageFormat templateBodyText templateSubjectText
          templateStyle messageTemplateVariables{id name key status} status}    
    }
}`

export const VIEW_CAMPAIGN = gql`
  query viewCampaignForHyperX($campaignId:ID!) {
  viewCampaignForHyperX(campaignId:$campaignId){
    campaign{id name description startTime endTime campaignType status priority
      audienceFilterRule{id name status type ruleConfiguration ruleExpression }
      createdBy lastModifiedBy createdTime lastModifiedTime campaignStatus }
    audiences{id segment{id name segmentType rule{id type ruleConfiguration ruleExpression}}}
    offers{id name offerType offerCategory coupon status}
    communications{id entityId entityType isScheduled isRepeatable commsChannelName lastProcessedDateTime
    	messageTemplate{id name templateBodyText templateSubjectText status messageFormat} firstScheduleDateTime
      repeatRuleConfiguration{frequency repeatInterval endAfter byWeekDay byMonthDate time noOfOccurances}}
  
  }
}`
