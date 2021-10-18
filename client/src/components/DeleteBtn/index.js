import React from "react";
import "./style.css";
import { confirmAlert } from 'react-confirm-alert';
import { useHistory } from "react-router-dom";
import API from "../../utils/API";

function DeleteBtn(props) {
  let history = useHistory();
 // Deletes a drink from the database with a given id, then reloads drinks from the db
 function deleteDrink(id) {
  console.log("You clicked the delete button");
  confirmAlert({
     title: 'Confirm to submit',
     message: 'Are you sure to do this.',
     buttons: [
       {
         label: 'Yes',
         onClick: () => {
           API.deletedrink(id)
           .then(history.push(`/`))
           .catch(err => console.log(err))
         }
       },
       {
         label: 'No',
         onClick: () => {return}
       }
     ]
   })
}

  return (
    <span className="delete-btn" role="button" tabIndex="0" onClick={() => deleteDrink(props.id)}>
    Delete
  </span>
  );
}

export default DeleteBtn;