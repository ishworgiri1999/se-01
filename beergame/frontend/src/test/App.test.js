import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "../components/App";
import { render, fireEvent, waitFor, screen, getByText } from '@testing-library/react'

import "@testing-library/jest-dom/extend-expect"



it("renders without crashing", () => {


  const div11 = document.createElement("div");
  ReactDOM.render(<App />, div11);
});



it("renders landing page correctly", () => {
  const { getByText, getbyLabelText}= render(<App/>)

  getByText("Welcome to Beer Game");
});


it("renders navbar containing Home text ", () => {
  
  const root = document.createElement("div");
  ReactDOM.render(<App />, root);

  expect(root.querySelector("nav").textContent).toMatch("Home");
});



// it("renders landing page correctly", () => {
//   const root= render(<App/>)
//   var button = root.getByText("Player")
//   fireEvent.click(button);
//   root.getByText("Choose Role");


// });





