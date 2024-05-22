import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Result from ".";
import { getStore } from "../../custom-redux/store";

let mockStore = getStore();

describe("Result", () => {
  const renderComponent = () => {
    mockStore = getStore();
    return render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <Result />
        </BrowserRouter>
      </Provider>
    );
  };
  it("renders success message when result is SUCCESS", () => {
    renderComponent();
    mockStore.dispatch({ type: "SET_RESULT", payload: "SUCCESS" });
    mockStore.dispatch({ type: "SET_ROLL_NUMBER", payload: 123 });
    mockStore.dispatch({
      type: "SET_LOAN_DETAILS",
      payload: {
        propertyValue: 2000000,
        deposit: 500000,
        loanDuration: "10 years",
      },
    });
    mockStore.dispatch({ type: "SET_AUTH_EMAIL", payload: "test@example.com" });

    expect(screen.getByText("Congratulations!!!")).toBeInTheDocument();
    expect(
      screen.getByText("Your mortgage reference / roll number is 123")
    ).toBeInTheDocument();
    expect(
      screen.getByText("We've eamiled a copy to test@example.com")
    ).toBeInTheDocument();
  });

  it("renders failure message when result is FAILURE", () => {
    renderComponent();

    mockStore.dispatch({ type: "SET_RESULT", payload: "FAILURE" });
    mockStore.dispatch({ type: "SET_ROLL_NUMBER", payload: 456 });

    expect(
      screen.getByText("We won't be able to help this time..")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Your mortgage reference / roll number is 456")
    ).toBeInTheDocument();
  });

  it("renders partial message when result is PARTIAL", () => {
    renderComponent();

    mockStore.dispatch({ type: "SET_RESULT", payload: "PARTIAL" });
    mockStore.dispatch({ type: "SET_ROLL_NUMBER", payload: 789 });
    mockStore.dispatch({ type: "SET_AUTH_EMAIL", payload: "test@example.com" });

    expect(
      screen.getByText(/It looks like we could help you.../i)
    ).toBeInTheDocument();
    expect(
      screen.getByText("Your mortgage reference / roll number is 789")
    ).toBeInTheDocument();
    expect(
      screen.getByText("We've eamiled a copy to test@example.com")
    ).toBeInTheDocument();
  });
});
