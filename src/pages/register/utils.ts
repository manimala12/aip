import * as Yup from "yup";
import { RestrationValues } from "./types";

export const registerPageValidation = (): Yup.ObjectSchema<RestrationValues> =>
  Yup.object<RestrationValues>().shape({
    userName: Yup.string()
      .min(2, "User Name must be 2 characters or more")
      .max(20, "User Name must be 20 characters or less")
      .required("User Name is required"),
    fullName: Yup.string()
      .min(2, "Full Name must be 2 characters or more")
      .max(20, "Full Name must be 20 characters or less")
      .required("Full Name is required"),
    email: Yup.string()
      .email("Please enter valid email")
      .required("Please provide email"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .max(25, "Password must be 25 characters or less"),
    confirmPassword: Yup.string()
      .required("Password not confirmed")
      .oneOf([Yup.ref("password")], "Passwords must match"),
    hasAgreed: Yup.boolean()
      .required("Please agree to terms and conditions")
      .oneOf([true], "Please agree to terms and conditions"),
  });

export const registerPageInitialValues = (): RestrationValues => ({
  userName: "",
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  hasAgreed: false,
});
