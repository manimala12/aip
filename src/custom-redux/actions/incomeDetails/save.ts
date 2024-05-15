import { NavigateFunction } from "react-router-dom";
import { Dispatch } from "redux";
import axios from "axios";
import { errorToast, successToast } from "../../../components/toasts";
import { AppDataAction, AppRoutes } from "../../../types";
import { AppState } from "../../store";
import { IncomeDetailsValues } from "../../../pages/IncomeDetails/types";
import { IncomeDetailsConstants } from "../../constants";

export const saveIncomeDetailsAction = (
  incomeDetails: IncomeDetailsValues,
  navigate: NavigateFunction
) => {
  return async (
    dispatch: Dispatch<AppDataAction>,
    getState: () => AppState
  ) => {
    try {
      dispatch({
        type: IncomeDetailsConstants.SAVE_INCOME_DETAILS_REQUEST,
      });
      const userEmail = getState().auth.email;

      const incomeDetailsResp = await axios.get<IncomeDetailsValues[]>(
        `http://localhost:8000/income-details?email=${userEmail}`
      );
      if (incomeDetailsResp.data.length) {
        await axios.patch<IncomeDetailsValues>(
          `http://localhost:8000/income-details/${incomeDetailsResp.data[0].id}`,
          { ...incomeDetails }
        );
        successToast("Income details saved successfully");
        dispatch({
          type: IncomeDetailsConstants.SAVE_INCOME_DETAILS_SUCCESS,
          payload: {
            message: "Income details saved successfully",
            incomeDetails,
          },
        });
        navigate(AppRoutes.EXPENDITURES);
        return;
      }

      const res = await axios.post<IncomeDetailsValues>(
        `http://localhost:8000/income-details`,
        { ...incomeDetails, email: userEmail }
      );

      if (res.status === 201) {
        successToast("Income details saved successfully");
        dispatch({
          type: IncomeDetailsConstants.SAVE_INCOME_DETAILS_SUCCESS,
          payload: {
            message: "Income details saved successfully",
            incomeDetails,
          },
        });
        navigate(AppRoutes.EXPENDITURES);
        return;
      }
      throw new Error("Something went wrong");
    } catch (error) {
      const err = error as Error;
      const errorMessage = err.message;
      errorToast(errorMessage);
      dispatch({
        type: IncomeDetailsConstants.SAVE_INCOME_DETAILS_FAILURE,
        payload: { error: errorMessage },
      });
    }
  };
};
