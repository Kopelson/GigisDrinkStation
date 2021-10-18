   
import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import SearchBar from "../components/SearchBar";
import CreateBtn from "../components/CreateBtn";
function Drinks() {
  // Setting our component's initial state
  const [drinks, setDrinks] = useState([])
  const [search, setSearch] = useState({value: ""});
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

    //handles changes in the searchbar
    function handleChange(event) {
      setSearch({value: event.target.value});
      }
      //handles the submit button press of the searchbar
    function handleSubmit(event) {
      event.preventDefault();
      setSearch({value: ""});
    }

  //This sets filters the results array based checking first name, last name, email, location (city, state, country) and phone number
  let searchBarFilter = drinks.filter(drink => 
    drink.title.toLowerCase().indexOf(search.value.toLowerCase()) !== -1
    || 
    drink.author.toLowerCase().indexOf(search.value.toLowerCase()) !== -1
    ||
    drink.ingredients.toLowerCase().indexOf(search.value.toLowerCase()) !== -1)
  //Initialize tableResults variable    
  let tableResults;
  //Check if need to filter the results array or not
  if(search.value === ""){
    tableResults = drinks;
  } else {
    tableResults = searchBarFilter;
  }

    return (
      <Container fluid>
         <Link to={"/create"}>
              <CreateBtn />
        </Link>
        <Row>
          <Col size="sm-12">
            <SearchBar value={search.value} handleChange={handleChange} handleSubmit={handleSubmit}/>
            {tableResults.length ? (
              <List>
                {tableResults.map(drink => (
                  <ListItem key={drink._id}>
                    <Link to={"/drinks/" + drink._id}>
                      <h1>
                        {drink.title} 
                      </h1>
                    </Link>
                      <p>by {drink.author}</p>
                      <p>({drink.ingredients})</p>
                    
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