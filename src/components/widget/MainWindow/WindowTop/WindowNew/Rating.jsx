import React from "react";
import { Grid } from "@material-ui/core";
import styles from "styles/WindowNew.css";

const Rating = () => {
  return (
    <Grid item xs={12}>
      <div className={styles.window_new__review}>
        <div className="rating-header__stars">
          <img
            src="http://marsip01.tech01.net.in/mpv/img/rating-stars.svg"
            alt="star"
          />
          <img
            src="http://marsip01.tech01.net.in/mpv/img/rating-stars.svg"
            alt="star"
          />
          <img
            src="http://marsip01.tech01.net.in/mpv/img/rating-stars.svg"
            alt="star"
          />
          <img
            src="http://marsip01.tech01.net.in/mpv/img/rating-stars.svg"
            alt="star"
          />
          <img
            src="http://marsip01.tech01.net.in/mpv/img/rating-starsg.svg"
            alt="star"
          />
        </div>
        <p>Хороший товар</p>
      </div>
    </Grid>
  );
};

export default Rating;
