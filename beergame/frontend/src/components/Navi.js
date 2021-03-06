import React, {Component} from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";


export default class Navi extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
     <div >
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <div className="container">
          <Navbar.Brand href="#home">Beer Game </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/signup">Register</Nav.Link>

              
            </Nav>
           
          </Navbar.Collapse>
</div>        </Navbar>
        
      </div>
    );
  }
}
