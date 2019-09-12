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
export const attributes = gql`
	query {
		ruleAttributes {
			id
			attributeName
			description
			attributeValueType
			status
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
				id name status type ruleConfiguration ruleAttributes
			}
		}
	}
`;
