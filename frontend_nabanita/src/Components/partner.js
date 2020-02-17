import React from "react";
import { Card } from "react-bootstrap";
import Title from "../Styles/title";
import SubTitle from "../Styles/subTitle";
import styled from "styled-components";

import mw_logo from "../Assets/mw_logo.png";
import google_dev from "../Assets/google_dev@2x.png";
import fb_dev from "../Assets/highres_452804751@2x.png";

const StyledTitle = styled(Title)`
  text-align: center;
  align-self: center;
  display: block;
  // font-size: 42px;
`;

const StyledSubTitle = styled(SubTitle)`
  text-align: center;
  align-self: center;
  display: block;
  // font-size: 24px;
`;

class Partner extends React.Component {
  render() {
    return (
      <Card
        style={{
          marginLeft: 10 + `%`,
          marginRight: 10 + `%`,
          marginBottom: 10 + `em`,
          marginTop: 10 + `em`,
          border: `none`
        }}
      >
        <div>
          <StyledTitle>Partners</StyledTitle>
          <StyledSubTitle>Collaborating for a better future</StyledSubTitle>
        </div>
        <div
          style={{
            border: `none`,
            minwWidth: 40 + `%`,
            alignSelf: `center`,
            justifyContent: `space-evenly`,
            marginBottom: 0,
            marginTop: 20,

            display: `block`
          }}
        >
          <Card.Img src={google_dev} style={{ height: 120, width: 120, margin: 30 }} />
          <Card.Img src={fb_dev} style={{ height: 120, width:160, margin: 30 }} />
          <Card.Img src={mw_logo} style={{ height: 120, width: 120, margin: 20 }} />
        </div>
      </Card>
    );
  }
}
export default Partner;
