import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/home";
import TeamPage from "./Pages/teamPage";
import "bootstrap/dist/css/bootstrap.min.css";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Router>
        <Switch>
        <Route path="/" exact component = {Home} />
          <Route path="/team" exact component= {TeamPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
