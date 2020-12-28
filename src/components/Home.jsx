import React from "react";
import TicTacToe from './TicTacToe';
import Counters from './Counters';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="navbar navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link text-light" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/TicTacToe">Tic-Tac-Toe</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/Counters">Voting App</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route path="/ticTacToe">
            <TicTacToe />
          </Route>
          <Route path="/Counters">
            <Counters />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="container p-5">
    <h2>Home</h2>
    <p>Welcome to my learning playground for React!</p>
    <p>Select an app from above.</p>
    </div>
    )
}
