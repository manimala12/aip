import { registrationAction } from "../actions/registration";
import { authConstants } from "../constants";
import axios from "axios";
import { errorToast, successToast } from "../../components/toasts";
import { AppRoutes } from "../../types";

jest.mock("axios");
jest.mock("../../components/toasts", () => ({
  errorToast: jest.fn(),
  successToast: jest.fn(),
}));

describe("registrationAction", () => {
  let dispatchMock: jest.Mock;
  let navigateMock: jest.Mock;

  beforeEach(() => {
    dispatchMock = jest.fn();
    navigateMock = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  type UserData = {
    userName: string;
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
    hasAgreed: boolean;
    id: number;
  };

  test("should dispatch REGISTRATION_REQUEST, REGISTRATION_SUCCESS, and navigate to LOGIN on successful registration", async () => {
    const user = {
      userName: "sfdsdf",
      fullName: "sfassd",
      email: "jnaneswari@gmail.com",
      password: "12345678",
      confirmPassword: "12345678",
      hasAgreed: true,
      id: 1,
    };
    const userData: UserData[] = [];
    const postResponse = { status: 201 };
    (axios.get as jest.Mock).mockResolvedValueOnce({ data: userData });
    (axios.post as jest.Mock).mockResolvedValueOnce(postResponse);
    (axios.get as jest.Mock).mockResolvedValueOnce({
      data: [{ email: user.email }],
    });

    await registrationAction(user, navigateMock)(dispatchMock);

    expect(dispatchMock).toHaveBeenCalledWith({
      type: authConstants.REGISTRATION_REQUEST,
    });
    expect(axios.get).toHaveBeenCalledWith(
      `http://localhost:8000/users?email=${user.email}`
    );
    expect(axios.post).toHaveBeenCalledWith(
      "http://localhost:8000/users",
      user
    );
    expect(axios.get).toHaveBeenCalledWith(
      `http://localhost:8000/users?email=${user.email}`
    );
    expect(localStorage.getItem("email")).toBe(user.email);
    expect(successToast).toHaveBeenCalledWith("Registered successfully");
    expect(dispatchMock).toHaveBeenCalledWith({
      type: authConstants.REGISTRATION_SUCCESS,
      payload: { message: "Registered successfully", email: user.email },
    });
    expect(navigateMock).toHaveBeenCalledWith(AppRoutes.LOGIN);
  });

  test("should dispatch REGISTRATION_FAILURE and show error toast on existing user", async () => {
    const user = {
      userName: "sfdsdf",
      fullName: "sfassd",
      email: "jnaneswari@gmail.com",
      password: "12345678",
      confirmPassword: "12345678",
      hasAgreed: true,
      id: 1,
    };
    const userData = [{ email: user.email }];
    (axios.get as jest.Mock).mockResolvedValue({ data: userData });

    await registrationAction(user, navigateMock)(dispatchMock);

    expect(errorToast).toHaveBeenCalledWith(
      "User already exists with this email"
    );
    expect(dispatchMock).toHaveBeenCalledWith({
      type: authConstants.REGISTRATION_FAILURE,
      payload: { error: "User already exists with this email" },
    });
  });

  test("should dispatch REGISTRATION_FAILURE and show error toast on network error", async () => {
    const user = {
      userName: "sfdsdf",
      fullName: "sfassd",
      email: "jnaneswari@gmail.com",
      password: "12345678",
      confirmPassword: "12345678",
      hasAgreed: true,
      id: 1,
    };
    const errorMessage = "Network Error";
    (axios.get as jest.Mock).mockRejectedValue(new Error(errorMessage));

    await registrationAction(user, navigateMock)(dispatchMock);

    expect(errorToast).toHaveBeenCalledWith(errorMessage);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: authConstants.REGISTRATION_FAILURE,
      payload: { error: errorMessage },
    });
  });

  test("should dispatch REGISTRATION_FAILURE and show error toast on other errors", async () => {
    const user = {
      userName: "sfdsdf",
      fullName: "sfassd",
      email: "jnaneswari@gmail.com",
      password: "12345678",
      confirmPassword: "12345678",
      hasAgreed: true,
      id: 1,
    };
    const errorMessage = "Server Error";
    (axios.get as jest.Mock).mockResolvedValue({ data: [] });
    (axios.post as jest.Mock).mockRejectedValue(new Error(errorMessage));

    await registrationAction(user, navigateMock)(dispatchMock);

    expect(errorToast).toHaveBeenCalledWith(errorMessage);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: authConstants.REGISTRATION_FAILURE,
      payload: { error: errorMessage },
    });
  });
});
