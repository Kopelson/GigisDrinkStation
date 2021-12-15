import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Drinks from "./pages/Drinks/index";
import Detail from "./pages/Detail/index";
import Create from "./pages/Create/index";
import NoMatch from "./pages/NoMatch/index";
import Nav from "./components/Header";
import Footer from "./components/Footer";
import Inventory from "./pages/Inventory";
import AddItem from "./pages/AddItems";
import ItemDetail from "./pages/ItemDetail";
import Recipes from "./pages/Recipes";
import AddRecipe from "./pages/AddRecipes";
import RecipeDetail from "./pages/RecipeDetail";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/drinks"]}>
            <Drinks />
          </Route>
          <Route exact path="/drinks/:id">
            <Detail />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route exact path="/inventory">
            <Inventory />
          </Route>
          <Route exact path="/addItem">
            <AddItem />
          </Route>
          <Route exact path="/inventory/:id">
            <ItemDetail />
          </Route>
          <Route exact path="/recipes">
            <Recipes />
          </Route>
          <Route exact path="/addRecipes">
            <AddRecipe />
          </Route>
          <Route exact path="/recipes/:id">
            <RecipeDetail />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;