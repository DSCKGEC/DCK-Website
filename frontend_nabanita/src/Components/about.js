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
            Google collaborates with university students who are passionate
            about growing developer communities. Developer Student Club powered
            by Google Developers is an initiative to grow their knowledge on
            developer technologies and more through peer to peer workshops and
            events, and gain relevant industry experience.
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
