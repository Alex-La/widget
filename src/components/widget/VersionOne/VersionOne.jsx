import React from "react";
import { Grid } from "@material-ui/core";
import "styles/versionOne/VersionOne.css";

import Carousel from "./Carousel";

const VersionOne = () => {
  return (
    <Grid className="viget-review viget-review-first">
      <Grid className="viget-review__wrapper">
        <h2>Отзыв о курсе “Будь собой”</h2>
        <Carousel />
      </Grid>
    </Grid>
  );
};

export default VersionOne;
