import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import App from "../App";

describe("Take a snapshot", () => {
  afterEach(cleanup);
  it("should take a snapshot", () => {
    const { asFragment } = render(<App />);

    expect(asFragment(<App />)).toMatchSnapshot();
  });
});

describe("Test App", () => {
  it("renders ok", () => {
    render(<App />);
    expect(screen.getByText("Testing 1")).toBeDefined();
    expect(screen.getByLabelText(/example/i)).toBeDefined();
    expect(screen.getByPlaceholderText('username')).toBeDefined();
    expect(screen.getByTestId('custom-element')).toBeDefined();
  });
});
