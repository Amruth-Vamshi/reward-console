export const GRAPHQL_URL = "https://dev-api.getwalkin.in/core_dev/graphql";
export const NEARX_GRAPHQL_URL = "https://dev-api.getwalkin.in/nearx/graphql";

let env = 'default'
if (process.env.NODE_ENV == 'development' || process.env.NODE_ENV == 'dev') env = 'development'
if (process.env.NODE_ENV == 'production' || process.env.NODE_ENV == 'prod') env = 'production'

const client = {
    development: {
        GRAPHQL_URL: "https://dev-api.getwalkin.in/core_dev/graphql",
        NEARX_GRAPHQL_URL: "hhttp://167.99.31.169:3001/nearx/graphql",
    },
    production: {
        GRAPHQL_URL: "https://dev-api.getwalkin.in/core/graphql",
        NEARX_GRAPHQL_URL: "https://dev-api.getwalkin.in/nearx/graphql"
    },
    default: {
        GRAPHQL_URL: "https://dev-api.getwalkin.in/core_dev/graphql",
        NEARX_GRAPHQL_URL: "hhttp://167.99.31.169:3001/nearx/graphql",
    }
}


export default client[env]