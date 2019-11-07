import * as React from "react";
import loader from "../../assets/images/loader.svg";

export const CircularProgress = ({ className }) => (
  <div className={`loader ${className}`}>
    <img src={loader} alt="loader" />
  </div>
);
