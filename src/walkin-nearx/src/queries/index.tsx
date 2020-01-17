import gql from "graphql-tag";

export const GET_ALL_AND_SEARCH_PLACES = gql`
  query Places($limit: Int!, $offset: Int!, $search: String) {
    Places(limit: $limit, offset: $offset, search: $search) {
      places {
        id
        geofenceName
        totalHotspot
        radii
        address
        appId
        orgId
        location {
          lat
          lng
        }
      }
      pageInfo
    }
  }
`;

export const SEARCH_PLACES = gql`
  query Places($limit: Int!, $offset: Int!, $search: String) {
    Places(limit: $limit, offset: $offset, search: $search) {
      places {
        id
        geofenceName
        radii
        address
        appId
        orgId
        location {
          lat
          lng
        }
        totalHotspot
      }
      pageInfo
    }
  }
`;

export const GET_NAERBY_PLACES = gql`
  query getNearByPlaces(
    $location: LocationGeometry!
    $limit: Int!
    $offset: Int!
    $distance: Int
  ) {
    getNearByPlaces(
      limit: $limit
      offset: $offset
      distance: $distance
      locationGeometry: $location
    ) {
      places {
        id
        geofenceName
        radii
        address
        appId
        orgId
        location {
          lat
          lng
        }
      }
      pageInfo
    }
  }
`;

export const PLACES_BY_ID = gql`
  query place($id: ID!) {
    Place(id: $id) {
      id
      geofenceName
      location {
        lat
        lng
      }
      radii
      address
      hotspots {
        id
        geofenceName
        location {
          lat
          lng
        }
        address
      }
    }
  }
`;

export const CREATE_GROUP_OF_PLACES = gql`
  mutation createPlaces($groupName: String!, $places: [PlaceInput]!) {
    createPlaces(groupName: $groupName, placeInput: $places) {
      places {
        id
      }
      group {
        id
        groupName
      }
    }
  }
`;

export const CREATE_PLACE = gql`
  mutation createOrUpdatePlace($places: [PlaceInput]!) {
    createOrUpdatePlace(placeInput: $places) {
      id
      hotspots {
        id
        geofenceName
        location {
          lat
          lng
        }
        address
      }
      geofenceName
      location {
        lat
        lng
      }
      radii
      address
      enabled
      totalHotspot
    }
  }
`;

export const DISABLE_PLACES = gql`
  mutation disableGeofence($id: ID!) {
    disableGeofence(id: $id) {
      id
      enabled
    }
  }
`;

export const CREATE_APP = gql`
  mutation CreateNearXApplication(
    $organizationId: ID!
    $input: ApplicationInput!
  ) {
    CreateNearXApplication(
      organizationId: $organizationId
      ApplicationInput: $input
    ) {
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

export const GET_CONFIGURATION = gql`
  query getConfiguration {
    getConfiguration {
      id
      name
      key
      type
      orgId
      createdBy
      createdTime
      lastModifiedBy
      lastModifiedTime
    }
  }
`;

export const SET_CONFIGURATION = gql`
  mutation setConfiguration($input: [ConfigInput]!) {
    setConfiguration(configInput: $input) {
      id
      key
      type
      name
      createdBy
      createdTime
      lastModifiedBy
      lastModifiedTime
    }
  }
`;
