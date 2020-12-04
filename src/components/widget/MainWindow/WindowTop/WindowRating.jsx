import React from "react";
import { Grid } from "@material-ui/core";
import styles from "styles/WindowRating.css";

const WindowRating = () => {
  return (
    <Grid item xs={6} sm={6} md={3}>
      <p className={styles["window-top__name"]}>Средний рейтинг</p>
      <div className={styles["window-rating__amount"]}>
        <img
          src="http://marsip01.tech01.net.in/mpv/img/rating-1.png"
          alt="http://marsip01.tech01.net.in/mpv/img/rating-1.png"
        />
        <div className={styles["window-rating__deg"]}>
          <p>
            На основе <b>14228</b> отзывов
          </p>
        </div>
      </div>
    </Grid>
  );
};

export default WindowRating;
