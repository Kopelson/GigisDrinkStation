   
import React, {useState, useEffect} from 'react';
import './style.css';
import Jumbotron from '../../components/Jumbotron';
import SearchBar from '../../components/SearchBar';
import Button from "../../components/Button";
import { List, ListItem } from '../../components/List';
import API from "../../utils/API";
import { Link } from "react-router-dom";

function Drinks() {
  const [drinks, setDrinks] = useState([])
  const [search, setSearch] = useState({value: ""});

  useEffect(() => {
    let componentMounted = true;
      const fetchData = async () => {
      //you async action is here
      API.getDrinks().then((response) => {
        if(componentMounted) {
          setDrinks(response?.data);
        }
      })
      };
      fetchData();
      return () => {
       componentMounted = false;
      }
    }, []);

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
    <div id="top">
      <Jumbotron
        title="Drinks: "
        iconClass='col-12 fas fa-plus-square'
        icon='⬅ Create a new Drink Here!'
        link= "/create"
      >
      </Jumbotron>

      <div className='col-12' >
        <Link to="/inventory">
          <Button
            style={{width:"100%"}}
          >
            ← to Inventory
          </Button>
        </Link>
      </div>
      
      <SearchBar
        value={search.value}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        placeholder="Find a Drink!"
      ></SearchBar>
      {tableResults.length ? (
              <List>
                {tableResults.map(drink => (
                  <ListItem key={drink._id}>
                    <Link to={"/drinks/" + drink._id}
                      title={drink.title}
                      author={drink.author}
                      ingredients={drink.ingredients}
                    >
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
            <div className='col-12' style={{marginBottom: "50px"}}>
              <a href="#top">
                <Button
                  style={{width:"100%"}}
                >
                  ↑ Back to top ↑
                </Button>
              </a>
            </div>
    </div>
  );
}


export default Drinks;