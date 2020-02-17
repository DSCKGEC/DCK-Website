import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import Button from "./button";
import image from "../Assets/Developers_doing_discussion_ab@2x.png";
import styled from "styled-components";
import Title from "../Styles/title";
import logo from "../Assets/logo.png";

import BodyText from "../Styles/bodyText";

const StyledCardGroup = styled(CardGroup)`
  @media (max-width: 1024px) {
    background-color: transparent;
    margin: 0;
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 10%;
    padding-top: 10%;
    border: none;
    background-image: url(${image});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media (min-width: 1024px) {
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 10%;
    padding-top: 10%;
    border: none;
  }
`;

const StyledTitle = styled(Title)`
  text-align: center;
  align-self: center;
  display: flex;
  font-size: 42px;
`;

const StyledBodyText = styled(BodyText)`
  text-align: center;
  align-self: center;
  display: flex;
  font-size: 24px;
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
          <img
            alt="logo"
            src={logo}
            height="100"
            width="100"
            style={{
              display: `flex`,
              alignSelf: `center`,
              marginBottom: 3 + `%`
            }}
          ></img>
          <StyledTitle>Developers Club KGEC</StyledTitle>
          <StyledBodyText>
            Kalyani Government Engineering College
          </StyledBodyText>
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
