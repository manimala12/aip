import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Faq from ".";

describe("FAQ Component", () => {
  it("renders faqs in an accordion", () => {
    render(<Faq />);
    expect(screen.getByText("FAQs")).toBeInTheDocument();

    const accordionButton = screen.getByText(
      "What can I do to secure a mortgage rate with you?"
    );
    fireEvent.click(accordionButton);
    expect(
      screen.getByText(
        /If you are not already a mortgage customer with us, you must complete a full mortgage application, either online or with a Mortgage Adviser, to secure a mortgage rate./i
      )
    ).toBeInTheDocument();

    // fireEvent.click(accordionButton);
    // expect(
    //   screen.queryByText(
    //     /If you are not already a mortgage customer with us, you must complete a full mortgage application, either online or with a Mortgage Adviser, to secure a mortgage rate./i
    //   )
    // ).not.toBeInTheDocument();
  });
});
