import gql from 'graphql-tag';
export const userDetails = gql`
	query($id: ID!) {
		user(id: $id) {
			id
			firstName
			organization {
				id
				name
				addressLine1
				addressLine2
				city
				state
				pinCode
				country
				code
				status
				phoneNumber
				organizationType
				children {
					id
					name
					addressLine1
					addressLine2
					city
					state
					pinCode
					country
					code
					status
					phoneNumber
					organizationType
					users {
						id
						email
						firstName
						lastName
					}
				}
				store {
					id
					name
					STATUS
					addressLine1
					addressLine2
					city
					state
					pinCode
					country
					code
				}
			}
		}
	}
`;
export const orgId = gql`
	query($id: ID!) {
		organization(id: $id) {
			id
		}
	}
`;
export const orgDetails = gql`
	query($id: ID!) {
		organization(id: $id) {
			id
			name
			addressLine1
			addressLine2
			city
			state
			pinCode
			country
			code
			status
			phoneNumber
			organizationType
			children {
				id
				name
				organizationType
				addressLine1
				addressLine2
				city
				state
				pinCode
				country
				code
				status
				phoneNumber
				organizationType
			}
			users {
				id
				firstName
				email
				lastName
				lastName
				status
			}
		}
	}
`;

export const addSubOrganization = gql`
	mutation createOrganization(
		$parentId: ID!
		$name: String!
		$code: String!
		$addressLine1: String
		$phoneNumber: String
		$status: STATUS!
		$organizationType: OrganizationTypeEnum!
	) {
		createOrganization(
			parentId: $parentId
			organizationInput: {
				name: $name
				code: $code
				addressLine1: $addressLine1
				status: $status
				phoneNumber: $phoneNumber
				organizationType: $organizationType
			}
		) {
			id
		}
	}
`;

export const deleteSubOrganization = gql`
	mutation deleteOrganization($id: ID!) {
		deleteOrganization(id: $id) {
			name
		}
	}
`;
