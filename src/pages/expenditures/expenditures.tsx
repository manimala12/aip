import {
  Typography,
  Divider,
  Button,
  TextField,
  Radio,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  FormHelperText,
  Grid,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { Link, useNavigate } from "react-router-dom";
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
import { saveDecisionAction } from "../../custom-redux/actions/getDecision";

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
      dispatch(saveDecisionAction(navigate) as unknown as UnknownAction);
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
      <Typography variant="h5" sx={{ marginBottom: "20px" }}>
        Agreement In Principle
      </Typography>
      <Typography variant="h2">Your Spendings</Typography>
      <Divider
        sx={{
          backgroundColor: "white",
          borderBottomWidth: 3,
          width: "1200px",
          marginTop: "30px",
        }}
      />
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
              Do you have any active loans?
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
                How much amount will you pay for EMI every month?
              </Typography>
              <TextField
                sx={{ borderColor: "white", width: "500px" }}
                name="loanEMI"
                value={formik.values.loanEMI}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={Boolean(formik.touched.loanEMI && formik.errors.loanEMI)}
                helperText={formik.touched.loanEMI && formik.errors.loanEMI}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography
                paragraph
                sx={{ fontSize: "25px", marginTop: "50px" }}
              >
                Outstanding amount
              </Typography>
              <TextField
                sx={{ borderColor: "white", width: "500px" }}
                name="loanOutstanding"
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
              Do you have any vehicle loans?
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
                How much amount will you pay for your vehicle EMI?
              </Typography>
              <TextField
                sx={{ borderColor: "white", width: "500px" }}
                name="vehicleEMI"
                value={formik.values.vehicleEMI}
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
                Outstanding amount of your vehicle
              </Typography>
              <TextField
                sx={{ borderColor: "white", width: "500px" }}
                name="vehicleOutstanding"
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
            Number of children
          </Typography>
          <TextField
            sx={{ borderColor: "white", width: "500px" }}
            name="children"
            value={formik.values.children}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.children && formik.errors.children)}
            helperText={formik.touched.children && formik.errors.children}
          />
        </Grid>
        {+formik.values.children > 0 && (
          <Grid item xs={12}>
            <Typography paragraph sx={{ fontSize: "25px", marginTop: "50px" }}>
              How much amount will you pay for their school fee yearly?
            </Typography>
            <TextField
              sx={{ borderColor: "white", width: "500px" }}
              name="schoolFee"
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
              Do you have any other expenditures
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
            <Typography paragraph sx={{ fontSize: "25px", marginTop: "50px" }}>
              How much amount will you spend on them every month?
            </Typography>
            <TextField
              sx={{ borderColor: "white", width: "500px" }}
              name="otherAmount"
              value={formik.values.otherAmount}
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

        <Divider
          sx={{
            backgroundColor: "white",
            borderBottomWidth: 3,
            width: "1200px",
            marginTop: "50px",
          }}
        />
        <Grid sx={{ display: "flex", gap: "800px" }}>
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
            to="/income-details"
          >
            <ArrowLeftIcon sx={{ fontSize: "30px" }} />
            Back
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="inherit"
            sx={{
              backgroundColor: "#ffc107",
              // marginLeft: "585px",
              padding: "15px 60px",
              marginTop: "40px",
              fontWeight: "bold",
              marginBottom: "30px",
            }}
            endIcon={<ArrowRightIcon sx={{ fontSize: "30px" }} />}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
