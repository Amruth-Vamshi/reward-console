import { InMemoryCache } from "apollo-boost";
import ApolloClient from "apollo-boost";
import { NEARX_GRAPHQL_URL } from "@walkinsole/walkin-components/src/constants/config";

const cache = new InMemoryCache();
const token = sessionStorage.getItem("jwt");

export const nearXClient = new ApolloClient({
  cache,
  uri: NEARX_GRAPHQL_URL,
  credentials: "same-origin",
  headers: {
    api_key: "0X3bmLq5sBImabgEXkDVBfnOyUOkD2WN",
    Host: "dev-api.getwalkin.in",
    "Access-Control-Allow-Origin": "*",
    token
  }
});
