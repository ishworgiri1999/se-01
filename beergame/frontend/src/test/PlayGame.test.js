import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "../components/App";
import { render, fireEvent, waitFor, screen, getByText } from '@testing-library/react'

import "@testing-library/jest-dom/extend-expect"
import PlayGameView from "../components/PlayGame";



it("PLAY GAME renders without crashing", () => {


  const div11 = document.createElement("div");
  ReactDOM.render(<PlayGameView />, div11);
});



it("Default Page contains Text", () => {
  const { getByText, getbyLabelText}= render(<PlayGameView/>)

    getByText("For Week #1")
    
});


it("renders navbar containing Home text ", () => {
  
  const root = document.createElement("div");
  ReactDOM.render(<App />, root);

  expect(root.querySelector("nav").textContent).toMatch("Home");
});



