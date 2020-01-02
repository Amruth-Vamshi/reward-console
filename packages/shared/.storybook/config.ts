import { configure, addParameters } from "@storybook/react";

import "antd/dist/antd.css";

// comment below to remove less
// import "@walkinsole/walkin-components/src/assets/vendors/style";
// import "../../walkin-app/src/styles/wieldy.less";

// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

// conf
