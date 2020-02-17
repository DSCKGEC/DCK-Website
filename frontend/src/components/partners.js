import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class Partners extends Component{

  render(){
    return(
        <Container style={{
          marginLeft: 10 + `%`,
          marginRight: 10 + `%`,
          marginBottom: 10 + `em`,
          marginTop: 10 + `em`,
          justifyContent: `space-evenly`}}>
        <Row>
        <Col  xs={9} md={7}>
        <p className = "heading-main">Partners</p>
        <p className = "heading-sub">Collaborating for a better future</p>
        </Col>
        </Row>
        <Row>
        <Col>
        </Col>
        </Row>
        </Container>
    ); 
  }
}
export default Partners;