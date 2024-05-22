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
    expect(screen.getByText("Agreement In Principle")).toBeInTheDocument();
    expect(screen.getByText("Review Your Details")).toBeInTheDocument();
  });

  it("calls navigate when edit button is clicked", () => {
    renderComponent();

    const navigate = jest.fn();
    const editButton = screen.getByText(/Edit/i);

    fireEvent.click(editButton);

    expect(navigate).toHaveBeenCalled();
  });
});
