import React from "react";
import { Grid } from "@material-ui/core";
import "styles/versionThree/VersionThree.css";

import Carousel from "./Carousel";

const VersionThree = () => {
  return (
    <Grid className="viget-review-third">
      <Grid className="viget-review__wrapper sl-wrapper">
        <h2>Отзыв о курсе “Будь собой”</h2>
        <Carousel />
      </Grid>
    </Grid>
  );
};

export default VersionThree;
