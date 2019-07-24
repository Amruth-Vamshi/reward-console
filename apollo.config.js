module.exports = {
  client: {
    name: "walkin-console",
    service: {
      name: "walkin-app",
      url: "https://dev-api.getwalkin.in/core_dev/graphql"
    },
    includes: ["packages/**/*.js"],
    excludes: ["packages/walkin-nearx/**/*.js"]
  }
};
