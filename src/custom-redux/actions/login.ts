import { authConstants } from "../constants";
import { AuthAction } from "../../types";
import { NavigateFunction } from "react-router-dom";
import { Dispatch } from "redux";
import axios from "axios";
import { UserData } from "../../pages/Register/types";
import { successToast } from "../../components/toasts";
import { LoginValues } from "../../pages/Login/types";
import { errorHandler } from "../../helpers";

export const loginAction = (user: LoginValues, navigate: NavigateFunction) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch({ type: authConstants.LOGIN_REQUEST });
      const userResponse = await axios.get<UserData[]>(
        `http://localhost:8000/users?email=${user.email}`
      );
      if (!userResponse.data || userResponse.data.length !== 1) {
        throw new Error("User doesn't exists with this email");
      }
      const currentUser = userResponse.data[0];
      if (currentUser.password === user.password) {
        localStorage.setItem("email", currentUser.email);
        dispatch({
          type: authConstants.LOGIN_SUCCESS,
          payload: {
            message: "Signed in successfully",
            email: user.email,
          },
        });
        successToast("Signed in successfully");
        navigate("/");
      } else {
        throw new Error("Invalid password. Please try again");
      }
    } catch (error) {
      errorHandler(error as Error, dispatch, authConstants.LOGIN_FAILURE);
    }
  };
};
