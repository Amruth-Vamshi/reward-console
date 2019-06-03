# API

## Introduction

You can access all of your NearX data, including users, events, geofences, and groups, via the API. You might use the API to list users in a specific geofence, or to create geofences programmatically.

The API is RESTful, with predictable, resource-oriented URLs. All responses, including errors, return JSON. POST and PUT request body parameters may be sent as application/json or application/x-www-form-urlencoded.
## Authentication

All requests must be authenticated. Authenticate using your secret API keys, found on the Settings page. Use your Test Secret key for testing and non-production environments. Use your Live Secret key for production environments. Include your API key in the Authorization header.
Sample request

<pre class="prettyprint" style="color:white;margin-left:30px;background-color:black;">

  URL : https://dev-api.getwalkin.in/core/graphql
  mutation : login

</pre>
## Errors

The GraphQL uses standard HTTP response codes.
Response codes

  * `200:` Success
  * `202:` Accepted
  * `400:` Bad request (missing mandatory field or invalid params)
  * `401:` Unauthorized (invalid API key)
  * `402:` Payment required (organization disabled or usage exceeded)
  * `403:` Forbidden (insufficient permissions)
  * `404:` Not found
  * `409:` Conflict
  * `429:` Too many requests (rate limit exceeded, no state change, or selective throttling)
  * `451:` Unavailable for legal reasons (country blacklisted)
  * `500:` Internal server error
  * `503:` Service temporarily unavailable

