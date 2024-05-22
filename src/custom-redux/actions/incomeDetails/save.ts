import { NavigateFunction } from "react-router-dom";
import { Dispatch } from "redux";
import axios from "axios";
import { successToast } from "../../../components/toasts";
import { AppDataAction, AppRoutes } from "../../../types";
import { AppState, store } from "../../store";
import { IncomeDetailsValues } from "../../../pages/IncomeDetails/types";
import { IncomeDetailsConstants } from "../../constants";
import { errorHandler } from "../../../helpers";
import { navigatedFromAction } from "../navigatedFrom";

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
      const state = getState();
      const userEmail = state.auth.email;
      const navigatedFrom = state.appData.navigatedFrom;

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
        store.dispatch(navigatedFromAction(AppRoutes.INCOME_DETAILS));

        if (navigatedFrom === AppRoutes.REVIEW) {
          navigate(AppRoutes.REVIEW);
          return;
        }
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
        store.dispatch(navigatedFromAction(AppRoutes.INCOME_DETAILS));

        if (navigatedFrom === AppRoutes.REVIEW) {
          navigate(AppRoutes.REVIEW);
          return;
        }
        navigate(AppRoutes.EXPENDITURES);
        return;
      }
      throw new Error("Something went wrong");
    } catch (error) {
      errorHandler(
        error as Error,
        dispatch,
        IncomeDetailsConstants.SAVE_INCOME_DETAILS_FAILURE
      );
    }
  };
};
