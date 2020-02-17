import React from "react";
import Hero from "../Components/hero";
import About from "../Components/about";
import Activity from "../Components/activity";
import Cards from "../Components/cards";
import KGEC from "../Components/kgec";
import Partner from "../Components/partner";
import Team from "../Components/team";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Hero />
        <About />
        <Activity />
        <Team />
        <Cards />
        <Partner />
        <KGEC />
      </div>
    );
  }
}

export default Home;
