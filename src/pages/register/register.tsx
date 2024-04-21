import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  InputAdornment,
  TextField,
  Button,
  Typography,
  IconButton,
  Checkbox,
  FormControlLabel,
  Box,
  Container,
  Grid,
  Stack,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import { registerPageInitialValues, registerPageValidation } from "./utils";
import { RestrationValues } from "./types";
import { registrationAction } from "../../custom-redux/actions/registration";
import { UnknownAction } from "redux";
import { useDispatch } from "react-redux";

export default function Register() {
  const [displayPassword, setDisplayPassword] = useState<boolean>(false);
  const [displayConfirmPassword, setDisplayConfirmPassword] =
    useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik<RestrationValues>({
    initialValues: registerPageInitialValues(),
    validationSchema: registerPageValidation(),
    onSubmit: (values) => {
      dispatch(
        registrationAction(values, navigate) as unknown as UnknownAction
      );
    },
  });

  const handleClickShowPassword = () => {
    setDisplayPassword(!displayPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setDisplayConfirmPassword(!displayConfirmPassword);
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ my: 13 }}>
      <Box
        component="form"
        sx={{
          bgcolor: "white",
          borderRadius: 5,
          textAlign: "center",
          py: 1,
          px: {
            xs: 4,
            sm: 8,
          },
        }}
        autoComplete="off"
        onSubmit={formik.handleSubmit}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            my: 4,
          }}
          color="primary"
        >
          Register Here!!
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="User Name"
              name="userName"
              fullWidth
              value={formik.values.userName}
              onChange={formik.handleChange}
              error={Boolean(formik.touched.userName && formik.errors.userName)}
              helperText={formik.touched.userName && formik.errors.userName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Full Name"
              name="fullName"
              fullWidth
              value={formik.values.fullName}
              onChange={formik.handleChange}
              error={Boolean(formik.touched.fullName && formik.errors.fullName)}
              helperText={formik.touched.fullName && formik.errors.fullName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={Boolean(formik.touched.email && formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={Boolean(formik.touched.password && formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              type={displayPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {displayPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              error={Boolean(
                formik.touched.confirmPassword && formik.errors.confirmPassword
              )}
              helperText={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
              type={displayConfirmPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmPassword}
                      edge="end"
                    >
                      {displayConfirmPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <>
                  <Checkbox
                    onChange={formik.handleChange}
                    checked={formik.values.hasAgreed}
                    name="hasAgreed"
                  />
                </>
              }
              label="I agree to the terms & conditions."
            />
            <FormHelperText
              error={Boolean(
                formik.touched.hasAgreed && formik.errors.hasAgreed
              )}
              sx={{
                textAlign: "center",
              }}
            >
              {formik.touched.hasAgreed && formik.errors.hasAgreed}
            </FormHelperText>
          </Grid>
          <Grid
            item
            xs={12}
            alignContent="center"
            textAlign="center"
            width="100%"
            alignSelf="center"
            alignItems="center"
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={4}
              sx={{
                mt: 4,
                justifyContent: "center",
              }}
            >
              <Button
                type="submit"
                color="primary"
                sx={{ px: 6, py: "10px" }}
                variant="contained"
              >
                Register
              </Button>
              <Button
                type="reset"
                component={Link}
                color="primary"
                sx={{ px: 6, py: "10px" }}
                variant="contained"
                to="/"
              >
                CANCEL
              </Button>
            </Stack>
          </Grid>
        </Grid>

        <Typography paragraph sx={{ my: 3 }}>
          Already have an account?{" "}
          <strong style={{ cursor: "pointer" }}>
            <Link to="/login" style={{ textDecoration: "none" }}>
              Login Here.
            </Link>
          </strong>
        </Typography>
      </Box>
    </Container>
  );
}
