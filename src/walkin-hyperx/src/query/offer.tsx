import gql from "graphql-tag";
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
  query($organizationId: ID!, $state: String) {
    getOffers(organizationId: $organizationId, state: $state) {
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
      name
      status
      city
      state
      pinCode
      code
      addressLine1
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
      description
      offerType
      offerCategory
      reward
      organization {
        id
        name
      }
      coupon
      state
      stateCode
      status
      offerEligibilityRule {
        id
        name
        description
        status
        type
        ruleConfiguration
        ruleExpression
      }
      rewardRedemptionRule {
        id
        name
        description
        status
        type
        ruleConfiguration
        ruleExpression
      }
    }
  }
`;
export const UPDATE_OFFER = gql`
  mutation updateOffer($input: updateOfferInput) {
    updateOffer(input: $input) {
      id
      name
      description
      offerType
      offerCategory
      reward
      organization {
        id
        name
      }
      coupon
      state
      stateCode
      status
      offerEligibilityRule {
        id
        name
        description
        status
        type
        ruleConfiguration
        ruleExpression
      }
      rewardRedemptionRule {
        id
        name
        description
        status
        type
        ruleConfiguration
        ruleExpression
      }
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
    launchOffer(id: $id) {
      id
      name
      state
    }
  }
`;

export const UNLINK_OFFER = gql`
  mutation removeOfferFromCampaign($input: updateCampaignOfferInput) {
    removeOfferFromCampaign(input: $input) {
      id
      status
      offer {
        id
        name
      }
      campaign {
        id
        name
      }
    }
  }
`;

export const ADD_OFFER_TO_CAMPAIGN = gql`
  mutation addOfferToCampaign($input: CampaignOfferInput) {
    addOfferToCampaign(input: $input) {
      id
      offer {
        id
        name
      }
    }
  }
`;

export const GET_OFFER_FOR_CAMPAIGN = gql`
  query getOffersForACampaign($campaign_id: ID!, $organization_id: ID!) {
    getOffersForACampaign(
      campaignId: $campaign_id
      organizationId: $organization_id
    ) {
      offer {
        id
        offerType
        name
        description
        coupon
        status
      }
    }
  }
`;

export const VIEW_OFFER = gql`
  query getOffer($id: ID!) {
    getOffer(id: $id) {
      id
      name
      description
      offerType
      offerCategory
      isCustomCoupon
      organization {
        id
        name
      }
      coupon
      state
      stateCode
      status
      reward
      createdBy
      createdTime
      lastModifiedBy
      lastModifiedTime
      offerEligibilityRule {
        id
        name
        description
        status
        type
        ruleConfiguration
        ruleExpression
      }
      rewardRedemptionRule {
        id
        name
        description
        status
        type
        ruleConfiguration
        ruleExpression
      }
    }
  }
`;
