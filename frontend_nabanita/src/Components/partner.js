import React from "react";
import Title from "../Styles/title";
import SubTitle from "../Styles/subTitle";
import styled from "styled-components";

import { Container, Row, Col } from "react-bootstrap";

import mw_logo from "../Assets/mw_logo.png";
import google_dev from "../Assets/google_dev@2x.png";
import fb_dev from "../Assets/highres_452804751@2x.png";

const StyledTitle = styled(Title)`
  text-align: center;
  align-self: center;
  display: block;
`;

const StyledSubTitle = styled(SubTitle)`
  text-align: center;
  align-self: center;
  display: block;
`;

class Partner extends React.Component {
  render() {
    return (
      <div
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

        <Container fluid>
          <Row
            style={{
              justifyContent: `center`
            }}
          >
            <Col
              style={{
                flexGrow: 0
              }}
            >
              <img
                src={google_dev}
                style={{ height: 120, width: 140, margin: 30 }}
              />
            </Col>
            <Col
              style={{
                flexGrow: 0
              }}
            >
              <img
                src={fb_dev}
                style={{ height: 120, width: 160, margin: 30 }}
              />
            </Col>
            <Col
              style={{
                flexGrow: 0
              }}
            >
              <img
                src={mw_logo}
                style={{ height: 120, width: 120, margin: 20 }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Partner;
