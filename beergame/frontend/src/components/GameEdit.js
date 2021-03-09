import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class GameEdit extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.title = "Instructor EDIT Game View";
  }

  render() {
    let gid= this.props.match.params.gid

    return (
      <div className="container">
        <div className="bg-light p-5 rounded">
        <h3> EDIT GAME {gid} </h3>
         <h3> NOT IMPLEMENTED YET </h3>
         <p>Needs data from server to auto fill forms for updating</p>
         </div>
      </div>
    );
  }
}

// using this to get game id 
export default withRouter(GameEdit)