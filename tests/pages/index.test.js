import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Homepage from "pages";

describe("Homepage", () => {
  test("should render custom button components", () => {
    render(<Homepage />);
    expect(
      screen.getByRole("button", { name: /click here!/i })
    ).toBeInTheDocument();
  });
});
