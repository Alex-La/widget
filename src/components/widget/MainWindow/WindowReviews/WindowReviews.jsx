import React from "react";
import { Grid, Container } from "@material-ui/core";
import WindowFilters from "./WindowFilters/WindowFilters";
import WindowReview from "./WindowReview/WindowReview";

const WindowReviews = () => {
  return (
    <Container style={{ marginTop: 50 }}>
      <Grid container spacing={2}>
        <WindowFilters />
      </Grid>
      <Grid container spacing={2} style={{ marginTop: 30, paddingBottom: 70 }}>
        <WindowReview />
      </Grid>
    </Container>
  );
};

export default WindowReviews;
