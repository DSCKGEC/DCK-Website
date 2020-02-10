import React, {Component} from 'react';
import Navbar from './navbar.js';
import Topbar from './topbar.js';
import AboutUs from './about.js';
import Activity from './activities.js';
import Team from './team.js';
import Cards from './cards.js';
import Partners from './partners.js';
import AboutKgec from './about_kgec.js';
import Footer from './footer.js';


class Homepage extends Component{

  render(){
    return(
      <body> 
          <Navbar/>
          <Topbar/>
          <AboutUs/>
          <Activity/>
          <Team/>
          <Cards/>
          <Partners/>
          <AboutKgec/>
          <Footer/>
      </body>
    ); 
  }
}
export default Homepage;