import React from "react";
import { storiesOf } from "@storybook/react";
import { ColumnLayout } from "@walkinsole/shared";
import { withKnobs, object } from "@storybook/addon-knobs";

const stories = storiesOf("Atoms|Antd/Layout/ColumnLayoutLayout", module);

stories.addDecorator(withKnobs);

stories.add("layout column", () => {
  const style = [
    { backgroundColor: "#ae31", height: "30vh", span: 8 },
    { backgroundColor: "red", height: "90vh", span: 12 }
  ];
  return <ColumnLayout cstyle={object("style", style)} />;
});
