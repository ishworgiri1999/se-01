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

import PlayGameView from "../components/PlayGame";

it("PLAY GAME renders without crashing", () => {
  const div11 = document.createElement("div");
  ReactDOM.render(<PlayGameView />, div11);
});

it("Default Page contains Text", () => {
  const { getByText, getbyLabelText } = render(<PlayGameView />);

  getByText("For Week #1");
});

it("renders navbar containing Home text ", () => {
  const root = document.createElement("div");
  ReactDOM.render(<App />, root);

  expect(root.querySelector("nav").textContent).toMatch("Home");
});

// app.test.js
test('navigating to login page', () => {
    renderWithRouter(<App />)
    expect(screen.getByText(/Login/i)).toBeInTheDocument()
  
    const leftClick = { button: 0 }
    userEvent.click(screen.getByText(/Login/i), leftClick)
  
    expect(screen.getByText(/Email address/i)).toBeInTheDocument()
  })

  test('navigating to signup page', () => {
    renderWithRouter(<App />)
    expect(screen.getByText(/Signup/i)).toBeInTheDocument()
  
    const leftClick = { button: 0 }
    userEvent.click(screen.getByText(/Signup/i), leftClick)
  
    expect(screen.getByText(/Full Name/i)).toBeInTheDocument()
  })


  test('navigating to about page', () => {
    renderWithRouter(<App />)
    expect(screen.getByText(/About/i)).toBeInTheDocument()
  
    const leftClick = { button: 0 }
    userEvent.click(screen.getByText(/About/i), leftClick)
  
    expect(screen.getByText(/about us/i)).toBeInTheDocument()
  })



  

const renderWithRouter = (ui, { route = '/' } = {}) => {
    window.history.pushState({}, 'Test page', route)
  
    return render(ui, { wrapper: BrowserRouter })
  }

