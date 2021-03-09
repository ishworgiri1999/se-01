import React, { Component } from "react";

export default class Signup extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.title = "Signup Page";
  }

  render() {
    return (
      <div className="container">
        <div className="bg-light p-5 rounded">
          <form method="POST" action="/api/signup">
          <div className="mb-3">
              <label htmlFor="namehelp" className="form-label">
Full Name              </label>
              <input
                type="email"
                className="form-control"
                id="namehelp"
                aria-describedby="emailHelp"
                name="name"
              />
             
            </div>

            <div className="mb-3">
              <div class="form-group">
                <label for="selectroles">Choose Role</label>
                <select multiple class="form-control" name="role" id="selectroles">
                  <option disabled> Choose Role</option>
                  <option>Instructor</option>
                  <option>Player </option>
                </select>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
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

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
