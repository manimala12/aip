import { authConstants } from "../constants";
import { AuthAction, AuthState } from "../../types";

const initState: AuthState = {
  isAuthenticated: false,
  email: undefined,
  loading: false,
  message: undefined,
  error: undefined,
};

export const authReducer = (
  state: AuthState = initState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case authConstants.REGISTRATION_REQUEST:
    case authConstants.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        message: undefined,
        error: undefined,
      };

    case authConstants.REGISTRATION_SUCCESS:
    case authConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload?.message,
        email: action.payload?.email,
        isAuthenticated: true,
      };

    case authConstants.REGISTRATION_FAILURE:
    case authConstants.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload?.error,
      };

    case authConstants.LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
        message: undefined,
        error: undefined,
      };
    case authConstants.LOGOUT_SUCCESS:
      return {
        ...initState,
        message: action.payload?.message,
      };
    case authConstants.LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload?.error,
      };

    default:
      return state;
  }
};
