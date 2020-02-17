import React, {Component} from 'react';
import { Button, Container, Row, Col} from 'react-bootstrap';


class AboutUs extends Component{

  render(){
    return(
        <Container style={{
          marginLeft: 10 + `%`,
          marginRight: 10 + `%`,
          marginBottom: 10 + `em`,
          marginTop: 10 + `em`,
          justifyContent: `space-evenly`}}>
            <Row>
              <Col xs={9} md={6}><img className = "img-about"></img></Col>
              <Col xs={9} md={6}>
                <p className = "heading-main">About Us</p>
                <p className = "heading-sub">What do we do at DC KGEC?</p>
                <p className = "text">Google collaborates with university students who are passionate about growing developer communities. Developer Student Club powered by Google Developers is an initiative to grow their knowledge on developer technologies and more through peer to peer workshops and events, and gain relevant industry experience.</p>
                <Button variant = "warning">Join Us</Button>
                <p className = "link">Learn more about Developer Clubs</p>
              </Col>
            </Row>
        </Container>
    ); 
  }
}
export default AboutUs;