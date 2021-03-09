import React, { Component } from "react";
import { Link } from "react-router-dom";


export  default class InstructorView extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    document.title = "Instructor View";
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="container">
            <div className="bg-light p-5 rounded">
            
                  <div className="mb-3">
                    <Link
                      className="btn btn-primary"
                      to="/creategame"
                      role="button"
                    >
                      Create Game
                    </Link>
                  </div>
                  <div className="mb-3">
                    <Link className="btn btn-primary" to="./demandpattern" role="button">
                      Create Demand Pattern
                    </Link> not implemented yet
                  </div>


                  <h3>Created Games</h3>

                  <table className="table">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">#GAMEID</th>
                        <th scope="col">Active Players</th>
                        <th scope="col">Status</th>
                        <th scope="col">Options</th>
                      </tr>
                    </thead>
                    <tbody>
                      <GameInfo id="1" />
                      <GameInfo id="2" />
                      <GameInfo id="3" />
                    </tbody>
                  </table>

              
            </div>
          </div>
        </div>
      </div>
    );
  }
}



 function GameInfo(props) {
  var id = props.id;
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>4</td>
      <td>Running</td>
      <td>
        <Link
          name=""
          id=""
          className="btn btn-sm btn-primary ms-1"
          to={`/game/modify/${props.id}`}
          role="button"
        >
          MODIFY
        </Link>
        <Link
          name=""
          id=""
          className="btn btn-sm btn-primary ms-1"
          to={"/game/details/" + props.id}
          role="button"
        >
          VIEW DETAILS
        </Link>
      </td>
    </tr>
  );
}

