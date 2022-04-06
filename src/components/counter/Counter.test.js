import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Counter from "components/counter/Counter";

afterEach(cleanup);

it("increments counter", () => {
  render(<Counter />);

  fireEvent.click(screen.getByTestId("button-up"));

  expect(screen.getByTestId("counter")).toHaveTextContent("1");
});

it("decrements counter", () => {
  render(<Counter />);

  fireEvent.click(screen.getByTestId("button-up"));
  fireEvent.click(screen.getByTestId("button-down"));

  expect(screen.getByTestId("counter")).toHaveTextContent("0");
});
