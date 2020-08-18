import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./features/home/Home";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}
