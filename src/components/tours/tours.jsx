import React from "react";
import { Grid } from "@mui/material";

import "./tours.scss";

function tours() {
  return (
    <section className="section-tours">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Most popular tours</h2>
      </div>
      <Grid container className="section-tours__grid"  >
        <Grid
          className="section-tours__grid-container"
          item
          xs={12}
          sm={12}
          md={6}
          lg={4}
          xl={4}
        >
          <div className="section-tours__grid-card card-hover-1">
            <div className="section-tours__grid-card__side section-tours__grid-card__side--front">
              <div className="card__picture card__picture--1">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">
                  The Sea Explorer
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>3 day tour</li>
                  <li>Up to 30 people</li>
                  <li>2 tour guides</li>
                  <li>sleeping cozy hotels</li>
                  <li>Difficulty: easy</li>
                </ul>
              </div>
            </div>
            <div className="section-tours__grid-card__side section-tours__grid-card__side--back">
              <div className="card__cta">
                <div className="card__price">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">$297</p>
                  <a href="#home" className="btn btn--white">Book Now</a>
                </div>
              </div>
            </div>
          </div>
          
        </Grid>
        <Grid
          className="section-tours__grid-container"
          item
          xs={12}
          sm={12}
          md={6}
          lg={4}
          xl={4}
        >
                <div className="section-tours__grid-card card-hover-2" >
            <div className="section-tours__grid-card__side section-tours__grid-card__side--front">
              <div className="card__picture card__picture--2">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--2">
                the forest hiker
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>7 day tour</li>
                  <li>Up to 40 people</li>
                  <li>6 tour guides</li>
                  <li>sleep in provided tents</li>
                  <li>Difficulty: medium</li>
                </ul>
              </div>
            </div>
            <div className="section-tours__grid-card__side section-tours__grid-card__side--back">
              <div className="card__cta">
                <div className="card__price">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">$498</p>
                  <a href="#home" className="btn btn--white">Book Now</a>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid
          className="section-tours__grid-container"
          item
          xs={12}
          sm={12}
          md={6}
          lg={4}
          xl={4}
        >
                <div className="section-tours__grid-card card-hover-3" >
            <div className="section-tours__grid-card__side section-tours__grid-card__side--front">
              <div className="card__picture card__picture--3">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--3">
               the snow adventurer
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>5 day tour</li>
                  <li>Up to 15 people</li>
                  <li>3 tour guides</li>
                  <li>sleep in provided tour</li>
                  <li>Difficulty: hard</li>
                </ul>
              </div>
            </div>
            <div className="section-tours__grid-card__side section-tours__grid-card__side--back">
              <div className="card__cta">
                <div className="card__price">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">$623</p>
                  <a href="#home" className="btn btn--white">Book Now</a>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}  >
        <div className="u-center-text u-margin-top-huge" style={{marginTop:'15rem'}}>
            <a href="#home" className="btn-text">
              Discover all Toures
            </a>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}

export default tours;
