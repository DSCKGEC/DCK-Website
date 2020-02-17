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
          marginBottom: 3 + `em`,
          marginTop: 3 + `em`,
          border: `none`
        }}
      >
        <Card
          style={{
            border: `none`,
            margin: 'auto ' + 0
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
          <div
            style={{
              fontFamily: [`Open Sans`, `sans-serif`],
              fontSize: 16 + `px`,
              color: `#464242`,
              textAlign: `center`,
              display: `flex`,
              alignSelf: `center`,
            }}
          >
            Kalyani Government Engineering College
            
          </div>
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
