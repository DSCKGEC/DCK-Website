import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import image from "../Assets/cover.png";
import styled from "styled-components";
import Title from "../Styles/title";
import logo from "../Assets/logo_bk@2x.png";

// import BodyText from "../Styles/bodyText";

const StyledCardGroup = styled(CardGroup)`
  @media (max-width: 991px) {
    background-color: transparent;
    margin: 0;
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 10%;
    padding-top: 10%;
    border: none;
    background-image: url(${image});
    background-color: #333;
    background-blend-mode: multiply;
    background-attachment: fixed;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    color: #eee;
  }
  @media (min-width: 991px) {
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
  @media(max-width: 991px){
    color: white !important;
  }
`;

// const StyledBodyText = styled(BodyText)`
//   text-align: center;
//   align-self: center;
//   display: flex;
//   height: initial;
//   font-size: 24px;
// `;

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
            alt="heroImage"
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
          <div className="text-center mt-3 mb-5" style={{
            fontSize: 1.2 + `rem`
          }}>
            Kalyani Government Engineering College
          </div>
          <a className="btn btn-primary mx-auto" 
          style ={{
            backgroundColor: `#536DFE`,
            width: `fit-content`

          }}
          href="http://forum.dckgec.ml/" target="_blank" rel="noopener noreferrer">JOIN THE FORUM</a>
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
