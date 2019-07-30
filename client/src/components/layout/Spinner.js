import React, { Fragment } from "react";
import spinner from "./sp.gif";
const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      style={{
        width: "100px",
        height: "150px",
        margin: "auto",
        display: "block"
      }}
      alt="loading..."
    />
  </Fragment>
);

export default Spinner;
