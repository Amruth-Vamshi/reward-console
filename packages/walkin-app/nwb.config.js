module.exports = {
  type: "react-app",
  webpack: {
    extra: {
      devtool: "cheap-source-map"
    },
    config: config => {
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
