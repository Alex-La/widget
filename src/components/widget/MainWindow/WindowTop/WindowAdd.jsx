import React from "react";
import { Grid, Button } from "@material-ui/core";
import styles from "styles/WindowAdd.css";

const WindowAdd = () => {
  return (
    <Grid item xs={6} sm={6} md={3}>
      <p className={styles["window-top__name"]}>Добавить свой отзыв</p>
      <Button
        size="small"
        variant="contained"
        color="primary"
        style={{ textTransform: "none", width: "100%" }}
      >
        Написать отзыв
      </Button>
    </Grid>
  );
};

export default WindowAdd;
