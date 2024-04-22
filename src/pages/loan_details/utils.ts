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
    email: Yup.string().optional(),
  });

export const loanDetailsInitialValues = (): LoanDetailsValues => ({
  noOfPeople: "1",
  homeType: HomeTypeOptions.BUYING_HOME,
  propertyValue: "150000",
  deposit: "34000",
});
