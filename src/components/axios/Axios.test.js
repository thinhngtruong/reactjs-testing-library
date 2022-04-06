import { fireEvent, render, screen } from "@testing-library/react";
import axiosMock from "axios";
import React from "react";
import Axios from "./Axios";

jest.mock("axios");

it("should display a loading text", () => {
  render(<Axios />);

  expect(screen.getByTestId("loading")).toHaveTextContent("Loading...");
});

it("should load and display the data", async () => {
  const url = "/greeting";
  render(<Axios url={url} />);

  axiosMock.get.mockResolvedValueOnce({
    data: { greeting: "hello there" },
  });

  fireEvent.click(screen.getByTestId("fetch-data"));

  const greetingData = await screen.findByTestId("show-data");

  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(axiosMock.get).toHaveBeenCalledWith(url);
  expect(greetingData).toHaveTextContent("hello there");
});
