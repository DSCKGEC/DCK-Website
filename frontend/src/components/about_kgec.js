import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class AboutKgec extends Component{

  render(){
    return(
        <Container style={{
          marginLeft: 10 + `%`,
          marginRight: 10 + `%`,
          marginBottom: 10 + `em`,
          marginTop: 10 + `em`,
          justifyContent: `space-evenly`}}>
        <Row className="justify-content-sm-center">
        <Col xs={9} md={6}>
        <p className = "heading-main">About KGEC</p>
        <p className = "heading-sub">Know the institution</p>
        <p className = "text">Kalyani Government Engineering College (KGEC), in Kalyani, West Bengal, India offers undergraduate and postgraduate engineering degree courses affiliated to the Maulana Abul Kalam Azad University of Technology, West Bengal (MAKAUT, WB). The institution is regulated, operated and administered by the Government of West Bengal. KGEC is ranked no 10 in all India rankings of Top 100 Engineering College in India in 2012.</p>
        <p className = "link">Read more about the institution</p>
        </Col>
        <Col xs={9} md={6}><img className = "img-kgec"></img></Col>
        </Row>
        
        </Container>
    ); 
  }
}
export default AboutKgec;