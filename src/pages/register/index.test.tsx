import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Register from ".";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

describe("Register component", () => {
  it("should render correctly when user navigates to the register page", () => {
    const reduxMockStore = configureMockStore();
    const initialState = { auth: { isAuthenticated: false } };
    const store = reduxMockStore(initialState);
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Register />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText("Register Here!!")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /register/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/Cancel/i)).toBeInTheDocument();
    expect(screen.getByText(/Already have an account?/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/user name/i)).toBeInTheDocument();
    const linkElement = screen.getByText("Login Here.");
    fireEvent.click(linkElement);
    expect(window.location.pathname).toBe("/login");
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByLabelText("Confirm Password")).toBeInTheDocument();
  });
  it("renders checkbox correctly", () => {
    const reduxMockStore = configureMockStore();
    const initialState = { auth: { isAuthenticated: false } };
    const store = reduxMockStore(initialState);
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Register />
        </BrowserRouter>
      </Provider>
    );
    const checkboxElement = screen.getByLabelText(
      "I agree to the terms & conditions."
    );
    expect(checkboxElement).toBeInTheDocument();
    expect(checkboxElement).not.toBeChecked();
  });

  it("changes checkbox state when clicked", () => {
    const reduxMockStore = configureMockStore();
    const initialState = { auth: { isAuthenticated: false } };
    const store = reduxMockStore(initialState);
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Register />
        </BrowserRouter>
      </Provider>
    );
    const checkboxElement = screen.getByLabelText(
      "I agree to the terms & conditions."
    );
    fireEvent.click(checkboxElement);
    expect(checkboxElement).toBeChecked();
  });
});
