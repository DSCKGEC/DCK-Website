import React from "react";
import { Card } from "react-bootstrap";
import { mdiFacebook, mdiYoutube, mdiEmail, mdiGithubBox } from "@mdi/js";
import Icon from "@mdi/react";


class Social extends React.Component {
  render() {
    return (
      <div
        style={{
          marginLeft: 10 + `%`,
          marginRight: 10 + `%`,
          marginBottom: 2 + `em`,
          marginTop: 4 + `em`,
          border: `none`,
          justifyContent: `space-evenly`,
          borderTop: 2 + `px solid black`,
          paddingTop: 30 + `px`,
          width: '80%',
          flexWrap: 'wrap'
        }}
        className="d-lg-flex"
      >
        <Card
          style={{
            border: `none`,
            minWidth: '200px'
          }}
          className="d-lg-inline-block mb-3"
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

              display: `flex`,
              flexDirection: `column`
            }}
          >
            <a href="/">DC KGEC</a>
            
            <a href="/">Developer Clubs</a>
      
            <a href="/team">Meet the Team</a>
            

          </Card.Body>
        </Card>
        <Card
          style={{
            border: `none`,
            minWidth: '200px'
          }}
          className="d-lg-inline-block mb-3"
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

              display: `flex`,
              flexDirection: `column`
            }}
          >
            <a href="http://bit.ly/JoinDCKGEC" target="_blank" rel="noopener noreferrer">Join us</a>
            <a href="http://bit.ly/DCK-Apply-Speaker" target="_blank" rel="noopener noreferrer">Apply to be a Speaker</a>
            <a href="/">Read our magazine</a>
          </Card.Body>
        </Card>
        <Card
          style={{
            border: `none`,
            minWidth: '250px'
          }}
          className="d-lg-inline-block mb-3"
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

              display: `flex`,
              flexDirection: `column`
            }}
          >
            Connect with Us
            <br />
            <div className = "d-flex mt-2"> 
            <a href="https://www.facebook.com/pg/dckgec/" className="mr-2" target="_blank" rel="noopener noreferrer">
              <Icon
                path={mdiFacebook}
                size={1.3}
                title="Facebook"
              ></Icon>
            </a>
            <a href="https://www.youtube.com/channel/UChIuhjS8Kny2wc7mZrVjSuQ" className="mr-2" target="_blank" rel="noopener noreferrer">    
                <Icon
                  path={mdiYoutube}
                  size={1.3}
                  title="YouTube"
                ></Icon>
            </a>
            <a href="https://github.com/dckgec" className="mr-2" target="_blank" rel="noopener noreferrer">    
                <Icon
                  path={mdiGithubBox}
                  size={1.3}
                  title="GitHub"
                ></Icon>
            </a>
            <a href="mailto:kgec.developers.circle@gmail.com" className="mr-2" target="_blank" rel="noopener noreferrer">    
                <Icon
                  path={mdiEmail}
                  size={1.3}
                  title="Email"
                ></Icon>
            </a>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default Social;
