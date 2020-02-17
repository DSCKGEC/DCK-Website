import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import Button from "./button";
import image from "../Assets/undraw_team_page_pgpr@2x.png";

class Team extends React.Component {
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
            Team
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
            Who makes all the fun happen?
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
            One log creates a small fire, adequate to warm you up, add just a
            few more pieces to blast an immense bonfire, large enough to warm up
            your entire circle; needless to say that individuality counts but
            teamwork dynamites. At DC KGEC, we celebrate teamwork and attribute
            the success of DC to the wonderful individuals who put untiring
            efforts for it.
          </Card.Body>
          <Button>MEET OUR TEAM</Button>
          {/* TODO: Button "Join Us"
           * Link: Learn more about Developer Clubs*/}
        </Card>
      </CardGroup>
    );
  }
}
export default Team;
