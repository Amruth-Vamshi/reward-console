export const GRAPHQL_URL = "https://dev-api.getwalkin.in/core_dev/graphql";
export const NEARX_GRAPHQL_URL = "https://dev-api.getwalkin.in/nearx/graphql";


const env = {
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


export default env[process.env.NODE_ENV] ? env[process.env.NODE_ENV] : env.default