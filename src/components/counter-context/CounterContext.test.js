import React from "react";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import CounterProvider, {
  CounterContext,
  Counter,
} from "components/counter-context/CounterContext";

const renderWithContext = (component) => {
  return {
    ...render(
      <CounterProvider value={CounterContext}>{component}</CounterProvider>
    ),
  };
};

afterEach(cleanup);

it("checks if initial state is equal to 0", () => {
  renderWithContext(<Counter />);
  expect(screen.getByTestId("counter")).toHaveTextContent("0");
});

it("increments the counter", () => {
  renderWithContext(<Counter />);

  fireEvent.click(screen.getByTestId("button-up"));
  expect(screen.getByTestId("counter")).toHaveTextContent("1");
});

it("decrements the counter", () => {
  renderWithContext(<Counter />);

  fireEvent.click(screen.getByTestId("button-down"));
  expect(screen.getByTestId("counter")).toHaveTextContent("-1");
});
