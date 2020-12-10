import React from "react";
import { Grid, Container } from "@material-ui/core";
import WindowFilters from "./WindowFilters/WindowFilters";

const WindowReviews = () => {
  return (
    <Container style={{ marginTop: 50 }}>
      <Grid container spacing={2}>
        <WindowFilters />
      </Grid>
    </Container>
  );
};

export default WindowReviews;
