import React, { useState } from 'react';
import Jumbotron from '../../components/Jumbotron';
import { Link,  useHistory } from "react-router-dom";
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Input, TextArea } from "../../components/Form";
import Button from "../../components/Button";

import API from "../../utils/API";

function Create() {
  const [formObject, setFormObject] = useState({});
  const history = useHistory();

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(event) {
    event.preventDefault()
      if (formObject.title && formObject.author) {
        API.saveDrink({
          title: formObject.title,
          author: formObject.author,
          ingredients: formObject.ingredients
        })
        .then(history.push(`/`))
        .catch(err => console.log(err));
      };
  };

    return (
     <div>
       <Jumbotron
          title="Create"
        >
        </Jumbotron>
        <form className="col-12">
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Title of Drink"
               
              />
              <Input
                onChange={handleInputChange}
                name="author"
                placeholder="Name of Author"
              value={formObject.author}
              />
              <TextArea
                onChange={handleInputChange}
                name="ingredients"
                placeholder="Ingredients"
                
              />
              <Button
                disabled={!(formObject.author && formObject.title) && formObject.ingredients}
                onClick={handleFormSubmit}
                style={{width:"100%", fontSize:"24px"}}
              >
              <i className="far fa-save"></i>
              </Button>
              
              <Link to="/">
              <Button
                style={{width:"100%",fontSize:"24px"}}
              >
                ← Back to Drink Station
              </Button>
              </Link>
          </form>
     </div>
    );
  }

export default Create;