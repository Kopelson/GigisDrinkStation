import React from "react";
import "./style.css";

//This is a search input form that will filter the random user list
function SearchBar(props) {
    return (
      <div className="search-bar">
          <form className="form-inline">
          <input
            className="form-control form-control-md col-8"
            type="search"
            placeholder="Find a drink!"
            aria-label="Search"
            value={props.value}
            name="search"
            onChange={props.handleChange}
          />
          <button 
          className="btn col-4" 
          type="submit"
          onClick={props.handleSubmit}>
            Search
          </button>
        </form>
      </div>
    );
}

export default SearchBar;