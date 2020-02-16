import React from "react";
import { Card, CardGroup, Container } from "react-bootstrap";
import Button from "./button";
import image from "../Assets/Developers_doing_discussion_ab@2x.png";
import styled from "styled-components";

const StyledCardGroup = styled(CardGroup)`
  @media (max-width: 768px) {
    background-color: transparent;
    margin: 0;
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 10em;
    padding-top: 10em;
    border: none;
    background-image: url(${image});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media (min-width: 768px) {
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 10em;
    padding-top: 10em;
    border: none;
  }
`;

class Hero extends React.Component {
  render() {
    return (
      <StyledCardGroup>
        <Card
          style={{
            border: `none`,
            backgroundColor: `transparent`
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
      </StyledCardGroup>
    );
  }
}
export default Hero;
