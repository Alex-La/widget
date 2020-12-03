import React from "react";
import { Container, Grid } from "@material-ui/core";
import WindowRating from "./WindowRating";
import styles from "styles/WindowTop.css";

const WindowTop = () => {
  return (
    <Container className={styles.window_top}>
      <Grid container>
        <WindowRating />
      </Grid>
    </Container>
  );
};

export default WindowTop;
