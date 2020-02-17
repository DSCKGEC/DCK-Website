import React from "react";
import { Card } from "react-bootstrap";
import Button from "./button";
import image from "../Assets/undraw_shared_workspace_hwky@2x.png";
import Title from "../Styles/title";
import SubTitle from "../Styles/subTitle";
import BodyText from "../Styles/bodyText";
import StyledCardGroup from "../Styles/styledCardGroup";

class Activity extends React.Component {
  render() {
    return (
      <div>
        <StyledCardGroup>
          <Card
            style={{
              border: `none`,
              margin: 'auto ' + 10 + `px`
            }}
          >
            <Title>Activities</Title>
            <SubTitle>How do we make technology fun to learn?</SubTitle>
            <BodyText>
              Developers Club KGEC is inspired by the Google Developers' Family.
              The motive is to create a local ecosystem of Developers in and
              around the Campus. And having fun doing it.
            </BodyText>
            {/* TODO: Button "Check Out Our Activities"
             * Link: Read about our experiences*/}
            <Button>CHECK OUT OUR ACTIVITIES</Button>
          </Card>
          <Card
            style={{
              border: `none`
            }}
            className="d-none d-md-block my-auto"
          >
            <Card.Img src={image}></Card.Img>
          </Card>
        </StyledCardGroup>
      </div>
    );
  }
}
export default Activity;
