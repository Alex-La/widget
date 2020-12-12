import React from "react";
import { Grid } from "@material-ui/core";
import "styles/versionTwo/VersionTwo.css";

import Carousel from "./Carousel";

const VersionTwo = () => {
  return (
    <Grid className="viget-review-second">
      <Grid className="viget-review__wrapper vr-wrapper">
        <h2>Отзывы о магазине</h2>
        <Carousel />
      </Grid>
    </Grid>
  );
};

export default VersionTwo;
