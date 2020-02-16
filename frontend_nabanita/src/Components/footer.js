import React from "react";
import { Card, CardGroup, Container } from "react-bootstrap";

class Footer extends React.Component {
  render() {
    return (
      <Container>
        <CardGroup
          style={{
            marginLeft: 10 + `%`,
            marginRight: 10 + `%`,
            marginBottom: 10 + `em`,
            marginTop: 10 + `em`,
            border: `none`
          }}
        >
          <Card
            style={{
              border: `none`
            }}
          >
            <Card.Title
              style={{
                fontFamily: [`Open Sans`, `sans-serif`],
                fontSize: 24 + `px`,
                color: `#464242`,
                display: `flex`
              }}
            >
              About
            </Card.Title>
            <Card.Body
              style={{
                fontFamily: [`Open Sans`, `sans-serif`],
                fontSize: 16 + `px`,
                color: `#464242`,
                padding: 0 + `rem`,

                display: `flex`
              }}
            >
              DC KGEC
              <br />
              Developer Clubs
              <br />
              Meet the Team
            </Card.Body>
          </Card>
          <Card
            style={{
              border: `none`
            }}
          >
            <Card.Title
              style={{
                fontFamily: [`Open Sans`, `sans-serif`],
                fontSize: 24 + `px`,
                color: `#464242`,
                display: `flex`
              }}
            >
              Important Links
            </Card.Title>
            <Card.Body
              style={{
                fontFamily: [`Open Sans`, `sans-serif`],
                fontSize: 16 + `px`,
                color: `#464242`,
                padding: 0 + `rem`,

                display: `flex`
              }}
            >
              Join us
              <br />
              Apply to be a Speaker
              <br />
              Read our magazine
            </Card.Body>
          </Card>
          <Card
            style={{
              border: `none`
            }}
          >
            <Card.Title
              style={{
                fontFamily: [`Open Sans`, `sans-serif`],
                fontSize: 24 + `px`,
                color: `#464242`,
                display: `flex`
              }}
            >
              Social
            </Card.Title>
            <Card.Body
              style={{
                fontFamily: [`Open Sans`, `sans-serif`],
                fontSize: 16 + `px`,
                color: `#464242`,
                padding: 0 + `rem`,

                display: `flex`
              }}
            >
              Email: kgec.developers.circle@gmail.com
              <br />
            </Card.Body>
          </Card>
        </CardGroup>
        <Card
          style={{
            border: `none`
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
            border: `none`
          }}
        >
          <Card.Body
            style={{
              display: `flex`
            }}
          >
            © Copyright DC KGEC
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
export default Footer;
