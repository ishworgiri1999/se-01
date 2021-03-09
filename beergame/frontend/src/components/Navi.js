import React, {Component} from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";


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
            

              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/login">Login</Link>
              <Link className="nav-link" to="/signup">Signup</Link>
              <Link className="nav-link" to="/about">About</Link>

              
            </Nav>
           
          </Navbar.Collapse>
</div>        </Navbar>
        
      </div>
    );
  }
}
