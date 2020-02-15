import React, {Component} from 'react';
import Topbar from './topbar.js';
import AboutUs from './about.js';
import Activity from './activities.js';
import Team from './team.js';
import Cards from './cards.js';
import Partners from './partners.js';
import AboutKgec from './about_kgec.js';
import Footer from './footer.js';
import NavbarMod from './navbar.js';
import { Container } from 'react-bootstrap';


class Homepage extends Component{

  render(){
    return(
          <div>
          <NavbarMod />
          <Container>
            <Topbar/>
            <AboutUs/>
            <Activity/>
            <Team/>
            <Cards/>
            <Partners/>
            <AboutKgec/>
          </Container>
          
          <Footer/>
          </div>
    ); 
  }
}
export default Homepage;