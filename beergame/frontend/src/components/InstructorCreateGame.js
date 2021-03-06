import React, { Component } from "react";

export default class InstructorCreateGame extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.title = "Instructor Creare Game View";
  }

  render() {
    return (
      <div className="container">
        <div className="bg-light p-5 rounded">
          <h3>Fill The Details</h3>
          <form method="POST" action="/api/login">
            <div className="mb-3">
              <div className="form-check ">
                <input
                  className="form-check-input"
                  name="wholesalerpresent"
                  type="checkbox"
                  id="check1" 
                />
                <label className="form-check-label" for="check1">
                  Enable Wholesaler
                </label>
              </div>

              <div className="form-check ">
                <input
                  className="form-check-input"
                  name="retailerpresent"
                  type="checkbox"
                  id="check2" 
                />
                <label className="form-check-label" for="check2">
                  Enable Retailer
                </label>
              </div>
              <div className="mb-3">
                <div className="form-check ">
                  <input
                    className="form-check-input"
                    name="shareinfo"
                    type="checkbox"
                    id="check3" 
                  />
                  <label className="form-check-label" for="check3">
                    Share Activity to Other Players
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword11" className="form-label">
                Week Len
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputPassword11"
                name="weeklen"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword11" className="form-label">
                Backorder Cost
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputPassword11"
                name="backordercost"
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

            <div className="mb-3">
              <label htmlFor="demandpattern" className="form-label">
                Select Demand Pattern
              </label>
              <select
                id="demandpattern"
                className="form-select"
                name="pattern"
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
