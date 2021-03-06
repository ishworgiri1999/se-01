import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomePage from "./Homepage";
//import Navi from "./Navi";
import Navi from "./Navi";
import Login from "./Login";
import Signup from "./Signup";
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <Router>
              <div>
                <Navi />
                {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}

                <Switch>
                  <Route path="/login">
                    <Login />
                  </Route>
                  <Route path="/signup">
                    <Signup />
                  </Route>
                  <Route exact path="/">
                    <HomePage />
                  </Route>
                </Switch>
              </div>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

const appDiv = document.getElementById("app");
render(<App />, appDiv);
