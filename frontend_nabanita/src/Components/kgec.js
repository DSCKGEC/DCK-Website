import React from "react";
import { Card } from "react-bootstrap";
import Button from "./button";
import image from "../Assets/ID1552715138phpC3AcrS@2x.png";
import Title from "../Styles/title";
// import SubTitle from "../Styles/subTitle";
import BodyText from "../Styles/bodyText";
import StyledCardGroup from "../Styles/styledCardGroup";

class KGEC extends React.Component {
  render() {
    return (
      <StyledCardGroup>
        <Card
          style={{
            border: `none`,
            margin: 'auto ' + 10 + `px`
          }}
        >
          <Title>About KGEC</Title>
          {/* <Card.Subtitle>
            What do we do at DC KGEC?
          </Card.Subtitle> */}
          <BodyText className="mr-4">
            Kalyani Government Engineering College (KGEC), in Kalyani, West
            Bengal, India offers undergraduate and postgraduate engineering
            degree courses affiliated to the Maulana Abul Kalam Azad University
            of Technology, West Bengal (MAKAUT, WB). The institution is
            regulated, operated and administered by the Government of West
            Bengal. KGEC is ranked no 10 in all India rankings of Top 100
            Engineering College in India in 2012.
          </BodyText>
          <Button>JOIN US</Button>
          {/* TODO: Button "Join Us"
           * Link: Learn more about Developer Clubs*/}
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
    );
  }
}
export default KGEC;
