import { authConstants } from "../constants";
import { AuthAction } from "../../types";
import { Dispatch } from "redux";
import { errorToast } from "../../components/toasts";

export const verifyTokenAction = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch({ type: authConstants.VERIFY_TOKEN_REQUEST });
      const email = localStorage.getItem("email");
      if (email) {
        dispatch({
          type: authConstants.VERIFY_TOKEN_SUCCESS,
          payload: {
            message: "Token get from local storage successfully",
            email,
            isAuthenticated: true,
          },
        });
        return;
      }
      dispatch({
        type: authConstants.VERIFY_TOKEN_FAILURE,
        payload: {
          error: "Token not available in local storage.",
          email: undefined,
          isAuthenticated: false,
        },
      });
    } catch (error) {
      const err = error as Error;
      const errorMessage = err.message;
      errorToast(errorMessage);
      dispatch({
        type: authConstants.VERIFY_TOKEN_FAILURE,
        payload: { error: errorMessage },
      });
    }
  };
};
