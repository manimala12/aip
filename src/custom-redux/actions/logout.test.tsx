import { logoutAction } from "../actions/logout";
import { authConstants, ClearAppDataConstants } from "../constants";
import { errorToast, successToast } from "../../components/toasts";

jest.mock("../../components/toasts", () => ({
  errorToast: jest.fn(),
  successToast: jest.fn(),
}));

describe("logoutAction", () => {
  let dispatchMock: jest.Mock;

  beforeEach(() => {
    dispatchMock = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should dispatch LOGOUT_REQUEST, clear local storage, and dispatch success actions", async () => {
    const localStorageRemoveItemSpy = jest.spyOn(
      Storage.prototype,
      "removeItem"
    );

    await logoutAction()(dispatchMock);

    expect(dispatchMock).toHaveBeenCalledWith({
      type: authConstants.LOGOUT_REQUEST,
    });
    expect(localStorageRemoveItemSpy).toHaveBeenCalledWith("email");
    expect(successToast).toHaveBeenCalledWith("Signed out successfully");
    expect(dispatchMock).toHaveBeenCalledWith({
      type: authConstants.LOGOUT_SUCCESS,
      payload: { isAuthenticated: false },
    });
    expect(dispatchMock).toHaveBeenCalledWith({
      type: ClearAppDataConstants.CLEAR_APP_DATA_REQUEST,
    });
    expect(dispatchMock).toHaveBeenCalledWith({
      type: ClearAppDataConstants.CLEAR_APP_DATA_SUCCESS,
    });
  });

  test("should dispatch LOGOUT_FAILURE and show error toast if an error occurs", async () => {
    const errorMessage = "Logout failed";
    jest.spyOn(Storage.prototype, "removeItem").mockImplementation(() => {
      throw new Error(errorMessage);
    });

    await logoutAction()(dispatchMock);

    expect(errorToast).toHaveBeenCalledWith(errorMessage);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: authConstants.LOGOUT_FAILURE,
      payload: { error: errorMessage },
    });
  });
});
