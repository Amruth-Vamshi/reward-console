import React from "react";
import { storiesOf } from "@storybook/react";
import { CustomGrid } from "@walkinsole/shared";

const stories = storiesOf("Atoms|Antd/Layout/Grid", module);

stories.add("grid basic", () => {
  return <CustomGrid />;
});
