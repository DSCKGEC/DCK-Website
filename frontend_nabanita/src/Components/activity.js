import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import Button from "./button";
import image from "../Assets/undraw_shared_workspace_hwky@2x.png";

class Activity extends React.Component {
  render() {
    return (
      <div>
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
              Activities
            </Card.Title>
            <Card.Subtitle
              style={{
                fontFamily: [`Open Sans`, `sans-serif`],
                fontSize: 16 + `px`,
                color: `#7a7474`,
                padding: 0 + `rem`,
                paddingBottom: 1 + `rem`,
                display: `flex`
              }}
            >
              How do we make technology fun to learn?
            </Card.Subtitle>
            <Card.Body
              style={{
                fontFamily: [`Open Sans`, `sans-serif`],
                fontSize: 16 + `px`,
                color: `#464242`,
                padding: 0 + `rem`,

                display: `flex`
              }}
            >
              Developers Club KGEC is inspired by the Google Developers' Family.
              The motive is to create a local ecosystem of Developers in and
              around the Campus. And having fun doing it.
            </Card.Body>
            {/* TODO: Button "Check Out Our Activities"
             * Link: Read about our experiences*/}
            <Button>CHECK OUT OUR ACTIVITIES</Button>
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
      </div>
    );
  }
}
export default Activity;
