import React from "react";
import { Grid } from "@mui/material";

import "./features.scss";

function features() {
  return (
    <section className="section-features">
      <Grid container className="section-features-grid">
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={4}
          xl={3}
          className="features-box"
        >
          <i className="features-box__icon icon-basic-world"></i>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Explore the world
          </h3>
          <p className="features-box__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex alias,
            aliquid id  Lorem, consectetur adipisicing elit
          </p>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={4}
          xl={3}
          className="features-box"
        >
          <i className="features-box__icon icon-basic-compass"></i>
          <h3 className="heading-tertiary">Explore the world</h3>
          <p className="features-box__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex alias,
            aliquid id consectetur adipisicing elit
          </p>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={4}
          xl={3}
          className="features-box"
        >
          <i className="features-box__icon icon-basic-map"></i>
          <h3 className="heading-tertiary">Explore the world</h3>
          <p className="features-box__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex alias,
            aliquid id consectetur adipisicing elit
          </p>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={4}
          xl={3}
          className="features-box"
        >
          <i className="features-box__icon icon-basic-heart"></i>
          <h3 className="heading-tertiary">Explore the world</h3>
          <p className="features-box__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex alias,
            aliquid id consectetur adipisicing elit
          </p>
        </Grid>
      </Grid>
    </section>
  );
}

export default features;
