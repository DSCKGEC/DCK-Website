import React, {Component} from 'react';
import { Button, Container,Row, Col } from 'react-bootstrap';


class Team extends Component{

  render(){
    return(
        <Container  className = "h-50 w-100">
        <Row>
        <Col xs={9} md={6}><img className = "img-team"></img></Col>
        <Col xs={9} md={6}>
        <p className = "heading-main">Team</p>
        <p className = "heading-sub">Who makes all the fun happen?</p>
        <p className = "text">One log creates a small fire, adequate to warm you up, add just a few more pieces to blast an immense bonfire, large enough to warm up your entire circle; needless to say that individuality counts but teamwork dynamites. At DC KGEC, we celebrate teamwork and attribute the success of DC to the wonderful individuals who put untiring efforts for it.</p>
        <Button variant = "info">Meet our team</Button>
        <p className = "link">Reach out for a collaboration</p>
        </Col>
        </Row>
        </Container>
    ); 
  }
}
export default Team;