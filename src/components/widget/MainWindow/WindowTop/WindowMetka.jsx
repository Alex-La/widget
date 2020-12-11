import React from "react";
import { Grid } from "@material-ui/core";
import "styles/windowMain/WindowMetka.css";

const WindowMetka = () => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <div className="window-metka">
        <p className="window-top__name">Метки</p>
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
