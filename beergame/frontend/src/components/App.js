import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomePage from "./Homepage";
//import Navi from "./Navi";
import Navi from "./Navi";
import Login from "./Login";
import Signup from "./Signup";
import PlayerView from "./PlayerView"
import InstructorView from "./InstructorView"
import InstructorCreateGame from "./InstructorCreateGame"
import PlayerCreateGame from "./PlayerCreateGame"
import PlayerChooseRole from "./PlayerChooseRole"
import GameView from "./GameView";

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
                  <Route exact path="/player">
                    <PlayerView />
                  </Route>

                  <Route exact path="/instructor">
                    <InstructorView />
                  </Route>

                  <Route exact path="/instructor/creategame">
                    <InstructorCreateGame />
                  </Route>
                  
                  <Route exact path="/player/creategame">
                    <PlayerCreateGame />
                  </Route>  

                  <Route exact path="/play">
                    <GameView />
                  </Route>  

                  <Route exact path="/player/chooserole">
                    <PlayerChooseRole />
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
