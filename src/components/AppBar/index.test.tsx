import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { getStore } from "../../custom-redux/store";
import DrawerAppBar from "./";
import configureMockStore from "redux-mock-store";

let mockStore = getStore();
describe("Navbar component", () => {
  const renderComponent = () => {
    mockStore = getStore();
    return render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <DrawerAppBar />
        </BrowserRouter>
      </Provider>
    );
  };
  it("renders bank title", () => {
    renderComponent();
    const titleElement = screen.getByText("JBS Bank");
    expect(titleElement).toBeInTheDocument();
  });

  //   it("renders navigation buttons", () => {
  //     renderComponent();
  //     expect(screen.getByText("HOME")).toBeInTheDocument();
  //     expect(screen.getByText("ABOUT")).toBeInTheDocument();
  //     expect(screen.getByText("CONTACT")).toBeInTheDocument();
  //   });

  //   it("navigates to corresponding pages when buttons are clicked", () => {
  //     renderComponent();
  //     const homeButton = screen.getByText("Home");
  //     const aboutButton = screen.getByText("About");
  //     const contactButton = screen.getByText("Contact");
  //     fireEvent.click(homeButton);
  //     expect(window.location.pathname).toBe("/");
  //     fireEvent.click(aboutButton);
  //     expect(window.location.pathname).toBe("/about");
  //     fireEvent.click(contactButton);
  //     expect(window.location.pathname).toBe("/contact");
  //   });

  it("renders logout button when authenticated", () => {
    const reduxMockStore = configureMockStore();
    const initialState = { auth: { isAuthenticated: true } };
    const store = reduxMockStore(initialState);
    render(
      <Provider store={store}>
        <BrowserRouter>
          <DrawerAppBar />
        </BrowserRouter>
      </Provider>
    );
    const logoutButton = screen.getByRole("button", { name: "Logout" });
    expect(logoutButton).toBeInTheDocument();
  });

  it("renders login button when not authenticated", () => {
    renderComponent();

    const LoginButton = screen.getByRole("button", { name: "Login" });
    expect(LoginButton).toBeInTheDocument();
  });
});
