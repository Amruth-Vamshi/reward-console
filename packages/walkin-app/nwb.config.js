module.exports = {
  type: "react-app",
  webpack: {
    config: config => {
      config.plugins.concat([
        "import",
        [
          { libraryName: "antd", style: "css" },
          { libraryName: "lodash" }
        ]
      ]);

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


      config.entry = {
        main: ["./src/index.tsx"]
      }
      config.resolve.extensions.push(".ts", ".tsx");
      config.module.rules.push({
        "test": /\.tsx?$/,
        "loader": "awesome-typescript-loader"
      });

      return config;
    }
  }
};
