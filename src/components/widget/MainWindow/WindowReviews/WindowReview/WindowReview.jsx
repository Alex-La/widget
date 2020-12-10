import React, { Fragment } from "react";
import { Grid } from "@material-ui/core";

import ReviewOpen from "./ReviewOpen/ReviewOpen";

const WindowReview = () => {
  return (
    <Fragment>
      <Grid item xs={12}>
        <p style={{ fontSize: 20, marginBottom: 20 }}>Отзывы</p>
      </Grid>
      <Grid item xs={12} style={{ marginBottom: 30 }}>
        <ReviewOpen />
      </Grid>
    </Fragment>
  );
};

export default WindowReview;
