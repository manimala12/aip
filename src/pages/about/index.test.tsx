import { render, screen } from "@testing-library/react";
import About from ".";
import { BrowserRouter } from "react-router-dom";

describe("Home component", () => {
  it("should render correctly when user navigates to the footer", () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
    expect(screen.getByText("Who we are")).toBeInTheDocument();
    expect(
      screen.getByText(
        /At JBS, it always has been and always will be, all about people. We know that a mortgage isn’t just a mortgage, it’s about you and your family living in your dream house./i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText("Everyone should have a place to call home")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Having a safe and settled home is the foundation on which people can build a decent life and help to build successful communities. Together with Crisis, we are working towards ending homelessness through a programme of activity including fundraising and volunteering. Donate to Crisis/i
      )
    ).toBeInTheDocument();
  });
});
