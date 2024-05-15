import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import LoanDetails from ".";
import { getStore } from "../../custom-redux/store";

// Mocking the Redux store
let mockStore = getStore();

describe("LoanDetails", () => {
  const renderComponent = () => {
    mockStore = getStore();
    return render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <LoanDetails />
        </BrowserRouter>
      </Provider>
    );
  };

  it("should render the form with all elements", () => {
    renderComponent();

    expect(screen.getByText("Agreement In Principle")).toBeInTheDocument();
    expect(screen.getByText("Your Loan Details")).toBeInTheDocument();
    expect(
      screen.getByText("How many people will be applying for the mortgage?")
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Just me")).toBeInTheDocument();
    expect(screen.getByLabelText("Me and someone else")).toBeInTheDocument();
    expect(
      screen.getByText("Firstly, what would you like to do?")
    ).toBeInTheDocument();

    expect(screen.getByText("Property Value")).toBeInTheDocument();
    expect(screen.getByText("Deposit")).toBeInTheDocument();
    expect(screen.getByText("Desired loan duration")).toBeInTheDocument();
    expect(screen.getByText("Continue")).toBeInTheDocument();
  });

  // it("should allow selecting an option from the Select component", async () => {
  //   renderComponent();
  //   fireEvent.change(screen.getByText("Select an option"), {
  //     target: { value: "NEW_HOME" },
  //   });

  //   await waitFor(() => {
  //     expect(screen.getByText("Select an option").value).toBe("NEW_HOME");
  //   });
  // });

  it("should submit the form when Continue button is clicked", async () => {
    renderComponent();
    fireEvent.click(screen.getByText("Continue"));

    // Add assertions or mocks for form submission logic
  });
});
