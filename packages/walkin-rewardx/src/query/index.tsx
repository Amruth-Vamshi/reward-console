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
