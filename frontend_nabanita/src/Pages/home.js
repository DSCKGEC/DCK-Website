import React from "react";
import NavBar from "../Components/nav";
import Hero from "../Components/hero";
import About from "../Components/about";
import Activity from "../Components/activity";
import Cards from "../Components/cards";
import KGEC from "../Components/kgec";
import Partner from "../Components/partner";
import Footer from "../Components/footer";
import Team from "../Components/team";

class Home extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Hero />
        <About />
        <Activity />
        <Team />
        <Cards />
        <Partner />
        <KGEC />
        <Footer />
      </div>
    );
  }
}

export default Home;
