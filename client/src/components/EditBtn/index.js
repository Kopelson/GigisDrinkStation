import React from "react";
import "./style.css";

function EditBtn() {
  return (
    <span className="edit-btn" role="button" tabIndex="0" onClick={() => console.log("edit button was click")}>
        Edit
    </span>
  );
}

export default EditBtn;