module.exports = {
  type: "react-app",
  webpack: {
    config: config => {
      config.module.rules.push({
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true,
              modifyVars: {
                "@primary-color": "#038fde"
              }
            }
          }
        ]
      });

      config.resolve = {
        extensions: [".tsx", ".ts", ".js"]
      };
      config.entry = {
        index: "./src/index.tsx",
        shared: "shared",
        walkinComponents: "walkin-components",
        walkinCore: "walkin-core",
        walkinHyperX: "walkin-hyperx",
        walkinNearX: "walkin-nearx",
        walkinRefineX: "walkin-refinex"
      };

      config.resolve.extensions.push(".ts", ".tsx");
      config.module.rules.push({
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      });
      return config;
    }
  }
};
