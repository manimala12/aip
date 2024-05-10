import { render, screen, fireEvent } from "@testing-library/react";
import Footer from ".";
import { BrowserRouter } from "react-router-dom";

describe("Home component", () => {
  it("should render correctly when user navigates to the footer", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    expect(screen.getByText("Agreement In Principle")).toBeInTheDocument();
    expect(
      screen.getByText(
        /A home loan eligibility checking website with accuracy and customer satisfaction/i
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Explore")).toBeInTheDocument();
    const linkElement1 = screen.getByText("Home");
    fireEvent.click(linkElement1);
    expect(window.location.pathname).toBe("/");
    const linkElement2 = screen.getByText("About");
    fireEvent.click(linkElement2);
    expect(window.location.pathname).toBe("/about");
    const linkElement3 = screen.getByText("Contact");
    fireEvent.click(linkElement3);
    expect(window.location.pathname).toBe("/contact");
    expect(screen.getByText("Have a question?")).toBeInTheDocument();
    expect(screen.getByText("+919876543210")).toBeInTheDocument();
    expect(screen.getByText("support@aip.co")).toBeInTheDocument();
    expect(
      screen.getByText(
        /© 2024 Copyright | All rights reserved for the designer/i
      )
    ).toBeInTheDocument();
    const iconElement1 = screen.getByTestId("YouTubeIcon");
    expect(iconElement1).toBeInTheDocument();
    const iconElement2 = screen.getByTestId("TelegramIcon");
    expect(iconElement2).toBeInTheDocument();
    const iconElement3 = screen.getByTestId("GitHubIcon");
    expect(iconElement3).toBeInTheDocument();
    const iconElement4 = screen.getByTestId("LinkedInIcon");
    expect(iconElement4).toBeInTheDocument();
  });
});
