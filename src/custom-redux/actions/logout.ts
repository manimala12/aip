import { authConstants } from "../constants";
import { AuthAction } from "../../types";
import { Dispatch } from "redux";
import { errorToast, successToast } from "../../components/toasts";

export const logoutAction = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch({ type: authConstants.LOGOUT_REQUEST });

      localStorage.removeItem("USER_ID");

      successToast("Signed out successfully");
      dispatch({ type: authConstants.LOGOUT_SUCCESS });
    } catch (error) {
      const err = error as Error;
      const errorMessage = err.message;
      errorToast(errorMessage);
      dispatch({
        type: authConstants.LOGOUT_FAILURE,
        payload: { error: errorMessage },
      });
    }
  };
};