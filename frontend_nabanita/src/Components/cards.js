import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import Button from "./button";
import image from "../Assets/ID76266712_148129396557112_387@2x.png";
import image2 from "../Assets/Page_1@2x.png";

class Cards extends React.Component {
  render() {
    return (
      <CardDeck
        style={{
          marginLeft: 10 + `%`,
          marginRight: 10 + `%`,
          marginBottom: 3 + `em`,
          marginTop: 3 + `em`,
          border: `none`,
          justifyContent: `space-evenly`,
        }}
        className="d-lg-flex"
      >
        <Card
          className="mb-4"
          style={{
            boxShadow: `0 14px 26px -12px rgba(156, 39, 176, 0.42),
                        0 4px 23px 0px rgba(0, 0, 0, 0.12),
                        0 8px 10px -5px rgba(156, 39, 176, 0.2)`,
            borderRadius: 10,
            border: `none`,
            paddingLeft: 2 + `rm`,
            paddingRight: 2 + `rm`,
            maxWidth: 25 + `rem`,
            marginBottom: 20 + `px`
          }}
          className="d-lg-block"
        >
          <Card.Img src={image}></Card.Img>
          <Card.Title
            style={{
              fontFamily: [`Open Sans`, `sans-serif`],
              fontSize: 24 + `px`,
              color: `#464242`,
              padding: 2 + `rem`,
              display: `flex`
            }}
          >
            Events
          </Card.Title>
          <Card.Body
            style={{
              fontFamily: [`Open Sans`, `sans-serif`],
              fontSize: 16 + `px`,
              color: `#464242`,

              paddingLeft: 2 + `rem`,
              paddingRight: 2 + `rem`,
              paddingTop: 0,
              display: `flex`
            }}
          >
            Here at DC KGEC we put the fun in functions and events. Attend Study
            Jams/ Hackathons/ Developer Conferences to learn more about the
            latest technologies.
            
          </Card.Body>
          <Button className="mb-4" style= 
          {{
            marginLeft: 2 + `rem`,
          }}>KNOW MORE</Button>
        </Card>
          
        <Card
          style={{
            boxShadow: `0 14px 26px -12px rgba(156, 39, 176, 0.42),
                        0 4px 23px 0px rgba(0, 0, 0, 0.12),
                        0 8px 10px -5px rgba(156, 39, 176, 0.2)`,
            borderRadius: 10,
            border: `none`,
            paddingLeft: 2 + `rm`,
            paddingRight: 2 + `rm`,
            maxWidth: 25 + `rem`,
            marginBottom: 20 + `px`
          }}
          className="d-lg-block"
        >
          <Card.Img src={image2}></Card.Img>
          <Card.Title
            style={{
              fontFamily: [`Open Sans`, `sans-serif`],
              fontSize: 24 + `px`,
              color: `#464242`,
              padding: 2 + `rem`,
              // paddingBottom: 1 + `rem`,
              display: `flex`
            }}
          >
            Refresh - The Official Magazine
          </Card.Title>
          <Card.Body
            style={{
              fontFamily: [`Open Sans`, `sans-serif`],
              fontSize: 16 + `px`,
              color: `#464242`,
              paddingLeft: 2 + `rem`,
              paddingRight: 2 + `rem`,
              paddingTop: 0,
              display: `flex`
            }}
          >
            We put in all our activities into our half-yearly magazine, Refresh!
            Exciting articles on tech, and contributions from our student
            members.
          </Card.Body>
          <Button className="mb-4" style= 
          {{
            marginLeft: 2 + `rem`,
            background: '#95a5a6',
            borderColor: '#95a5a6',
            color: '#fff'
          }}>COMING SOON</Button>
        </Card>
      </CardDeck>
    );
  }
}
export default Cards;
