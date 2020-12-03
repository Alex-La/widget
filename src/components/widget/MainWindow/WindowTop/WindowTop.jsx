import React from "react";
import { Container, Grid } from "@material-ui/core";
import styles from "styles/WindowTop.css";

import WindowRating from "./WindowRating";
import WindowAdd from "./WindowAdd";

const WindowTop = () => {
  return (
    <Container className={styles.window_top}>
      <Grid container spacing={2}>
        <WindowRating />
        <WindowAdd />
      </Grid>
    </Container>
  );
};

export default WindowTop;
