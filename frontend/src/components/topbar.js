import React, {Component} from 'react';
import { Button , Container, Row, Col} from 'react-bootstrap';


class Topbar extends Component{

  render(){
    return(
        <Container style={{
          marginLeft: 10 + `%`,
          marginRight: 10 + `%`,
          marginBottom: 10 + `em`,
          marginTop: 10 + `em`,
          justifyContent: `space-evenly`
        }}>
        <Row>
        <Col xs={9} md={6} className = "align-self-center"> 
            <p className = "heading-main" >Developers Club KGEC </p>
            <p className = "heading-sub">Kalyani Government Engineering College</p> 
            <Button variant = "info" >Call to Action</Button>
        </Col>
        <Col xs={9} md={6}  className = "align-self-center"><img className = "img-topbar"></img></Col>
        </Row>
        </Container>
    ); 
  }
}
export default Topbar;