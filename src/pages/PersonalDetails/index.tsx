import {
  Box,
  Typography,
  Divider,
  TextField,
  Button,
  FormHelperText,
  Grid,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Link, useNavigate } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { useFormik } from "formik";
import { PersonalDetailsValues } from "./types";
import { savePersonalDetailsAction } from "../../custom-redux/actions/personalDetails/save";
import { UnknownAction } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPersonalDetailsAction } from "../../custom-redux/actions/personalDetails/get";
import {
  personalDetailsInitialValues,
  personalDetailsValidation,
} from "./utils";
import { AppState } from "../../custom-redux/store";
import FormHeader from "../../components/FormHeader";

export default function PersonalDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const personalDetails = useSelector<
    AppState,
    PersonalDetailsValues | undefined
  >((state) => state.appData.personalDetails);

  const formik = useFormik<PersonalDetailsValues>({
    initialValues: personalDetailsInitialValues(personalDetails),
    validationSchema: personalDetailsValidation(),
    onSubmit: (values) => {
      dispatch(
        savePersonalDetailsAction(values, navigate) as unknown as UnknownAction
      );
    },
  });

  useEffect(() => {
    dispatch(getPersonalDetailsAction() as unknown as UnknownAction);
  }, []);

  useEffect(() => {
    const initialPersonalDetails =
      personalDetailsInitialValues(personalDetails);
    formik.setFieldValue("fullName", initialPersonalDetails.fullName);
    formik.setFieldValue("panNumber", initialPersonalDetails.panNumber);
    formik.setFieldValue("gender", initialPersonalDetails.gender);
    formik.setFieldValue("mobileNumber", initialPersonalDetails.mobileNumber);
    formik.setFieldValue("address", initialPersonalDetails.address);
  }, [personalDetails]);

  return (
    <form
      style={{ marginTop: "200px", color: "white", marginLeft: "100px" }}
      autoComplete="off"
      onSubmit={formik.handleSubmit}
    >
      <FormHeader heading="Your Personal Details">
        <Typography
          paragraph
          sx={{ fontSize: "25px", marginTop: "50px", marginBottom: "20px" }}
        >
          Full Name
        </Typography>
        <TextField
          sx={{ borderColor: "white", width: "500px" }}
          name="fullName"
          placeholder="Enter your full name"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(formik.touched.fullName && formik.errors.fullName)}
          helperText={formik.touched.fullName && formik.errors.fullName}
        />

        <Typography
          paragraph
          sx={{ fontSize: "25px", marginTop: "50px", marginBottom: "20px" }}
        >
          PAN Card number
        </Typography>
        <Box sx={{ display: "flex", gap: "20px" }}>
          <TextField
            sx={{ color: "white" }}
            placeholder="Enter PAN Card Number"
            name="panNumber"
            value={formik.values.panNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Box>

        <FormControl>
          <FormLabel
            sx={{
              color: "white",
              marginTop: "50px",
              fontSize: "25px",
              marginBottom: "10px",
            }}
          >
            Gender
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="gender"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.gender}
          >
            <FormControlLabel
              value="Male"
              control={<Radio sx={{ color: "white" }} />}
              label="Male"
            />
            <FormControlLabel
              value="Female"
              control={<Radio sx={{ color: "white" }} />}
              label="Female"
            />
          </RadioGroup>
          <FormHelperText
            error={Boolean(formik.touched.gender && formik.errors.gender)}
          >
            {formik.touched.gender && formik.errors.gender}
          </FormHelperText>
        </FormControl>

        <Typography paragraph sx={{ fontSize: "25px", marginTop: "50px" }}>
          Mobile Number
        </Typography>
        <TextField
          sx={{ borderColor: "white", width: "500px" }}
          name="mobileNumber"
          placeholder="Enter mobile number"
          value={formik.values.mobileNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(
            formik.touched.mobileNumber && formik.errors.mobileNumber
          )}
          helperText={formik.touched.mobileNumber && formik.errors.mobileNumber}
        />
        <Typography paragraph sx={{ fontSize: "23px", marginTop: "50px" }}>
          Address
        </Typography>
        <TextField
          sx={{ borderColor: "white", width: "500px" }}
          placeholder="Enter your address"
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(formik.touched.address && formik.errors.address)}
          helperText={formik.touched.address && formik.errors.address}
        />
      </FormHeader>

      <Divider
        sx={{
          backgroundColor: "white",
          borderBottomWidth: 3,
          width: "1200px",
          marginTop: "50px",
        }}
      />
      <Grid sx={{ display: "flex", gap: "750px" }}>
        <Button
          variant="contained"
          color="inherit"
          component={Link}
          sx={{
            backgroundColor: "#ffc107",
            padding: "15px 60px",
            marginTop: "40px",
            fontWeight: "bold",
            marginBottom: "30px",
          }}
          to="/loan-details"
        >
          <ArrowLeftIcon sx={{ fontSize: "30px" }} />
          Back
        </Button>
        <Button
          variant="contained"
          color="inherit"
          type="submit"
          sx={{
            backgroundColor: "#ffc107",
            padding: "15px 60px",
            marginTop: "40px",
            fontWeight: "bold",
            marginBottom: "30px",
          }}
          endIcon={<ArrowRightIcon sx={{ fontSize: "30px" }} />}
        >
          Continue
        </Button>
      </Grid>
    </form>
  );
}
