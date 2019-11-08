import * as React from "react";
const loader = import("../../assets/images/loader.svg");

export const CircularProgress = ({ className }: { className: any }) => (
  <div className={`loader ${className}`}>
    <img src={loader} alt="loader" />
  </div>
);
