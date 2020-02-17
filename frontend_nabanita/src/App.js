import React from "react";
// import logo from "./logo.svg";
import "./App.css";

import Home from "./Pages/home";
import TeamPage from "./Pages/teamPage";
import Page404 from "./Pages/page404";

import "bootstrap/dist/css/bootstrap.min.css";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {withRouter} from 'react-router';


import NavBar from "./Components/nav";
import Footer from "./Components/footer";
import Social from "./Components/social";


const NavWithRouter = withRouter(NavBar);


function App() {
  return (
    <div>
      <Router>
        <NavWithRouter />
        <Switch>
          <Route path="/" exact component = {Home} />
          <Route path="/team" exact component= {TeamPage} />
          <Route component={Page404} />
        </Switch>
        <Social />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
