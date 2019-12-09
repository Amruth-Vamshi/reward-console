import React from "react";
import { storiesOf } from "@storybook/react";
import { Image } from "@walkinsole/shared";
import {
  withKnobs,
  text,
  boolean,
  number,
  object,
  array,
  select
} from "@storybook/addon-knobs";

const stories = storiesOf("Atoms|Other/Image", module);

stories.addDecorator(withKnobs);

stories.add("Image default", () => {
  const source = require("../../../assets/alltheplussize.png");
  const styles = {
    backgroundColor: "transparent",
    height: "80px",
    width: "100px",
    padding: "10px"
  };
  return (
    <Image
      source={text("source", source)}
      alternate_text={text("alternate text", "image-placeholder")}
      style={object("style", styles)}
    />
  );
});
