import { LoanDetailsConstants } from "../../constants";
import { NavigateFunction } from "react-router-dom";
import { Dispatch } from "redux";
import axios from "axios";
import { successToast } from "../../../components/toasts";
import { AppDataAction, AppRoutes } from "../../../types";
import { LoanDetailsValues } from "../../../pages/LoanDetails/types";
import { AppState } from "../../store";
import { errorHandler } from "../../../helpers";

export const saveLoanDetailsAction = (
  loanData: LoanDetailsValues,
  navigate: NavigateFunction
) => {
  return async (
    dispatch: Dispatch<AppDataAction>,
    getState: () => AppState
  ) => {
    try {
      dispatch({ type: LoanDetailsConstants.SAVE_LOAN_DETAILS_REQUEST });
      const userEmail = getState().auth.email;

      const loanDetailsResp = await axios.get<LoanDetailsValues[]>(
        `http://localhost:8000/loan-details?email=${userEmail}`
      );
      if (loanDetailsResp.data.length) {
        await axios.patch<LoanDetailsValues>(
          `http://localhost:8000/loan-details/${loanDetailsResp.data[0].id}`,
          { ...loanData }
        );
        successToast("Loan details successfully");
        dispatch({
          type: LoanDetailsConstants.SAVE_LOAN_DETAILS_SUCCESS,
          payload: {
            message: "Loan details successfully",
            loanDetails: loanData,
          },
        });
        navigate(AppRoutes.PERSONAL_DETAILS);
        return;
      }

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
            loanDetails: loanData,
          },
        });
        navigate(AppRoutes.PERSONAL_DETAILS);
        return;
      }
      throw new Error("Something went wrong");
    } catch (error) {
      errorHandler(
        error as Error,
        dispatch,
        LoanDetailsConstants.SAVE_LOAN_DETAILS_FAILURE
      );
    }
  };
};
