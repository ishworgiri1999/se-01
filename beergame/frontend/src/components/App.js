import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomePage from "./Homepage";
import Navi from "./Navi";
import Login from "./Login";
import Signup from "./Signup";
import PlayerView from "./PlayerView";
import InstructorView from "./InstructorView";
import PlayerChooseRole from "./PlayerChooseRole";
import PlayGameView from "./PlayGame";
import GameEdit from "./GameEdit";
import GameView from "./GameView";
import CreateGame from "./CreateGame";


/**
 * General component description.
 * You can even use the native Markdown here.
 * E.g.:
 * ```html
 * <MyComponent foo={541} />
 * ```
 */

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

                 
                  <Route exact path="/creategame">
                    <CreateGame />
                  </Route>

                  <Route exact path="/play">
                    <PlayGameView />
                  </Route>

                  <Route exact path="/player/chooserole">
                    <PlayerChooseRole />
                  </Route>


                  <Route exact path="/game/modify/:gid">
                    <GameEdit />
                  </Route>

                  <Route exact  path="/game/details/:gid" >
                    <GameView />
                  </Route>

                  <Route path="/signup">
                    <Signup />
                  </Route>

                  <Route exact path="/about">
                    <h1>about us nothing</h1>
                  </Route>

                  <Route exact path="/">
                    <HomePage />
                  </Route>
                  <Route>
                        <h1 > NO MATCH</h1>
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