Sample error response
<pre class="prettyprint" style="color:white;margin-left:30px;background-color:black;">

  {
    "errors": [
      {
        "err": {
          "errorCode": 400,
          "httpStatus": "Mandatory field missing"
        },
        "message": "One of the list should be a mainPlace. Kindly recheck"
      }
  }

</pre>

## GraphQL APIs

<details>
<summary>C.R.U.D</summary><blockquote>

<details><summary>Geofence</summary>
<p>

### Create a geofence

#### Definition

Creates a new geofence.
Note: If there is a geofence with the specified tag and externalId already exists, the request will fail. If no radii is given, by default it is set to 200.

<pre class="prettyprint" style="color:white;margin-left:30px;background-color:black;">

  URL : https://dev-api.getwalkin.in/nearx/graphiql
  mutation : createGeofence

</pre>

#### Query parameters

 * `geofenceName (string, required)`: A name for the geofence.
 * `location (JSON, required)`: JSON string representing a center in the format {longitude,latitude} for type circle.
 * `radius (number, required for type circle)`: The radius of the circle in meters for type circle, a number between 50 and 10000. Ignored for type polygon.
 * `address (string, required)`: Add the address for the geofence(area, city, state,country).

<pre class="prettyprint" style="color:white;margin-left:30px;background-color:black;">

    mutation{
      createGeofence(GeofenceInput:{
        geofenceName:"CCD"
        location:{
          lat:12.9131684
          lng:77.649837
        }
        radii:100
        address:"CCD in HSR"
      }){
        id
        geofenceName
      }
    }

</pre>

#### Sample response
<pre class="prettyprint" style="color:white;margin-left:30px;background-color:black;">

  {
        "id": "694",
        "geofenceName": "CCD 1",
        "location": {
          "lat": 12.9695729,
          "lng": 77.5350496
        },
        "address": "Woc Road, Rpc Layout 5th Main Road Govindaraja Nagar, Hampi Nagar, Anubhav Nagar, Vijayanagar, Bengaluru, Karnataka 560040",
        "radii":[200]
        "enabled": true
  }
  
</pre>

### Update a geofence

#### Definition

Updates a unique geofence with given Id. If geofence with specific id doesn't exists, it throws error.

<pre class="prettyprint" style="color:white;margin-left:30px;background-color:black;">

  URL : https://dev-api.getwalkin.in/nearx/graphiql
  mutation : updateGeofence

</pre>
#### Query parameters

 * `GeofenceInput (JSON, required)`: Contains fields that you would want to update
 * `id (ID, required)`: Identifies the uniquely a geofence

<pre class="prettyprint" style="color:white;margin-left:30px;background-color:black;">

    mutation{
      updateGeofence(id:1596,GeofenceInput:{
        geofenceName:"Silk Board"
      }){
        id
        geofenceName
        location{
          lat
          lng
        }
      }
    }

</pre>

#### Sample response
<pre class="prettyprint" style="color:white;margin-left:30px;background-color:black;">

  {
      "updateGeofence": {
            "id": "1596",
            "geofenceName": "Silk Board",
            "location": {
              "lat": 12.9308829,
              "lng": 77.6238343
            }
      }
  }

</pre>

### Disable a geofence

#### Definition

Disables a geofence. The geofence can be uniquely referenced by geofence id.

#### Query parameters

 * `ID (ID, required)`:  Unique Id of the geofence

#### Sample body
<pre class="prettyprint" style="color:white;margin-left:30px;background-color:black;">

      mutation{
      disableGeofence(id:1596){
        id
        geofenceName
        enabled
      }
    }
 
</pre>

#### Sample response
<pre class="prettyprint" style="color:white;margin-left:30px;background-color:black;">
  
  {
      "disableGeofence": {
          "id": "1596",
          "geofenceName": "Silk Board",
          "enabled": false
      }
  }

</pre>

### Get a geofence

#### Definition

Gets specific geofence details uniquely identified by the ID.

<pre class="prettyprint" style="color:white;margin-left:30px;background-color:black;">

  URL : https://dev-api.getwalkin.in/nearx/graphiql
  query : Geofence

</pre>

#### Sample body
  <pre class="prettyprint" style="color:white;margin-left:30px;background-color:black;">
      
      query{
        Geofence(id:1598){
          id
          geofenceName
          location{
            lat
            lng
          }
          address
          groups{
            id
            groupName
          }
        }
      }
      
  </pre>

#### Sample response

<pre class="prettyprint" style="color:white;margin-left:30px;background-color:black;">
    {
        "Geofence": {
          "id": "1598",
          "geofenceName": "Little Elly School",
          "location": {
            "lat": 12.9314279,
            "lng": 77.6250023
          },
          "address": "Little Elly Pre School,Koramangala,Banglore",
          "groups": [
            {
              "id": "349",
              "groupName": "BBMP Park"
            }
          ]
        }
    }

</pre>

### List geofences

#### Definition

Lists geofences. By defaulted sorted descending by createdTime.

<pre class="prettyprint" style="color:white;margin-left:30px;background-color:black;">

  URL : https://dev-api.getwalkin.in/nearx/graphiql
  query : Geofences

</pre>

#### Query parameters

 * `limit (number, optional)`: Retrieves a specific number of geofences. A number between 1 and 1000. Defaults to 10.
 * `offset (number, optional)` : Retrieves a specific geofences from offset number. Defaults to 0.

#### Sample body

<pre class="prettyprint" style="color:white;margin-left:30px;background-color:black;">

    query{
      Geofences(limit:1,offset:0){
        geofences{
          id
          geofenceName
          location{
            lat
            lng
          }
          radii
        }
        pageInfo
      }
    }

</pre>

#### Sample response
<pre class="prettyprint" style="color:white;margin-left:30px;background-color:black;">

  {
        "Geofences": {
        "geofences": [
          {
            "id": "1596",
            "geofenceName": "Silk Board",
            "location": {
              "lat": 12.9308829,
              "lng": 77.6238343
            },
            "radii": [
              54
            ]
          }
        ],
        "pageInfo": {
          "current": 0,
          "last": 5,
          "pageSize": 2,
          "from": 0,
          "to": 2,
          "total": 10
        }
      }
  }

</pre>

</details>

<details><summary>Groups</summary>

### Get Group

#### Definition

Gets a particular groups' information

<pre class="prettyprint" style="color:white;margin-left:30px;background-color:black;">

  URL : https://dev-api.getwalkin.in/nearx/graphiql
  query : getGroup

</pre>

#### Query parameters

 * `ID (ID!)` : Identifies uniquely a group.

<pre class="prettyprint" style="color:white;margin-left:30px;background-color:black;">

  query{
    getGroup(groupId:347){
      id
      groupName
      geofences{
        id
        geofenceName
        location{
          lat
          lng
        }
      }
    }
  }

</pre>

### List Groups

#### Definition

Lists a group. Geofences are sorted descending by createdTime.

<pre class="prettyprint" style="color:white;margin-left:30px;background-color:black;">

  URL : https://dev-api.getwalkin.in/nearx/graphiql
  query : Groups

</pre>

#### Query parameters

 * `limit (number, optional)`: Retrieves a specific number of groups. A number between 1 and 1000. Defaults to 10.
 * `offset (number, optional)` : Retrieves a specific geofences from offset number. Defaults to 0.

#### Sample body

<pre class="prettyprint" style="color:white;margin-left:30px;background-color:black;">

  query{
        Groups(limit:1,offset:0){
        id
        enabled
        groupName
     }
  }

</pre>

#### Sample response
<pre class="prettyprint" style="color:white;margin-left:30px;background-color:black;">

  {
    "Groups": [
        {
          "id": "348",
          "enabled": true,
          "groupName": "ccd in hsr"
        }
      ]
    }
  }

