import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';

 
class NavbarMod extends Component{

  render(){
    return(
      
        <Navbar className="w-100" collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
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
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
          </Container>
        
      </Navbar>
    ); 
  }
}
export default NavbarMod;