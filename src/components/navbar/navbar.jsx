import React from "react";
import "./navbar.scss";

function navbar() {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#home" className="navigation__link">
              <span>01</span>
              About Natous
            </a>
            <a href="#home" className="navigation__link">
              <span>02</span>
              Your Benfits
            </a>
            <a href="#home" className="navigation__link">
              <span>03</span>
              Popular tours
            </a>
            <a href="#home" className="navigation__link">
              <span>04</span>
              Stories
            </a>
            <a href="#home" className="navigation__link">
              <span>05</span>
              Book now
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default navbar;
