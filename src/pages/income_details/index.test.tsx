import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import IncomeDetails from "./";
import { getStore } from "../../custom-redux/store";

let mockStore = getStore();

describe("IncomeDetails", () => {
  const renderComponent = () => {
    mockStore = getStore();
    return render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <IncomeDetails />
        </BrowserRouter>
      </Provider>
    );
  };
  it("renders form with all elements", () => {
    renderComponent();

    expect(screen.getByText("Type of Employement")).toBeInTheDocument();
    expect(screen.getByText("Contract Type")).toBeInTheDocument();
    expect(screen.getByText("Occupation")).toBeInTheDocument();
    expect(screen.getByText("Name of the Employer")).toBeInTheDocument();
    expect(screen.getByText("How Often do you get paid")).toBeInTheDocument();
    expect(screen.getByText("How much will you earn")).toBeInTheDocument();
    expect(screen.getByText("Continue")).toBeInTheDocument();
  });

  it("allows entering values in form fields", () => {
    renderComponent();

    fireEvent.click(screen.getByLabelText("Salaried"));
    fireEvent.click(screen.getByLabelText("Full Time"));

    // const occupationSelect = screen.getByPlaceholderText("Occupation");
    // fireEvent.change(occupationSelect, { target: { value: "Teacher" } });

    // const employerInput = screen.getByPlaceholderText("Name of the Employer");
    // fireEvent.change(employerInput, { target: { value: "ABC Corp" } });

    // // const payFrequencySelect = screen.getByLabelText(
    // //   "How Often do you get paid"
    // // );
    // // fireEvent.change(payFrequencySelect, { target: { value: "4" } });

    // const earningInput = screen.getByPlaceholderText("How much will you earn");
    // fireEvent.change(earningInput, { target: { value: "50000" } });

    // Add more assertions for other form fields if needed
  });

  it("submits the form when Continue button is clicked", () => {
    renderComponent();

    fireEvent.click(screen.getByText("Continue"));

    // Add assertions or mocks for form submission logic
  });
});