</pre>

### Create Group

#### Definition

Creates a new group with group information.

<pre class="prettyprint" style="color:white;margin-left:30px;background-color:black;">

  URL : https://dev-api.getwalkin.in/nearx/graphiql
  query : createGroup

</pre>

#### Query parameters

 * `groupName (String!)`: Specifies name of the group
 * `metaData (JSON, optional)` : Any extra details for the group can be added here. For example, store ID.


#### Sample body

<pre class="prettyprint" style="color:white;margin-left:30px;background-color:black;">

    mutation{
      createGroup(GroupInput:{
        groupName:"ccd in koramangala"
      }){
        id
        enabled
      }
    }

</pre>

#### Sample response

<pre class="prettyprint" style="color:white;margin-left:30px;background-color:black;">
  
  {
    "createGroup": {
      "id": "350",
      "enabled": true
    }
  }

</pre>

### Update Group

#### Definition

Updates an existing group with group information

<pre class="prettyprint" style="color:white;margin-left:30px;background-color:black;">

  URL : https://dev-api.getwalkin.in/nearx/graphiql
  query : updateGroup

</pre>

#### Query parameters

 * `ID (ID!)` : Identifies uniquely a group.
 * `GroupInput (JSON!)`: Any update to the group can be done with the fields listed here.

#### Sample body

<pre class="prettyprint" style="color:white;margin-left:30px;background-color:black;">

    mutation{
    updateGroup(id:350,GroupInput:{
      groupName:"CCD in Koramangala 3rd block"
    }){
        id
          groupName
      }
    }

</pre>

#### Sample response

<pre class="prettyprint" style="color:white;margin-left:30px;background-color:black;">

  {
    "updateGroup": {
      "id": "350",
      "groupName": "CCD in Koramangala 3rd block"
    }
  }

</pre>

### Disable Group

#### Definition

Disables an existing group

<pre class="prettyprint" style="color:white;margin-left:30px;background-color:black;">

  URL : https://dev-api.getwalkin.in/nearx/graphiql
  query : disableGroup

</pre>

#### Query parameters

 * `ID (ID!)` : Identifies uniquely a group.

#### Sample body

<pre class="prettyprint" style="color:white;margin-left:30px;background-color:black;">

    mutation{
        disableGroup(id:350){
          id
          groupName
          enabled
        }
    }

</pre>

#### Sample response

<pre class="prettyprint" style="color:white;margin-left:30px;background-color:black;">

    {
      "disableGroup": {
          "id": "350",
          "groupName": "CCD in Koramangala 3rd block",
          "enabled": false
        }
    }

</pre>

</details>
</blockquote>
</p>
</details>

<details><summary>Console Specific APIs</summary><blockquote>
<p>

