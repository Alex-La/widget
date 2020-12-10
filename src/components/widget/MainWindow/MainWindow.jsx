import React, { Fragment } from "react";
import WindowTop from "./WindowTop/WindowTop";
import WindowReviews from "./WindowReviews/WindowReviews";

const MainWindow = () => {
  return (
    <Fragment>
      <WindowTop />
      <WindowReviews />
    </Fragment>
  );
};

export default MainWindow;
