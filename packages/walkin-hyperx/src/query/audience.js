import gql from 'graphql-tag';
export const allSegments = gql`
	query {
		segments(status: ACTIVE, organization_id: "7fe4e525-2457-4f19-980b-a0dd4a363eeb") {
			id
			name
			description
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
		$description: String!
		$segmentType: String!
		$organization_id: ID!
		$application_id: ID!
		$rule_configurations_id: ID!
		$status: STATUS!
	) {
		createSegment(
			input: {
				name: $name
				description: $description
				segmentType: $segmentType
				status: $status
				organization_id: $organization_id
				application_id: $application_id
				rule_configurations_id: $rule_configurations_id
			}
		) {
			id
			name
		}
	}
`;
