import axios from "axios";

export default {
  // Gets all drinks
  getDrinks: function() {
    return axios.get("/api/drinks");
  },
  // Gets the drink with the given id
  getDrink: function(id) {
    return axios.get("/api/drinks/" + id);
  },
  // Deletes the drink with the given id
  deletedrink: function(id) {
    return axios.delete("/api/drinks/" + id);
  },
  // Saves a drink to the database
  savedrink: function(drinkData) {
    return axios.post("/api/drinks", drinkData);
  }
};