import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../Assets/logo-no-text.png";
import Button from "./button";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar
        expand="md"
        sticky="top"
        style={{
          paddingLeft: 12 + `%`,
          paddingRight: 12 + `%`,
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
        <Navbar.Collapse id="basic-navbar-nav" className="py-2">
          <Nav className="ml-auto flex-column flex-md-row">
            <Nav.Link href="/">HOME</Nav.Link>
            {/* <Nav.Link href="/events">EVENTS</Nav.Link> */}
            <Nav.Link href="/team">TEAM</Nav.Link>
            <Nav.Link href="http://forum.dckgec.ml/" target="_blank" >FORUM</Nav.Link>
            {/* This is a hacky way to fix the spacing, should be fixed later */}
            <div style={{
              width: '20px',
              height: '10px'
            }}></div>
            {/* <Nav.Link href="/blog">BLOG</Nav.Link> */}
            <a className="btn btn-primary" href="http://bit.ly/JoinDCKGEC" target="_blank"
            style ={{
              backgroundColor: `#536DFE`,
              width: `fit-content`,
              color: 'white'
            }}>SIGN UP</a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavBar;
