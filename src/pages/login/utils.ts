import * as Yup from "yup";
import { SxProps, Theme } from "@mui/material";
import { LoginValues } from "./types";

export const loginPageStyle: SxProps<Theme> = {
  bgcolor: "white",
  borderRadius: 5,
  textAlign: "center",
  py: 1,
  px: {
    xs: 4,
    sm: 8,
  },
};

export const loginPageValidation = (): Yup.ObjectSchema<LoginValues> =>
  Yup.object<LoginValues>().shape({
    email: Yup.string()
      .email("Please enter valid email")
      .required("Please provide email"),
    password: Yup.string().required("No password provided."),
  });

export const loginPageInitialValues = (): LoginValues => ({
  email: "jnaneswari@gmail.com",
  password: "12345678",
});
