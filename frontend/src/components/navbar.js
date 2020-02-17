import React, {Component} from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

 
class NavbarMod extends Component{

  render(){
    return(
      <>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
        <Navbar.Brand href="/" className = "img-logo"></Navbar.Brand>
        <Navbar.Brand href="/">DCKGEC</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/events">Events</Nav.Link>
            <Nav.Link href="/team">Team</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <div ></div>
          </Nav>
          <Nav>
            <Nav.Link href="/login"><Button variant = "success">Sign Up</Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </>
    ); 
  }
}
export default NavbarMod;