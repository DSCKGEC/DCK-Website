import React from "react";
import { Card, CardGroup } from "react-bootstrap";

class Footer extends React.Component {
  render() {
    return (
      <CardGroup
        style={{
          backgroundColor: `#f8f9fA`
        }}
      >
        <Card
          style={{
            border: `none`,
            backgroundColor: `#f8f9fA`
          }}
        >
          <Card.Body
            style={{
              display: `flex`
            }}
          >
            DC KGEC
          </Card.Body>
        </Card>
        <Card
          style={{
            border: `none`,
            backgroundColor: `#f8f9fA`
          }}
        >
          <Card.Body
            style={{
              display: `inline`,
              textAlign: `end`
            }}
            className=""
          >
            © Copyright DC KGEC
          </Card.Body>
        </Card>
      </CardGroup>
    );
  }
}

export default Footer;
