import React, {Component} from 'react';
import {Link} from 'react-router-dom';
 
class Navbar extends Component{

  render(){
    return(
        <div>
              
              <div className="navbar-text-home"><Link to ="/">HOME</Link></div>
              <div className="navbar-text-events"><Link to="/events">EVENTS</Link></div>
              <div className="navbar-text-team"><Link to = "/team">TEAM</Link></div>
              <div className="navbar-text-blog"><Link to="/blog">BLOG</Link></div>
                  
              <div className = "img-logo"></div>
              <div className= "title">dc kgec</div>
              <button className = "sign-up">sign up</button> 
        </div>
    ); 
  }
}
export default Navbar;