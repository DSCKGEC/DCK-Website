import React, {Component} from 'react';
import { Button } from 'react-bootstrap';


class Cards extends Component{

  render(){
    return(
        <div>
            <div className= "card-events"></div>
                <div className="card-events-img"></div>
                <div className="card-events-title">Events</div>
                <Button className="card-events-button">KNOW MORE</Button>
                <div className="card-events-text">Here at DC KGEC we put the fun in functions and events. Attend Study Jams/ Hackathons/ Developer Conferences to learn more about the latest technologies.</div>
            <div className="card-magazine"></div>
                <div className="card-magazine-img"></div>
                <div className="card-magazine-title">Refresh - the Official Magazine</div>
                <Button className="card-magazine-button">READ IT</Button>
                <div className="card-magazine-text">We put in all our activities into our half-yearly magazine, Refresh! Exciting articles on tech, and contributions from our student members.</div>
        </div>
    ); 
  }
}
export default Cards;