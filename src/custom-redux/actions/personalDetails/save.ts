import { PersonalDetailsConstants } from "../../constants";
import { NavigateFunction } from "react-router-dom";
import { Dispatch } from "redux";
import axios from "axios";
import { successToast } from "../../../components/toasts";
import { AppDataAction, AppRoutes } from "../../../types";
import { AppState, store } from "../../store";
import { PersonalDetailsValues } from "../../../pages/PersonalDetails/types";
import { errorHandler } from "../../../helpers";
import { navigatedFromAction } from "../navigatedFrom";

export const savePersonalDetailsAction = (
  personalData: PersonalDetailsValues,
  navigate: NavigateFunction
) => {
  return async (
    dispatch: Dispatch<AppDataAction>,
    getState: () => AppState
  ) => {
    try {
      dispatch({
        type: PersonalDetailsConstants.SAVE_PERSONAL_DETAILS_REQUEST,
      });
      const state = getState();
      const userEmail = state.auth.email;
      const navigatedFrom = state.appData.navigatedFrom;

      const personalDetailsResp = await axios.get<PersonalDetailsValues[]>(
        `http://localhost:8000/personal-details?email=${userEmail}`
      );
      if (personalDetailsResp.data.length) {
        await axios.patch<PersonalDetailsValues>(
          `http://localhost:8000/personal-details/${personalDetailsResp.data[0].id}`,
          { ...personalData }
        );
        successToast("Personal details saved successfully");
        dispatch({
          type: PersonalDetailsConstants.SAVE_PERSONAL_DETAILS_SUCCESS,
          payload: {
            message: "Personal details saved successfully",
            personalDetails: personalData,
          },
        });
        store.dispatch(navigatedFromAction(AppRoutes.PERSONAL_DETAILS));

        if (navigatedFrom === AppRoutes.REVIEW) {
          navigate(AppRoutes.REVIEW);
          return;
        }
        navigate(AppRoutes.INCOME_DETAILS);
        return;
      }

      const res = await axios.post<PersonalDetailsValues>(
        `http://localhost:8000/personal-details`,
        { ...personalData, email: userEmail }
      );

      if (res.status === 201) {
        successToast("Personal details saved successfully");
        dispatch({
          type: PersonalDetailsConstants.SAVE_PERSONAL_DETAILS_SUCCESS,
          payload: {
            message: "Personal details saved successfully",
            personalDetails: personalData,
          },
        });
        store.dispatch(navigatedFromAction(AppRoutes.PERSONAL_DETAILS));

        if (navigatedFrom === AppRoutes.REVIEW) {
          navigate(AppRoutes.REVIEW);
          return;
        }
        navigate(AppRoutes.INCOME_DETAILS);
        return;
      }
      throw new Error("Something went wrong");
    } catch (error) {
      errorHandler(
        error as Error,
        dispatch,
        PersonalDetailsConstants.SAVE_PERSONAL_DETAILS_FAILURE
      );
    }
  };
};
