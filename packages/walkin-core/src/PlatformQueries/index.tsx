import gql from "graphql-tag";

export const USER_DATA = gql`
  query userData($userId: ID!) {
    user(id: $userId) {
      firstName
      lastName
      email
      id
      # permissionMap(types:[UI])
      roles {
        id
        name
        # policies { id effect permission resource type }
      }
    }
  }
`;

export const GET_PRODUCTS = gql`
  query organization($id: ID!) {
    organization(id: $id) {
      id
      name
      walkinProducts {
        id
        name
        status
        description
        latest_version
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation addUserToOrganization(
    $Orgid: ID!
    $rollId: ID!
    $user: UserCreateInput!
  ) {
    addUserToOrganization(
      organization_id: $Orgid
      role_id: $rollId
      userData: $user
    ) {
      id
      email
      firstName
      lastName
      status
      roles {
        id
        name
      }
    }
  }
`;

export const CREATE_APP = gql`
  mutation createApplication($organizationId: ID!, $input: ApplicationInput!) {
    createApplication(organizationId: $organizationId, input: $input) {
      id
      name
      platform
      organization {
        id
        name
      }
    }
  }
`;

export const UPDATE_APP = gql`
  mutation updateApplication($input: ApplicationUpdateInput!) {
    updateApplication(input: $input) {
      id
      name
      description
      organization {
        id
        name
      }
      platform
    }
  }
`;

export const DELETE_APP = gql`
  mutation deleteApplication($id: ID!) {
    deleteApplication(id: $id)
  }
`;

export const GET_WEBHOOKS = gql`
  query webhooks($org_id: ID!, $event: String, $status: STATUS!) {
    webhooks(organizationId: $org_id, event: $event, status: $status) {
      id
      name
      organization {
        name
        website
      }
      event
      url
      headers
      method
      status
      enabled
    }
  }
`;

export const CREATE_WEBHOOK = gql`
  mutation createWebhook($input: WebhookAddInput) {
    createWebhook(input: $input) {
      id
      name
      organization {
        name
        website
      }
      event
      url
      headers
      method
      status
      enabled
    }
  }
`;

export const UPDATE_WEBHOOK = gql`
  mutation updateWebhook($input: WebhookUpdateInput!) {
    updateWebhook(input: $input) {
      id
      name
      organization {
        name
        website
      }
      event
      url
      headers
      method
      status
      enabled
    }
  }
`;

export const LIST_WEBHOOK_EVENTS = gql`
  query webhookEventTypes($org_id: ID!, $status: STATUS!) {
    webhookEventTypes(organizationId: $org_id, status: $status) {
      event
      id
      status
      description
    }
  }
`;

export const DELETE_WEBHOOK = gql`
  mutation deleteWebhook($input: WebhookDeleteInput) {
    deleteWebhook(input: $input)
  }
`;

export const GET_ENTITIES = gql`
  query getEntities {
    entities
  }
`;

export const GET_BASIC_ENTITY_FIELDS = gql`
  query getBasicEntityFields($entityName: EXTEND_ENTITIES!) {
    basicFields(entityName: $entityName) {
      slug
      label
      type
      required
      defaultValue
      searchable
      description
    }
  }
`;

export const GET_ENTITY_EXTEND_FIELDS_BY_NAME = gql`
  query getEntityExtendFieldsByName($entityName: EXTEND_ENTITIES!) {
    entityExtendByName(entityName: $entityName) {
      id
      entityName
      description
      organization {
        id
      }
      fields {
        id
        slug
        help
        label
        type
        choices
        required
        defaultValue
        validator
        searchable
        description
      }
    }
  }
`;

export const ADD_ENTITY_EXTEND = gql`
  mutation addEntityExtend($input: AddEntityExtend!) {
    addEntityExtend(input: $input) {
      id
      entityName
      description
      organization {
        id
      }
      fields {
        id
        slug
        help
        label
        type
        choices
        required
        defaultValue
        validator
        searchable
        description
      }
    }
  }
`;

export const ADD_ENTITY_EXTEND_FIELD = gql`
  mutation addEntityExtendField($input: AddEntityExtendField!) {
    addEntityExtendField(input: $input) {
      id
      slug
      help
      label
      type
      choices
      required
      defaultValue
      validator
      searchable
      description
    }
  }
`;

export const RULES = gql`
  query rules($input: SearchRuleInput) {
    rules(input: $input) {
      id
      name
      description
      status
      type
      ruleConfiguration
      ruleExpression
      # organization
    }
  }
`;

export const UPDATE_RULE = gql`
  mutation updateRule($id: ID, $input: UpdateRuleInput!) {
    updateRule(id: $id, input: $input) {
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

export const GENERATE_API_KEY = gql`
  mutation generateAPIKey($id: ID!, $env: String) {
    generateAPIKey(id: $id, environment: $env) {
      api_key
    }
  }
`;

export const ROLES_LIST = gql`
  query roles {
    roles {
      id
      name
      description
      tags
      users {
        id
        email
        firstName
        lastName
      }
      policies {
        id
        effect
        resource
        permission
        type
        accessLevel
      }
    }
  }
