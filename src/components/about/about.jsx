import React from "react";
import { Grid } from "@mui/material";
import "./about.scss";

function about() {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-8">
        <h2 className="heading-secondary">
          Exciting tour for adveturous people
        </h2>
      </div>
      <Grid
      className="section-about-grid"
        container
        columnSpacing={6}
        rowSpacing={12}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          Text1
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          Text1
        </Grid>
      </Grid>
    </section>
  );
}

export default about;
