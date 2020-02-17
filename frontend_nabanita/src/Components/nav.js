import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Button from "./button";

import logo from "../Assets/logo_bk@2x.png";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar
        expand="md"
        sticky="top"
        style={{
          paddingLeft: 5 + `em`,
          paddingRight: 5 + `em`,
          backgroundColor: `white`
        }}
      >
        <Navbar.Brand href="#home">
          <img
            alt="Logo"
            src={logo}
            style={{
              height: 25 + "px",
              width: 25 + "px",
              marginRight: 10 + "px"
            }}
          />
          DC KGEC
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          activeStyle={{ border: `none` }}
          style={{ border: `none` }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto flex-column flex-md-row">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/events">EVENTS</Nav.Link>
            <Nav.Link href="/team">TEAM</Nav.Link>
            <Nav.Link href="/blog">BLOG</Nav.Link>
            <Button
              style={{ margin: 0, display: `inline-block`, alignSelf: `left` }}
            >
              SIGN UP
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavBar;
