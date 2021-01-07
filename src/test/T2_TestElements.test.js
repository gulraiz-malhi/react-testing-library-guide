import React, { useState, useEffect } from "react";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import TestElements from "../components/TestElements";

describe("<TestElements />", () => {
  afterEach(cleanup);

  it("should equal to 0", () => {
    const { getByTestId } = render(<TestElements />);
    expect(getByTestId("counter")).toHaveTextContent(0);
  });

  it("should be enabled", async () => {
    const { getByTestId } = render(<TestElements />);
    expect(getByTestId("button-up")).not.toHaveAttribute("disabled");
    fireEvent.click(getByTestId("button-up"));
    await expect(getByTestId("counter")).toHaveTextContent("1");
  });

  it("should be disabled", () => {
    const { getByTestId } = render(<TestElements />);
    expect(getByTestId("button-down")).toBeDisabled();
  });
});
