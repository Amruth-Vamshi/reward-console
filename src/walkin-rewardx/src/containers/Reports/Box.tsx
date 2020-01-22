import * as React from "react";

const Box = ({
  display = "flex",
  justifyContent = "space-between",
  alignItems = "center",
  border = "1px solid",
  width = "100%",
  padding = 10,
  margin = "0 0 10px 0",
  minWidth = null,
  maxWidth = null,
  ...props
}) => {
  let boxStyles = {
    border,
    width,
    padding,
    justifyContent,
    display,
    alignItems,
    margin,
    minWidth,
    maxWidth
  };
  return <div style={boxStyles}>{props.children}</div>;
};

export default Box;
