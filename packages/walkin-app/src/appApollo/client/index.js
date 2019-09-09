import { InMemoryCache } from "apollo-boost";
import { persistCache } from "apollo-cache-persist";
import { Redirect, Route, Switch } from "react-router-dom";
import typeDefs from "../typeDefs";
import resolvers from "../resolvers";
import ApolloClient from "apollo-boost";
import defaults from "../defaults";
import { message } from "antd";
import env from "@walkinsole/walkin-components/src/constants/config";
import { async } from "q";

export const configureClient = async () => {
  const cache = new InMemoryCache();

  const client = new ApolloClient({
    cache,
    uri: env.GRAPHQL_URL,
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
        if (
          graphQLErrors[0].extensions &&
          graphQLErrors[0].extensions.code == "UNTH"
        ) {
          localStorage.clear();
          sessionStorage.clear();
          location.reload();
        }

        if (graphQLErrors[0].message) {
          message.warn(graphQLErrors[0].message)
        }
      } else if (networkError) {
        message.error(
          "Hey! Regret to inform that we are experiencing some issues. Please check your internet connection or try again after sometime"
        );
        console.log(networkError);

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
