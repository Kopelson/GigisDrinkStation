const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Drinks collection and inserts the drinks below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/drinkslist", 
  { useUnifiedTopology: true,
    useNewUrlParser: true }  
);

const inventorySeed = [
  {
    name: "coke",
    quantity: 24
  },
  {
    name: "diet coke",
    quantity: 12
  },
  {
    name: "mountain dew",
    quantity: 0
  },
  {
    name: "raspberry soda",
    quantity: 32
  },
  {
    name: "cream soda",
    quantity: 14
  },
  {
    name: "huckleberry",
    quantity: 3
  },
  {
    name: "root beer",
    quantity: 6
  },
  {
    name: "peach",
    quantity: 2
  },
  {
    name: "butterscotch",
    quantity: 1
  }
]

const drinkSeed = [
  {
    title: "Montana Mama",
    author: "Gwendalyn",
    ingredients:
      "raspberry soda, orange juice, coconut",
    date: new Date(Date.now())
  },
  {
    title: "The 406",
    author: "Gwendalyn",
    ingredients:
      "Dr Pepper, huckleberry, coconut",
    date: new Date(Date.now())
  },
  {
    title: "Butter Beer Supreme",
    author: "Gwendalyn",
    ingredients:
      "cream soda, butter rum, butterscotch, cream",
    date: new Date(Date.now())
  },
  {
    title: "Gigi’s Delight",
    author: "Gwendalyn",
    ingredients:
      "Dr. Pepper, Raspberry, Peach, Coconut",
    date: new Date(Date.now())
  },
  {
    title: "Lifeline",
    author: "Gwendalyn",
    ingredients:
      "Dr. Pepper, Blood Orange, Coconut",
    date: new Date(Date.now())
  },
  {
    title: "Mama Mia",
    author: "Gwendalyn",
    ingredients:
      "Dr. Pepper, Blood Orange, Coconut, Pomegranate, fresh lime",
    date: new Date(Date.now())
  },
  {
    title: "Llama Drama",
    author: "Gwendalyn",
    ingredients:
      "Dr. Pepper, Blood Orange, Coconut, Peach",
    date: new Date(Date.now())
  },
  {
    title: "Breather",
    author: "Gwendalyn",
    ingredients:
      "Dr. Pepper, Huckleberry, Coconut, Vanillat",
    date: new Date(Date.now())
  },
  {
    title: "Weekender",
    author: "Gwendalyn",
    ingredients:
      "Dr. Pepper, Blood Orange, Coconut, Vanilla",
    date: new Date(Date.now())
  },
  {
    title: "Backyard",
    author: "Gwendalyn",
    ingredients:
      "Dr. Pepper, Blood Orange, Raspberry",
    date: new Date(Date.now())
  },
  {
    title: "Mood Shifter",
    author: "Gwendalyn",
    ingredients:
      "Dr. Pepper, Caramel, Coconut, Cream",
    date: new Date(Date.now())
  },
  {
    title: "Vacation",
    author: "Gwendalyn",
    ingredients:
      "Coke, Raspberry, Coconut, Fresh Lime",
    date: new Date(Date.now())
  },
  {
    title: "Blood Coke",
    author: "Gwendalyn",
    ingredients:
      "Coke, Blood Orange, Vanilla, Cream",
    date: new Date(Date.now())
  },
  {
    title: "Coke Wish",
    author: "Gwendalyn",
    ingredients:
      "Coke, Raspberry, Vanilla, Coconut",
    date: new Date(Date.now())
  },
  {
    title: "Huck Coke",
    author: "Gwendalyn",
    ingredients:
      "Coke, Huckleberry, Vanilla, Cream",
    date: new Date(Date.now())
  },
  {
    title: "Frutas del Bosque",
    author: "Gwendalyn",
    ingredients:
      "Coke, Raspberry, Huckleberry, Blackberry, Cream",
    date: new Date(Date.now())
  },
  {
    title: "Lemon Pie",
    author: "Gwendalyn",
    ingredients:
      "Coke, Lemon, Cream",
    date: new Date(Date.now())
  },
  {
    title: "Peach Cobbler",
    author: "Gwendalyn",
    ingredients:
      "Coke, Peach, Brown Sugar Cinnamon, Cream",
    date: new Date(Date.now())
  },
  {
    title: "Chocolate Raspberry Cake",
    author: "Gwendalyn",
    ingredients:
      "Coke, Chocolate, Raspberry",
    date: new Date(Date.now())
  },
  {
    title: "Why Is It Gone",
    author: "Gwendalyn",
    ingredients:
      "Coke, Butter Rum, Vanilla, Cream",
    date: new Date(Date.now())
  },
  {
    title: "Buttered Scot",
    author: "Gwendalyn",
    ingredients:
      "Coke, Butterscotch, Butter Rum, Cream",
    date: new Date(Date.now())
  },
  {
    title: "The Duke",
    author: "Gwendalyn",
    ingredients:
      "Coke, Coconut, Coconut Cream, fresh Lime",
    date: new Date(Date.now())
  },
  {
    title: "The Doc Holliday",
    author: "Gwendalyn",
    ingredients:
      "Coke, Huckleberry, Vanilla, Cream",
    date: new Date(Date.now())
  },
  {
    title: "Afterglow",
    author: "Gwendalyn",
    ingredients:
      "Coke, Pineapple juice, Orange juice, Grenadine",
    date: new Date(Date.now())
  },
  {
    title: "In the Stack",
    author: "Gwendalyn",
    ingredients:
      "Coke, Apricot Nectar, Orange juice, Lemon, Cream",
    date: new Date(Date.now())
  },
  {
    title: "Vaquera",
    author: "Gwendalyn",
    ingredients:
      "Coke, Cranberry juice, Raspberry, Peach",
    date: new Date(Date.now())
  },
  {
    title: "Irish Dream",
    author: "Gwendalyn",
    ingredients:
      "Coke, Irish Cream, Sweet Italian Cream",
    date: new Date(Date.now())
  },
  {
    title: "Homebound Cruise",
    author: "Gwendalyn",
    ingredients:
      "Coke, Pineapple juice, Coconut, Lime, Cream",
    date: new Date(Date.now())
  },
  {
    title: "Flathead Cherry",
    author: "Soda Station",
    ingredients:
      "Coke, Cherry, Vanilla",
    date: new Date(Date.now())
  },
  {
    title: "Rimrocker",
    author: "Soda Station",
    ingredients:
      "Diet Coke, Coconut, Fresh Lime",
    date: new Date(Date.now())
  },
  {
    title: "Audrey Hepburn",
    author: "Soda vine",
    ingredients:
      "Coke, Vanilla, Cream",
    date: new Date(Date.now())
  },
  {
    title: "The Big Sky",
    author: "Soda Station",
    ingredients:
      "Coke, Pineapple, Coconut, Cream",
    date: new Date(Date.now())
  },
  {
    title: "I Love Lucy",
    author: "Soda vine",
    ingredients:
      "Coke, Cherry, Coconut",
    date: new Date(Date.now())
  },
  {
    title: "Lula Bell",
    author: "Soda vine",
    ingredients:
      "Pepsi, Strawberry, Vanilla",
    date: new Date(Date.now())
  },
  {
    title: "Locomotion",
    author: "Soda vine",
    ingredients:
      "Pepsi, Salted Caramel, Vanilla",
    date: new Date(Date.now())
  },
  {
    title: "Southern Gentleman",
    author: "Soda vine",
    ingredients:
      "Dr. Pepper, Peach, Vanilla, Cream",
    date: new Date(Date.now())
  },
  {
    title: "Nailed It",
    author: "Soda vine",
    ingredients:
      "Dr. Pepper, Raspberry, Coconut, Mango",
    date: new Date(Date.now())
  },
  {
    title: "Runaround Sue",
    author: "Soda vine",
    ingredients:
      "Dr. Pepper, Strawberry, Lemon",
    date: new Date(Date.now())
  },
  {
    title: "Freight Train",
    author: "Soda vine",
    ingredients:
      "Dr. Pepper, Pineapple, Coconut, Cream",
    date: new Date(Date.now())
  },
  {
    title: "Oh What A Night",
    author: "Soda vine",
    ingredients:
      "Dr. Pepper, Blackberry, Coconut",
    date: new Date(Date.now())
  },
  {
    title: "Smooth Presley",
    author: "Soda vine",
    ingredients:
      "Dr. Pepper, Coconut, Vanilla, Cream",
    date: new Date(Date.now())
  },
  {
    title: "Uptown Girl",
    author: "Soda vine",
    ingredients:
      "Dr. Pepper, Red Raspberry, Coconut, Cream",
    date: new Date(Date.now())
  },
  {
    title: "Hunting Season",
    author: "Soda station",
    ingredients:
      "Dr. Pepper, Coconut, Cream",
    date: new Date(Date.now())
  },
  {
    title: "B-Town",
    author: "Soda station",
    ingredients:
      "Dr. Pepper, Raspberry, Coconut, Cream",
    date: new Date(Date.now())
  },
  {
    title: "Outlaw",
    author: "Soda station",
    ingredients:
      "Dr. Pepper, Coconut, Vanilla, Coconut Cream",
    date: new Date(Date.now())
  },
  {
    title: "Burn the Breeze",
    author: "Soda station",
    ingredients:
      "Dr. Pepper, Coconut, Peach",
    date: new Date(Date.now())
  },
  {
    title: "My Maria",
    author: "Gwendalyn",
    ingredients:
      "Mt. Dew, Watermelon, Vanilla",
    date: new Date(Date.now())
  },
  {
    title: "Dozer Punch",
    author: "Gwendalyn",
    ingredients:
      "Squirt, Pineapple juice, Coconut Cream, Strawberry",
    date: new Date(Date.now())
  },
  {
    title: "Rainy Day",
    author: "Gwendalyn",
    ingredients:
      "Squirt, Lemon, Pomegranate, Vanilla",
    date: new Date(Date.now())
  },
  {
    title: "Anything Goes",
    author: "Gwendalyn",
    ingredients:
      "Squirt, Coconut, Butter Rum, Pineapple juice",
    date: new Date(Date.now())
  },
  {
    title: "The Squeeze",
    author: "Gwendalyn",
    ingredients:
      "Squirt, Blood Orange, Pomegranate, Lime, Vanilla",
    date: new Date(Date.now())
  },
  {
    title: "Fruity Pebbles",
    author: "Gwendalyn",
    ingredients:
      "Squirt, Raspberry, Strawberry, Lime, Cream",
    date: new Date(Date.now())
  },
  {
    title: "Louie Louie",
    author: "Soda Vine",
    ingredients:
      "Mt. Dew, Strawberry, Mango, Coconut, Cream",
    date: new Date(Date.now())
  },
  {
    title: "Last Kiss",
    author: "Soda Vine",
    ingredients:
      "Mt. Dew, Red Raspberry, Vanilla",
    date: new Date(Date.now())
  },
  {
    title: "Rock Me Baby",
    author: "Soda Vine",
    ingredients:
      "Mt. Dew, Peach, Pomegranate, Pineapple",
    date: new Date(Date.now())
  },
  {
    title: "Fever",
    author: "Soda Vine",
    ingredients:
      "Mt. Dew, Blood Orange, Mango",
    date: new Date(Date.now())
  },
  {
    title: "Chantilly Lace",
    author: "Soda Vine",
    ingredients:
      "Mt. Dew, Strawberry, Pineapple, Coconut",
    date: new Date(Date.now())
  },

  {
    title: "Sh-Boom",
    author: "Soda Vine",
    ingredients:
      "Mt. Dew, Green Apple, Strawberry, Red Raspberry",
    date: new Date(Date.now())
  },
  {
    title: "Pina Colada Pete",
    author: "Soda Vine",
    ingredients:
      "Mt. Dew, Red Raspberry, Pina Colada",
    date: new Date(Date.now())
  },

  {
    title: "Wild Wild West",
    author: "Soda Station",
    ingredients:
      "Mt. Dew, Mango Puree, Strawberry Puree",
    date: new Date(Date.now())
  },

  {
    title: "Double Barrel",
    author: "Soda Station",
    ingredients:
      "Mt. Dew, Peach, Cream",
    date: new Date(Date.now())
  },
  {
    title: "Barn Sour",
    author: "Soda Station",
    ingredients:
      "Mt. Dew, Pomegranate, Grapefruit",
    date: new Date(Date.now())
  },
  {
    title: "Crazy Mountain Madness",
    author: "Soda Station",
    ingredients:
      "Mt. Dew, Guava, Strawberry, Coconut Cream",
    date: new Date(Date.now())
  },
  {
    title: "Howdy",
    author: "Soda Station",
    ingredients:
      "Mt. Dew, Blue Raspberry, Pineapple, Coconut Cream",
    date: new Date(Date.now())
  },
  {
    title: "Gotta Have Grit",
    author: "Soda Station",
    ingredients:
      "Mt. Dew, Raspberry, Coconut, Huckleberry, Cream",
    date: new Date(Date.now())
  }
];

db.Inventory
  .deleteMany({})
  .then(() => db.Inventory.collection.insertMany(inventorySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Drink
  .deleteMany({})
  .then(() => db.Drink.collection.insertMany(drinkSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });