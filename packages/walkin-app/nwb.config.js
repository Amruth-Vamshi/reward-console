module.exports = {
  type: "react-app",
  webpack: {
    config: config => {
      console.log(config);
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

      // config.module.rules.push({
      //   test: /\.md$/,
      //   use: [
      //     "html-loader",
      //     {
      //       loader: "markdown-loader",
      //       options: {
      //         highlight: (code, lang) => {
      //           if (
      //             !lang ||
      //             ["text", "literal", "nohighlight"].includes(lang)
      //           ) {
      //             return `<pre class="hljs">${code}</pre>`;
      //           }
      //           const html = highlight.highlight(lang, code).value;
      //           return `<span class="hljs">${html}</span>`;
      //         }
      //       }
      //     }
      //   ]
      // });

      return config;
    }
  }
};
