import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import BodyText from "../Styles/bodyText";
import Title from "../Styles/title";

class Social extends React.Component {
  render() {
    return (
      <div
        style={{
          marginLeft: 10 + `%`,
          marginRight: 10 + `%`,
          marginBottom: 10 + `em`,
          marginTop: 10 + `em`
        }}
      >
        <Container fluid>
          <Row>
            <Col>
              <Title
                style={{
                  fontSize: 24 + `px`
                }}
              >
                About
              </Title>
              <BodyText>
                DC KGEC
                <br />
                Developer Clubs
                <br />
                Meet the Team
              </BodyText>
            </Col>
            <Col>
              {" "}
              <Title
                style={{
                  fontSize: 24 + `px`
                }}
              >
                Important Links
              </Title>
              <BodyText>
                Join us
                <br />
                Apply to be a Speaker
                <br />
                Read our magazine
              </BodyText>
            </Col>
            <Col className="d-none d-md-block">
              <Title
                style={{
                  fontSize: 24 + `px`
                }}
              >
                Social
              </Title>
              <BodyText>Email: kgec.developers.circle@gmail.com</BodyText>
            </Col>
          </Row>
          <Row>
            <Col className="d-block d-md-none">
              <Title
                style={{
                  fontSize: 24 + `px`
                }}
              >
                Social
              </Title>
              <BodyText>Email: kgec.developers.circle@gmail.com</BodyText>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Social;
