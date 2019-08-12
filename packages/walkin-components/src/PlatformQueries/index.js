import gql from "graphql-tag";

export const USER_DATA = gql`
  query userData($userId:ID!) {
    user(id: $userId) {
      firstName lastName email  id 
      # permissionMap(types:[UI])
      roles {
          id name 
          # policies { id effect permission resource type }
      }
    }
}`


export const GET_PRODUCTS = gql` 
query organization($id:ID!){
  organization(id: $id) {
    id name walkinProducts {
      id name status description latest_version 
    }
  }
}`


export const CREATE_USER = gql`
	mutation createUser($input:UserCreateInput!){
	createUser( input : $input ){
		id email firstName lastName status
	}
}`

export const CREATE_APP = gql`
mutation createApplication($organizationId:ID!,$input: ApplicationInput!){
    createApplication(organizationId:$organizationId input: $input){
      id  name platform
      organization{ id name  }
    }
}`

export const UPDATE_APP = gql`
  mutation updateApplication($input: ApplicationUpdateInput!) {
    updateApplication(input:$input){
      id name description
      organization{id name}
      platform
    }
}`

export const DELETE_APP = gql`
mutation deleteApplication( $id: ID! ) {
  deleteApplication(id:$id)
}`

export const GET_WEBHOOKS = gql`
query webhooks($org_id:ID!,$event:String,$status:STATUS!){
  webhooks(organization_id:$org_id,event:$event,status:$status){
    id event url headers method  status
  }
}`

export const CREATE_WEBHOOK = gql`
mutation createWebhook($input:WebhookAddInput){
  createWebhook(input:$input){
    id event url headers method status
  }
}`

export const UPDATE_WEBHOOK = gql`
  mutation updateWebhook($input: WebhookUpdateInput!) {
  updateWebhook(input:$input){
    id event url headers method
  }
}`

export const LIST_WEBHOOK_EVENTS = gql`
  query webhookEventTypes{
    webhookEventTypes(status: ACTIVE) {
      event id status
  }
}`

export const DELETE_WEBHOOK = gql`
mutation deleteWebhook( $input: WebhookDeleteInput ) {
  deleteWebhook(input:$input)
}`


export const GENERATE_API_KEY = gql`
mutation generateAPIKey($id: ID!){
  generateAPIKey(id:$id){
    api_key
  }
}`

export const ROLES_LIST = gql`
query roles{
  roles{ id name }
}`

export const GET_ALL_APPS_OF_ORGANIZATION = gql`
query organization($id: ID!) {
  organization(id: $id) {
    id name applications { id name description platform auth_key_hooks organization{ id name } }
    children{ id name applications { id name description platform auth_key_hooks organization{ id name } }
      children{ id name applications { id name description platform auth_key_hooks organization{ id name } }
          children{ id name applications { id name description platform auth_key_hooks organization{ id name } }
            children{ id name applications { id name description platform auth_key_hooks organization{ id name } }
          }
        }
      }
    }
  }
}`

export const GET_ALL_USERS_OF_ORGANIZATION = gql`
query organization($id: ID!) {
  organization(id: $id) {
    id name status code users{ id firstName lastName status email roles{ name id } }
    children{id name status code users{ id firstName lastName status email roles{ name id } }
    	children{id name status code users{ id firstName lastName status email roles{ name id } }
        children{id name status code users{ id firstName lastName status email roles{ name id } }
          children{id name status code users{ id firstName lastName status email roles{ name id } }
            children{id name status code users{ id firstName lastName status email roles{ name id } } }
          }
        }
      }
    }
  }
}`
