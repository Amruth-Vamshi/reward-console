import gql from 'graphql-tag';
export const campaigns = gql`
	query campaigns($status: STATUS!) {
		campaigns(status: $status) {
			id
			name
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