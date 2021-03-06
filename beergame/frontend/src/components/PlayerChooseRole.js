import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PlayerChooseRole extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.title = "Player Choose Role View";
  }

  render() {
    return (
      <div className="container">
        <div className="bg-light p-5 rounded">
         

        <h3>Fill The Details</h3>
        <form method="POST" action="/api/login">
            <div className="mb-3">
            <label htmlFor="demandpattern" className="form-label">
                Select Role
              </label>
            <select id="demandpattern" className="form-select" name="pattern" aria-label="Default select example">
  <option value="0">Open this select menu</option>
  <option value="1">Manufacturer</option>
  <option value="2">Distributor</option>
  <option value="3">Wholesaler</option>
  <option value="4">Retailer</option>
</select>
</div>

            <button type="submit" className="btn btn-primary">
              SUBMIT 
            </button>
            button will not work click below for now.
          </form>

          <Link name="" id="" className="btn btn-primary" to="/play" role="button">Play Game</Link>
        

        </div>
      </div>
    );
  }
}
