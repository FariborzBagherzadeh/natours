import React from "react";
import { Grid } from "@mui/material";
import "./about.scss";

function about() {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Exciting tour for adveturous people
        </h2>
      </div>
      <Grid
      
        className="section-about-grid"
        container
        columnSpacing={12}
        rowSpacing={12}
      >
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <h3 className="heading-tertiary u-margin-bottom-small">
            You're going to fall in love with nature
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
            sequi tempore quis deserunt sed ratione distinctio maiores possimus
            dolorum, earum voluptatibus? Quas, optio labore. Adipisci vitae
            autem qui maxime consequatur?
          </p>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Live adventures like you never have before
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
            sequi tempore quis deserunt sed ratione distinctio.
          </p>
          <a href="#home" className="btn-text">
            Learn More &rarr;
          </a>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          Text1
        </Grid>
      </Grid>
    </section>
  );
}

export default about;
