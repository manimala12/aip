import {
  Typography,
  Divider,
  TextField,
  MenuItem,
  Button,
  Select,
  FormControl,
  Radio,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  FormHelperText,
  Grid,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AppRoutes } from "../../types";
import { incomeDetailsInitialValues, incomeDetailsValidation } from "./utils";
import { IncomeDetailsValues } from "./types";
import { AppState } from "../../custom-redux/store";
import { useDispatch, useSelector } from "react-redux";
import { saveIncomeDetailsAction } from "../../custom-redux/actions/incomeDetails/save";
import { getIncomeDetailsAction } from "../../custom-redux/actions/incomeDetails/get";
import { useEffect } from "react";
import { UnknownAction } from "redux";

export default function IncomeDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const incomeDetails = useSelector<AppState, IncomeDetailsValues | undefined>(
    (state) => state.appData.incomeDetails
  );

  const formik = useFormik({
    initialValues: incomeDetailsInitialValues(incomeDetails),
    validationSchema: incomeDetailsValidation(),
    onSubmit: (values) => {
      dispatch(
        saveIncomeDetailsAction(values, navigate) as unknown as UnknownAction
      );
    },
  });

  useEffect(() => {
    dispatch(getIncomeDetailsAction() as unknown as UnknownAction);
  }, []);

  useEffect(() => {
    const initialIncomeDetails = incomeDetailsInitialValues(incomeDetails);
    formik.setFieldValue("contractType", initialIncomeDetails.contractType);
    formik.setFieldValue("earning", initialIncomeDetails.earning);
    formik.setFieldValue(
      "nameOfTheEmployer",
      initialIncomeDetails.nameOfTheEmployer
    );
    formik.setFieldValue(
      "nameOfTheOccupation",
      initialIncomeDetails.nameOfTheOccupation
    );
    formik.setFieldValue("occupation", initialIncomeDetails.occupation);
    formik.setFieldValue(
      "oftenYouGetPaid",
      initialIncomeDetails.oftenYouGetPaid
    );
    formik.setFieldValue(
      "typeOfEmployement",
      initialIncomeDetails.typeOfEmployement
    );
  }, [incomeDetails]);

  return (
    <form
      style={{ marginTop: "200px", color: "white", marginLeft: "100px" }}
      autoComplete="off"
      onSubmit={formik.handleSubmit}
    >
      <Typography variant="h5" sx={{ marginBottom: "20px" }}>
        Agreement In Principle
      </Typography>
      <Typography variant="h2"> Your Earnings</Typography>
      <Divider
        sx={{
          backgroundColor: "white",
          borderBottomWidth: 3,
          width: "1200px",
          marginTop: "30px",
        }}
      />
      <FormControl>
        <FormLabel
          sx={{
            color: "white",
            marginTop: "50px",
            fontSize: "25px",
            marginBottom: "10px",
          }}
        >
          Type of Employement
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="typeOfEmployement"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.typeOfEmployement}
        >
          <FormControlLabel
            value="Salaried"
            control={<Radio sx={{ color: "white" }} />}
            label="Salaried"
          />
          <FormControlLabel
            value="Self Employed"
            control={<Radio sx={{ color: "white" }} />}
            label="Self Employed"
          />
        </RadioGroup>
        <FormHelperText
          error={Boolean(
            formik.touched.typeOfEmployement && formik.errors.typeOfEmployement
          )}
        >
          {formik.touched.typeOfEmployement && formik.errors.typeOfEmployement}
        </FormHelperText>
      </FormControl>
      <br />

      <FormControl>
        <FormLabel
          sx={{
            color: "white",
            marginTop: "50px",
            fontSize: "25px",
            marginBottom: "10px",
          }}
        >
          Contract Type
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="contractType"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.contractType}
        >
          <FormControlLabel
            value="Full Time"
            control={<Radio sx={{ color: "white" }} />}
            label="Full Time"
          />
          <FormControlLabel
            value="Part Time"
            control={<Radio sx={{ color: "white" }} />}
            label="Part Time"
          />
        </RadioGroup>
        <FormHelperText
          error={Boolean(
            formik.touched.contractType && formik.errors.contractType
          )}
        >
          {formik.touched.contractType && formik.errors.contractType}
        </FormHelperText>
      </FormControl>

      <Typography
        paragraph
        sx={{ fontSize: "25px", marginTop: "50px", marginBottom: "20px" }}
      >
        Occupation
      </Typography>

      <FormControl sx={{ width: "500px", backgroundColor: "grey" }}>
        <Select
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="occupation"
          value={formik.values.occupation}
        >
          <MenuItem sx={{ fontSize: "20px" }} value={""} disabled>
            Select an option
          </MenuItem>
          <MenuItem sx={{ fontSize: "20px" }} value={"Teacher"}>
            Teacher
          </MenuItem>
          <MenuItem sx={{ fontSize: "20px" }} value={"Government Employee"}>
            Government Employee
          </MenuItem>
          <MenuItem sx={{ fontSize: "20px" }} value={"Doctor"}>
            Doctor
          </MenuItem>
          <MenuItem sx={{ fontSize: "20px" }} value={"Actor"}>
            Actor
          </MenuItem>
          <MenuItem sx={{ fontSize: "20px" }} value={"Chartered Accountant"}>
            Chartered Accountant
          </MenuItem>
          <MenuItem sx={{ fontSize: "20px" }} value={"Lawyer"}>
            Lawyer
          </MenuItem>
          <MenuItem sx={{ fontSize: "20px" }} value={"IT Employee"}>
            IT Employee
          </MenuItem>
          <MenuItem sx={{ fontSize: "20px" }} value={"Others"}>
            Others
          </MenuItem>
        </Select>
      </FormControl>

      {formik.values.occupation === "Others" && (
        <>
          <Typography paragraph sx={{ fontSize: "25px", marginTop: "50px" }}>
            Name of the Occupation
          </Typography>
          <TextField
            sx={{ borderColor: "white", width: "500px" }}
            name="nameOfTheOccupation"
            placeholder="Enter your occupation"
            value={formik.values.nameOfTheOccupation}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(
              formik.touched.nameOfTheOccupation &&
                formik.errors.nameOfTheOccupation
            )}
            helperText={
              formik.touched.nameOfTheOccupation &&
              formik.errors.nameOfTheOccupation
            }
          />
        </>
      )}

      <Typography paragraph sx={{ fontSize: "25px", marginTop: "50px" }}>
        Name of the Employer
      </Typography>
      <TextField
        sx={{ borderColor: "white", width: "500px" }}
        name="nameOfTheEmployer"
        placeholder="Enter your employer name"
        value={formik.values.nameOfTheEmployer}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={Boolean(
          formik.touched.nameOfTheEmployer && formik.errors.nameOfTheEmployer
        )}
        helperText={
          formik.touched.nameOfTheEmployer && formik.errors.nameOfTheEmployer
        }
      />

      <Typography
        paragraph
        sx={{ fontSize: "25px", marginTop: "50px", marginBottom: "20px" }}
      >
        How Often do you get paid
      </Typography>
      <FormControl sx={{ width: "500px", backgroundColor: "grey" }}>
        <Select
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="oftenYouGetPaid"
          value={formik.values.oftenYouGetPaid}
        >
          <MenuItem sx={{ fontSize: "20px" }} value={0} disabled>
            Select an option
          </MenuItem>
          <MenuItem sx={{ fontSize: "20px" }} value={4}>
            Weekly
          </MenuItem>
          <MenuItem sx={{ fontSize: "20px" }} value={2}>
            Fortnightly
          </MenuItem>
          <MenuItem sx={{ fontSize: "20px" }} value={1}>
            Monthly
          </MenuItem>
        </Select>
      </FormControl>

      <Typography paragraph sx={{ fontSize: "25px", marginTop: "50px" }}>
        How much will you earn
      </Typography>
      <TextField
        sx={{ borderColor: "white", width: "500px" }}
        name="earning"
        placeholder="Enter your income"
        value={formik.values.earning}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={Boolean(formik.touched.earning && formik.errors.earning)}
        helperText={formik.touched.earning && formik.errors.earning}
      />

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
          to={AppRoutes.PERSONAL_DETAILS}
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
