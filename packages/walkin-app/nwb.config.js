module.exports = {
  type: "react-app",
  webpack: {
    config: config => {
      config.plugins.concat([
        "import",
        [
          { libraryName: "antd", style: "css" },

          {
            libraryName: "lodash"
          }
        ]
      ]);

      config.module.rules.push({
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
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
      return config;
    }
  }
};
