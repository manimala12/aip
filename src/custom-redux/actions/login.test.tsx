import { loginAction } from "../actions/login";
import { authConstants } from "../constants";
import axios from "axios";
import { errorToast, successToast } from "../../components/toasts";
import { AppState } from "../store";

jest.mock("axios");
jest.mock("../../components/toasts", () => ({
  errorToast: jest.fn(),
  successToast: jest.fn(),
}));

describe("loginAction", () => {
  let dispatchMock: jest.Mock;
  let navigateMock: jest.Mock;

  beforeEach(() => {
    dispatchMock = jest.fn();
    navigateMock = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should dispatch LOGIN_REQUEST and LOGIN_SUCCESS on successful login", async () => {
    const user = { email: "test@example.com", password: "password" };
    const userData = [{ ...user }];
    (axios.get as jest.Mock).mockResolvedValue({ data: userData });

    loginAction(user, navigateMock)(dispatchMock);

    expect(axios.get).toHaveBeenCalledWith(
      `http://localhost:8000/users?email=${user.email}`
    );
    expect(dispatchMock).toHaveBeenCalledWith({
      type: authConstants.LOGIN_REQUEST,
    });
    expect(dispatchMock).toHaveBeenCalledWith({
      type: authConstants.LOGIN_SUCCESS,
      payload: { message: "Signed in successfully", email: user.email },
    });
    expect(successToast).toHaveBeenCalledWith("Signed in successfully");
    expect(navigateMock).toHaveBeenCalledWith("/");
  });

  it("should dispatch LOGIN_FAILURE and show error toast on invalid password", async () => {
    const user = { email: "test@example.com", password: "wrongpassword" };
    const userData = [{ email: "test@example.com", password: "password" }];
    (axios.get as jest.Mock).mockResolvedValue({ data: userData });

    await loginAction(user, navigateMock)(dispatchMock);

    expect(axios.get).toHaveBeenCalledWith(
      `http://localhost:8000/users?email=${user.email}`
    );
    expect(dispatchMock).toHaveBeenCalledWith({
      type: authConstants.LOGIN_REQUEST,
    });
    expect(dispatchMock).toHaveBeenCalledWith({
      type: authConstants.LOGIN_FAILURE,
      payload: { error: "Invalid password. Please try again" },
    });
    expect(errorToast).toHaveBeenCalledWith(
      "Invalid password. Please try again"
    );
    expect(navigateMock).not.toHaveBeenCalled();
  });

  it("should dispatch LOGIN_FAILURE and show error toast on user not found", async () => {
    const user = { email: "nonexistent@example.com", password: "password" };
    (axios.get as jest.Mock).mockResolvedValue({ data: [] });

    await loginAction(user, navigateMock)(dispatchMock);

    expect(axios.get).toHaveBeenCalledWith(
      `http://localhost:8000/users?email=${user.email}`
    );
    expect(dispatchMock).toHaveBeenCalledWith({
      type: authConstants.LOGIN_REQUEST,
    });
    expect(dispatchMock).toHaveBeenCalledWith({
      type: authConstants.LOGIN_FAILURE,
      payload: { error: "User doesn't exists with this email" },
    });
    expect(errorToast).toHaveBeenCalledWith(
      "User doesn't exists with this email"
    );
    expect(navigateMock).not.toHaveBeenCalled();
  });

  it("should dispatch LOGIN_FAILURE and show error toast on network error", async () => {
    const user = { email: "test@example.com", password: "password" };
    (axios.get as jest.Mock).mockRejectedValue(new Error("Network Error"));

    await loginAction(user, navigateMock)(dispatchMock);

    expect(axios.get).toHaveBeenCalledWith(
      `http://localhost:8000/users?email=${user.email}`
    );
    expect(dispatchMock).toHaveBeenCalledWith({
      type: authConstants.LOGIN_REQUEST,
    });
    expect(dispatchMock).toHaveBeenCalledWith({
      type: authConstants.LOGIN_FAILURE,
      payload: { error: "Network Error" },
    });
    expect(errorToast).toHaveBeenCalledWith("Network Error");
    expect(navigateMock).not.toHaveBeenCalled();
  });
});
