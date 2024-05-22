import { NavigateFunction } from "react-router-dom";
import { Dispatch } from "redux";
import axios from "axios";
import { successToast } from "../../../components/toasts";
import { AppDataAction, AppRoutes } from "../../../types";
import { AppState, store } from "../../store";
import { ExpenditureDetailsConstants } from "../../constants";
import { ExpenditureDetailsValues } from "../../../pages/Expenditures/types";
import { errorHandler } from "../../../helpers";
import { navigatedFromAction } from "../navigatedFrom";

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
        store.dispatch(navigatedFromAction(AppRoutes.EXPENDITURES));
        navigate(AppRoutes.REVIEW);
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
        store.dispatch(navigatedFromAction(AppRoutes.EXPENDITURES));
        navigate(AppRoutes.REVIEW);
        return;
      }
      throw new Error("Something went wrong");
    } catch (error) {
      errorHandler(
        error as Error,
        dispatch,
        ExpenditureDetailsConstants.SAVE_EXPENDITURE_DETAILS_FAILURE
      );
    }
  };
};
