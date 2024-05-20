import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import Login from ".";

describe("Register component", () => {
  it("should render correctly when user navigates to the register page", () => {
    const reduxMockStore = configureMockStore();
    const initialState = { auth: { isAuthenticated: false } };
    const store = reduxMockStore(initialState);
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText("Login Here!!")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
    expect(screen.getByText(/Cancel/i)).toBeInTheDocument();
    expect(screen.getByText(/Don't have an account?/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    const linkElement = screen.getByText("Register Here");
    fireEvent.click(linkElement);
    expect(window.location.pathname).toBe("/register");
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
  });
});
