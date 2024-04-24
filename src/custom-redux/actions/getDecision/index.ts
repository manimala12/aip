import { NavigateFunction } from "react-router-dom";
import { Dispatch } from "redux";
import axios from "axios";
import { errorToast } from "../../../components/toasts";
import {
  AppDataAction,
  AppRoutes,
  CreditScore,
  Decision,
  DecisionTypes,
} from "../../../types";
import { AppState } from "../../store";
import { GetDecisionConstants } from "../../constants";
import { LoanDetailsValues } from "../../../pages/loan_details/types";
import { IncomeDetailsValues } from "../../../pages/income_details/types";

export const saveExpenditureDetailsAction = (
  result: string,
  navigate: NavigateFunction
) => {
  return async (
    dispatch: Dispatch<AppDataAction>,
    getState: () => AppState
  ) => {
    try {
      dispatch({
        type: GetDecisionConstants.SAVE_DECISION_REQUEST,
      });
      const state = getState();
      const userEmail = state.auth.email;
      let decision: DecisionTypes;
      const panNumber = state.appData.personalDetails?.panNumber;

      const creditResp = await axios.get<CreditScore[]>(
        `http://localhost:8000/credit-check?PAN=${panNumber}`
      );
      const { creditScore } = creditResp.data[0];

      if (creditScore <= 700) {
        decision = DecisionTypes.FAILURE;
      } else {
        const { loanDuration, propertyValue, deposit } = state.appData
          .loanDetails as LoanDetailsValues;
        const monthlyEmi = (+propertyValue - +deposit) / (+loanDuration * 12);

        const { oftenYouGetPaid, earning } = state.appData
          .incomeDetails as IncomeDetailsValues;
      }

      const decisionResp = await axios.get<Decision[]>(
        `http://localhost:8000/decision?email=${userEmail}`
      );

      if (
        decisionResp.data.length &&
        decisionResp.data[0].email === userEmail
      ) {
        await axios.patch<Decision>(
          `http://localhost:8000/decision/${decisionResp.data[0].id}`,
          { result }
        );
        dispatch({
          type: GetDecisionConstants.SAVE_DECISION_SUCCESS,
          payload: {
            message: "Decision generated successfully",
            result,
          },
        });
        navigate(AppRoutes.RESULT);
        return;
      }

      const res = await axios.post<Decision>(
        `http://localhost:8000/expenditures`,
        { result, email: userEmail }
      );

      if (res.status === 201) {
        dispatch({
          type: GetDecisionConstants.SAVE_DECISION_SUCCESS,
          payload: {
            message: "Decision generated successfully",
            result,
          },
        });
        navigate(AppRoutes.RESULT);
        return;
      }
      throw new Error("Something went wrong");
    } catch (error) {
      const err = error as Error;
      const errorMessage = err.message;
      errorToast(errorMessage);
      dispatch({
        type: GetDecisionConstants.SAVE_DECISION_FAILURE,
        payload: { error: errorMessage },
      });
    }
  };
};
