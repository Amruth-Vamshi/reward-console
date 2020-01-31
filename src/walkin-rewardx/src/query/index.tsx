import gql from "graphql-tag";
import { Query } from "react-apollo";

export const REPORT_CONFIGS = gql`
  query reportConfigs($organizationId: ID!) {
    reportConfigs(organizationId: $organizationId) {
      id
      name
      description
      #   organizationId
      #   status
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
  query($externalCustomerId: ID!, $page: Int!, $itemsPerPage: Int!) {
    loyaltyTransaction(
      externalCustomerId: $externalCustomerId
      page: $page
      limit: $itemsPerPage
    ) {
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
      customerLoyalty {
        createdTime
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
