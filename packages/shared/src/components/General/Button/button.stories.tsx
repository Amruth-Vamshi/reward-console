import { CustomButton } from "@walkinsole/shared";
import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import {
  withKnobs,
  text,
  boolean,
  number,
  object
} from "@storybook/addon-knobs";

const stories = storiesOf("Atoms|Antd/General/Button", module);

stories.addDecorator(withKnobs);

stories.add(
  "button default",
  () => {
    const style = {
      backgroundColor: "#FFF",
      // border: "1px solid #DDD",
      borderRadius: 2,
      outline: 0,
      fontSize: 15,
      cursor: "pointer"
    };
    return (
      <CustomButton
        type={text("Button Type", "default")}
        disabled={boolean("Disabled", false)}
        style={object("Style", style)}
        onClick={action("button-click")}
      >
        {text("Label", "Hello Button")}
      </CustomButton>
    );
  },
  { notes: "Notes will appear here" }
);
