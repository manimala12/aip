import {
  Typography,
  TextField,
  Radio,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  FormHelperText,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import {
  expenditureDetailsInitialValues,
  expenditureDetailsValidation,
} from "./utils";
import { ExpenditureDetailsValues } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../custom-redux/store";
import { saveExpenditureDetailsAction } from "../../custom-redux/actions/expenditureDetails/save";
import { getExpenditureDetailsAction } from "../../custom-redux/actions/expenditureDetails/get";
import { UnknownAction } from "redux";
import { useEffect } from "react";
import { AppRoutes } from "../../types";
import FormHeader from "../../components/FormHeader";
import { expenditureDetailsContent } from "../../content/expenditures";
import FormFooter from "../../components/FormFooter";

export default function Expenditures() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const expenditureDetails = useSelector<
    AppState,
    ExpenditureDetailsValues | undefined
  >((state) => state.appData.expenditureDetails);

  const formik = useFormik<ExpenditureDetailsValues>({
    initialValues: {
      activeLoans: "",
      loanEMI: "",
      loanOutstanding: "",
      vehicle: "",
      vehicleEMI: "",
      vehicleOutstanding: "",
      children: "",
      schoolFee: "",
      otherExpenditures: "",
      otherAmount: "",
    },
    validationSchema: expenditureDetailsValidation(),
    onSubmit: (values) => {
      dispatch(
        saveExpenditureDetailsAction(
          values,
          navigate
        ) as unknown as UnknownAction
      );
    },
  });

  useEffect(() => {
    dispatch(getExpenditureDetailsAction() as unknown as UnknownAction);
  }, []);

  useEffect(() => {
    const initialExpenditureDetails =
      expenditureDetailsInitialValues(expenditureDetails);
    formik.setFieldValue("activeLoans", initialExpenditureDetails.activeLoans);
    formik.setFieldValue("children", initialExpenditureDetails.children);
    formik.setFieldValue("loanEMI", initialExpenditureDetails.loanEMI);
    formik.setFieldValue(
      "loanOutstanding",
      initialExpenditureDetails.loanOutstanding
    );
    formik.setFieldValue("otherAmount", initialExpenditureDetails.otherAmount);
    formik.setFieldValue(
      "otherExpenditures",
      initialExpenditureDetails.otherExpenditures
    );
    formik.setFieldValue("schoolFee", initialExpenditureDetails.schoolFee);
    formik.setFieldValue("vehicle", initialExpenditureDetails.vehicle);
    formik.setFieldValue("vehicleEMI", initialExpenditureDetails.vehicleEMI);
    formik.setFieldValue(
      "vehicleOutstanding",
      initialExpenditureDetails.vehicleOutstanding
    );
  }, [expenditureDetails]);

  return (
    <form
      style={{ marginTop: "200px", color: "white", marginLeft: "100px" }}
      autoComplete="off"
      onSubmit={formik.handleSubmit}
    >
      <FormHeader heading="Your Spendings">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl>
              <FormLabel
                sx={{
                  color: "white",
                  marginTop: "50px",
                  fontSize: "25px",
                  marginBottom: "10px",
                }}
              >
                {expenditureDetailsContent.activeLoans.label}
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="activeLoans"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.activeLoans}
              >
                <FormControlLabel
                  value="Yes"
                  control={<Radio sx={{ color: "white" }} />}
                  label="Yes"
                />
                <FormControlLabel
                  value="No"
                  control={<Radio sx={{ color: "white" }} />}
                  label="No"
                />
              </RadioGroup>
              <FormHelperText
                error={Boolean(
                  formik.touched.activeLoans && formik.errors.activeLoans
                )}
              >
                {formik.touched.activeLoans && formik.errors.activeLoans}
              </FormHelperText>
            </FormControl>
          </Grid>
          <br />
          {formik.values.activeLoans === "Yes" && (
            <>
              <Grid item xs={12}>
                <Typography
                  paragraph
                  sx={{ fontSize: "25px", marginTop: "50px" }}
                >
                  {expenditureDetailsContent.loanEMI.label}
                </Typography>
                <TextField
                  sx={{ borderColor: "white", width: "500px" }}
                  name="loanEMI"
                  placeholder="Enter your loan EMI"
                  value={formik.values.loanEMI}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={Boolean(
                    formik.touched.loanEMI && formik.errors.loanEMI
                  )}
                  helperText={formik.touched.loanEMI && formik.errors.loanEMI}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  paragraph
                  sx={{ fontSize: "25px", marginTop: "50px" }}
                >
                  {expenditureDetailsContent.loanOutstnading.label}
                </Typography>
                <TextField
                  sx={{ borderColor: "white", width: "500px" }}
                  name="loanOutstanding"
                  placeholder="Enter your loan outstanding amount"
                  value={formik.values.loanOutstanding}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={Boolean(
                    formik.touched.loanOutstanding &&
                      formik.errors.loanOutstanding
                  )}
                  helperText={
                    formik.touched.loanOutstanding &&
                    formik.errors.loanOutstanding
                  }
                />
              </Grid>
            </>
          )}
          <Grid item xs={12}>
            <FormControl>
              <FormLabel
                sx={{
                  color: "white",
                  marginTop: "50px",
                  fontSize: "25px",
                  marginBottom: "10px",
                }}
              >
                {expenditureDetailsContent.vehicle.label}
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="vehicle"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.vehicle}
              >
                <FormControlLabel
                  value="Yes"
                  control={<Radio sx={{ color: "white" }} />}
                  label="Yes"
                />
                <FormControlLabel
                  value="No"
                  control={<Radio sx={{ color: "white" }} />}
                  label="No"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          {formik.values.vehicle === "Yes" && (
            <>
              <Grid item xs={12}>
                <Typography
                  paragraph
                  sx={{ fontSize: "25px", marginTop: "50px" }}
                >
                  {expenditureDetailsContent.vehicleEMI.label}
                </Typography>
                <TextField
                  sx={{ borderColor: "white", width: "500px" }}
                  name="vehicleEMI"
                  value={formik.values.vehicleEMI}
                  placeholder="Enter your vehicle EMI"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={Boolean(
                    formik.touched.vehicleEMI && formik.errors.vehicleEMI
                  )}
                  helperText={
                    formik.touched.vehicleEMI && formik.errors.vehicleEMI
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  paragraph
                  sx={{ fontSize: "25px", marginTop: "50px" }}
                >
                  {expenditureDetailsContent.vehicleOutstanding.label}
                </Typography>
                <TextField
                  sx={{ borderColor: "white", width: "500px" }}
                  name="vehicleOutstanding"
                  placeholder="Enter your vehicle outstanding amount"
                  value={formik.values.vehicleOutstanding}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={Boolean(
                    formik.touched.vehicleOutstanding &&
                      formik.errors.vehicleOutstanding
                  )}
                  helperText={
                    formik.touched.vehicleOutstanding &&
                    formik.errors.vehicleOutstanding
                  }
                />
              </Grid>
            </>
          )}
          <Grid item xs={12}>
            <Typography paragraph sx={{ fontSize: "25px", marginTop: "50px" }}>
              {expenditureDetailsContent.children.label}
            </Typography>
            <TextField
              sx={{ borderColor: "white", width: "500px" }}
              name="children"
              value={formik.values.children}
              placeholder="Enter number of children"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={Boolean(formik.touched.children && formik.errors.children)}
              helperText={formik.touched.children && formik.errors.children}
            />
          </Grid>
          {+formik.values.children > 0 && (
            <Grid item xs={12}>
              <Typography
                paragraph
                sx={{ fontSize: "25px", marginTop: "50px" }}
              >
                {expenditureDetailsContent.schoolFee.label}
              </Typography>
              <TextField
                sx={{ borderColor: "white", width: "500px" }}
                name="schoolFee"
                placeholder="Enter your children school fee"
                value={formik.values.schoolFee}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={Boolean(
                  formik.touched.schoolFee && formik.errors.schoolFee
                )}
                helperText={formik.touched.schoolFee && formik.errors.schoolFee}
              />
            </Grid>
          )}
          <Grid item xs={12}>
            <FormControl>
              <FormLabel
                sx={{
                  color: "white",
                  marginTop: "50px",
                  fontSize: "25px",
                  marginBottom: "10px",
                }}
              >
                {expenditureDetailsContent.otherExpenditures.label}
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="otherExpenditures"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.otherExpenditures}
              >
                <FormControlLabel
                  value="Yes"
                  control={<Radio sx={{ color: "white" }} />}
                  label="Yes"
                />
                <FormControlLabel
                  value="No"
                  control={<Radio sx={{ color: "white" }} />}
                  label="No"
                />
              </RadioGroup>
              <FormHelperText
                error={Boolean(
                  formik.touched.otherExpenditures &&
                    formik.errors.otherExpenditures
                )}
              >
                {formik.touched.otherExpenditures &&
                  formik.errors.otherExpenditures}
              </FormHelperText>
            </FormControl>
          </Grid>
          {formik.values.otherExpenditures.match(/yes/i) && (
            <Grid item xs={12}>
              <Typography
                paragraph
                sx={{ fontSize: "25px", marginTop: "50px" }}
              >
                {expenditureDetailsContent.otherAmount.label}
              </Typography>
              <TextField
                sx={{ borderColor: "white", width: "500px" }}
                name="otherAmount"
                value={formik.values.otherAmount}
                placeholder="Enter your other expenses amount"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={Boolean(
                  formik.touched.otherAmount && formik.errors.otherAmount
                )}
                helperText={
                  formik.touched.otherAmount && formik.errors.otherAmount
                }
              />
            </Grid>
          )}
        </Grid>
      </FormHeader>
      <FormFooter name="expenditures" route={AppRoutes.INCOME_DETAILS} />
    </form>
  );
}
