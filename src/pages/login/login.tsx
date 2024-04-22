import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  InputAdornment,
  TextField,
  Button,
  Typography,
  IconButton,
  Box,
  Container,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import {
  loginPageInitialValues,
  loginPageStyle,
  loginPageValidation,
} from "./utils";
import { LoginValues } from "./types";
import { useDispatch } from "react-redux";
import { loginAction } from "../../custom-redux/actions/login";
import { UnknownAction } from "redux";

export default function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik<LoginValues>({
    initialValues: loginPageInitialValues(),
    validationSchema: loginPageValidation(),
    onSubmit: (values) => {
      dispatch(loginAction(values, navigate) as unknown as UnknownAction);
    },
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ my: 13 }}>
      <Box
        component="form"
        sx={loginPageStyle}
        autoComplete="off"
        onSubmit={formik.handleSubmit}
      >
        <Typography
          variant="h5"
          style={{
            fontWeight: "bold",
            marginBottom: "50px",
            color: "#04AA6D",
            paddingTop: "30px",
          }}
        >
          Login Here!!
        </Typography>
        <TextField
          label="Email"
          name="email"
          value={formik.values.email}
          style={{ width: "400px", marginBottom: "50px" }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(formik.touched.email && formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <br />
        <TextField
          label="Password"
          name="password"
          value={formik.values.password}
          style={{ width: "400px", marginBottom: "50px" }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(formik.touched.password && formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          fullWidth
        />
        <Button
          type="submit"
          color="inherit"
          style={{
            color: "white",
            backgroundColor: "#04AA6D",
            padding: "10px 40px",
            marginRight: "100px",
          }}
        >
          LOGIN
        </Button>
        <Button
          component={Link}
          color="inherit"
          style={{
            color: "white",
            backgroundColor: "#04AA6D",
            padding: "10px 40px",
          }}
          to="/"
        >
          CANCEL
        </Button>
        <Typography paragraph style={{ marginTop: "30px" }}>
          Don't have an account?{" "}
          <strong style={{ color: "#04AA6D", cursor: "pointer" }}>
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "#04AA6D" }}
            >
              Register Here
            </Link>
          </strong>
        </Typography>
      </Box>
    </Container>
  );
}
