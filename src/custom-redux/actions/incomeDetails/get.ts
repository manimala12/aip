import { IncomeDetailsConstants } from "../../constants";
import { Dispatch } from "redux";
import axios from "axios";
import { errorToast } from "../../../components/toasts";
import { AppDataAction } from "../../../types";
import { AppState } from "../../store";
import { IncomeDetailsValues } from "../../../pages/IncomeDetails/types";

export const getIncomeDetailsAction = () => {
  return async (
    dispatch: Dispatch<AppDataAction>,
    getState: () => AppState
  ) => {
    try {
      const state = getState();
      const userEmail = state.auth.email;
      const incomeDetails = state.appData.incomeDetails;
      if (incomeDetails) {
        return;
      }

      dispatch({ type: IncomeDetailsConstants.GET_INCOME_DETAILS_REQUEST });
      const res = await axios.get<IncomeDetailsValues[]>(
        `http://localhost:8000/income-details?email=${userEmail}`
      );

      if (res.status === 200) {
        dispatch({
          type: IncomeDetailsConstants.GET_INCOME_DETAILS_SUCCESS,
          payload: {
            message: "Income details fetched successfully",
            incomeDetails: res.data[0],
          },
        });
        return;
      }
      throw new Error("Something went wrong");
    } catch (error) {
      const err = error as Error;
      const errorMessage = err.message;
      errorToast(errorMessage);
      dispatch({
        type: IncomeDetailsConstants.GET_INCOME_DETAILS_FAILURE,
        payload: { error: errorMessage },
      });
    }
  };
};
