import { LoanDetailsConstants } from "../constants";
import { NavigateFunction } from "react-router-dom";
import { Dispatch } from "redux";
import axios from "axios";
import { errorToast, successToast } from "../../components/toasts";
import { AppRoutes, AuthAction } from "../../types";
import { LoanDetailsValues } from "../../pages/loan_details/types";
import { AppState } from "../store";

export const loanDetailsAction = (
  loanData: LoanDetailsValues,
  navigate: NavigateFunction
) => {
  return async (dispatch: Dispatch<AuthAction>, getState: () => AppState) => {
    try {
      dispatch({ type: LoanDetailsConstants.SAVE_LOAN_DETAILS_FAILURE });
      const userEmail = getState().auth.email;

      const res = await axios.post<LoanDetailsValues>(
        `http://localhost:8000/loan-details`,
        { ...loanData, email: userEmail }
      );

      if (res.status === 201) {
        successToast("Loan details successfully");
        dispatch({
          type: LoanDetailsConstants.SAVE_LOAN_DETAILS_SUCCESS,
          payload: {
            message: "Loan details successfully",
          },
        });
        navigate(AppRoutes.PERSONAL_DETAILS);
        return;
      }
      throw new Error("Something went wrong");
    } catch (error) {
      const err = error as Error;
      const errorMessage = err.message;
      errorToast(errorMessage);
      dispatch({
        type: LoanDetailsConstants.SAVE_LOAN_DETAILS_FAILURE,
        payload: { error: errorMessage },
      });
    }
  };
};
