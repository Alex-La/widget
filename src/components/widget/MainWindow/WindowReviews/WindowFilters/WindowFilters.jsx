import React, { Fragment } from "react";
import { Grid } from "@material-ui/core";

import ReviewsAs from "./ReviewsAs";
import SortBy from "./SortBy";

const WindowFilters = () => {
  return (
    <Fragment>
      <Grid item xs={6}>
        <ReviewsAs />
      </Grid>
      <Grid item container xs={6} justify="flex-end">
        <SortBy />
      </Grid>
      <Grid item xs={12}>
        <div style={{ borderBottom: "1px solid lightgrey" }} />
      </Grid>
    </Fragment>
  );
};

export default WindowFilters;
