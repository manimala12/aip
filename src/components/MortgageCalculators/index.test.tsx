import { render, screen } from "@testing-library/react";
import MortgageCalculator from ".";
import { BrowserRouter } from "react-router-dom";

describe("Home component", () => {
  it("should render correctly when user navigates to the mortgage calculators", () => {
    render(
      <BrowserRouter>
        <MortgageCalculator />
      </BrowserRouter>
    );
    expect(screen.getByText("Mortgage calculators")).toBeInTheDocument();
    const button1 = screen.getByRole("button", {
      name: /First time buyer calculator/i,
    });
    expect(button1).toBeInTheDocument();
    const button2 = screen.getByRole("button", {
      name: /Home mover calculator/i,
    });
    expect(button2).toBeInTheDocument();
    const button3 = screen.getByRole("button", {
      name: /Remortgage calculator/i,
    });
    expect(button3).toBeInTheDocument();
    // expect(
    //   screen.getByText(
    //     /Looking to buy your first property and haven’t been named on a mortgage before? A first-time buyer mortgage could be the right option for you. For joint applications, you can apply if at least one of you is a first-time buyer. Use our first-time buyer calculator/i
    //   )
    // ).toBeInTheDocument();
    expect(
      screen.getByText(
        /If you’re ready to move home and you’re looking for a new mortgage deal, our home mover mortgage should suit your needs. You can use our home mover calculator to find out more about our mortgage options/i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /If you have a mortgage with a different provider, moving to a Halifax mortgage could save you money on your monthly repayments. Enter some details about your current mortgage into our remortgage calculato/i
      )
    ).toBeInTheDocument();
  });
});
