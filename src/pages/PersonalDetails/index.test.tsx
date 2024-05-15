import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import PersonalDetails from ".";
import { getStore } from "../../custom-redux/store";

let mockStore = getStore();

describe("PersonalDetails", () => {
  const renderComponent = () => {
    mockStore = getStore();
    return render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <PersonalDetails />
        </BrowserRouter>
      </Provider>
    );
  };
  it("should render the form with all elements", () => {
    renderComponent();

    expect(screen.getByText("Full Name")).toBeInTheDocument();
    expect(screen.getByText("PAN Card number")).toBeInTheDocument();
    expect(screen.getByText("Gender")).toBeInTheDocument();
    expect(screen.getByText("Mobile Number")).toBeInTheDocument();
    expect(screen.getByText("Address")).toBeInTheDocument();
    expect(screen.getByText("Continue")).toBeInTheDocument();
  });

  it("should allow entering values in form fields", async () => {
    renderComponent();

    //   const fullNameInput = screen.getByPlaceholderText("Full Name");
    //   fireEvent.change(fullNameInput, { target: { value: "John Doe" } });

    //   const panNumberInput = screen.getByPlaceholderText("PAN Card number");
    //   fireEvent.change(panNumberInput, { target: { value: "ABCDE1234F" } });

    const genderMaleRadio = screen.getByLabelText("Male");
    fireEvent.click(genderMaleRadio);

    const genderFemaleRadio = screen.getByLabelText("Female");
    fireEvent.click(genderFemaleRadio);

    // const mobileNumberInput = screen.getByPlaceholderText("Mobile Number");
    // fireEvent.change(mobileNumberInput, { target: { value: "9876543210" } });

    // const addressInput = screen.getByPlaceholderText("Address");
    // fireEvent.change(addressInput, { target: { value: "123 Street, City" } });
  });

  it("should submit the form when Continue button is clicked", async () => {
    renderComponent();

    fireEvent.click(screen.getByText("Continue"));
  });
});
