module.exports = {
  client: {
    name: "walkin-console",
    service: {
      name: "walkin-app",
      url: "https://dev-api.getwalkin.in/core_dev/graphql",
      skipSSLValidation: true
    },
    includes: ["packages/**/**/*.tsx"],
    excludes: ["packages/walkin-nearx/**/*.tsx"]
  }
};
