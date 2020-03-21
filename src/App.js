import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";

import logo from "./logo.png";
class App extends Component {
  render() {
    return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="https://doingstuff.com" rel="noopener">
            <img src={logo} width="50" height="50" alt="doingstuff.com" />
          </a>
          <Link to="/" className="navbar-brand">DoinStuff</Link>
          <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Things</Link>
                </li>
                <li className="navbar-item">
                <Link to="/create" className="nav-link">Create a thing to do</Link>
                </li>
              </ul>
          </div>
        </nav>
        <br/>
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
      </div>
    </Router>
    );
  }
}
export default App;
