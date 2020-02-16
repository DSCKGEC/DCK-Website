import React, {Component} from 'react';
import { Button, Container, Row , Col} from 'react-bootstrap';


class Activity extends Component{

  render(){
    return(
        <Container>
        <Row>
          <Col xs={9} md={6}>
            <p className="heading-main">Activities</p>
            <p className ="heading-sub">How do we make technology fun to learn?</p>
            <p className = "text">Developers Club KGEC is inspired by the Google Developers' Family. The motive is to create a local ecosystem of Developers in and around the Campus. And having fun doing it.</p>
            <Button variant = "info">Check out our activities</Button>
            <p className ="link">Read about our experiences</p>
          </Col>
          <Col xs={9} md={6}><img className = "img-activities"></img></Col>

        </Row>
        </Container>
    ); 
  }
}
export default Activity;