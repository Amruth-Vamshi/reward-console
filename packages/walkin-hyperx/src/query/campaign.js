import gql from 'graphql-tag';
export const campaigns = gql`
	query campaigns($status: STATUS!) {
		campaigns(status: $status) {
			id name priority
      campaignStatus
			description
			startTime
			endTime
			status
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