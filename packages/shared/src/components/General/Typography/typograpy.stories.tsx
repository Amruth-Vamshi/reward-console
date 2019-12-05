import React from "react";
import { storiesOf } from "@storybook/react";
import { CustomTitle, CustomParagraph, CustomText } from "@walkinsole/shared";

const stories = storiesOf("Atoms|Antd/General/Typography", module);

stories.add("Text", () => {
  return <CustomText />;
});

stories.add("Title", () => {
  return <CustomTitle />;
});

stories.add("Paragraph", () => {
  return <CustomParagraph />;
});
