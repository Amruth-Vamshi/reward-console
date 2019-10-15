import gql from "graphql-tag";
import { Query } from "react-apollo";
export const allSegments = gql`
  query segments($org_id: ID!) {
    segments(status: ACTIVE, organization_id: $org_id) {
      id
      name
      segmentType
      status
      rule {
        id
        ruleConfiguration
      }
    }
  }
`;

export const EVENT_TYPES = gql`
  query eventTypes($status:STATUS!){
    eventTypes(status:$status){
      id
      type
      format
      schema 
      status
    }
  }
`

export const disableSegment = gql`
  mutation disableSegment($id: ID!) {
    disableSegment(id: $id) {
      id
      name
    }
  }
`;

export const LINK_CAMPAIGN_TO_APPLICATION = gql`
  mutation linkCampaignToApplication($campaignId:ID!,$applicationId:ID!){
    linkCampaignToApplication(
      campaignId:$campaignId,
      applicationId:$applicationId
    ){
      id
      name
      description
      startTime
      endTime
    }
  }
`

export const UNLINK_CAMPAIGN_FROM_APPLICATION = gql`
mutation unlinkCampaignFromApplication($campaignId:ID!,$applicationId:ID!){
  unlinkCampaignFromApplication(
      campaignId:$campaignId,
      applicationId:$applicationId
    ){
      id
      name
      description
      startTime
      endTime
    }
  }
`

export const CREATE_APP = gql`
mutation createApplication($organizationId:ID!,$input:ApplicationInput!) {
  createApplication(organizationId:$organizationId  input: $input){
    id  name platform organization{ id name }
  }
}`

export const createSegment = gql`
  mutation createSegment(
    $name: String!
    $segmentType: SEGMENT_TYPE!
    $organization_id: ID!
    $application_id: ID!
    $rule_id: ID!
    $status: STATUS!
  ) {
    createSegment(
      input: {
        name: $name
        segmentType: $segmentType
        status: $status
        organization_id: $organization_id
        application_id: $application_id
        rule_id: $rule_id
      }
    ) {
      id
      name
    }
  }
`;


export const CREATE_EVENT_SUBSCRIPTION = gql`
 mutation createEventSubscription($input:CreateEventSubscriptionInput){
  createEventSubscription(input:$input){
    id
    name
    status
  }
 }

`

export const UPDATE_EVENT_SUBSCRIPTION = gql`
mutation updateEventSubscriptionStatus($input:UpdateEventSubscriptionStatusInput){
  updateEventSubscriptionStatus(input:$input){
    id
    name
    status
  }
}
`

export const createRule = gql`
  mutation createRule($input: CreateRuleInput!) {
    createRule(input: $input) {
      id
      name
      description
      status
      type
      ruleConfiguration
      ruleExpression
    }
  }
`;

export const updateRule = gql`
  mutation updateRule($id:ID! ,$input: UpdateRuleInput!) {
    updateRule(id:$id, input:$input) {
      id
    name
    description
    status
    type
    }
  }
`;

export const communications = gql`
  query communications($entityId: ID!,$entityType:COMMUNICATION_ENTITY_TYPE,$organization_id: ID!) {
      communications(entityId: $entityId, entityType:$entityType, organization_id:$organization_id, status: ACTIVE) {
        id
        entityId
        entityType
        messageTemplate{
          id
          name
          messageFormat
          templateBodyText
          templateSubjectText
        }
      }
    }
`;
export const audiences = gql`
query audiences($campaign_id:ID, $organization_id:ID,$segment_id:ID){
  audiences(campaign_id:$campaign_id, organization_id:$organization_id,segment_id:$segment_id,status:ACTIVE){
    id
    segment{
      id
      name
      rule{
        id
        name
        type
      }
      status
    }
  }
}
`;


export const createCommunication = gql`
  mutation createCommunication($input: CreateCommunicationInput!) {
    createCommunication(input: $input) {
      id
      entityId
      entityType
      messageTemplate {
        id
        name
      }
    }
  }
`;

export const updateCommunication = gql`
  mutation updateCommunication($input: UpdateCommunicationInput!) {
    updateCommunication(input: $input) {
    id
    entityId
    entityType
    isScheduled
    firstScheduleDateTime
    isRepeatable
    lastProcessedDateTime
    commsChannelName
    status
    }
  }
`;

export const LINK_CHOICE_TO_QUESTION = gql`
  mutation linkChoiceToQuestion($choiceId:ID!,$questionId:ID!){
    linkChoiceToQuestion(choiceId:$choiceId,questionId:$questionId){
      id
      fromQuestion{
        id
        questionText
        type

      }
      choiceText
      rangeStart
      rangeEnd
    }
  }

`


export const createMessageTemplate = gql`
  mutation createMessageTemplate($input: CreateMessageTemplateInput!) {
    createMessageTemplate(input: $input) {
      id
      name
      description
      messageFormat
      templateBodyText
      templateSubjectText
      templateStyle
    }
  }
`;

export const updateMessageTemplate = gql`
mutation updateMessageTemplate($input:UpdateMessageTemplateInput!){
  updateMessageTemplate(input:$input){
    id
    name
    description
    messageFormat
    templateBodyText
  	templateSubjectText
    templateStyle
    status
  }
}
`;
export const createAudience = gql`
mutation createAudience($input:createAudienceInput!){
  createAudience(input:$input){
    id
    campaign{
      id
      name
      audienceFilterRule{
        id 
        name
      }
    }
    segment{
      id
      name
      segmentType
    }
    status
  }
}`;

export const updateAudiencesWithCampaignId = gql`
mutation updateAudiencesWithCampaignId($campaignId:ID, $segments:[ID]!){
  createAudienceForCampaign(campaignId:$campaignId, segments:$segments){
    id
    campaign{
      id
    }
    segment{
      id
      name
      segmentType
    }
  }
}`;

