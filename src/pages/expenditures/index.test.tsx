import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Expenditures from "./";
import { getStore } from "../../custom-redux/store";

let mockStore = getStore();

describe("Expenditures", () => {
  const renderComponent = () => {
    mockStore = getStore();
    return render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <Expenditures />
        </BrowserRouter>
      </Provider>
    );
  };
  it("renders form with all elements", () => {
    renderComponent();

    expect(
      screen.getByText("Do you have any active loans?")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Do you have any vehicle loans?")
    ).toBeInTheDocument();
    expect(screen.getByText("Number of children")).toBeInTheDocument();
    expect(
      screen.getByText("Do you have any other expenditures")
    ).toBeInTheDocument();
    expect(screen.getByText("Review")).toBeInTheDocument();
  });

  //   it("allows entering values in form fields", () => {
  //     renderComponent();
  //     fireEvent.click(screen.getByLabelText("Yes"));
  //     fireEvent.change(screen.getByPlaceholderText("Enter your loan EMI"), {
  //       target: { value: "5000" },
  //     });
  //     fireEvent.change(
  //       screen.getByPlaceholderText("Enter your loan outstanding amount"),
  //       {
  //         target: { value: "20000" },
  //       }
  //     );

  //     fireEvent.click(screen.getByLabelText("Yes"));
  //     fireEvent.change(screen.getByPlaceholderText("Enter your vehicle EMI?"), {
  //       target: { value: "3000" },
  //     });
  //     fireEvent.change(
  //       screen.getByPlaceholderText("Enter your vehicle outstanding amount"),
  //       { target: { value: "15000" } }
  //     );

  //     fireEvent.change(screen.getByPlaceholderText("Enter number of children"), {
  //       target: { value: "2" },
  //     });
  //     fireEvent.change(
  //       screen.getByPlaceholderText("Enter your children school fee"),
  //       { target: { value: "10000" } }
  //     );

  //     fireEvent.click(screen.getByLabelText("Yes"));
  //     fireEvent.change(
  //       screen.getByPlaceholderText("Enter your other expenses amount"),
  //       { target: { value: "2000" } }
  //     );

  //     // Add more assertions for other form fields if needed
  //   });

  it("submits the form when Review button is clicked", () => {
    renderComponent();

    fireEvent.click(screen.getByText("Review"));

    // Add assertions or mocks for form submission logic
  });
});
