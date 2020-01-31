// export const GRAPHQL_URL = "https://dev-api.getwalkin.in/core_dev/graphql";
export const GRAPHQL_URL = "http://174.138.123.95:4000/graphql";
export const NEARX_GRAPHQL_URL = "https://dev-api.getwalkin.in/nearx/graphql";
let proxy = "https://cors-anywhere.herokuapp.com/";

let env = "default";
if (process.env.NODE_ENV == "development" || process.env.NODE_ENV == "dev")
  env = "development";
if (process.env.NODE_ENV == "production" || process.env.NODE_ENV == "prod")
  env = "production";

const client = {
  development: {
    env: env,
    GRAPHQL_URL: "https://dev-api.getwalkin.in/core_dev/graphql",
    // GRAPHQL_URL: "http://174.138.123.95:4000/graphql",
    NEARX_GRAPHQL_URL: "https://dev-api.getwalkin.in/nearx_dev/graphql"

    // GRAPHQL_URL: "http://206.189.91.111:4000/graphql",
    // NEARX_GRAPHQL_URL: "http://167.99.31.169:3001/graphql",
  },
  production: {
    env: env,
    GRAPHQL_URL: "https://dev-api.getwalkin.in/core/graphql",
    // GRAPHQL_URL: "http://174.138.123.95:4000/graphql",
    NEARX_GRAPHQL_URL: "https://dev-api.getwalkin.in/nearx/graphql"
  },
  default: {
    env: env,
    GRAPHQL_URL: "https://dev-api.getwalkin.in/core_dev/graphql",
    // GRAPHQL_URL: "http://174.138.123.95:4000/graphql",
    NEARX_GRAPHQL_URL: "https://dev-api.getwalkin.in/nearx_dev/graphql"
  }
};

export default client[env];
