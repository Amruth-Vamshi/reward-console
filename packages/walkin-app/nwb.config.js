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
        shared: "@walkinsole/shared",
        walkinComponents: "@walkinsole/walkin-components",
        walkinCore: "@walkinsole/walkin-core",
        walkinHyperX: "@walkinsole/walkin-hyperx",
        walkinNearX: "@walkinsole/walkin-nearx",
        walkinRefineX: "@walkinsole/walkin-refinex"
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
