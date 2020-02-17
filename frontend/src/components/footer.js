import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Footer extends Component{

  render(){
    return(
        <Container style={{
          marginLeft: 10 + `%`,
          marginRight: 10 + `%`,
          marginTop: 10 + `em`,
          justifyContent: `space-evenly`}}>
          
          <Row style ={{
          marginBottom: 5 + `em`,
          }}>
          <Col xs={9} md={3}>
          <ul type = "none">
          <li className = "heading-sub">About</li>
          <li className = "link">DC KGEC</li>
          <li className = "link">Developer Clubs</li>
          <li className = "link">Meet the Team</li>
          </ul>
          </Col>
          <Col xs={9} md={3}>
          <ul type = "none">

          <li  className = "heading-sub">Important Links</li>
          <li  className = "link">Join us</li>
          <li  className = "link">Apply to be a Speaker</li>
          <li  className = "link">Read our magazine</li>
          </ul>
          </Col>
          <Col xs={9} md={3}>
          <ul type = "none">

          <li className = "heading-sub">Social</li>
          <li className = "link">Email: sample@gmail.com</li>
          </ul>
          </Col>
          </Row>
          
          <Row>
          <Col xs={9} md={9}>
          <p className = "heading-sub"><img className = "img-logo"></img>DC KGEC</p>
          </Col>
          <Col>
          <p className = "text">© Copyright DC KGEC</p>
          </Col>
          </Row>
      </Container>
    ); 
  }
}
export default Footer;