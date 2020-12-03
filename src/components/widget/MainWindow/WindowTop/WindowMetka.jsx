import React from "react";
import { Grid } from "@material-ui/core";
import styles from "styles/WindowMetka.css";

const WindowMetka = () => {
  return (
    <Grid item xs={12}>
      <div className={styles["window-metka"]}>
        <p className={styles["window-top__name"]}>Метки</p>
        <a href="#">Все отзывы</a>
        <a href="#">#Акция 2 + 1 </a>
        <a href="#">#Консультация при покупке</a>
        <a href="#">#Низкие цены</a>
        <a href="#">...</a>
      </div>
    </Grid>
  );
};

export default WindowMetka;
