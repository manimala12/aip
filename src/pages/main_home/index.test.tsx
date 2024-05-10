import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MainHome from ".";

describe("Home component", () => {
  it("should render the image correctly when user navigates to the about page", () => {
    render(
      <BrowserRouter>
        <MainHome />
      </BrowserRouter>
    );
    expect(screen.getByText("Welcome!!")).toBeInTheDocument();
    expect(
      screen.getByText(
        /Congratulations on taking the first step towards your dream home!. Let us help turn your homeownership aspirations into reality. Start your journey with us today!/i
      )
    ).toBeInTheDocument();
    const linkElement = screen.getByText(
      "Check your eligibility for home loan"
    );
    fireEvent.click(linkElement);
    expect(window.location.pathname).toBe("/loan-details");
  });
});
