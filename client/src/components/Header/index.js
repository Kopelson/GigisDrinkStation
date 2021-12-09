import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header col-12">
      <nav>
        <a href="/">
          <img src="./images/logo.png"  alt="Gigi's Drink Station" />
        </a>
      </nav>
      <Link 
      style={{color: "#544d71", fontSize: "2em", position:"absolute", top:"5px", right:"25px"}}
       to={"/create"}>
          <i className="far fa-plus-square"></i>
      </Link>
    </div>
    
  );
}

export default Header;