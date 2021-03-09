import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "../components/App";
import { createMemoryHistory } from "history";
import userEvent from "@testing-library/user-event";

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
import InstructorView from "../components/InstructorView";


it("instructor view renders without crashing", () => {
  renderWithRouter(<InstructorView />);
  expect(screen.getByText(/Create Game/i)).toBeInTheDocument();
});



it("instructor view renders without crashing", () => {
  renderWithRouter(<InstructorView />);
  expect(screen.getByText(/Create Game/i)).toBeInTheDocument();



});


test("navigating to modify  page using button", async () => {
  renderWithRouter(<App/>,{route:'/instructor/'})
  var one = document.querySelectorAll("a[href*='/game/modify/']")
  one.forEach(element => {
    const leftClick = { button: 0 };
    userEvent.click(element, leftClick);
    expect(screen.getByText(/EDIT GAME/i)).toBeInTheDocument();
    
  });

 
});

test("navigating to view  page using button", async () => {
  renderWithRouter(<App/>,{route:'/instructor/'})
  var one = document.querySelectorAll("a[href*='/game/details/']")
  one.forEach(element => {
    const leftClick = { button: 0 };
    userEvent.click(element, leftClick);
    expect(screen.getByText(/VIEW GAME/i)).toBeInTheDocument();
    
  });

 
});
  
  


const renderWithRouter = (ui, { route = "/instructor/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(ui, { wrapper: BrowserRouter });
};
