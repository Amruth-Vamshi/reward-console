import React from "react";
import { storiesOf } from "@storybook/react";
import { Header } from "@walkinsole/shared";
import { Breadcrumb } from "antd";

const stories = storiesOf("Atoms|Other/Header", module);

stories.add("Header basic", () => {
  return (
    <Header>
      <Breadcrumb separator=">">
        <Breadcrumb.Item>Organisation Info</Breadcrumb.Item>
        <Breadcrumb.Item>Sub stores</Breadcrumb.Item>
        <Breadcrumb.Item>Create</Breadcrumb.Item>
      </Breadcrumb>
    </Header>
  );
});
