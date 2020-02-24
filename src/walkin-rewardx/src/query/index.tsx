import gql from 'graphql-tag';
import { Query } from 'react-apollo';

export const REPORT_CONFIGS = gql`
  query reportConfigs($organizationId: ID!, $pageOptions: PageOptions) {
    reportConfigs(organizationId: $organizationId, pageOptions: $pageOptions) {
      data {
        id
        name
        description
        #   organizationId
        #   status
      }
      paginationInfo {
        totalPages
        totalItems
        page
        perPage
      }
    }
  }
`;

export const REPORTS = gql`
  query reports(
    $organizationId: ID!
    $reportConfigId: ID!
    $reportDate: Date!
  ) {
    reports(
      organizationId: $organizationId
      reportConfigId: $reportConfigId
      reportDate: $reportDate
    ) {
      data {
        id
        reportDate
        reportFile {
          id
          publicUrl
        }
        reportConfig {
          id
          name
          description
          # organizationId
          status
        }
        #   organizationId
        status
      }
    }
  }
`;

// export const CREATE_EVENT_SUBSCRIPTION_ = gql`
//   mutation createEventSubscription(
//     $eventTypeId: ID!
//     $triggerAction: TriggerActionEnum!
//     $customActionId: ID
//   ) {
//     createEventSubscription(
//       eventTypeId: $eventTypeId
//       triggerAction: $triggerAction
//       customActionId: $customActionId
//     ) {
//       id
//       status
//       sync
//       eventType {
//         id
//         code
//         status
//       }
//     }
//   }
// `;

export const GET_CUSTOMER_DETAILS = gql`
  query($input: SearchCustomerInput) {
    customer(input: $input) {
      id
      firstName
      lastName
      email
      phoneNumber
      gender
      dateOfBirth
      externalCustomerId
      customerIdentifier
      extend
      onboardSource
    }
  }
`;

export const GET_LOYALTY_TRANSACTIONS = gql`
  query(
    $externalCustomerId: ID!
    $pageOptions: PageOptions
    $sortOptions: SortOptions
  ) {
    loyaltyTransaction(
      externalCustomerId: $externalCustomerId
      pageOptions: $pageOptions
      sortOptions: $sortOptions
    ) {
      data {
        id
        statusCode {
          statusId
          statusCode
          statusType
          description
        }
        pointsBlocked
        pointsIssued
        pointsRedeemed
        loyaltyReferenceId
        type
        name
        data
        loyaltyLedgers {
          id
          points
          remarks
          balanceSnapshot
          type
          totalAmount
          externalStoreId
          expiryDate
          pointsRemaining
          details
        }
      }
      paginationInfo {
        totalPages
        totalItems
        page
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;

export const GET_CUSTOMER_LOYALTY = gql`
  query($externalCustomerId: String!) {
    getCustomerLoyalty(externalCustomerId: $externalCustomerId) {
      createdTime
      lastModifiedTime
      externalCustomerId
      overallPoints
      burnablePoints
      overallAmount
      burnableAmount
      pointsBlocked
      blockedAmount
      loyaltyCardCode
      loyaltyEnabled
    }
  }
`;

export const GET_CUSTOMER_LEDGER = gql`
  query($externalCustomerId: String!, $page: Int, $itemsPerPage: Int) {
    getCustomerLedger(
      externalCustomerId: $externalCustomerId
      page: $page
      itemsPerPage: $itemsPerPage
    ) {
      data {
        id
        createdTime
        lastModifiedTime
        loyaltyTransaction {
          id
          loyaltyType
          status
          data
          pointsBlocked
          pointsIssued
          pointsRedeemed
        }
        loyaltyLedger {
          id
          points
          remarks
          type
          balanceSnapshot
          pointsRemaining
          expiryDate
          details
        }
      }
      ledgerCount
      externalCustomerId
      dateStart
      dateEnd
      page
      itemsPerPage
      orderBy
    }
  }
`;

/**  JFL
 export const getLoyaltyTransactions = gql`
  query($externalCustomerId: String!, $page: Int, $itemsPerPage: Int) {
    getLoyaltyTransactions(
      externalCustomerId: $externalCustomerId
      page: $page
      itemsPerPage: $itemsPerPage
    ) {
      data {
        id
        externalCustomerId
        loyaltyReferenceId
        loyaltyType
        status
        expiryDate
        data
        pointsBlocked
        pointsIssued
        pointsRedeemed
        pointsExpired
        customerId
        balance
      }
      transactionCount
      externalCustomerId
      dateStart
      dateEnd
      page
      itemsPerPage
      orderBy
      startId
    }
  }
`;

export const getCustomerLoyaltyLedger = gql`
  query($externalCustomerId: String!, $page: Int, $itemsPerPage: Int) {
    getCustomerLedger(
      externalCustomerId: $externalCustomerId
      page: $page
      itemsPerPage: $itemsPerPage
    ) {
      data {
        id
        createdTime
        lastModifiedTime
        loyaltyTransaction {
          id
          externalCustomerId
          loyaltyType
          status
          expiryDate
          data
          pointsBlocked
          pointsIssued
          pointsRedeemed
          pointsExpired
          customerId
          balance
        }
        loyaltyLedger {
          id
          points
          remarks
          referenceId
          referenceType
          type
          loyaltyProgramId
          balance
          pointsRemaining
          expiryDate
          details
        }
      }
      ledgerCount
      externalCustomerId
      dateStart
      dateEnd
      page
      itemsPerPage
      orderBy
      startId
    }
  }
`;
 * **/

export const GET_BUSINESS_RULES = gql`
  query($input: SearchBusinessRulesInput!) {
    businessRules(input: $input) {
      id
      ruleType
      ruleDefaultValue
    }
  }
`;

export const UPDATE_BUSINESS_RULE = gql`
  mutation updateBusinessRule($id: ID!, $input: UpdateBusinessRuleInput!) {
    updateBusinessRule(id: $id, input: $input) {
      id
      ruleType
      ruleDefaultValue
    }
  }
`;
