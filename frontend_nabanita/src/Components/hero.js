import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import Button from "./button";
import image from "../Assets/Developers_doing_discussion_ab@2x.png";

class Hero extends React.Component {
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
        >
          <Card.Title
            style={{
              fontFamily: [`Open Sans`, `sans-serif`],
              fontSize: 42 + `px`,
              color: `#464242`,
              textAlign: `center`
            }}
          >
            Developers Club KGEC
          </Card.Title>
          <Card.Body
            style={{
              fontFamily: [`Open Sans`, `sans-serif`],
              fontSize: 16 + `px`,
              color: `#464242`,
              textAlign: `center`,
              display: `flex`,
              alignSelf: `center`
            }}
          >
            Kalyani Government Engineering College
          </Card.Body>
          <Button>CALL TO ACTION</Button>
        </Card>
        <Card
          style={{
            border: `none`
          }}
          className="d-none d-lg-block"
        >
          <Card.Img src={image}></Card.Img>
        </Card>
      </CardGroup>
    );
  }
}
export default Hero;
