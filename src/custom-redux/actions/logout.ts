import { ClearAppDataConstants, authConstants } from "../constants";
import { AuthAction } from "../../types";
import { Dispatch } from "redux";
import { successToast } from "../../components/toasts";
import { errorHandler } from "../../helpers";

export const logoutAction = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch({ type: authConstants.LOGOUT_REQUEST });

      localStorage.removeItem("email");

      successToast("Signed out successfully");
      dispatch({
        type: authConstants.LOGOUT_SUCCESS,
        payload: { isAuthenticated: false },
      });
      dispatch({ type: ClearAppDataConstants.CLEAR_APP_DATA_REQUEST });
      dispatch({
        type: ClearAppDataConstants.CLEAR_APP_DATA_SUCCESS,
      });
    } catch (error) {
      errorHandler(error as Error, dispatch, authConstants.LOGOUT_FAILURE);
    }
  };
};
