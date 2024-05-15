import { render, screen } from "@testing-library/react";
import AboutPageImage from ".";
import { BrowserRouter } from "react-router-dom";

describe("Home component", () => {
  it("should render the image correctly when user navigates to the about page", () => {
    render(
      <BrowserRouter>
        <AboutPageImage />
      </BrowserRouter>
    );
    expect(screen.getByText("JBS,")).toBeInTheDocument();
    expect(
      screen.getByText("Where Your Dreams Find Security.")
    ).toBeInTheDocument();
  });
});
