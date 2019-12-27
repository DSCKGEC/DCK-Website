import React, {Component} from 'react';
import Navbar from './components/navbar.js';
import Topbar from './components/topbar.js';
import AboutUs from './components/about.js';
import Activity from './components/activities.js';
import Team from './components/team.js';
import Cards from './components/cards.js';
import Partners from './components/partners.js';
import AboutKgec from './components/about_kgec.js';
import Footer from './components/footer.js';


class App extends Component{

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
export default App;