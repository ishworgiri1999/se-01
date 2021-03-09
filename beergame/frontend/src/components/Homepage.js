import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Container>
        <div className="bg-light p-5 rounded">
        <h1>Welcome to Beer Game </h1> 
        <p className="lead">Beer Game is a supply-management game. Choose your Role</p>
        <a className="btn btn-lg btn-primary ms-3" href="/player/" role="button">Player</a>
        <a className="btn btn-lg btn-primary ms-3" href="/instructor/" role="button">Instructor</a>
      </div>
        </Container>
      </div>
    );
  }
}
