   
import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import CreateBtn from "../components/CreateBtn";

function Drinks() {
  // Setting our component's initial state
  const [drinks, setDrinks] = useState([])

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

    return (
      <Container fluid>
        <Row>
          <Col size="sm-12">
            <Jumbotron>
              <h1>Drink List</h1>
              <Link to={"/create"}>
                <CreateBtn />
              </Link>
            </Jumbotron>
            {drinks.length ? (
              <List>
                {drinks.map(drink => (
                  <ListItem key={drink._id}>
                    <Link to={"/drinks/" + drink._id}>
                      <strong>
                        {drink.title}
                      </strong>
                    </Link>
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