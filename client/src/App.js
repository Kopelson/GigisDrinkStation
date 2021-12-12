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
          <Route exact path="/addItems">
            <AddItem />
          </Route>
          <Route exact path="/inventory/:id">
            <ItemDetail />
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