import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Drinks from "./pages/Drinks";
import Detail from "./pages/Detail";
import Create from "./pages/Create";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

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