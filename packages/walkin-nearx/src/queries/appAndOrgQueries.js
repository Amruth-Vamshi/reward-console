
import gql from "graphql-tag";

export const GET_ALL_ORGANIZATION_HIERARCHIES = gql`
     query{ organizationHierarchies{ id name address code status phoneNumber website 
  children{name id children{name id children{ name id children{name id children{name id}}}}} }
}`

export const GET_ALL_ORGANIZATION = gql`
     query{ organizationHierarchies{ id name address code status phoneNumber website }
}`

export const GENERATE_API_KEY = gql`
mutation generateAPIKey($id: ID!){
  generateAPIKey(id:$id){
    api_key
  }
}`

export const GET_ALL_APPS_OF_ORGANIZATION = gql`
query organization($id: ID!) {
  organization(id: $id) {
    id name
    applications { id name description platform auth_key_hooks organization{ id name } }
    children{ id name
      applications { id name description platform auth_key_hooks organization{ id name } }
      children{ id name
        applications { id name description platform auth_key_hooks organization{ id name } }
          children{ id name
          applications { id name description platform auth_key_hooks organization{ id name } }
            children{ id name
            applications { id name description platform auth_key_hooks organization{ id name } }
          }
        }
      }
    }
  }
}`

export const CREATE_APP = gql`
mutation createApplication($organizationId:ID!,$input: ApplicationInput!){
    createApplication(organizationId:$organizationId input: $input){
      id  name 
      organization{ id name  }
      actions{  id
        actionDefinition{ id
          actionType{
            id  type
          }
        }
      }
    }
  }`