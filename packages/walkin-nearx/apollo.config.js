module.exports = {
  client: {
    name: "nearx-console",
    service: {
      name: "nearx-app",
      // url: "https://dev-api.getwalkin.in/core/graphql",
      url: "https://dev-api.getwalkin.in/nearx_dev/graphql"
    },
    includes: ["src/**/*.js"]
  }
};
