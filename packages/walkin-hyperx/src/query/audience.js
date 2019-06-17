import gql from 'graphql-tag';
export const allSegments = gql`
	query {
		segments(status: ACTIVE) {
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
