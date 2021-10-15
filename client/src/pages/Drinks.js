   
import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Drinks() {
  // Setting our component's initial state
  const [drinks, setDrinks] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all drinks and store them with setDrink
  useEffect(() => {
    loadDrinks()
  }, [])

  // Loads all drinks and sets them to drinks
  function loadDrinks() {
    API.getDrinks()
      .then(res => 
        setDrinks(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a drink from the database with a given id, then reloads drinks from the db
  function deleteDrink(id) {
    API.deletedrink(id)
      .then(res => loadDrinks())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

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
        .then(res => loadDrinks())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Drink Should I Make?</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                onChange={handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                onChange={handleInputChange}
                name="Ingredients"
                placeholder="Ingredients (Optional)"
              />
              <FormBtn
                disabled={!(formObject.author && formObject.title)}
                onClick={handleFormSubmit}
              >
                Submit Drink
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Drinks On My List</h1>
            </Jumbotron>
            {drinks.length ? (
              <List>
                {drinks.map(drink => (
                  <ListItem key={drink._id}>
                    <Link to={"/drinks/" + drink._id}>
                      <strong>
                        {drink.title} by {drink.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteDrink(drink._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Drinks;