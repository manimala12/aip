import { NavigateFunction } from "react-router-dom";
import { Dispatch } from "redux";
import axios from "axios";
import { errorToast, successToast } from "../../../components/toasts";
import { AppDataAction, AppRoutes } from "../../../types";
import { AppState } from "../../store";
import { ExpenditureDetailsConstants } from "../../constants";
import { ExpenditureDetailsValues } from "../../../pages/expenditures/types";

export const saveExpenditureDetailsAction = (
  expenditureDetails: ExpenditureDetailsValues,
  navigate: NavigateFunction
) => {
  return async (
    dispatch: Dispatch<AppDataAction>,
    getState: () => AppState
  ) => {
    try {
      dispatch({
        type: ExpenditureDetailsConstants.SAVE_EXPENDITURE_DETAILS_REQUEST,
      });
      const userEmail = getState().auth.email;

      const expenditureDetailsResp = await axios.get<
        ExpenditureDetailsValues[]
      >(`http://localhost:8000/expenditures?email=${userEmail}`);
      if (expenditureDetailsResp.data.length) {
        await axios.patch<ExpenditureDetailsValues>(
          `http://localhost:8000/expenditures/${expenditureDetailsResp.data[0].id}`,
          { ...expenditureDetails }
        );
        successToast("Expenditure details saved successfully");
        dispatch({
          type: ExpenditureDetailsConstants.SAVE_EXPENDITURE_DETAILS_SUCCESS,
          payload: {
            message: "Expenditure details saved successfully",
            expenditureDetails,
          },
        });
        return;
      }

      const res = await axios.post<ExpenditureDetailsValues>(
        `http://localhost:8000/expenditures`,
        { ...expenditureDetails, email: userEmail }
      );

      if (res.status === 201) {
        successToast("Expenditure details saved successfully");
        dispatch({
          type: ExpenditureDetailsConstants.SAVE_EXPENDITURE_DETAILS_SUCCESS,
          payload: {
            message: "Expenditure details saved successfully",
            expenditureDetails,
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
        type: ExpenditureDetailsConstants.SAVE_EXPENDITURE_DETAILS_FAILURE,
        payload: { error: errorMessage },
      });
    }
  };
};
