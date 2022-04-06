import {
  cleanup,
  fireEvent, render, screen
} from "@testing-library/react";
import React from "react";
import DelayCounter from "./DelayCounter";

afterEach(cleanup);

it("increments counter after 0.5s", async () => {
  render(<DelayCounter />);

  fireEvent.click(screen.getByTestId("button-up"));

  const counter = await screen.findByText("1");

  expect(counter).toHaveTextContent("1");
});
