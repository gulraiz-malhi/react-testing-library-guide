import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  screen
} from "@testing-library/react";
import TestAsync from "../components/TestAsync";

describe("<TestAsync />", () => {
  afterEach(cleanup);
  it("increments counter after 0.5s", async () => {
    render(<TestAsync />);

    fireEvent.click(screen.getByTestId("button-up"));

    const counter = await screen.findByText("1");

    expect(counter).toHaveTextContent("1");
  });
});
