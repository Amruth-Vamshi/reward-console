import { InMemoryCache } from "apollo-boost";
import { persistCache } from "apollo-cache-persist";
import { Redirect, Route, Switch } from "react-router-dom";
import typeDefs from "../typeDefs";
import resolvers from "../resolvers";
import ApolloClient from "apollo-boost";
import defaults from "../defaults";
import { message } from "antd";
import {
  GRAPHQL_URL,
  NEARX_GRAPHQL_URL
} from "@walkinsole/walkin-components/src/constants/config";
import { async } from "q";

export const configureClient = async () => {
  const cache = new InMemoryCache();

  const client = new ApolloClient({
    cache,
    uri: GRAPHQL_URL,
    request: async operation => {
      const token = await localStorage.getItem("jwt");
      operation.setContext({
        headers: {
          authorization: token ? `Bearer ${token}` : ""
        }
      });
    },
    clientState: {
      defaults,
      resolvers,
      typeDefs
    },
    onError: ({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        console.log(graphQLErrors);
        console.log(">>>>>>>", graphQLErrors[0]);

        if (networkError) {
          message.error("Network Error");
          console.log(networkError);
        }
        if (
          graphQLErrors[0].extensions &&
          graphQLErrors[0].extensions.code &&
          graphQLErrors[0].extensions.code == "INVALID_CREDENTIALS"
        )
          message.warning("INVALID CREDENTIALS");
        if (
          graphQLErrors[0].message &&
          graphQLErrors[0].message == "jwt expired"
        ) {
          localStorage.clear();
          sessionStorage.clear();
        }
      }
    }
  });

  try {
    // See above for additional options, including other storage providers.
    await persistCache({
      cache,
      storage: window.sessionStorage
    });
  } catch (error) {
    console.error("Error restoring Apollo cache", error);
  }
  return client;
};
