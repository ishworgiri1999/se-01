import React, { Component } from "react";
import { render } from "react-dom";

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div>
          <Container maxWidth="sm">

        <h1> home </h1>
        
        </Container>
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
