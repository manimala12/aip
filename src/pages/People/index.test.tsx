import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import OurPeople from ".";

describe("Home component", () => {
  it("should render the image correctly when user navigates to the about page", () => {
    render(
      <BrowserRouter>
        <OurPeople />
      </BrowserRouter>
    );
    expect(screen.getByText("Our people")).toBeInTheDocument();
    expect(
      screen.getByText(
        /Zara supports her team to give excellent customer service./
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Christin works in branch helping our customers./)
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Laura supports our customers with their mortgage needs./
      )
    ).toBeInTheDocument();
  });
});
