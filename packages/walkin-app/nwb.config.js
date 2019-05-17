module.exports = {
  type: "react-app",
  webpack: {
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
              javascriptEnabled: true
            }
          }
        ]
      });
      return config;
    }
  }
};
