import React from "react";
import logo from "../../images/logo.jpg";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand mx-auto" href="/">
      <img src={logo}  alt="Gigi's Drink Station" />
      </a>
    </nav>
  );
}

export default Nav;