import { Dispatch } from "redux";
import { AppDataAction } from "../types";
import { errorToast } from "../components/toasts";

export default function getExpiryDate() {
  let today = new Date();
  today.setFullYear(today.getFullYear() + 1);
  return today;
}

export const errorHandler = (
  err: Error,
  dispatch: Dispatch<AppDataAction>,
  dispatchType: string
): void => {
  const errorMessage = err.message;
  errorToast(errorMessage);
  dispatch({
    type: dispatchType,
    payload: { error: errorMessage },
  });
};
