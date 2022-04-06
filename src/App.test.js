import { render, screen, cleanup } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

it("should take a snapshot", () => {
  const { asFragment } = render(<App />);

  expect(asFragment(<App />)).toMatchSnapshot();
});

it("should equal to 0", () => {
  render(<App />);
  expect(screen.getByTestId("counter")).toHaveTextContent(0);
});

it("should be enabled", () => {
  render(<App />);
  expect(screen.getByTestId("button-up")).not.toHaveAttribute("disabled");
});

it("should be disabled", () => {
  render(<App />);
  expect(screen.getByTestId("button-down")).toBeDisabled();
});
