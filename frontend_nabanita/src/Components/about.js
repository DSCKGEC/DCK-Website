import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import Button from "./button";
import image from "../Assets/ID69096379_103099181060134_307@2x.png";

class About extends React.Component {
  render() {
    return (
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
          className="d-none d-lg-block"
        >
          <Card.Img src={image}></Card.Img>
        </Card>
        <Card
          style={{
            border: `none`
          }}
        >
          <Card.Title
            style={{
              fontFamily: [`Open Sans`, `sans-serif`],
              fontSize: 32 + `px`,
              color: `#464242`,
              display: `flex`
            }}
          >
            About Us
          </Card.Title>
          <Card.Subtitle
            style={{
              fontFamily: [`Open Sans`, `sans-serif`],
              fontSize: 16 + `px`,
              color: `#7a7474`,
              padding: 0 + `rem`,
              paddingBottom: 1 + `rem`,
              display: `flex`
            }}
          >
            What do we do at DC KGEC?
          </Card.Subtitle>
          <Card.Body
            style={{
              fontFamily: [`Open Sans`, `sans-serif`],
              fontSize: 16 + `px`,
              color: `#464242`,
              padding: 0 + `rem`,

              display: `flex`
            }}
          >
            Google collaborates with university students who are passionate
            about growing developer communities. Developer Student Club powered
            by Google Developers is an initiative to grow their knowledge on
            developer technologies and more through peer to peer workshops and
            events, and gain relevant industry experience.
          </Card.Body>
          <Button>JOIN US</Button>
          {/* TODO: Button "Join Us"
           * Link: Learn more about Developer Clubs*/}
        </Card>
      </CardGroup>
    );
  }
}
export default About;
