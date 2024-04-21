import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  InputAdornment,
  TextField,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const style = {
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

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Please enter valid email")
        .required("Please provide email"),
      password: Yup.string().required("No password provided."),
    }),
    onSubmit: (values) => {
      fetch("http://localhost:8000/users?email=" + values.email)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (!data || data.length !== 1) {
            console.log("Please Enter valid User Name");
          } else {
            if (data[0].password === values.password) {
              navigate("/home");
            } else {
              console.log("Please Enter valid credentials");
            }
          }
        })
        .catch((err) => {
          console.log("Failed:" + err.message);
        });
    },
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form style={style} autoComplete="off" onSubmit={formik.handleSubmit}>
      <Typography
        variant="h5"
        style={{
          fontWeight: "bold",
          marginBottom: "50px",
          color: "blue",
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
        error={formik.touched.email && formik.errors.email}
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
        error={formik.touched.password && formik.errors.password}
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
        component={Link}
        type="submit"
        color="inherit"
        style={{
          color: "white",
          backgroundColor: "blue",
          padding: "10px 40px",
          marginRight: "100px",
        }}
        to="/home"
      >
        LOGIN
      </Button>
      <Button
        component={Link}
        color="inherit"
        style={{
          color: "white",
          backgroundColor: "blue",
          padding: "10px 40px",
        }}
        to="/"
      >
        CANCEL
      </Button>
      <Typography paragraph style={{ marginTop: "30px" }}>
        Don't have an account?{" "}
        <strong style={{ color: "blue", cursor: "pointer" }}>
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "blue" }}
          >
            Register Here
          </Link>
        </strong>
      </Typography>
    </form>
  );
}
