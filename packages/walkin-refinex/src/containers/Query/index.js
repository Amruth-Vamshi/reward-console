import gql from "graphql-tag";
import { Query } from "react-apollo";
export const allSegments = gql`
  query segments($org_id: ID!) {
    segments(status: ACTIVE, organization_id: $org_id) {
      id
      name
      description
    }
  }
`;

export const attributes = gql`
  query ruleAttributes {
    ruleAttributes {
      id
      attributeName
      description
      attributeValueType
      status
    }
  }
`;

export const allFeedbackForms = gql`
  query feedbackForms {
    feedbackForms {
      id
      title
      customerFeedbacks {
        id
      }
      campaign {
        id
        status
        name
      }
    }
  }
`;

export const allRuleAttributes = gql`
  query ruleAttributes($org_id: ID!) {
    ruleAttributes(input: { status: ACTIVE, organizationId: $org_id }) {
      id
      attributeName
      attributeValueType
      status
    }
  }
`;


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

export const feedbackForm = gql`
  query getFeedbackForm {
    getFeedbackForm(feedbackFormId: "1") {
      id
      title
      campaign {
        id
        name
        description
        startTime
        endTime
        status
        campaignType
        triggerRule {
          id
          name
          description
          status
          type
        }
      }
    }
  }
`;

export const allAudience = gql`
  query audiences($org_id: ID!, $app_id: ID!, $camp_id: ID!) {
    audiences(
      organization_id: $org_id
      application_id: $app_id
      campaign_id: $camp_id
      status: ACTIVE
    ) {
      id
      campaign {
        id
        name
      }
      status
    }
  }
`;

export const CREAT_BLANK_QUESITON = gql`
  mutation createQuestionnaire(
    $feedbackFormId: ID!
    $questionnaireInput: QuestionInput
  ) {
    createQuestionnaire(
      feedbackFormId: $feedbackFormId
      input: $questionnaireInput
    ) {
      id
      questionText
      type
      rangeMin
      rangeMax
    }
  }
`;

export const EDIT_QUESTION = gql`
  mutation editQuestion($editQuestionInput: EditQuestionInput) {
    editQuestion(input: $editQuestionInput) {
      id
      questionText
      rangeMin
      rangeMax
      type
    }
  }
`;

export const ADD_CHOICE = gql`
  mutation addChoice($questionId: ID!, $input: ChoiceInput) {
    addChoice(questionId: $questionId, input: $input) {
      id
    }
  }
`;

export const REMOVE_CHOICE = gql`
  mutation removeChoice($id: ID!) {
    removeChoice(id: $id) {
      choiceText
    }
  }
`;

export const QUESTION_TYPES = gql`
  query questionTypes {
    questionTypes
  }
`;

export const GET_QUESTIONNAIRE = gql`
  query getQuestionnaireHierarchy($questionId: ID!) {
    questionHierarchy(questionId: $questionId) {
      id
      questionText
      type
      rangeMax
      rangeMin
      feedbackCategory {
        id
        title
      }
      choices {
        id
        choiceText
        rangeStart
        rangeEnd
        toQuestion {
          id
          questionText
          type
          rangeMax
          rangeMin
          feedbackCategory {
            id
            title
          }
        }
      }
    }
  }
`;

export const GET_FEEDBACK_FORM = gql`
  query getFeedbackForm($campaignId: ID!) {
    campaign(id: $campaignId) {
      feedbackForm {
        id
        title
        questionnaireRoot {
          id
          questionText
          rangeMax
          rangeMin
          type
        }
      }
    }
  }
`;

export const GET_CAMPAIGNS = gql`
  query getCampaign($userId: ID!) {
    user(id: $userId) {
      createdCampaigns {
        id
        name
        description
        startTime
        endTime
        status
        campaignType
        organization {
          name
        }
        application {
          name
          platform
        }
      }
    }
  }
`;

export const CREATE_FEEDBACK_FORM = gql`
  mutation createFeedbackForm($campaignId: ID!) {
    createFeedbackForm(campaignId: $campaignId, input: { title: "default" }) {
      campaign {
        id
        name
      }
      title
    }
  }
`;

export const GET_CHILD_ORGANIZATIONS = gql`
  query organizationHierarchy($organizationId: ID!) {
    organizationHierarchy(rootId: $organizationId)
  }
`;

export const GET_APPLICATIONS = gql`
  query getApplications($organizationId: ID!) {
    organization(id: $organizationId) {
      applications {
        id
        name
        description
        platform
      }
    }
  }
`;