### Get Place

#### Definition

Gets a particular place details specific to an ID.

<pre class="prettyprint" style="color:white;margin-left:30px;background-color:black;">

  URL : https://dev-api.getwalkin.in/nearx/graphiql
  query : Place

</pre>

#### Query parameters

 * `ID (ID)`: Uniquely identifies a place

#### Sample body

<pre class="prettyprint" style="color:white;margin-left:30px;background-color:black;">

    query{
      Place(id:1597){
        id
        geofenceName
        location{
          lat
          lng
        }
        totalHotspot
        hotspots{
          id
          geofenceName
        }
      }
    }

</pre>

#### Sample response

<pre class="prettyprint" style="color:white;margin-left:30px;background-color:black;">

    "Place": {
      "id": "1597",
      "geofenceName": "BBMP Park",
      "location": {
        "lat": 12.9314279,
        "lng": 77.6250023
      },
      "totalHotspot": 1,
      "hotspots": [
        {
          "id": "1598",
          "geofenceName": "Little Elly School"
        }
      ]
    }

</pre>

### List Places

#### Definition

Lists a specific place details with hotspots.

<pre class="prettyprint" style="color:white;margin-left:30px;background-color:black;">

  URL : https://dev-api.getwalkin.in/nearx/graphiql
  query : Places

</pre>

#### Query parameters

 * `limit (number, optional)`: Retrieves a specific number of places. A number between 1 and 1000. Defaults to 10.
 * `offset (number, optional)` : Retrieves a specific places from offset number. Defaults to 0.


#### Sample body

<pre class="prettyprint" style="color:white;margin-left:30px;background-color:black;">

  query{
      Places(limit:2,offset:0){
        places{
          id
          geofenceName
          location{
            lat
            lng
          }
          totalHotspot
        }
        pageInfo
      }
  }

</pre>

#### Sample response
<pre class="prettyprint" style="color:white;margin-left:30px;background-color:black;">

    {
      "places": [
        {
          "id": "1598",
          "geofenceName": "Little Elly School",
          "location": {
            "lat": 12.9314279,
            "lng": 77.6250023
          },
          "totalHotspot": 0
        },
        {
          "id": "1597",
          "geofenceName": "BBMP Park",
          "location": {
            "lat": 12.9314279,
            "lng": 77.6250023
          },
          "totalHotspot": 1
        }
      ],
      "pageInfo": {
        "current": 0,
        "last": 5,
        "pageSize": 2,
        "from": 0,
        "to": 2,
        "total": 11
      }
    }

</pre>

### Create Or Update Place

#### Definition

Creates or Updates an existing place. This supports both adding and removing hotspots to an existing place.

<pre class="prettyprint" style="color:white;margin-left:30px;background-color:black;">

  URL : https://dev-api.getwalkin.in/nearx/graphiql
  query : CreateOrUpdatePlace

</pre>

#### Query parameters

 * `geofenceName (string, required)`: A name for the place.
 * `location (JSON, required)`: JSON string representing a center in the format {longitude,latitude} for type circle.
 * `radius (number, required for type circle)`: The radius of the circle in meters for type circle, a number between 50 and 10000. Ignored for type polygon.
 * `address (string, required)`: Add the address for the geofence(area, city, state,country).
 * `mainPlace(Boolean)`: Distinguishes between a place and a hotspot

#### Sample body
<pre class="prettyprint" style="color:white;margin-left:30px;background-color:black;">

  {
        createOrUpdatePlace(PlaceInput:[
        {
          geofenceName:"BBMP Park"
          location:{
            lat:12.9314279
            lng:77.6250023
          }
          radii:50
          address:"BBMP Park,Koramangala, Banglore"
          mainPlace:true
        },
        {
          geofenceName:"Little Elly School"
          location:{
            lat:12.9314279
            lng:77.6250023
          }
          radii:50
          address:"Little Elly Pre School,Koramangala,Banglore"
        }
      ]){
          id
          geofenceName
          hotspots{
            id
            geofenceName
          }
          totalHotspot
        }
  }

