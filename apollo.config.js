module.exports = {
  client: {
    name: "walkin-console",
    service: {
      name: "walkin-app",
      url: "http://178.128.220.91:4000/graphql"
    },
    includes: ["packages/**/*.js"]
  },
  client: {
    name: "NearX-console",
    service: {
      name: "nearx-app",
      url: "http://206.189.91.111:3001/graphql"
    },
    includes: ["packages/**/*.js"]
  }
};