`;

export const ROLE = gql`
  query role($id: ID!) {
    role(id: $id) {
      id
      name
      description
      tags
      users {
        id
        email
        firstName
        lastName
      }
      policies {
        id
        effect
        resource
        permission
        type
        accessLevel
      }
    }
  }
`;

export const ADD_ROLE = gql`
  mutation addRole($input: RoleInput!) {
    addRole(input: $input) {
      id
      name
    }
  }
`;

export const LINK_USER_TO_ROLE = gql`
  mutation linkUserToRole($roleId: ID!, $userId: ID!) {
    linkUserToRole(roleId: $roleId, userId: $userId) {
      id
      roles {
        id
        name
        description
        tags
        users {
          id
          email
          firstName
          lastName
        }
        policies {
          id
          effect
          resource
          permission
          type
          accessLevel
        }
      }
    }
  }
`;

export const EDIT_POLICY = gql`
  mutation editPolicy($input: PolicyEditInput!) {
    editPolicy(input: $input) {
      id
      effect
      resource
      permission
      type
      accessLevel
    }
  }
`;

export const GET_ALL_APPS_OF_ORGANIZATION = gql`
  query organization($id: ID!) {
    organization(id: $id) {
      id
      name
      applications {
        id
        name
        description
        platform
        auth_key_hooks
        organization {
          id
          name
        }
      }
      children {
        id
        name
        applications {
          id
          name
          description
          platform
          auth_key_hooks
          organization {
            id
            name
          }
        }
        # children {
        #   id
        #   name
        #   applications {
        #     id
        #     name
        #     description
        #     platform
        #     auth_key_hooks
        #     organization {
        #       id
        #       name
        #     }
        #   }
        #   children {
        #     id
        #     name
        #     applications {
        #       id
        #       name
        #       description
        #       platform
        #       auth_key_hooks
        #       organization {
        #         id
        #         name
        #       }
        #     }
        #     children {
        #       id
        #       name
        #       applications {
        #         id
        #         name
        #         description
        #         platform
        #         auth_key_hooks
        #         organization {
        #           id
        #           name
        #         }
        #       }
        #     }
        #   }
        # }
      }
    }
  }
`;

export const USERS = gql`
  query users {
    users {
      id
      firstName
      email
      roles {
        id
        name
      }
    }
  }
`;

export const GET_ALL_USERS_OF_ORGANIZATION = gql`
  query organization($id: ID!) {
    organization(id: $id) {
      id
      name
      status
      code
      users {
        id
        firstName
        lastName
        status
        email
        roles {
          name
          id
        }
      }
      children {
        id
        name
        status
        code
        users {
          id
          firstName
          lastName
          status
          email
          roles {
            name
            id
          }
        }
        #   children {
        #     id
        #     name
        #     status
        #     code
        #     users {
        #       id
        #       firstName
        #       lastName
        #       status
        #       email
        #       roles {
        #         name
        #         id
        #       }
        #     }
        #     children {
        #       id
        #       name
        #       status
        #       code
        #       users {
        #         id
        #         firstName
        #         lastName
        #         status
        #         email
        #         roles {
        #           name
        #           id
        #         }
        #       }
        #       children {
        #         id
        #         name
        #         status
        #         code
        #         users {
        #           id
        #           firstName
        #           lastName
        #           status
        #           email
        #           roles {
        #             name
        #             id
        #           }
        #         }
        #         children {
        #           id
        #           name
        #           status
        #           code
        #           users {
        #             id
        #             firstName
        #             lastName
        #             status
        #             email
        #             roles {
        #               name
        #               id
        #             }
        #           }
        #         }
        #       }
        #     }
        #   }
      }
    }
  }
`;

export const GET_ANALYTICS = gql`
  query analytics($dates: JSON, $org_id: ID!, $product: WALKIN_PRODUCTS!) {
    analytics(
      filterValues: $dates
      organization_id: $org_id
      walkinProducts: $product
    ) {
      name
      type
      rows
      response
      total
    }
  }
`;

export const GET_ALL_STORES = gql`
  query {
    stores {
      id
      name
      STATUS
      externalStoreId
      code
      extend
      state
      city
      addressLine1
      addressLine2
      pinCode
      country
      wifi
      latitude
      longitude
      email
    }
  }
`;

export const STORE = gql`
  query store($id: ID!) {
    store(id: $id) {
      id
      name
      STATUS
      externalStoreId
      code
      extend
      state
      city
      addressLine1
      addressLine2
      pinCode
      country
      wifi
      latitude
      longitude
      email
    }
  }
`;

export const CREATE_STORE = gql`
  mutation createStore($input: CreateStoreInput!) {
    createStore(input: $input) {
      id
      name
      STATUS
      externalStoreId
      code
      extend
      state
      city
      addressLine1
      addressLine2
      pinCode
      country
      wifi
      latitude
      longitude
      email
    }
  }
`;

export const UPDATE_STORE = gql`
  mutation updateStore($input: UpdateStoreInput!) {
    updateStore(input: $input) {
      id
      name
      STATUS
      externalStoreId
      code
      extend
      state
      city
      addressLine1
      addressLine2
      pinCode
      country
      wifi
      latitude
      longitude
      email
    }
  }
`;
