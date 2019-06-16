import { InMemoryCache } from "apollo-boost";
import { persistCache } from "apollo-cache-persist";
import typeDefs from "../typeDefs";
import resolvers from "../resolvers";
import ApolloClient from "apollo-boost";
import defaults from "../defaults";
import {
  GRAPHQL_URL,
  NEARX_GRAPHQL_URL
} from "@walkinsole/walkin-components/src/constants/config";

export const configureClient = async () => {
  const cache = new InMemoryCache();

  const token = localStorage.getItem("jwt");

  const client = new ApolloClient({
    cache,
    uri: GRAPHQL_URL,
    clientState: {
      defaults,
      resolvers,
      typeDefs
    },
    headers: {
      authorization: token ? `Bearer ${token}` : ""
    }
  });

  try {
    // See above for additional options, including other storage providers.
    await persistCache({
      cache,
      storage: window.localStorage
    });
  } catch (error) {
    console.error("Error restoring Apollo cache", error);
  }
  return client;
};
