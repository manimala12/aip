import * as Yup from "yup";
import { IncomeDetailsValues } from "./types";

export const incomeDetailsValidation =
  (): Yup.ObjectSchema<IncomeDetailsValues> =>
    Yup.object<IncomeDetailsValues>().shape({
      typeOfEmployement: Yup.string()
        .required("Please enter your type of employment")
        .oneOf(["Salaried", "Self Employed"]),
      contractType: Yup.string()
        .required("Please enter your type of contract")
        .oneOf(["Full Time", "Part Time"]),
      oftenYouGetPaid: Yup.number()
        .required("Please enter your type of contract")
        .oneOf([1, 2, 4]),
      nameOfTheEmployer: Yup.string().required("Please enter your occupation"),
      occupation: Yup.string().required("Please enter your occupation"),
      nameOfTheOccupation: Yup.string().optional(),
      earning: Yup.string().required("Please enter your earnings"),
      email: Yup.string().optional(),
      id: Yup.string().optional(),
    });

export const incomeDetailsInitialValues = (
  incomeDetails: IncomeDetailsValues | undefined
): IncomeDetailsValues => {
  if (!incomeDetails) {
    return {
      typeOfEmployement: "",
      contractType: "",
      occupation: "",
      nameOfTheOccupation: "",
      nameOfTheEmployer: "",
      oftenYouGetPaid: 0,
      earning: "",
    };
  }
  return {
    typeOfEmployement: incomeDetails.typeOfEmployement,
    contractType: incomeDetails.contractType,
    occupation: incomeDetails.occupation,
    nameOfTheOccupation: incomeDetails.nameOfTheOccupation,
    nameOfTheEmployer: incomeDetails.nameOfTheEmployer,
    oftenYouGetPaid: incomeDetails.oftenYouGetPaid,
    earning: incomeDetails.earning,
  };
};
