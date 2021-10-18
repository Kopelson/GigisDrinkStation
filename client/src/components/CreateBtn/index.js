import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function CreateBtn() {
  return (
    <span className="create-btn" role="button" tabIndex="0">
      Create New Drink
    </span>
  );
}

export default CreateBtn;