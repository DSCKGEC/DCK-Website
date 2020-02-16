import React from "react";
import { Card } from "react-bootstrap";
import Button from "./button";
import image from "../Assets/undraw_team_page_pgpr@2x.png";
import Title from "../Styles/title";
import SubTitle from "../Styles/subTitle";
import BodyText from "../Styles/bodyText";
import StyledCardGroup from "../Styles/styledCardGroup";

class Team extends React.Component {
  render() {
    return (
      <StyledCardGroup>
        <Card
          style={{
            border: `none`
          }}
          className="d-none d-md-block"
        >
          <Card.Img src={image}></Card.Img>
        </Card>
        <Card
          style={{
            border: `none`
          }}
        >
          <Title>Team</Title>
          <SubTitle>Who makes all the fun happen?</SubTitle>
          <BodyText>
            One log creates a small fire, adequate to warm you up, add just a
            few more pieces to blast an immense bonfire, large enough to warm up
            your entire circle; needless to say that individuality counts but
            teamwork dynamites. At DC KGEC, we celebrate teamwork and attribute
            the success of DC to the wonderful individuals who put untiring
            efforts for it.
          </BodyText>
          <Button>MEET OUR TEAM</Button>
          {/* TODO:
           * Link: Learn more about Developer Clubs*/}
        </Card>
      </StyledCardGroup>
    );
  }
}
export default Team;
