import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./features/home/Home";
import Medicine from "./features/medicine/medicine";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/medicine" exact component={Medicine} />
      </Switch>
    </Router>
  );
}
