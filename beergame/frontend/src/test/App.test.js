import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "../components/App";
import { createMemoryHistory } from "history";
import userEvent from '@testing-library/user-event'

import {
  render,
  fireEvent,
  waitFor,
  screen,
  getByText,
} from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";
import { act } from "react-dom/test-utils";
import { MemoryRouter, Router, BrowserRouter } from "react-router-dom";


it("renders without crashing", () => {


  const div11 = document.createElement("div");
  ReactDOM.render(<App />, div11);
});



it("renders landing page correctly", () => {
  const { getByText, getbyLabelText}= render(<App/>)

  getByText("Welcome to Beer Game");
});


it("app  renders navbar containing Home text ", () => {
  
  const root = document.createElement("div");
  ReactDOM.render(<App />, root);

  expect(root.querySelector("nav").textContent).toMatch("Home");
});



// app.test.js
test('navigating to login page using navbar ', () => {
  renderWithRouter(<App />)
  expect(screen.getByText(/Login/i)).toBeInTheDocument()

  const leftClick = { button: 0 }
  userEvent.click(screen.getByText(/Login/i), leftClick)

  expect(screen.getByText(/Email address/i)).toBeInTheDocument()
})

test('navigating to about page', () => {
  renderWithRouter(<App />)
  expect(screen.getByText(/About/i)).toBeInTheDocument()

  const leftClick = { button: 0 }
  userEvent.click(screen.getByText(/About/i), leftClick)

  expect(screen.getByText(/about us/i)).toBeInTheDocument()
})


test("navigating to create game  page using button", async () => {
  renderWithRouter(<App/>,{route:'/instructor/'})
  expect(screen.getByText(/Create Game/i)).toBeInTheDocument();

  const leftClick = { button: 0 };
  userEvent.click(screen.getByText(/Create Game/i), leftClick);
  expect(screen.getByText(/Fill The Details/i)).toBeInTheDocument();
});





const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route)

  return render(ui, { wrapper: BrowserRouter })
}





