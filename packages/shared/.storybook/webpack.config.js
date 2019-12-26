module.exports = ({ config }) => {
  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("awesome-typescript-loader")
        }
      ]
    },
    {
      test: /\.stories\.tsx?$/,
      loaders: [require.resolve("@storybook/source-loader")],
      enforce: "pre"
    }
    // comment below to remove less loaders
    // {
    //   test: /\.less?$/,
    //   loaders: [
    //     {
    //       loader: "style-loader"
    //     },
    //     {
    //       loader: "css-loader"
    //     },
    //     {
    //       loader: "less-loader",
    //       options: {
    //         javascriptEnabled: true
    //       }
    //     }
    //   ]
    // }
  );
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
