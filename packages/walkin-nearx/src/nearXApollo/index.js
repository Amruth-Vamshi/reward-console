import { InMemoryCache } from "apollo-boost";
import ApolloClient from "apollo-boost";

const cache = new InMemoryCache();
const token = localStorage.getItem("jwt");

export const nearXClient = new ApolloClient({
  cache,
  uri: "https://dev-api.getwalkin.in/nearx/graphql",
  credentials: "same-origin",
  headers: {
    api_key: "0X3bmLq5sBImabgEXkDVBfnOyUOkD2WN",
    Host: "dev-api.getwalkin.in",
    "Access-Control-Allow-Origin": "*",
    token
  }
});
