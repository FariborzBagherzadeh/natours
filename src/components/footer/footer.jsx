import React from "react";

import { Grid } from "@mui/material";
import logo from "../../img/logo-green-2x.png";

import "./footer.scss";

function footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img src={logo} alt="logo" className="footer__logo" />
      </div>
      <Grid
        container
        justifyContent={"center"}
       
        rowSpacing={6}
      >
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#home" className="footer__link">
                  Company
                </a>
              </li>
              <li className="footer__item">
                <a href="#home" className="footer__link">
                  Contact us
                </a>
              </li>
              <li className="footer__item">
                <a href="#home" className="footer__link">
                  Carrers
                </a>
              </li>
              <li className="footer__item">
                <a href="#home" className="footer__link">
                  Privacy Policy
                </a>
              </li>
              <li className="footer__item">
                <a href="#home" className="footer__link">
                  Terms
                </a>
              </li>
              <li className="footer__item">
                <a href="#home" className="footer__link">
                  Company
                </a>
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <p className="footer__copyright">
            Built My
            <a href="#home" className="footer__link">
              Fariborz Bagherzadeh
            </a>
            for his online course
            <a href="#home" className="footer__link">
              Advanced CSS SCSS
            </a>
            . Copyright &copy; by Fariborz Bagherzadeh Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Esse illo quis perspiciatis id
            harum repellat temporibus odit, atque, similique provident enim
            impedit
          </p>
        </Grid>
      </Grid>
    </footer>
  );
}

export default footer;
