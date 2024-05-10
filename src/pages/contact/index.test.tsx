import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Contact from ".";

describe("Contact component", () => {
  it("should render correctly when user navigates to the contact page", () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );
    expect(
      screen.getByText("Have any questions? We'd love to hear from you.")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Whether you have a question about loans, fees or anything else, our team is ready to answer all your questions./
      )
    ).toBeInTheDocument();
    expect(screen.getByText("CONTACT US")).toBeInTheDocument();
    expect(screen.getByText("or connect through:")).toBeInTheDocument();
    const iconElement1 = screen.getByTestId("YouTubeIcon");
    expect(iconElement1).toBeInTheDocument();
    const iconElement2 = screen.getByTestId("TelegramIcon");
    expect(iconElement2).toBeInTheDocument();
    const iconElement3 = screen.getByTestId("GitHubIcon");
    expect(iconElement3).toBeInTheDocument();
    const iconElement4 = screen.getByTestId("LinkedInIcon");
    expect(iconElement4).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/full name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/message/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/subject/i)).toBeInTheDocument();
  });
});
