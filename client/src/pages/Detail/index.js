import React, { useEffect, useState } from "react";
import "./style.css";
import { Link, useParams, useHistory } from "react-router-dom";
import 'react-confirm-alert/src/react-confirm-alert.css';
import Jumbotron from '../../components/Jumbotron';
import { Input, TextArea } from "../../components/Form";
import Button from "../../components/Button";

import API from "../../utils/API";

function Detail() {
  const [formObject, setFormObject] = useState({});
  const {id} = useParams()
  const history = useHistory();
 
 
  useEffect(() => {
    const loadFormInfo = () => {
      API.getDrink(id)
      .then(res => setFormObject(res.data))
      .catch(err => console.log(err));
    }
    loadFormInfo();
  }, [id]);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(event) {
    event.preventDefault()
      if (formObject.title && formObject.author) {
        API.updateDrink(id, {
          title: formObject.title,
          author: formObject.author,
          ingredients: formObject.ingredients
        })
        .then(history.push(`/`))
        .catch(err => console.log(err));
      };
  };

  function handleDelete(){
    API.deleteDrink(id)
    .then(history.push(`/`))
    .catch(err => console.log(err))
  }

  return (
      <div>
        <Jumbotron
          title="Drink Details"
        >
        </Jumbotron>
        <form className="col-12">
              <Input
                onChange={handleInputChange}
                name="title"
                value={formObject.title}
              />
              <Input
                onChange={handleInputChange}
                name="author"
                value={formObject.author}
              />
              <TextArea
                onChange={handleInputChange}
                name="ingredients"
                value={formObject.ingredients}
              />
              <Button
                disabled={!(formObject.author && formObject.title) && formObject.ingredients}
                onClick={handleFormSubmit}
                style={{width:"50%"}}
              >
              <i className="fas fa-edit"></i>
              </Button>
              <Button
                style={{width:"50%"}}
                type="button"
                onClick={handleDelete}
              >
              <i className="far fa-trash-alt"></i> 
              </Button>
              <Link to="/">
              <Button
                style={{width:"100%"}}
              >
                ← Back to Drink Station
              </Button>
              </Link>
          </form>
            
      </div>
    );
  }


export default Detail;