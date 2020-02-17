import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class Footer extends React.Component {
  render() {
    return (
      <div
        style={{
          padding: 1 + `rem`,
          backgroundColor: `#f8f9fA`
        }}
      >
        <Container fluid>
          <Row>
            <Col>DC KGEC</Col>
            <Col
              style={{
                textAlign: `end`
              }}
            >
              © Copyright DC KGEC
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
