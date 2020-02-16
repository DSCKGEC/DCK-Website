import React, {Component} from 'react';
import { Button } from 'react-bootstrap';


class Team extends Component{

  render(){
    return(
        <div>
            <div className= "img-team"></div>
            <div className="team-title">Team</div>
            <div className="team-text-sub">Who makes all the fun happen?</div>
            <Button variant="secondary" className="team-button">MEET OUR TEAM</Button>
            <div className="team-text---sub">Reach out for a collaboration</div>
            <div className="team-text--sub">One log creates a small fire, adequate to warm you up, add just a few more pieces to blast an immense bonfire, large enough to warm up your entire circle; needless to say that individuality counts but teamwork dynamites. At DC KGEC, we celebrate teamwork and attribute the success of DC to the wonderful individuals who put untiring efforts for it.</div>
        </div>
    ); 
  }
}
export default Team;