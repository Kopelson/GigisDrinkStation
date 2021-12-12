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
  deleteDrink: function(id) {
    return axios.delete("/api/drinks/" + id);
  },
  // Saves a drink to the database
  saveDrink: function(drinkData) {
    return axios.post("/api/drinks", drinkData);
  },
  // Updates a drink by id
  updateDrink: function (id, drinkData) {
    return axios.put("/api/drinks/" + id, drinkData);
  },
  // Gets all inventory
  getInventory: function() {
    return axios.get("/api/inventory");
  },
  // Gets the drink with the given id
  getInventoryItem: function(id) {
    return axios.get("/api/inventory/" + id);
  },
  // Deletes the drink with the given id
  deleteInventory: function(id) {
    return axios.delete("/api/inventory/" + id);
  },
  // Saves a drink to the database
  saveInventory: function(drinkData) {
    return axios.post("/api/inventory", drinkData);
  },
  // Updates a drink by id
  updateInventory: function (id, drinkData) {
    return axios.put("/api/inventory/" + id, drinkData);
  },
};