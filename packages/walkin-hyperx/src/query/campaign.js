import gql from 'graphql-tag';
export const campaigns = gql`
	query($status: STATUS!) {
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
