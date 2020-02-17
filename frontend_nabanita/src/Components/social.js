import React from "react";
import { Card, CardGroup } from "react-bootstrap";

class Social extends React.Component {
  render() {
    return (
      <CardGroup
        style={{
          marginLeft: 10 + `%`,
          marginRight: 10 + `%`,
          marginBottom: 10 + `em`,
          marginTop: 10 + `em`,
          border: `none`,
          justifyContent: `space-evenly`
        }}
        className="d-table d-lg-flex"
      >
        <Card
          style={{
            border: `none`
          }}
          className="d-table-row d-lg-inline-block"
        >
          <Card.Title
            style={{
              fontFamily: [`Open Sans`, `sans-serif`],
              fontSize: 24 + `px`,
              color: `#464242`,
              display: `flex`
            }}
          >
            About
          </Card.Title>
          <Card.Body
            style={{
              fontFamily: [`Open Sans`, `sans-serif`],
              fontSize: 16 + `px`,
              color: `#464242`,
              padding: 0 + `rem`,

              display: `flex`
            }}
          >
            DC KGEC
            <br />
            Developer Clubs
            <br />
            Meet the Team
          </Card.Body>
        </Card>
        <Card
          style={{
            border: `none`
          }}
          className="d-table-row d-lg-inline-block"
        >
          <Card.Title
            style={{
              fontFamily: [`Open Sans`, `sans-serif`],
              fontSize: 24 + `px`,
              color: `#464242`,
              display: `flex`
            }}
          >
            Important Links
          </Card.Title>
          <Card.Body
            style={{
              fontFamily: [`Open Sans`, `sans-serif`],
              fontSize: 16 + `px`,
              color: `#464242`,
              padding: 0 + `rem`,

              display: `flex`
            }}
          >
            Join us
            <br />
            Apply to be a Speaker
            <br />
            Read our magazine
          </Card.Body>
        </Card>
        <Card
          style={{
            border: `none`
          }}
          className="d-table-row d-lg-inline-block"
        >
          <Card.Title
            style={{
              fontFamily: [`Open Sans`, `sans-serif`],
              fontSize: 24 + `px`,
              color: `#464242`,
              display: `flex`
            }}
          >
            Social
          </Card.Title>
          <Card.Body
            style={{
              fontFamily: [`Open Sans`, `sans-serif`],
              fontSize: 16 + `px`,
              color: `#464242`,
              padding: 0 + `rem`,

              display: `flex`
            }}
          >
            Email: kgec.developers.circle@gmail.com
            <br />
          </Card.Body>
        </Card>
      </CardGroup>
    );
  }
}
export default Social;
