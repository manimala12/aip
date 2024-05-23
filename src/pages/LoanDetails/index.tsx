import {
  Typography,
  TextField,
  MenuItem,
  Select,
  FormHelperText,
  Slider,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { HomeTypeOptions, LoanDetailsValues } from "./types";
import { loanDetailsInitialValues, loanDetailsValidation } from "./utils";
import { useDispatch, useSelector } from "react-redux";
import { UnknownAction } from "redux";
import { useEffect } from "react";
import { saveLoanDetailsAction } from "../../custom-redux/actions/loanDetails/save";
import { getLoanDetailsAction } from "../../custom-redux/actions/loanDetails/get";
import { AppState } from "../../custom-redux/store";
import { loanDetailsContent } from "../../content/loanDetails";
import FormLayout from "../../components/FormLayout";
import useScrollToTop from "../../components/ScrollToTop/useScrollToTop";

export default function LoanDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useScrollToTop();
  const loanDetails = useSelector<AppState, LoanDetailsValues | undefined>(
    (state) => state.appData.loanDetails
  );
  const isAuthenticated = useSelector<AppState, boolean | undefined>(
    (state) => state.auth.isAuthenticated
  );

  const formik = useFormik<LoanDetailsValues>({
    initialValues: loanDetailsInitialValues(loanDetails),
    validationSchema: loanDetailsValidation(),
    onSubmit: (values) => {
      dispatch(
        saveLoanDetailsAction(values, navigate) as unknown as UnknownAction
      );
    },
  });

  useEffect(() => {
    dispatch(getLoanDetailsAction() as unknown as UnknownAction);
  }, []);
  useEffect(() => {
    dispatch(getLoanDetailsAction() as unknown as UnknownAction);
    const initialLoanDetails = loanDetailsInitialValues(loanDetails);
    formik.setFieldValue("deposit", initialLoanDetails.deposit);
    formik.setFieldValue("homeType", initialLoanDetails.homeType);
    formik.setFieldValue("loanDuration", initialLoanDetails.loanDuration);
    formik.setFieldValue("noOfPeople", initialLoanDetails.noOfPeople);
    formik.setFieldValue("propertyValue", initialLoanDetails.propertyValue);
  }, [isAuthenticated]);

  useEffect(() => {
    const initialLoanDetails = loanDetailsInitialValues(loanDetails);
    formik.setFieldValue("deposit", initialLoanDetails.deposit);
    formik.setFieldValue("homeType", initialLoanDetails.homeType);
    formik.setFieldValue("loanDuration", initialLoanDetails.loanDuration);
    formik.setFieldValue("noOfPeople", initialLoanDetails.noOfPeople);
    formik.setFieldValue("propertyValue", initialLoanDetails.propertyValue);
  }, [loanDetails]);

  return (
    <form autoComplete="off" onSubmit={formik.handleSubmit}>
      <FormLayout heading="Your Loan Details" name="loan" route="">
        <FormControl>
          <FormLabel
            sx={{
              color: "white",
              marginTop: "100px",
              fontSize: "25px",
              marginBottom: "10px",
            }}
          >
            {loanDetailsContent.noOfPeople.label}
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="noOfPeople"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.noOfPeople}
          >
            <FormControlLabel
              value="1"
              control={<Radio sx={{ color: "white" }} />}
              label="Just me"
            />
            <FormControlLabel
              value="2"
              control={<Radio sx={{ color: "white" }} />}
              label="Me and someone else"
            />
          </RadioGroup>
          <FormHelperText
            error={Boolean(
              formik.touched.noOfPeople && formik.errors.noOfPeople
            )}
          >
            {formik.touched.noOfPeople && formik.errors.noOfPeople}
          </FormHelperText>
        </FormControl>

        <Typography
          paragraph
          sx={{ fontSize: "25px", marginTop: "50px", marginBottom: "20px" }}
        >
          {loanDetailsContent.homeType.label}
        </Typography>

        <FormControl sx={{ width: { xs: "100%" }, maxWidth: "500px" }}>
          <Select
            value={formik.values.homeType}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="homeType"
          >
            <MenuItem sx={{ fontSize: "20px" }} value={""}>
              Select an option
            </MenuItem>
            <MenuItem
              sx={{ fontSize: "20px" }}
              value={HomeTypeOptions.NEW_HOME}
            >
              {HomeTypeOptions.NEW_HOME}
            </MenuItem>
            <MenuItem
              sx={{ fontSize: "20px" }}
              value={HomeTypeOptions.EXISTING_HOME}
            >
              {HomeTypeOptions.EXISTING_HOME}
            </MenuItem>
            <MenuItem
              sx={{ fontSize: "20px" }}
              value={HomeTypeOptions.BUYING_HOME}
            >
              {HomeTypeOptions.BUYING_HOME}
            </MenuItem>
          </Select>
          <FormHelperText
            error={Boolean(formik.touched.homeType && formik.errors.homeType)}
          >
            {formik.touched.homeType && formik.errors.homeType}
          </FormHelperText>
        </FormControl>

        <Typography paragraph sx={{ fontSize: "25px", marginTop: "50px" }}>
          {loanDetailsContent.propertyValue.label}
        </Typography>
        <Typography paragraph sx={{ fontSize: "18px", marginTop: "20px" }}>
          {loanDetailsContent.propertyValueDescription.label}
        </Typography>
        <TextField
          sx={{
            borderColor: "white",
            width: { xs: "100%" },
            maxWidth: "500px",
          }}
          name="propertyValue"
          placeholder="Enter Property Value"
          value={formik.values.propertyValue}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(
            formik.touched.propertyValue && formik.errors.propertyValue
          )}
          helperText={
            formik.touched.propertyValue && formik.errors.propertyValue
          }
        />

        <Typography paragraph sx={{ fontSize: "25px", marginTop: "60px" }}>
          {loanDetailsContent.deposit.label}
        </Typography>
        <Typography paragraph sx={{ fontSize: "18px", marginTop: "20px" }}>
          {loanDetailsContent.depositDescription.label}
        </Typography>
        <TextField
          sx={{
            borderColor: "white",
            width: { xs: "100%" },
            maxWidth: "500px",
          }}
          name="deposit"
          placeholder="Enter Deposit Value"
          value={formik.values.deposit}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(formik.touched.deposit && formik.errors.deposit)}
          helperText={formik.touched.deposit && formik.errors.deposit}
        />
        <Typography paragraph sx={{ fontSize: "25px", marginTop: "60px" }}>
          {loanDetailsContent.loanDuration.label}
        </Typography>

        <Slider
          aria-label="loanDuration"
          name="loanDuration"
          value={+formik.values.loanDuration}
          valueLabelDisplay="auto"
          shiftStep={5}
          step={1}
          marks
          min={5}
          max={30}
          sx={{
            color: "white",
            width: { xs: "100%" },
            maxWidth: "480px",
            px: 1,
          }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <br />
        <TextField
          sx={{
            borderColor: "white",
            width: { xs: "100%" },
            maxWidth: "500px",
          }}
          name="loanDuration"
          value={formik.values.loanDuration}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(
            formik.touched.loanDuration && formik.errors.loanDuration
          )}
          helperText={formik.touched.loanDuration && formik.errors.loanDuration}
        />
      </FormLayout>
    </form>
  );
}
