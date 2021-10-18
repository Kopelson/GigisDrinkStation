import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Drinks from "./pages/Drinks";
import Detail from "./pages/Detail";
import Create from "./pages/Create";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

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
      </div>
    </Router>
  );
}

export default App;