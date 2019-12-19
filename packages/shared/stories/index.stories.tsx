import { configure } from "@storybook/react";

// follwoing will automatically import all stories ending in *.stories.tsx
configure(
  require.context("../src/components", true, /\.stories\.tsx?$/),
  module
);
