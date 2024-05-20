import { PersonalDetailsConstants } from "../../constants";
import { Dispatch } from "redux";
import axios from "axios";
import { AppDataAction } from "../../../types";
import { AppState } from "../../store";
import { PersonalDetailsValues } from "../../../pages/PersonalDetails/types";
import { errorHandler } from "../../../helpers";

export const getPersonalDetailsAction = () => {
  return async (
    dispatch: Dispatch<AppDataAction>,
    getState: () => AppState
  ) => {
    try {
      const state = getState();
      const userEmail = state.auth.email;
      const personalDetails = state.appData.personalDetails;
      if (personalDetails) {
        return;
      }

      dispatch({ type: PersonalDetailsConstants.GET_PERSONAL_DETAILS_REQUEST });
      const res = await axios.get<PersonalDetailsValues[]>(
        `http://localhost:8000/personal-details?email=${userEmail}`
      );

      if (res.status === 200) {
        dispatch({
          type: PersonalDetailsConstants.GET_PERSONAL_DETAILS_SUCCESS,
          payload: {
            message: "Personal details fetched successfully",
            personalDetails: res.data[0],
          },
        });
        return;
      }
      throw new Error("Something went wrong");
    } catch (error) {
      errorHandler(
        error as Error,
        dispatch,
        PersonalDetailsConstants.GET_PERSONAL_DETAILS_FAILURE
      );
    }
  };
};
