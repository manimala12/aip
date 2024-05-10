import { render, screen } from "@testing-library/react";
import HomePageCards from ".";
import { BrowserRouter } from "react-router-dom";

describe("Home component", () => {
  it("should render correctly when user navigates to the mortgage calculators", () => {
    render(
      <BrowserRouter>
        <HomePageCards />
      </BrowserRouter>
    );
    expect(screen.getByText("Promotions")).toBeInTheDocument();
    expect(screen.getByText("Personal Loan")).toBeInTheDocument();
    expect(screen.getByText("Home Loan")).toBeInTheDocument();
    expect(screen.getByText("Education Loan")).toBeInTheDocument();
    const buttons = screen.getAllByRole("button", {
      name: /apply/i,
    });
    buttons.forEach((button) => expect(button).toBeInTheDocument());
    expect(
      screen.getByText(
        /Invest in your future with our educational loans - paving the way to academic success and brighter tomorrows./i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Unlock your dreams with our flexible personal loans - tailored to fit your needs, empowering you to achieve your aspirations with ease/i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Unlock the door to your dream home with our bank Home Loans - Where your aspirations meet affordability./i
      )
    ).toBeInTheDocument();
  });
});
