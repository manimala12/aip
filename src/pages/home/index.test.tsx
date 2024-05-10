import { render, screen } from "@testing-library/react";
import Home from ".";
import { BrowserRouter } from "react-router-dom";

describe("Home component", () => {
  it("should render correctly when user open the url", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(screen.getByText("Check Your Loan Eligibilty")).toBeInTheDocument();
    expect(
      screen.getByText(
        /Congratulations on taking the first step towards your dream home! We believe that everyone deserves the opportunity to own their dream home/
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Explore")).toBeInTheDocument();
    expect(screen.getByText("Register")).toBeInTheDocument();
  });
});
