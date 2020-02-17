import React from "react";
import { Card } from "react-bootstrap";
import Button from "./button";
import image from "../Assets/ID69096379_103099181060134_307@2x.png";
import Title from "../Styles/title";
import SubTitle from "../Styles/subTitle";
import BodyText from "../Styles/bodyText";
import StyledCardGroup from "../Styles/styledCardGroup";

class About extends React.Component {
  render() {
    return (
      <StyledCardGroup>
        <Card
          style={{
            border: `none`
          }}
          className="d-none d-md-block my-auto"
        >
          <Card.Img src={image}></Card.Img>
        </Card>
        <Card
          style={{
            border: `none`,
            margin: 'auto ' + 10 + `px`
          }}
        >
          <Title>About Us</Title>
          <SubTitle>What do we do at DC KGEC?</SubTitle>
          <BodyText>
          DC KGEC is a student led club, built on the power of communities. We believe that great things happen when young inquisitive minds come together, to explore new technologies and create stuff. It is also a way for students to bridge the industry-academia gap through peer-based, project focused learning.
          </BodyText>
          <Button>JOIN US</Button>
          {/* TODO:
           * Link: Learn more about Developer Clubs*/}
        </Card>
      </StyledCardGroup>
    );
  }
}
export default About;
