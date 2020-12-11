import React from "react";
import { Grid, Button } from "@material-ui/core";
import "styles/windowMain/WindowAdd.css";

const WindowAdd = ({ setNewRev }) => {
  return (
    <Grid item xs={6} sm={6} md={3}>
      <p className="window-top__name">Добавить свой отзыв</p>
      <Button
        size="small"
        variant="contained"
        color="primary"
        style={{ textTransform: "none", width: "100%" }}
        onClick={() => setNewRev(true)}
      >
        Написать отзыв
      </Button>
    </Grid>
  );
};

export default WindowAdd;
