import { authConstants } from "../constants";
import { NavigateFunction } from "react-router-dom";
import { Dispatch } from "redux";
import axios from "axios";
import { successToast } from "../../components/toasts";
import { RestrationValues, UserData } from "../../pages/Register/types";
import { AppRoutes, AuthAction } from "../../types";
import { errorHandler } from "../../helpers";

export const registrationAction = (
  user: RestrationValues,
  navigate: NavigateFunction
) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch({ type: authConstants.REGISTRATION_REQUEST });
      const userResponse = await axios.get<RestrationValues[]>(
        `http://localhost:8000/users?email=${user.email}`
      );
      if (userResponse.data && userResponse.data.length > 0) {
        throw new Error("User already exists with this email");
      }
      const res = await axios.post<RestrationValues>(
        `http://localhost:8000/users`,
        user
      );

      const { data: userData } = await axios.get<UserData[]>(
        `http://localhost:8000/users?email=${user.email}`
      );
      const currentUser = userData[0];

      if (res.status === 201) {
        localStorage.setItem("email", currentUser.email);
        successToast("Registered successfully");
        dispatch({
          type: authConstants.REGISTRATION_SUCCESS,
          payload: {
            message: "Registered successfully",
            email: currentUser.email,
          },
        });
        navigate(AppRoutes.LOGIN);
        return;
      }
      throw new Error("Something went wrong");
    } catch (error) {
      errorHandler(
        error as Error,
        dispatch,
        authConstants.REGISTRATION_FAILURE
      );
    }
  };
};
