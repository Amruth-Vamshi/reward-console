import { InMemoryCache } from "apollo-boost";
import ApolloClient from "apollo-boost";
import env from "@walkinsole/walkin-components/src/constants/config";

const cache = new InMemoryCache();
const token = localStorage.getItem("jwt");

export const nearXClient = new ApolloClient({
  cache,
  uri: env.NEARX_GRAPHQL_URL,
  credentials: "same-origin",
  headers: {
    api_key: "0X3bmLq5sBImabgEXkDVBfnOyUOkD2WN",
    Host: "dev-api.getwalkin.in",
    "Access-Control-Allow-Origin": "*",
    token
  },

  // request: async operation => {
  //   const token = await localStorage.getItem("jwt");
  //   operation.setContext({
  //     headers: {
  //       authorization: token ? `Bearer ${token}` : ""
  //     }
  //   });
  // },

  onError: ({ graphQLErrors, networkError }) => {

    if (graphQLErrors) {
      console.log(graphQLErrors);
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
