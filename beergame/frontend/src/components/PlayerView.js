import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PlayerView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.title = "Player View";
  }

  render() {
    return (

        <div className="container px-4">
        <div className="row gx-5">
          <div className="col">
            <div className="p-3 border bg-light">
              <h5>Join New Game: </h5>
              <form>
              <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Unique Code</label>
              <input
                type="email"
                className="form-control"
                id="exampleUniqueCode"
                aria-describedby="emailHelp"
                name="uniqueCode"
              />

            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
              />
            </div>
            <Link className="btn btn-primary" to="/player/chooserole" >Choose Role</Link>
              </form>   
            </div>
          </div>


        
          <div className="col">
          <div className="p-3 border bg-light">
          <h5>Current Game: </h5>
          <table className="table">
        <thead>
          <tr>
            <th scope="col">Game ID</th>
            <th scope="col">Role</th>
            <th scope="col">Option</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Manufacturer</td>
            <td><Link className="btn btn-primary btn-sm" to ='/play'>Join</Link></td>

          </tr>
        </tbody>
      </table>
      </div>
      <Link to="/creategame">Player Create Game</Link>
          </div>
        </div>
      </div>
    );
  }
};   
