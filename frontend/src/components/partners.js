import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class Partners extends Component{

  render(){
    return(
        <Container  className = "h-50 w-100">
        <Row>
        <Col  className = "align-self-center">
        <p className = "heading-main">Partners</p>
        <p className = "heading-sub">Collaborating for a better future</p>
        </Col>
        <Col style = {{display: "flex"}}>
        <img className = "partner-img1"></img>
        <img className = "partner-img2"></img>
        <img className = "partner-img3"></img>

        </Col>
        </Row>
        </Container>
    ); 
  }
}
export default Partners;