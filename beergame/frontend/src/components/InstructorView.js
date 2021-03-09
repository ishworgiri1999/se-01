import React, { Component } from "react";


export default class InstructorView extends Component {
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
                    <a
                      class="btn btn-primary"
                      href="./creategame"
                      role="button"
                    >
                      Create Game
                    </a>
                  </div>
                  <div className="mb-3">
                    <a class="btn btn-primary" href="/" role="button">
                      Create Demand Pattern
                    </a>
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
        <a
          name=""
          id=""
          className="btn btn-sm btn-primary ms-1"
          href={`/game/modify/${props.id}`}
          role="button"
        >
          MODIFY
        </a>
        <a
          name=""
          id=""
          className="btn btn-sm btn-primary ms-1"
          href={"/game/details/" + props.id}
          role="button"
        >
          VIEW DETAILS
        </a>
      </td>
    </tr>
  );
}
