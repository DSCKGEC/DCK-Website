import React from "react";
import NavBar from "../Components/nav";
import Hero from "../Components/hero";
import About from "../Components/about";
import Activity from "../Components/activity";
import Cards from "../Components/cards";
import KGEC from "../Components/kgec";
import Partner from "../Components/partner";
import Footer from "../Components/footer";
import Social from "../Components/social";
import Team from "../Components/team";
import TeamPageContainer from "../Components/teamPage/container"

class TeamPage extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <TeamPageContainer />
        <Social />
        <Footer />
      </div>
    );
  }
}

export default TeamPage;