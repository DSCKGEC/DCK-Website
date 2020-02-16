import React from "react";
import { Card } from "react-bootstrap";
import gdg from "../Assets/gdg@2x.png";
import google_dev from "../Assets/google_dev@2x.png";
import fb_dev from "../Assets/highres_452804751@2x.png";

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
        <Card
          style={{
            border: `none`,
            minwWidth: 40 + `%`,
            alignSelf: `center`,
            justifyContent: `space-evenly`,
            marginBottom: 0,
            display: `block`
          }}
        >
          <Card.Img src={gdg} style={{ hight: 80, width: 80 }} />
          <Card.Img src={google_dev} style={{ hight: 80, width: 80 }} />
          <Card.Img src={fb_dev} style={{ hight: 80, width: 80 }} />
        </Card>
      </Card>
    );
  }
}
export default Partner;
