import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Jumbotron(props) {
  return (
    <div className="jumbotron-outer col-12">
      <div className="jumbotron-inner col-12">
        <h1>{props.title}</h1>
        <Link to={"/addItems"}>
        <h1><i className={props.iconClass}></i></h1>
      </Link>
      </div>
    </div>
  );
}

export default Jumbotron;