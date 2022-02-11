import React from 'react'
import logo from "../../img/logo-white.png";

import "./header.css"

function header() {
  return (
    <div>
         <header className="header">
        <div className="logo-box">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-main">Outdoors</span>
            <span className="heading-primary-sub">is where life happens</span>
          </h1>
          <a href="#home"className="btn btn-white btn-animated">
            Discover our tours
          </a>
        </div>
      </header>
    </div>
  )
}

export default header