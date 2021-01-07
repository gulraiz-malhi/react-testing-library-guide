import React from "react";
import {
  render,
  screen,
  fireEvent,
  cleanup,
  waitFor
} from "@testing-library/react";
import axiosMock from "axios";
import TestAxios from "../components/TestAxios";

jest.mock("axios");

describe("<TestAxios />", () => {
  afterEach(() => {
    // jest.clearAllMocks();
    cleanup();
  });

  it("should display a loading text", () => {
    const { getByTestId } = render(<TestAxios />);

    expect(getByTestId("loading")).toHaveTextContent("Loading...");
  });

  it("should load and display the data", async () => {
    const url = "/greeting";
    const { getByTestId } = render(<TestAxios url={url} />);

    axiosMock.get.mockResolvedValueOnce({
      data: { greeting: "hello there", total: 10 },
    });

    fireEvent.click(getByTestId("fetch-data"));

    const greetingData = await screen.findByTestId("show-data");
    expect(greetingData).toHaveTextContent("10");

    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(url);
    
  });

  // it('should load and display the data 2', async () => {
  //   const url = '/greeting'
  //   const { getByTestId } = render(<TestAxios url={url} />)

  //   axiosMock.get.mockResolvedValueOnce({
  //     data: { greeting: 'hello there', total: 10 },
  //   })

  //   fireEvent.click(getByTestId('fetch-data'))

  //   const greetingData = await screen.findByTestId('show-data')

  //   expect(axiosMock.get).toHaveBeenCalledTimes(1)
  //   expect(axiosMock.get).toHaveBeenCalledWith(url)
  //   expect(greetingData).toHaveTextContent('10')
  // })
});