</pre>

#### Sample response

<pre class="prettyprint" style="color:white;margin-left:30px;background-color:black;">

    "createOrUpdatePlace": {
      "id": "1597",
      "geofenceName": "BBMP Park",
      "hotspots": [
        {
          "id": "1598",
          "geofenceName": "Little Elly School"
        }
      ],
      "totalHotspot": 1
    }
  }

</pre>

</p>
</blockquote>
</details>

<!--
<details><summary>Others</summary><blockquote>
<p>

### List Customers

Customers are sorted descending by last_modified_by.
#### Definition

</pre>
URL : https://dev-api.getwalkin.in/core/graphql
query :  customers
</pre>
#### Sample response
<pre class="prettyprint" style="color:white;margin-left:30px;background-color:black;">
{
   "data": {
       "customers": [
           {
               "id": "4ca87adc-e2fa-4d67-9042-c7e7d96a4ffc",
               "phoneNumber": "9984541502",
               "externalCustomerId": null,
               "customerIdentifier": "9984541502",
               "organization": {
                   "id": "16b75065-e528-4fec-a8e7-93f58184561b",
                   "organizationType": "ORGANIZATION"
               },
               "entityExtend": null,
               "extended": {},
               "nearxUser": null,
               "application": null,
               "customerDevices": [
                   {
                       "fcmToken": "abcdefghijklmnopqrstuvwxyz",
                       "deviceId": "f9df9dc48c97bbfee",
                       "modelNumber": "",
                       "osVersion": "V9",
                       "status": "active"
                   },
               ]
           },
           {...},
           {...}
       ]
   }
}
</pre>

### Get a customer

Get a customer. The customer can be referenced by id(CustomerId), externalCustomerId, organization_id, or customerIdentifier.

#### Definition

</pre>
URL : https://dev-api.getwalkin.in/core/graphql
query :  customer
</pre>

#### Sample response
<pre class="prettyprint" style="color:white;margin-left:30px;background-color:black;">
{
   "data": {
       "customer": {
           "id": "4ca87adc-e2fa-4d67-9042-c7e7d96a4ffc",
               "firstName": "Pavani",
                   "phoneNumber": "9984541502",
                       "organization": {
               "organizationType": "ORGANIZATION"
           },
           "customerDevices": [
               {
                   "fcmToken": "abcdefghijklmnopqrstuvwxyz",
                   "deviceId": "a6ae9270f257c085",
                   "modelNumber": "Samsung J7 pro",
                   "osVersion": "V9",
                   "status": "active"
               }
           ]
       }
   }
}
</pre>

### Update a customer

Update customer. The customer can be referenced by id(CustomerId), externalCustomerId, organization_id, or customerIdentifier.

#### Definition

</pre>
URL : https://dev-api.getwalkin.in/core/graphql
query :  updateCustomer
</pre>

#### Sample response
<pre class="prettyprint" style="color:white;margin-left:30px;background-color:black;">
{
   "data": {
       "updateCustomer": {
           "id": "4ca87adc-e2fa-4d67-9042-c7e7d96a4ffc",
           "firstName": "Pavani",
           "phoneNumber": "9984541502"
       }
   }
}
</pre>

### Disable a customer

Disable a customer. The customer can be referenced by id(CustomerId), externalCustomerId, organization_id, or customerIdentifier.

#### Definition

</pre>
URL : https://dev-api.getwalkin.in/core/graphql
query :  disableCustomer
</pre>

#### Sample response
<pre class="prettyprint" style="color:white;margin-left:30px;background-color:black;">
{
   "data": {
       "disableCustomer": {
           "id": "4ca87adc-e2fa-4d67-9042-c7e7d96a4ffc",
           "firstName": "Pavani",
           "phoneNumber": "9984541502"
       }
   }
}
</pre>
</p>
</blockquote>
</details>
-->

## Support

Have questions after reading the documentation?  Still have questions? Please feel free to write to haripriya@getwalk.in.
