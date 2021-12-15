const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Drinks collection and inserts the drinks below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/drinkslist", 
  { useUnifiedTopology: true,
    useNewUrlParser: true }  
);

const recipeSeed = [
  {
    title: "Simple Syrup",
    author: "Gwendalyn",
    recipe:
      "Preparation: In a high-sided saucepan over medium-high heat, bring cold water and sugar to a boil. Turn the heat to low and stir constantly until the sugar dissolves completely and the mixture is clear, approximately 3 to 5 minutes. Remember – the longer you boil it, the thicker the syrup will be when cooled.",
    date: new Date(Date.now())
  },
  {
    title: "CHOCOLATE CHIP COOKIE",
    author: "Gwendalyn",
    recipe:
      `MAKE THE CHOCOLATE CHIP COOKIE DOUGH
      The first step in making these easy chocolate chip cookies to to combine the dry ingredients in a medium size bowl.
      
      When doing this, make sure to Measure the flour correctly. Be sure to use a measuring cup made for dry ingredients (NOT a pyrex liquid measuring cup). Then, measure flour by scooping it into a measuring cup and leveling it with a knife.
      
      two photos showing How to make chocolate chip cookies - mixing dry ingredients 
      
      Next, cream together butter and sugars, make sure to soften the butter early by taking it out of the fridge at least two hours before baking so it's ready to go when you need it. You can also warm it in the microwave for about 7 seconds, but be very careful not to melt it.
      
      Once butter/sugar mixture is beaten well, add the eggs & vanilla and beat to combine.
      
      two photos showing How to make chocolate chip cookies - combining butter and sugar, adding eggs & vanilla 
      
      
      Add dry ingredients and stir until just combined. Then add the chocolate chips and beat until they are evenly distributed throughout the dough.
      
      Use LOTS of chocolate chips. You want at least two gooey chocolate chips in every bite.
      
      two photos showing How to make chocolate chip cookies, adding dry ingredients and chocolate chips 
      
      
      The chocolate chip cookie dough should be easy to roll and not sticky. It should not be dry or crumbly. See photo below for the optimal texture.
      
      overhead photo of a bowl of chocolate chip cookie dough 
      
      
      PORTION & ROLL DOUGH
      Once the cookie dough is finished, it's time to portion and roll the dough. I know many people eyeball it when making cookies, however I highly recommend using a cookie scoop.
      
      Using a cooking scoop ensures that all the cookies are uniform in size so that they bake evenly. I love this stainless steel cookie scoop and use it every time I make cookies.
      
      
      
      
      At this point you can either bake your dough or freeze it.
      
      photo showing How to Make Chocolate Chip Cookies - portioning cookie dough with a cookie scoop 
      
      
      TO FREEZE COOKIE DOUGH:
      Since this chocolate chip cookie recipe makes so many cookies, I always make a full batch and freeze some. That way I have dough on hand for unexpected guests or whenever the cookie craving strikes.
      
      I prefer to flash-freeze the cookie dough before putting it in an airtight container. To do this, roll the cookie dough into balls and space them out on a parchment lined baking sheet. Then put the baking sheet in the freezer for about 30 minutes, or until the dough slightly freezes.
      
      Once the dough is slightly frozen, transfer the cookie dough balls to an airtight container or plastic bag and freeze for up to 2 months.
      
      HOW TO BAKE FROZEN DOUGH
      There are two ways to bake frozen dough:
      
      Thaw it first: I love having dough ready to go in the freezer for impromptu guests. When you want to bake them, remove the dough balls from the freezer, set them on a parchment-lined baking sheet and cover with a light cloth towel or napkin to let them thaw. Then, once they reach room temperature (after about 1-2 hours depending on the temperature of your kitchen) bake as directed in the recipe (at 375 degrees F). SO easy!
      Bake from frozen: Place the dough on a parchment lined baking sheet. Then, preheat the oven to 350 degrees Fahrenheit (ONLY if you are baking the frozen dough) and put the cookies in the oven in the beginning of the preheating time. (So put the cookies in the oven as you preheat it). Set the timer for 15 minutes and remove the cookies after 15 minutes. The top will look a little more brown than usual, but they will still taste amazing.
      
      
      two overhead photos showing How to Freeze Chocolate Chip Cookie Dough - left shows dough flash-frozen on a pan, right shows dough in a plastic bag 
      BAKE UNTIL THEY JUST BARELY LOOK DONE
      If you are baking the cookies immediately simply roll them into balls, place them evenly apart on a baking sheet (about 1.5 to 2 inches apart) and bake at 375 degrees for 8-10 minutes.
      
      
      
      The most important piece of advice I can give you is - DO NOT over-bake these chocolate chip cookies! They will not look done when you pull them out of the oven, and that is GOOD.
      
      At the end of the baking time, these chocolate chip cookies won't look done but they are. They will look a little doughy when you remove them from the oven, and thats good. They may be lightly browned in a few places, which is exactly how you want them.
      
      They will set up as they sit on the cookie sheet for a few minutes. I never bake them for more than 9 minutes
      
      two photos showing How to Make Chocolate Chip Cookies before and after baking on a baking sheet  
      
      
      COOL
      Cool the chocolate chip cookies on the baking sheet for 5 minutes before removing to a wire rack to cool completely (or just eat them warm while the chocolate chips are melty)!
      
      STORE
      Store these chocolate chip cookies in an airtight container at room temperature for up to 5 days, or in the freezer for up to 2 months.
      
      front view of chocolate chip cookies cooling on a copper wire cooling rack 
      
      FAQS ABOUT CHOCOLATE CHIP COOKIES
      How do you make gooey chocolate chip cookies? 
      The trick to making this best chocolate chip cookie recipe gooey is to not over-bake them.
      
      Why do cookies spread & flatten?
      There are a few main reasons for this that I have found in my experience:
      1) Expired leavening agents. If your baking soda or baking powder are past their prime, your chocolate chip cookies will likely flatten and spread. Even if the date on the container checks out, it still might not be good. That would be the first place I would start.
      How to test if your baking soda is active: Combine ½ cup of hot water, ¼ teaspoon vinegar and ¼ tsp of baking soda. When you add the baking soda a reaction should take place immediately. If not, then you need new baking soda.
      How to test if your baking powder is active: Add  ½ tsp of baking powder to ½ cup of hot water. It should bubble immediately. A reaction should take place immediately. If not, then you need new baking powder.
      2) Over-mixing. If you over-mix the ingredients in this best chocolate chip cookie recipe you may end up with flat cookies.
      3) Ingredients are too warm. Sometimes over-mixing can also lead to your ingredients becoming too warm. If you notice this happening, you can chill the dough before baking to return the batter to room temperature.
      4) Incorrect oven temperature. I recommend baking with an electric convection oven. If your cookies and other baked goods are not turning out properly, invest in a cheap oven thermometer to check the temperature. If your oven is baking too hot or too cold, then the cookies will not turn out well.
      
      Why didn't my cookies flatten? 
      If your cookies didn't flatten, here are a few things that could've been the problem. I have never had this happen to me in 10 years, so here are my educated guesses...
      1) The ingredients/cookie dough was too cold. Cold dough doesn't spread as well as room temperature dough.
      2) You accidentally used too much flour. Be sure to use a measuring cup made for dry ingredients (not a pyrex liquid measuring cup), and measure the flour correctly by scooping and leveling.
      3) The oven temperature is incorrect. I recommend using an oven thermometer to check the temperature of your oven (it's only $7), because it can often be different than the reading it gives on the display or what the dial is set at.
      4) The butter/sugar mixture wasn't fully creamed. Try creaming the butter and sugar together for longer.
      
      Can you bake chocolate chip cookie dough from frozen? 
      I have tested baking this recipe from frozen more times than I can even count. I have gotten the best results when I place the dough on a parchment lined baking sheet.
      Then, preheat the oven to 350 degrees Fahrenheit (ONLY if you are baking the frozen dough) and put the cookies in the oven in the beginning of the preheating time. Set the timer for 15 minutes and remove the cookies after 15 minutes. The top will look a little more brown than usual, but they will still taste amazing.`,
    date: new Date(Date.now())
  },
  {
    title: "Flavored Syrup",
    author: "Gwendalyn",
    recipe:
      `Basic Simple Syrup
      1 cup Sugar
      1 cup Water
      Blueberry Lemon
      1 cup fresh or frozen Blueberries
      Juice of 1 Lemon
      Raspberry Lime
      1 cup fresh or frozen Raspberries
      Juice of 1 Lime
      Ginger Beer
      1/4 cup sliced or grated fresh Ginger
      Juice of 2 - 3 Lemons (1/4 cup)
      Sprigs of fresh Mint, optional or to garnish
      Mint
      Handful of fresh Mint
      Vanilla
      1 Vanilla pod or 1 tsp. Vanilla extract or paste
      Lime
      Juice of 3 Limes`,
    date: new Date(Date.now())
  }
]

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

db.Recipe
.deleteMany({})
.then(()=> db.Recipe.collection.insertMany(recipeSeed))
.then(data => {
  console.log(data.result.n + " records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});

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