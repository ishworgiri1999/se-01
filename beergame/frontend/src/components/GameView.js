import React, { Component } from "react";
import ReactDOM from "react-dom";

import { useParams, Route, withRouter } from 'react-router-dom';

 class GameView extends Component {
  constructor(props) {

    super(props);
  }

  componentDidMount() {
    document.title = " Game View Details";

  }

  render() {
      let gid= this.props.match.params.gid

    return (
      <div className="container">
        <div className="bg-light p-5 rounded">
        <h3> VIEW GAME {gid} </h3>

          <h3> NOT IMPLEMENTED YET </h3>
          <p>Needs data from server to show details</p>
        </div>
      </div>
    );
  }
}


export default withRouter(GameView)