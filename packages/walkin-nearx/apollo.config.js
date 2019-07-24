module.exports = {
  client: {
    name: "nearx-console",
    service: {
      name: "nearx-app",
      // url: "https://dev-api.getwalkin.in/core/graphql",
      url: "http://167.99.31.169:3001/graphql"
    },
    includes: ["src/**/*.js"]
  }
};
