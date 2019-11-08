import * as React from "react";
const loader = require("./../assets/images/loader.svg") as string;

export const CircularProgress = ({ className }: { className: any }) => (
  <div className={`loader ${className}`}>
    <img src={loader} alt="loader" />
  </div>
);
