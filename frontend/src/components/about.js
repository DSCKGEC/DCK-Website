import React, {Component} from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';


class AboutUs extends Component{

  render(){
    return(
        <div>
            <div className="about-text">about us</div>
            <div className="img-aboutus"></div>
            <div className="about-text-sub"> What do we do at DC KGEC?</div>
            <div className="about-text--sub">Google collaborates with university students who are passionate about growing developer communities. Developer Student Club powered by Google Developers is an initiative to grow their knowledge on developer technologies and more through peer to peer workshops and events, and gain relevant industry experience.</div>
            <div className="about-text---sub">Learn more about Developer Clubs</div>
            <Button className="about-button" variant="success">Join Us</Button>
        </div>
    ); 
  }
}
export default AboutUs;