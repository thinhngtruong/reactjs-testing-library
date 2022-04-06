import React from "react";
import { Router } from "react-router-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import RouterComponent from "components/router/Router";

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return {
    ...render(<Router history={history}>{component}</Router>),
  };
};

it("should render the home page", () => {
  const { container } = renderWithRouter(<RouterComponent />);
  const navbar = screen.getByTestId("navbar");
  const link = screen.getByTestId("home-link");

  expect(container.innerHTML).toMatch("Home page");
  expect(navbar).toContainElement(link);
});

it("should navigate to the about page", () => {
  const { container } = renderWithRouter(<RouterComponent />);

  fireEvent.click(screen.getByTestId("about-link"));

  expect(container.innerHTML).toMatch("About page");
});

it("should navigate to the contact page with the params", () => {
  const { container } = renderWithRouter(<RouterComponent />);

  fireEvent.click(screen.getByTestId("contact-link"));

  expect(container.innerHTML).toMatch("John Doe");
});
