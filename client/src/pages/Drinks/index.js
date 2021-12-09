   
import React, {useState, useEffect} from 'react';
import './style.css';
import Jumbotron from '../../components/Jumbotron';
import SearchBar from '../../components/SearchBar';
import { List, ListItem } from '../../components/List';
import API from "../../utils/API";
import { Link } from "react-router-dom";

function Drinks() {
  const [drinks, setDrinks] = useState([])
  const [search, setSearch] = useState({value: ""});

  useEffect(() => {
    loadDrinks()
  }, [drinks]);

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

  //This sets filters the results array
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
    <div>
      <Jumbotron
        title="Drinks"
      >
      </Jumbotron>
      
      <SearchBar
        value={search.value}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      ></SearchBar>
      {tableResults.length ? (
              <List>
                {tableResults.map(drink => (
                  <ListItem key={drink._id}>
                    <Link to={"/drinks/" + drink._id}>
                      <h1>
                        {drink.title} 
                      </h1>
                      <p>by {drink.author}</p>
                      <p className="ingredients">({drink.ingredients})</p>
                      </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
              <Jumbotron
                title="Nothing to Display"
              >
              </Jumbotron>
            )}
    </div>
  );
}


export default Drinks;