import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  InputAdornment,
  TextField,
  Button,
  Typography,
  IconButton,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";

const style = {
  width: "750px",
  height: "740px",
  backgroundColor: "white",
  bgcolor: "background.paper",
  p: 4,
  textAlign: "center",
  borderRadius: "20px",
  marginTop: "180px",
  marginBottom: "100px",
  marginLeft: "550px",
};

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);
  const formik = useFormik({
    initialValues: {
      userName: "",
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      fetch("http://localhost:8000/users", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      })
        .then(() => {
          console.log("Registered Successfully");
          navigate("/registered");
        })
        .catch((err) => {
          console.log("Failed:" + err.message);
        });
    },
  });

  function handleChange(event) {
    setChecked(event.target.checked);
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form style={style} autoComplete="off" onSubmit={formik.handleSubmit}>
      <Typography
        variant="h5"
        style={{
          fontWeight: "bold",
          marginBottom: "40px",
          color: "blue",
          paddingTop: "30px",
        }}
      >
        Register Here!!
      </Typography>
      <TextField
        label="User Name"
        name="userName"
        style={{ width: "500px", marginBottom: "40px", color:'black' }}
        value={formik.values.userName}
        onChange={formik.handleChange}
      />
      <br />
      <TextField
        label="Full Name"
        name="fullName"
        style={{ width: "500px", marginBottom: "40px" }}
        value={formik.values.fullName}
        onChange={formik.handleChange}
      />
      <br />
      <TextField
        label="Email"
        name="email"
        style={{ width: "500px", marginBottom: "40px" }}
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <br />
      <TextField
        label="Password"
        name="password"
        style={{ width: "500px", marginBottom: "40px" }}
        value={formik.values.password}
        onChange={formik.handleChange}
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
      <br />
      <TextField
        label="Confirm Password"
        name="confirmPassword"
        style={{ width: "500px", marginBottom: "20px" }}
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
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
      <FormControlLabel
        style={{ marginBottom: "20px" }}
        control={<Checkbox onChange={handleChange} checked={checked} />}
        label="I agree to the terms & conditions."
      />
      <br />
      <Button
        type="submit"
        component={Link}
        color="inherit"
        to='/registered'
        style={{
          color: "white",
          backgroundColor: "blue",
          padding: "10px 40px",
          marginRight: "100px",
        }}
      >
        Register
      </Button>
      <Button
      component={Link}
        color="inherit"
        style={{
          color: "white",
          backgroundColor: "blue",
          padding: "10px 50px",
        }}
        to="/"
      >
         
          CANCEL
        
      </Button>
      <Typography paragraph style={{ marginTop: "20px" }}>
        Already have an account?{" "}
        <strong style={{ color: "blue", cursor: "pointer" }}>
          <Link to="/login" style={{ textDecoration: "none", color: "blue" }}>
            Login Here.
          </Link>
        </strong>
      </Typography>
    </form>
  );
}
