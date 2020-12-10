import React, { Fragment } from "react";
import Author from "./Author";
import Info from "./Info";
import Answer from "./Answer";

const ReviewOpen = () => {
  return (
    <Fragment>
      <Author />
      <Info />
      <Answer />
    </Fragment>
  );
};

export default ReviewOpen;
