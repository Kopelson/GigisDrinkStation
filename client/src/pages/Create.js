import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

import { Col, Row, Container } from "../components/Grid";

import { Input, TextArea, FormBtn } from "../components/Form";




function Create() {
  // Setting our component's initial state
  const [formObject, setFormObject] = useState({})

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  let history = useHistory();
  // When the form is submitted, use the API.saveDrink method to save the drink data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.savedrink({
        title: formObject.title,
        author: formObject.author,
        ingredients: formObject.ingredients
      })
        .then(history.push(`/`))
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="sm-12">
            <Jumbotron>
              <h1>New Drink Form</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Title"
              />
              <Input
                onChange={handleInputChange}
                name="author"
                placeholder="Creator"
              />
              <TextArea
                onChange={handleInputChange}
                name="ingredients"
                placeholder="Ingredients"
              />
              <FormBtn
                disabled={!(formObject.author && formObject.title) && formObject.ingredients}
                onClick={handleFormSubmit}
              >
                Submit Drink
              </FormBtn>
            </form>
          </Col>
          </Row>
          <Link to="/">← Back to Drink Station</Link>
      </Container>
    );
  }

export default Create;