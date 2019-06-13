module.exports = {
  client: {
    name: "walkin-console",
    service: {
      name: "walkin-app",
      url: "http://178.128.220.91:4000/graphql"
    },
    includes: ["packages/**/*.js"]
  }
};
