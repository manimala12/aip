import * as Yup from "yup";
import { PersonalDetailsValues } from "./types";

export const personalDetailsValidation =
  (): Yup.ObjectSchema<PersonalDetailsValues> =>
    Yup.object<PersonalDetailsValues>().shape({
      fullName: Yup.string().required("Please enter your full name"),
      mobileNumber: Yup.string().required("Please enter your mobile number"),
      dateOfBirth: Yup.string().required("Please enter your date of birth"),
      gender: Yup.string()
        .required("Please enter your gender")
        .oneOf(["Male", "Female"]),
      address: Yup.string().required("Please enter your address"),
      email: Yup.string().optional(),
      id: Yup.string().optional(),
    });

export const personalDetailsInitialValues = (
  personalDetails: PersonalDetailsValues | undefined
): PersonalDetailsValues => {
  if (!personalDetails) {
    return {
      fullName: "",
      dateOfBirth: "",
      gender: "",
      mobileNumber: "",
      address: "",
    };
  }
  return {
    fullName: personalDetails.fullName,
    dateOfBirth: personalDetails.dateOfBirth,
    gender: personalDetails.gender,
    mobileNumber: personalDetails.mobileNumber,
    address: personalDetails.address,
  };
};
