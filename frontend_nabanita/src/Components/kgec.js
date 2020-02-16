import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import Button from "./button";
import image from "../Assets/ID1552715138phpC3AcrS@2x.png";

class KGEC extends React.Component {
  render() {
    return (
      <CardGroup
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
            border: `none`
          }}
        >
          <Card.Title
            style={{
              fontFamily: [`Open Sans`, `sans-serif`],
              fontSize: 32 + `px`,
              color: `#464242`,
              display: `flex`
            }}
          >
            About KGEC
          </Card.Title>
          {/* <Card.Subtitle
            style={{
              fontFamily: [`Open Sans`, `sans-serif`],
              fontSize: 16 + `px`,
              color: `#7a7474`,
              padding: 0 + `rem`,
              paddingBottom: 1 + `rem`,
              display: `flex`
            }}
          >
            What do we do at DC KGEC?
          </Card.Subtitle> */}
          <Card.Body
            style={{
              fontFamily: [`Open Sans`, `sans-serif`],
              fontSize: 16 + `px`,
              color: `#464242`,
              padding: 0 + `rem`,

              display: `flex`
            }}
          >
            Kalyani Government Engineering College (KGEC), in Kalyani, West
            Bengal, India offers undergraduate and postgraduate engineering
            degree courses affiliated to the Maulana Abul Kalam Azad University
            of Technology, West Bengal (MAKAUT, WB). The institution is
            regulated, operated and administered by the Government of West
            Bengal. KGEC is ranked no 10 in all India rankings of Top 100
            Engineering College in India in 2012.
          </Card.Body>
          {/* <Button>JOIN US</Button> */}
          {/* TODO: Button "Join Us"
           * Link: Learn more about Developer Clubs*/}
        </Card>
        <Card
          style={{
            border: `none`
          }}
          className="d-none d-lg-block"
        >
          <Card.Img src={image}></Card.Img>
        </Card>
      </CardGroup>
    );
  }
}
export default KGEC;
