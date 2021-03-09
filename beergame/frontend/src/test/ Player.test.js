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
import PlayerView from "../components/PlayerView";

it("player view renders without crashing", () => {
  renderWithRouter(<PlayerView />);
  expect(screen.getByText(/Join New Game/i)).toBeInTheDocument();
});



test("navigating to choose role  page using button", async () => {
  renderWithRouter(<App/>,{route:'/player/'})

    const leftClick = { button: 0 };
    userEvent.click(screen.getByText(/Choose Role/i), leftClick);
    expect(screen.getByText(/Select Role/i)).toBeInTheDocument(); 
});

test("navigating to main game from choose role", async () => {
    renderWithRouter(<App/>,{route:'/player/chooserole/'})
  
      const leftClick = { button: 0 };
      userEvent.click(screen.getByText(/Play Game/i), leftClick);
      expect(screen.getByText(/For Week/i)).toBeInTheDocument(); 
  });
  

  test("navigating to unknown page", async () => {
    renderWithRouter(<App/>,{route:'/randompage'})

    expect(screen.getByText(/NO MATCH/i)).toBeInTheDocument(); 
});
  

const renderWithRouter = (ui, { route = "/player/" } = {}) => {
  window.history.pushState({}, "11 ", route);

  return render(ui, { wrapper: BrowserRouter });
};
