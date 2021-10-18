import React from "react";
import "./style.css";
import logo from "../../images/logo.png";

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg d-flex justify-content-center">
        <a className="navbar-brand" href="/">
          <img src={logo}  alt="Gigi's Drink Station" />
        </a>
      </nav>
    </div>
    
  );
}

export default Nav;