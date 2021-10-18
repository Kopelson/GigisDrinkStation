import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function CreateBtn() {
  return (
    <div className="create-btn" role="button" tabIndex="0" >
      <strong>Add New Drink</strong>
    </div>
  );
}

export default CreateBtn;