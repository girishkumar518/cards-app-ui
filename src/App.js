import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddCard from "./components/AddCard";
import Card from "./components/CardComponent";
import CardsList from "./components/CardsList";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/cards" className="navbar-brand">
            Girish
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/cards"} className="nav-link">
                Cards
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/cards"]} component={CardsList} />
            <Route exact path="/add" component={AddCard} />
            <Route path="/cards/:id" component={Card} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;