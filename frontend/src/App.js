import React, {Component} from 'react';
import Homepage from './components/homepage.js';
import Events from './components/events.js';
import {Router,Route,Switch,Link} from 'react-router';

class App extends Component{

  render(){
    return(
      <body> 
        <Router>
        <Switch>
          <Route path="/"><Homepage /></Route>
          <Route path="/events"><Events /></Route>
        </Switch>
        </Router>
      </body>
    ); 
  }
}
export default App;