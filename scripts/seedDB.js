const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Drinks collection and inserts the drinks below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/drinkslist"
);

const drinkSeed = [
  {
    title: "Montana Mama",
    author: "Gwendalyn Selfridge",
    ingredients:
      "raspberry soda, orange juice, coconut",
    date: new Date(Date.now())
  },
  {
    title: "The 406",
    author: "Gwendalyn Selfridge",
    ingredients:
      "Dr Pepper, huckleberry, coconut",
    date: new Date(Date.now())
  },
  {
    title: "Butter Beer Supreme",
    author: "Gwendalyn Selfridge",
    ingredients:
      "cream soda, butter rum, butterscotch, cream",
    date: new Date(Date.now())
  }
];

db.Drink
  .remove({})
  .then(() => db.Drink.collection.insertMany(drinkSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });