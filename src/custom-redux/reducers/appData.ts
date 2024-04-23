import { LoanDetailsConstants } from "../constants";
import { AppData, AppDataAction } from "../../types";

const initState: AppData = {
  loanDetails: undefined,
  loading: false,
  message: undefined,
  error: undefined,
};

export const appDataReducer = (
  state: AppData = initState,
  action: AppDataAction
): AppData => {
  switch (action.type) {
    case LoanDetailsConstants.GET_LOAN_DETAILS_REQUEST:
    case LoanDetailsConstants.SAVE_LOAN_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        message: undefined,
        error: undefined,
      };

    case LoanDetailsConstants.SAVE_LOAN_DETAILS_SUCCESS:
    case LoanDetailsConstants.GET_LOAN_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload?.message,
        loanDetails: action.payload?.loanDetails,
      };

    case LoanDetailsConstants.SAVE_LOAN_DETAILS_FAILURE:
    case LoanDetailsConstants.GET_LOAN_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload?.error,
      };

    default:
      return state;
  }
};
