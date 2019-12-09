import React from "react";
import { storiesOf } from "@storybook/react";
import { CustomList } from "@walkinsole/shared";
import {
  withKnobs,
  text,
  boolean,
  number,
  object,
  array,
  select
} from "@storybook/addon-knobs";

const data = [
  {
    image: require("../../../assets/big_bazaar.png"),
    title: "Big Bazaar",
    subTitle: "Tower C, 247 Park, LBS Marg, Vikhroli (W), Mumbai - 400 083",
    actionableTitle: "Admin",
    actionableSubTitle: "Niranjan",
    actionable: false
  },
  {
    image: require("../../../assets/fbb.png"),
    title: "FBB Fashion Store",
    subTitle: "Tower C, 247 Park, LBS Marg, Vikhroli (W), Mumbai - 400 083",
    actionableTitle: "Admin",
    actionableSubTitle: "Sreemanth",
    actionable: false
  },
  {
    image: require("../../../assets/central_mall.png"),
    title: "Central Mall",
    subTitle: "Tower C, 247 Park, LBS Marg, Vikhroli (W), Mumbai - 400 083",
    actionableTitle: "",
    actionableSubTitle: "",
    actionable: true
  },
  {
    image: require("../../../assets/nilgiris.png"),
    title: "Nilgiris Retail",
    subTitle: "Tower C, 247 Park, LBS Marg, Vikhroli (W), Mumbai - 400 083",
    actionableTitle: "Admin",
    actionableSubTitle: "Rahul",
    actionable: false
  },
  {
    image: require("../../../assets/alltheplussize.png"),
    title: "All The Plus Size",
    subTitle: "Tower C, 247 Park, LBS Marg, Vikhroli (W), Mumbai - 400 083",
    actionableTitle: "Admin",
    actionableSubTitle: "Suresh",
    actionable: false
  },
  {
    image: require("../../../assets/easy_day_club.png"),
    title: "Easy Day club",
    subTitle: "Tower C, 247 Park, LBS Marg, Vikhroli (W), Mumbai - 400 083",
    actionableTitle: "Admin",
    actionableSubTitle: "Surya",
    actionable: false
  }
];

const stories = storiesOf("Atoms|Other/CustomList", module);

stories.addDecorator(withKnobs);

stories.add("list default", () => {
  const imageStyle = {
    backgroundColor: "transparent",
    height: "80px",
    width: "100px",
    padding: "10px"
  };
  const contentStyle = {
    backgroundColor: "transparent",
    // height: "80px",
    // width: "100px",
    padding: "10px"
  };
  const actionStyle = {
    backgroundColor: "transparent",
    // height: "80px",
    // width: "100px",
    padding: "10px"
  };
  return (
    <CustomList
      data={data}
      actionableButtonText={text("Actionable Button text", "Assign")}
      imageSpan={number("Image span", 4)}
      contentSpan={number("Content span", 16)}
      actionSpan={number("Action span", 4)}
      imageStyle={object("Image style", imageStyle)}
      contentStyle={object("Content style", contentStyle)}
      actionStyle={object("Action style", actionStyle)}
    />
  );
});
