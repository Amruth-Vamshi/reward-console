import gql from 'graphql-tag';
export const campaigns = gql`
	query {
		campaigns(status: ACTIVE) {
			id
			name
			description
			startTime
			endTime
		}
	}
`;
