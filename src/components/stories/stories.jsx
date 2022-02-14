import React from "react";
import "./stories.scss";

import person1 from "../../img/nat-8.jpg";
import person2 from "../../img/nat-9.jpg";
import video1 from "../../img/video.mp4";
import video2 from "../../img/video.webm";

import { Grid } from "@mui/material";

function stories() {
  return (
    <section className="section-stories">
        <div className="bg-video">
            <video className="bg-content" autoPlay muted loop >
                <source src={video1} type="video/mp4" />
                <source src={video2} type="video/webm" />
                your browser is not supported
            </video>
        </div>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">we make people genuinely happy</h2>
      </div>
      <Grid
        container
        className="section-stories__container"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid
          item
          sm={12}
          xs={12}
          md={12}
          lg={12}
          xl={12}
          className="section-stories__container-item"
        >
          <div className="story">
            <figure className="story__shape">
              <img src={person1} alt="person" />
              <figcaption> Mary Smith</figcaption>
            </figure>
            <div className="story__text">
              <h3 className="heading-tertiary u-margin-bottom-small">
                I had the best week ever with my family
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                corporis amet blanditiis aperiam, sed suscipit qui accusantium
                odit impedit nulla ipsum rerum sequi, consequatur alias officia
                sint, accusamus quas magni.
              </p>
            </div>
          </div>
        </Grid>
        <Grid
          item
          sm={12}
          xs={12}
          md={12}
          lg={12}
          xl={12}
          className="section-stories__container-item"
        >
          <div className="story">
            <figure className="story__shape">
              <img src={person2} alt="person" />
              <figcaption>Jack Wilson</figcaption>
            </figure>
            <div className="story__text">
              <h3 className="heading-tertiary u-margin-bottom-small">
                WOW! my life is completely different now
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                corporis amet blanditiis aperiam, sed suscipit qui accusantium
                odit impedit nulla ipsum rerum sequi, consequatur alias officia
                sint, accusamus quas magni.
              </p>
            </div>
          </div>
        </Grid>
        <Grid
          item
          sm={12}
          xs={12}
          md={12}
          lg={12}
          xl={12}
          className="section-stories__container-item"
        >
          <div className="u-center-text u-margin-top-huge">
            <a href="#home" className="btn-text">
              Read all stories &rarr;
            </a>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}

export default stories;
