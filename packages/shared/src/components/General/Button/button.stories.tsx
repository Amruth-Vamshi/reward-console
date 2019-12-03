import { CustomButton } from "@walkinsole/shared";
import React from "react";
import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  text,
  boolean,
  number,
  object
} from "@storybook/addon-knobs";

// storiesOf("Button", module).add("Button with knobs", () => (
//   <CustomButton text="Default " />
// ));

// import {
//   withKnobs,
//   text,
//   boolean,
//   object
// } from "@kadira/storybook-addon-knobs";

const stories = storiesOf("Button", module);
stories.addDecorator(withKnobs);
stories.add("with a button", () => {
  const style = {
    backgroundColor: "#FFF",
    border: "1px solid #DDD",
    borderRadius: 2,
    outline: 0,
    fontSize: 15,
    cursor: "pointer"
  };
  return (
    <CustomButton
      disabled={boolean("Disabled", false)}
      style={object("Style", style)}
    >
      {text("Label", "Hello Button")}
    </CustomButton>
  );
});
