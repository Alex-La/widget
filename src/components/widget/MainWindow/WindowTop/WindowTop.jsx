import React, { useState } from "react";
import { Container, Grid } from "@material-ui/core";
import "styles/windowMain/WindowTop.css";

import WindowRating from "./WindowRating";
import WindowAdd from "./WindowAdd";
import WindowMetka from "./WindowMetka";
import WindowRew from "./WindowRew";
import WindowNew from "./WindowNew/WindowNew";

const WindowTop = () => {
  const [newRev, setNewRev] = useState(false);

  return (
    <Container className="window_top">
      <Grid container spacing={2}>
        <WindowRating />
        <WindowAdd setNewRev={setNewRev} />
        <WindowMetka />
        <WindowRew />
      </Grid>
      {newRev && (
        <Grid container style={{ marginTop: 40 }}>
          <WindowNew />
        </Grid>
      )}
    </Container>
  );
};

export default WindowTop;
