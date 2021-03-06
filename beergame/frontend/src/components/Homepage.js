import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";

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
        <p className="lead">Beer Game is a supply-management game.</p>
        <a className="btn btn-lg btn-primary" href="/player/" role="button">Player</a>
        <a className="btn btn-lg btn-primary" href="/instructor/" role="button">Instructor</a>
      </div>
        </Container>
      </div>
    );
  }
}
