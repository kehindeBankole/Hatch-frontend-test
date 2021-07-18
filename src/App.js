import React from "react";
import SuperHeroState from "../src/context/state";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <SuperHeroState>
      <Router>
       <Switch>
       <Route path="/" component={Home} exact/>
       </Switch>
      </Router>
    </SuperHeroState>
  );
}

export default App;
