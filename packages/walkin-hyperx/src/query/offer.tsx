import gql from 'graphql-tag';
export const products = gql`
	query($organizationId: ID!) {
		products(input: { organizationId: $organizationId }) {
			id
			name
			code
			sku
		}
	}
`;
export const categories = gql`
	query($catalogId: ID!) {
		categories(catalogId: $catalogId) {
			id
			name
			catalogId
			code
		}
	}
`;
export const getOffers = gql`
	query($organizationId: ID!,$state:String) {
		getOffers(organizationId: $organizationId,state:$state) {
			id
			name
			offerType
			offerCategory
			state
		}
	}
`;
export const subOrganizations = gql`
	query($parentId: ID!, $type: OrganizationTypeEnum) {
		subOrganizations(parentId: $parentId, type: $type) {
			id
			city
			state
			pinCode
			code
		}
	}
`;
export const createOffer = gql`
	mutation createOffer(
		$name: String!
		$offerType: OFFER_TYPE!
		$reward: JSON
		$offerEligibilityRule: ID
		$organizationId: ID!
		$offerCategory: OFFER_CATEGORY!
		$rewardRedemptionRule: ID
		$isCustomCoupon: Boolean
		$coupon: String
	) {
		createOffer(
			input: {
				name: $name
				offerType: $offerType
				reward: $reward
				offerEligibilityRule: $offerEligibilityRule
				organizationId: $organizationId
				offerCategory: $offerCategory
				rewardRedemptionRule: $rewardRedemptionRule
				isCustomCoupon: $isCustomCoupon
				coupon: $coupon
			}
		) {
			id
			name
		}
	}
`;
export const updateOffer = gql`
	mutation updateOffer(
		$id: ID!
		$rewardRedemptionRuleId: ID
		$isCustomCoupon: Boolean
		$coupon: String
		$status: STATUS
	) {
		updateOffer(
			input: {
				id: $id
				rewardRedemptionRuleId: $rewardRedemptionRuleId
				isCustomCoupon: $isCustomCoupon
				coupon: $coupon
				status: $status
			}
		) {
			id
			name
		}
	}
`;
export const launchOffer = gql`
	mutation launchOffer($id: ID!) {
		launchOffer(id: $id) {
			id
		}
	}
`;
export const closeOffer = gql`
	mutation closeOffer($id: ID!) {
		closeOffer(id: $id) {
			id
		}
	}
`;

export const LAUNCH_OFFER = gql`
	mutation launchOffer($id: ID!) {
			launchOffer(id:$id){
			id name state
		}
	}
`;


export const ADD_OFFER_TO_CAMPAIGN = gql`
mutation addOfferToCampaign($input:CampaignOfferInput){
	addOfferToCampaign(input:$input){
	  id offer{id name }
	}
}`

export const GET_OFFER_FOR_CAMPAIGN = gql`
query getOffersForACampaign($campaign_id:ID!, $organization_id:ID!){
  getOffersForACampaign(campaignId:$campaign_id, organizationId:$organization_id){
    offer{ id offerType  name  description coupon  status  }
  }
}`