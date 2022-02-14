import React from "react";
import { Grid } from "@mui/material";

import "./booking.scss";

function booking() {
  return (
    <section className="section-book">
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        className="section-book__container"
      >
        <Grid
          item
          xs={12}
          sm={12}
          lg={12}
          md={12}
          xl={12}
          className="section-book__container-items"
        >
          <div className="book">
            <div className="book__form">
              <form action="#" className="form">
                <div className="u-center-text u-margin-bottom-small">
                  <h2 className="heading-secondary-form">Start Booking Now</h2>
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    className="form__input"
                    id="name"
                  />
                  <label htmlFor="name" className="form__label">
                    Full Name
                  </label>
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    className="form__input"
                    id="email"
                  />
                  <label htmlFor="email" className="form__label">
                    Email Address
                  </label>
                </div>
                <div className="form__group">
                  <div className="form__radio-group">
                    <input
                      type="radio"
                      className="form__radio-input"
                      name="size"
                      id="small"
                    />
                    <label htmlFor="small" className="form__radio-label">
                      <span className="form__radio-label_button"></span>
                      Small tour group
                    </label>
                  </div>
                  <div className="form__radio-group">
                    <input
                      type="radio"
                      className="form__radio-input"
                      name="size"
                      id="large"
                    />
                    <label htmlFor="large" className="form__radio-label">
                      <span className="form__radio-label_button"></span>
                      Large tour group
                    </label>
                  </div>
                </div>
                <div className="form__group">
                    <button className="btn btn--white"> Next Step &rarr;</button>
                </div>
              </form>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}

export default booking;
