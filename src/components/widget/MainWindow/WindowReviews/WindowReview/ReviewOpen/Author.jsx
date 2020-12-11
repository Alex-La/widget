import React from "react";
import { Grid } from "@material-ui/core";
import "styles/windowMain/Author.css";

const Author = () => {
  return (
    <Grid item xs={12}>
      <div className="header_review__person">
        <img
          className="person_img"
          src="http://marsip01.tech01.net.in/mpv/img/person.png"
          alt="Артемий Лебедев"
        />
        <div className="person_name">
          <h5>Артемий Лебедев</h5>
          <p>Россия, Волгоград</p>
        </div>
      </div>
      <div className="header_review__rating">
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
        <span>3 месяца назад</span>
      </div>
    </Grid>
  );
};

export default Author;
