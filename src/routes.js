import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import ClassList from "./components/ClassList/ClassList"
import Student from "./components/Student/Student"

export default (
  <Switch>
    <Route component={Home} path="/" exact={true} />
    <Route component={About} path="/about" />
    <Route component={ClassList} path="/classlist/:class" />
    <Route component={Student} path="/student/:id" />
    {/* <Route render={() => <h1>Home</h1>} path="/" />
    <Route render={() => <h1>404 Route not found</h1>} /> */}
  </Switch>
);
