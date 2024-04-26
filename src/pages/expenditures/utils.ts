import * as Yup from "yup";
import { ExpenditureDetailsValues } from "./types";

export const expenditureDetailsValidation = () =>
  Yup.object<ExpenditureDetailsValues>().shape({
    activeLoans: Yup.string()
      .matches(/^(Yes|No)$/i, 'Please enter either "Yes" or "No"')
      .required("Please select an option"),
    loanEMI: Yup.string().optional(),
    loanOutstanding: Yup.string().optional(),
    vehicle: Yup.string()
      .matches(/^(Yes|No)$/i, 'Please enter either "Yes" or "No"')
      .required("Please select an option"),
    vehicleEMI: Yup.string().optional(),
    vehicleOutstanding: Yup.string().optional(),
    children: Yup.number()
      .required("Please enter about your children")
      .max(10)
      .min(0),
    schoolFee: Yup.number()
      .positive("Please enter a postive number")
      .required("Please enter your children school fee"),
    otherExpenditures: Yup.string()
      .matches(/^(Yes|No)$/i, 'Please enter either "Yes" or "No"')
      .required("Please enter your other expenditures"),
    otherAmount: Yup.number()
      .positive("Please enter a postive number")
      .optional(),
  });

export const expenditureDetailsInitialValues = (
  expenditureDetails: ExpenditureDetailsValues | undefined
): ExpenditureDetailsValues => {
  if (!expenditureDetails) {
    return {
      activeLoans: "",
      loanEMI: "",
      loanOutstanding: "",
      vehicle: "",
      vehicleEMI: "",
      vehicleOutstanding: "",
      children: "",
      schoolFee: "",
      otherExpenditures: "",
      otherAmount: "",
    };
  }
  return {
    activeLoans: expenditureDetails.activeLoans,
    loanEMI: expenditureDetails.loanEMI,
    loanOutstanding: expenditureDetails.loanOutstanding,
    vehicle: expenditureDetails.vehicle,
    vehicleEMI: expenditureDetails.vehicleEMI,
    vehicleOutstanding: expenditureDetails.vehicleOutstanding,
    children: expenditureDetails.children,
    schoolFee: expenditureDetails.schoolFee,
    otherExpenditures: expenditureDetails.otherExpenditures,
    otherAmount: expenditureDetails.otherAmount,
  };
};
