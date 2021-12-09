import React from "react";
import "./style.css";

export function List({ children }) {
    return (
      <div className="col-12">
        <ul>{children}</ul>
      </div>
    );
  }
  
  export function ListItem({ children }) {
    return <li>{children}</li>;
  }