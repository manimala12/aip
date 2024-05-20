import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Review from ".";
import { getStore } from "../../custom-redux/store";
import { BrowserRouter } from "react-router-dom";

let mockStore = getStore();
describe("Review Component", () => {
  const renderComponent = () => {
    mockStore = getStore();
    return render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <Review />
        </BrowserRouter>
      </Provider>
    );
  };
  it("renders review sections correctly", () => {
    renderComponent();
    // Check if the component renders the Agreement In Principle section
    expect(screen.getByText("Agreement In Principle")).toBeInTheDocument();
    expect(screen.getByText("Review Your Details")).toBeInTheDocument();

    // You can add more assertions to check if all sections are rendered correctly
  });

  it("calls navigate when edit button is clicked", () => {
    renderComponent();

    // Mock the navigate function
    const navigate = jest.fn();
    const editButton = screen.getByText(/Edit/i); // Update this with your actual edit button text

    fireEvent.click(editButton);

    // Check if navigate function is called
    expect(navigate).toHaveBeenCalled();
  });

  // Add more test cases as needed...
});
