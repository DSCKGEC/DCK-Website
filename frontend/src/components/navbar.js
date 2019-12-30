import React, {Component} from 'react';

class Navbar extends Component{

  render(){
    return(
        <div>
              <div className="navbar-text-home">HOME</div>
              <div className="navbar-text-events">EVENTS</div>
              <div className="navbar-text-team">TEAM</div>
              <div className="navbar-text-blog">BLOG</div>
            
            <div className = "img-logo"></div>
            <div className= "title">dckgec</div>
            <button className = "sign-up">sign up</button>
        </div>
    ); 
  }
}
export default Navbar;