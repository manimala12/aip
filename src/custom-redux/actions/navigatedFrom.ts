import { NavigationConstants } from "../constants";
import { AppDataAction, AppRoutes } from "../../types";
import { Dispatch } from "redux";
import { errorHandler } from "../../helpers";

export const navigatedFromAction = (navigatedFrom: AppRoutes) => {
  return async (dispatch: Dispatch<AppDataAction>) => {
    try {
      dispatch({ type: NavigationConstants.NAVIGATED_FROM_REQUEST });

      dispatch({
        type: NavigationConstants.NAVIGATED_FROM_SUCCESS,
        payload: {
          navigatedFrom,
        },
      });
    } catch (error) {
      errorHandler(
        error as Error,
        dispatch,
        NavigationConstants.NAVIGATED_FROM_FAILURE
      );
    }
  };
};
