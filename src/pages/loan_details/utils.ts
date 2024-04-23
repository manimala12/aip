import * as Yup from "yup";
import { HomeTypeOptions, LoanDetailsValues } from "./types";

export const loanDetailsValidation = (): Yup.ObjectSchema<LoanDetailsValues> =>
  Yup.object<LoanDetailsValues>().shape({
    noOfPeople: Yup.string()
      .required("Please enter number of people")
      .oneOf(["1", "2"]),
    propertyValue: Yup.string().required("Please enter your property value"),
    deposit: Yup.string().required("Please enter your deposit"),
    homeType: Yup.string()
      .required("Please select your home type")
      .oneOf([
        HomeTypeOptions.BUYING_HOME,
        HomeTypeOptions.EXISTING_HOME,
        HomeTypeOptions.NEW_HOME,
      ]),
    loanDuration: Yup.string().required("Please select loan duration"),
    email: Yup.string().optional(),
    id: Yup.string().optional(),
  });

export const loanDetailsInitialValues = (
  loanDetails: LoanDetailsValues | undefined
): LoanDetailsValues => {
  if (!loanDetails) {
    return {
      noOfPeople: "",
      homeType: "",
      propertyValue: "",
      deposit: "",
      loanDuration: "",
    };
  }
  return {
    noOfPeople: loanDetails.noOfPeople,
    homeType: loanDetails.homeType,
    propertyValue: loanDetails.propertyValue,
    deposit: loanDetails.deposit,
    loanDuration: loanDetails.loanDuration,
  };
};
