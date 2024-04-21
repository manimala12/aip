import * as Yup from "yup";
import { SxProps, Theme } from "@mui/material";
import { LoginValues } from "./types";

export const loginPageStyle: SxProps<Theme> = {
  width: "550px",
  height: "450px",
  backgroundColor: "white",
  bgcolor: "background.paper",
  p: 4,
  textAlign: "center",
  borderRadius: "20px",
  marginTop: "180px",
  marginBottom: "390px",
  marginLeft: "600px",
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
