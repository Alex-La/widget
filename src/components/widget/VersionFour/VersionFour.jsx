import React from "react";
import { Grid } from "@material-ui/core";
import "styles/versionFour/VersionFour.css";

import Review from "./Review";

const VersionFour = () => {
  return (
    <Grid className="btob">
      <Grid className="btob-wrapper">
        <h3>Отзывы о нашей компании</h3>

        {Array(2)
          .fill()
          .map(() => (
            <Review />
          ))}
      </Grid>
    </Grid>
  );
};

export default VersionFour;
