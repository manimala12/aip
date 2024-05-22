import { NavigateFunction } from "react-router-dom";
import { Dispatch } from "redux";
import axios from "axios";
import {
  AppDataAction,
  AppRoutes,
  CreditScore,
  Decision,
  DecisionTypes,
} from "../../../types";
import { AppState } from "../../store";
import { GetDecisionConstants } from "../../constants";
import { LoanDetailsValues } from "../../../pages/LoanDetails/types";
import { IncomeDetailsValues } from "../../../pages/IncomeDetails/types";
import { ExpenditureDetailsValues } from "../../../pages/Expenditures/types";
import { errorHandler } from "../../../helpers";

function getRollNumber() {
  return Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000;
}
export const saveDecisionAction = (navigate: NavigateFunction) => {
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
        const income = oftenYouGetPaid * +earning;
        const { loanEMI, vehicleEMI, schoolFee, otherAmount } = state.appData
          .expenditureDetails as ExpenditureDetailsValues;
        const outgoings =
          +(loanEMI as string) +
          +(vehicleEMI as string) +
          +schoolFee / 12 +
          +(otherAmount as string);
        const savings = income - outgoings;
        if (savings >= monthlyEmi) {
          decision = DecisionTypes.SUCCESS;
        } else {
          decision = DecisionTypes.PARTIAL;
        }
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
          { result: decision }
        );
        dispatch({
          type: GetDecisionConstants.SAVE_DECISION_SUCCESS,
          payload: {
            message: "Decision generated successfully",
            result: decision,
            rollNumber: decisionResp.data[0].rollNumber,
          },
        });
        navigate(AppRoutes.RESULT);
        return;
      }

      const rollNumber = getRollNumber();
      const res = await axios.post<Decision>(`http://localhost:8000/decision`, {
        result: decision,
        email: userEmail,
        rollNumber,
      });

      if (res.status === 201) {
        dispatch({
          type: GetDecisionConstants.SAVE_DECISION_SUCCESS,
          payload: {
            message: "Decision generated successfully",
            result: decision,
            rollNumber,
          },
        });
        navigate(AppRoutes.RESULT);
        return;
      }
      throw new Error("Something went wrong");
    } catch (error) {
      errorHandler(
        error as Error,
        dispatch,
        GetDecisionConstants.SAVE_DECISION_FAILURE
      );
    }
  };
};
