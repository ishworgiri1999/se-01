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
             <a class="btn btn-primary" href="./creategame" role="button">Create Game</a>

             </div>
             <div className="mb-3">
             <a class="btn btn-primary" href="/" role="button">Create Demand Pattern</a>

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
            <tr>
              <th scope="row">1</th>
              <td>4</td>
              <td>Running</td>
              <td>
              <a name="" id="" className="btn btn-sm btn-primary ms-1" href="#" role="button">MODIFY</a>
                    <a name="" id="" className="btn btn-sm btn-primary ms-1" href="#" role="button">VIEW DETAILS</a>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>0</td>
              <td>Frozen</td>
              <td><a name="" id="" className="btn btn-sm btn-primary ms-1" href="#" role="button">MODIFY</a>
                    <a name="" id="" className="btn btn-sm btn-primary ms-1" href="#" role="button">VIEW DETAILS</a>
                    </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>0</td>
              <td>Completed</td>
              <td>
                   <a name="" id="" className="btn btn-sm btn-primary ms-1" href="#" role="button">MODIFY</a>
                    <a name="" id="" className="btn btn-sm btn-primary ms-1" href="#" role="button">VIEW DETAILS</a>
               
               </td>
            </tr>
          </tbody>
        </table>


        </div>
      </div>
      </div>
      </div>
    );
  }
}
