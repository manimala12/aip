import { verifyTokenAction } from "./verifyToken";
import { authConstants } from "../constants";
import { errorToast } from "../../components/toasts";

jest.mock("../../components/toasts", () => ({
  errorToast: jest.fn(),
}));

describe("verifyTokenAction", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("dispatches VERIFY_TOKEN_SUCCESS when token is available in local storage", async () => {
    const dispatch = jest.fn();
    const getItemMock = jest.spyOn(Storage.prototype, "getItem");
    getItemMock.mockReturnValueOnce("test@example.com");

    await verifyTokenAction()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: authConstants.VERIFY_TOKEN_REQUEST,
    });
    expect(getItemMock).toHaveBeenCalledWith("email");
    expect(dispatch).toHaveBeenCalledWith({
      type: authConstants.VERIFY_TOKEN_SUCCESS,
      payload: {
        message: "Token get from local storage successfully",
        email: "test@example.com",
        isAuthenticated: true,
      },
    });
    expect(errorToast).not.toHaveBeenCalled();
  });

  it("dispatches VERIFY_TOKEN_FAILURE when token is not available in local storage", async () => {
    const dispatch = jest.fn();
    const getItemMock = jest.spyOn(Storage.prototype, "getItem");
    getItemMock.mockReturnValueOnce(null);

    await verifyTokenAction()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: authConstants.VERIFY_TOKEN_REQUEST,
    });
    expect(getItemMock).toHaveBeenCalledWith("email");
    expect(dispatch).toHaveBeenCalledWith({
      type: authConstants.VERIFY_TOKEN_FAILURE,
      payload: {
        error: "Token not available in local storage.",
        email: undefined,
        isAuthenticated: false,
      },
    });
    expect(errorToast).not.toHaveBeenCalled();
  });

  it("dispatches VERIFY_TOKEN_FAILURE on error", async () => {
    const dispatch = jest.fn();
    const getItemMock = jest.spyOn(Storage.prototype, "getItem");
    getItemMock.mockImplementationOnce(() => {
      throw new Error("Local storage error");
    });

    await verifyTokenAction()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: authConstants.VERIFY_TOKEN_REQUEST,
    });
    expect(getItemMock).toHaveBeenCalledWith("email");
    expect(errorToast).toHaveBeenCalledWith("Local storage error");
    expect(dispatch).toHaveBeenCalledWith({
      type: authConstants.VERIFY_TOKEN_FAILURE,
      payload: { error: "Local storage error" },
    });
  });
});
