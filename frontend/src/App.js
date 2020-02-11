import React, {Component} from 'react';
import HomePage from './components/homepage.js';
import EventPage from './components/eventpage.js';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class Homepage extends Component{

  render(){
    return(
      <Router>
        <Switch>
          <Route path="/" exact component = {HomePage} />
          <Route path="/events" exact component= {EventPage} />
        </Switch>
      </Router>
    ); 
  }
}
export default Homepage;