import React from "react";
import "./style.css";

function Jumbotron(props) {
  return (
    <div className="jumbotron-outer col-12">
      <div className="jumbotron-inner col-12">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
}

export default Jumbotron;