export const attributes = gql`
  query ruleAttributes($input:SearchRuleAttributeInput!) {
    ruleAttributes(input:$input) {
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

export const UPDATE_CAMPAIGN = gql`
  mutation updateCampaign($id: ID!, $input: CampaignUpdateInput) {
    updateCampaign(id: $id, input: $input) {
      id
      name
      description
      startTime
      endTime
      status
      campaignType
      status
      feedbackForm {
        id
        title
      }
      audienceFilterRule{
        id
        name
        description
        type
        ruleConfiguration
        ruleExpression
      }
      triggerRule{
        id
        name
        description
        type
        ruleConfiguration
        ruleExpression
      }
    }
  }
`;

export const DISABLE_CAMPAIGN = gql`
  mutation disableCampaign($id:ID!){
    disableCampaign(id:$id){
      id
      name
      description
    }
  }
`


export const EVENT_SUBSCRIPTION = gql`
  query eventSubscriptions(
$event_type: String
$organization_id: ID
$application_id: ID
$status: STATUS
){
 eventSubscriptions(
    event_type:$event_type
    organization_id:$organization_id
    application_id:$application_id
    status:$status
){
  id
  name
  event_type{
    id
    type
    status
  }
}
}
`

export const campaigns = gql`
  query campaigns($status: STATUS!,$campaignType:String,$organization_id:ID) {
    campaigns(status: $status,campaignType:$campaignType,organization_id:$organization_id) {
      id name description status campaignStatus
    startTime endTime campaignType priority
    createdBy lastModifiedBy createdTime lastModifiedTime
    organization{ id name } application{id name}
    audienceFilterRule{ id name ruleConfiguration ruleExpression }
    }
  }
`;

export const CREATE_CAMPAIGN = gql`
  mutation createCampaign($input: CampaingAddInput) {
    createCampaign(input: $input) {
      id
      name
      description
      startTime
      endTime
      status
    }
  }
`;

export const GET_CAMPAIGN = gql`
  query campaign($id: ID!) {
    campaign(id: $id) {
      id
      name
      description
      startTime
      endTime
      status
      triggerRule{
        id
        name
        status
        ruleConfiguration
      }
      application{
        id
        name
        
      }
      audienceFilterRule{
        id
        name
        status
        ruleConfiguration
      }
      campaignType
      status
      feedbackForm {
        id
        title
      }
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

export const ADD_QUESTION = gql`
  mutation addQuestion($choiceId: ID!, $input: QuestionInput) {
    addQuestion(choiceId:$choiceId,input:$input){
      id
    questionText
    rangeMin
    rangeMax
    type
    choices{
      id
      choiceText
      rangeStart
      rangeEnd
    }
    }
    
  }
`;


export const EDIT_CHOICE = gql`
mutation addChoice($input:EditChoiceInput){
  editChoice(input:$input){
    id
      choiceText
      rangeStart
      rangeEnd
  }
}

`

export const ADD_CHOICE = gql`
  mutation addChoice($questionId: ID!, $input: ChoiceInput) {
    addChoice(questionId: $questionId, input: $input) {
      id
      choiceText
      rangeStart
      rangeEnd
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
      fromChoice{
        id
        choiceText
        
        rangeStart
        rangeEnd
      }
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
      id
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
      id
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
          id
          name
          platform
        }
      }
    }
  }
`;


export const ADD_APPLICATION = gql`
  mutation addApplication($organizationId:ID!,$input:ApplicationInput!){
    createApplication(organizationId:$organizationId,input:$input){
      id
    name
    description
    }
  }
`

export const CREATE_FEEDBACK_FORM = gql`
  mutation createFeedbackForm($campaignId: ID!, $formName: String) {
    createFeedbackForm(campaignId: $campaignId, input: { title: $formName }) {
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


export const LAUNCH_CAMPAIGN = gql`
  mutation launchCampaign($id:ID!) {
    launchCampaign(id:$id) {
      id name description
      startTime endTime
      status triggerRule { id }
      campaignType priority
      campaignStatus
    }
  }
`;

export const PAUSE_CAMPAIGN = gql`
  mutation pauseCampaign($id:ID!) {
    pauseCampaign(id:$id) {
      id name description
      startTime endTime
      status triggerRule { id }
      campaignType priority
      campaignStatus
    }
  }
`;

export const UNPAUSE_CAMPAIGN = gql`
  mutation unpauseCampaign($id:ID!) {
    unpauseCampaign(id:$id) {
      id name description
      startTime endTime
      status triggerRule { id }
      campaignType priority
      campaignStatus
    }
  }
`;

export const ABANDON_CAMPAIGN = gql`
  mutation abandonCampaign($id:ID!) {
    abandonCampaign(id:$id) {
      id name description
      startTime endTime
      status triggerRule { id }
      campaignType priority
      campaignStatus
    }
  }
`;

export const GET_CAMPAIGN_DASHBOARD = gql`
query campaign($id:ID!){
	campaign( id:$id){
    id name description status campaignStatus
    startTime endTime campaignType priority
    createdBy lastModifiedBy createdTime lastModifiedTime
    organization{ id name } application{id name}
    audienceFilterRule{ id name ruleConfiguration ruleExpression }
  }
}`;

export const AUDIENCES = gql`
query audiences($campaign_id:ID, $organization_id:ID,$segment_id:ID){
  audiences(campaign_id:$campaign_id, organization_id:$organization_id,segment_id:$segment_id,status:ACTIVE){
    id
    segment{
      id
      name
      rule{
        id
        name
        type
      }
      status
    }
  }
}
`;