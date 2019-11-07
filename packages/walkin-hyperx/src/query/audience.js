import gql from 'graphql-tag';
export const allSegments = gql`
	query($organization_id: ID!, $status: STATUS!) {
		segments(status: $status, organization_id: $organization_id) {
			id name	status
			segmentType
			rule {
				id
				ruleConfiguration
			}
		}
	}
`;
export const ATTRIBUTES = gql`
	query ruleAttributes($input:SearchRuleAttributeInput!) {
		ruleAttributes(input:$input) {
			id status
			description
			attributeName
			attributeValueType
			organization{ id name }
			ruleEntity{ id  entityName entityCode}
		}
	}
`;

export const RULE_ATTRIBUTES = gql`
	query ruleAttributes($input:SearchRuleAttributeInput!) {
		ruleAttributes(input:$input) {
			id status
			description
			attributeName
			attributeValueType
			organization{ id name }
			ruleEntity{ id  entityName entityCode}
		}
	}
`;

export const createRule = gql`
	mutation createRule(
		$name: String!
		$description: String
		$type: RULE_TYPE!
		$organizationId: ID!
		$status: STATUS
		$ruleConfiguration: JSON
	) {
		createRule(
			input: {
				name: $name
				description: $description
				type: $type
				status: $status
				ruleConfiguration: $ruleConfiguration
				organizationId: $organizationId
			}
		) {
			id
			name
		}
	}
`;

export const CREATE_RULE = gql`
  mutation createRule($input: CreateRuleInput!) {
    createRule(input: $input) {
      id name description
      status type
      ruleConfiguration
      ruleExpression
    }
  }
`;

export const UPDATE_RULE = gql`
  mutation updateRule($id:ID! ,$input: UpdateRuleInput!) {
    updateRule(id:$id, input:$input) {
      id name description status type
    }
  }
`;

export const createSegment = gql`
	mutation createSegment(
		$name: String!
		$segmentType: SEGMENT_TYPE!
		$organization_id: ID!
		$application_id: ID!
		$rule_id: ID!
		$status: STATUS!
	) {
		createSegment(
			input: {
				name: $name
				segmentType: $segmentType
				status: $status
				organization_id: $organization_id
				application_id: $application_id
				rule_id: $rule_id
			}
		) {
			id
			name
		}
	}
`;

export const disableSegment = gql`
	mutation disableSegment($id: ID!) {
		disableSegment(id: $id) {
			id
			name
		}
	}
`;

export const UPDATE_SEGMENT = gql`
	mutation updateSegment($input: SegmentUpdateInput) {
		updateSegment(input: $input) {
			id name segmentType status rule{
				id name status type ruleConfiguration
			}
		}
	}
`;

export const GET_AUDIENCES = gql`
	query audiences($organization_id: ID,$application_id:ID,$campaign_id: ID,$segment_id: ID,$status: STATUS ) {
		audiences(organization_id: $organization_id,application_id: $application_id,
			campaign_id: $campaign_id,segment_id: $segment_id,status: $status) {
				id status campaign{ id name status }
    			segment{ id name segmentType status rule{ id name	type } }
		}
	}
`;

export const CREATE_AUDIENCE = gql`
	mutation createAudience($input:createAudienceInput!){
		createAudience(input:$input){
			id status campaign{ id name  }
			segment{ id name segmentType }
		}
	}
`


export const UPDATE_AUDIENCES = gql`
	mutation createAudienceForCampaign($campaignId:ID, $segments:[ID]!){
		createAudienceForCampaign(campaignId:$campaignId, segments:$segments){
			id campaign{ id name }
			segment{ id name segmentType rule{ id } }
	}
}`
export const AUDIENCE_COUNT = gql`
	query audienceCount($segments:[ID], $organizationId:ID!){
		audienceCount(segments:$segments, organizationId:$organizationId){
			count
		}
	}
`