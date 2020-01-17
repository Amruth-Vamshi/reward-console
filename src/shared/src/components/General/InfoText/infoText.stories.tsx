import React from "react";
import { InfoText } from "shared";
import { storiesOf } from "@storybook/react";
import { withKnobs, object, select } from "@storybook/addon-knobs";

const stories = storiesOf("Atoms|Other/InfoText", module);

stories.addDecorator(withKnobs);

stories.add(
  "infoText basic",
  () => {
    const containerStyle = {
      display: "flex",
      width: "30vw"
      // "justify-content": "center"
    };
    const headerStyle = {
      backgroundColor: "white",
      width: "20%",
      fontFamily: "sans-seriff"
    };
    const textStyle = {
      backgroundColor: "white",
      width: "70%",
      fontFamily: "sans-seriff"
    };
    return (
      <InfoText
        header={"header"}
        headerStyle={object("headerStyle", headerStyle)}
        text={"text"}
        textStyle={object("textStyle", textStyle)}
        containerStyle={object("containerStyle", containerStyle)}
      />
    );
  },
  { notes: "Notes will appear here" }
);
