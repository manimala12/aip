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
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Expenditures() {
  const navigate = useNavigate();

  const formik = useFormik({
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
    validationSchema: Yup.object().shape({
      activeLoans: Yup.string().required("Please select an option"),
      loanEMI: Yup.number()
        .positive("Please enter a postive number")
        .required("Please enter your loan EMI"),
      loanOutstanding: Yup.number()
        .positive("Please enter a postive number")
        .required("Please enter your loan outstanding amount"),
      vehicleEMI: Yup.number()
        .positive("Please enter a postive number")
        .required("Please enter your vehicle EMI"),
      vehicleOutstanding: Yup.number()
        .positive("Please enter a postive number")
        .required("Please enter your vehicle outstanding amount"),
      children: Yup.number()
        .positive("Please enter a postive number")
        .required("Please enter about your children"),
      schoolFee: Yup.number()
        .positive("Please enter a postive number")
        .required("Please enter your children school fee"),
      otherExpenditures: Yup.string()
        .matches(/^(Yes|No)$/i, 'Please enter either "Yes" or "No"')
        .required("Please enter your other expenditures"),
      otherAmount: Yup.number()
        .positive("Please enter a postive number")
        .required("Please enter your other expenditures amount"),
    }),
    onSubmit: (values) => {
      fetch("http://localhost:8000/expenditures", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      })
        .then(() => {
          console.log("Posted Successfully");
          navigate("/result");
        })
        .catch((err) => {
          console.log("Failed:" + err.message);
        });
    },
  });
  return (
    <form
      style={{ marginTop: "200px", color: "white", marginLeft: "100px" }}
      autoComplete="off"
      onSubmit={formik.handleSubmit}
    >
      <Typography variant="h5" style={{ marginBottom: "20px" }}>
        Agreement In Principle
      </Typography>
      <Typography variant="h2">Your Spendings</Typography>
      <Divider
        style={{
          backgroundColor: "white",
          borderBottomWidth: 3,
          width: "1200px",
          marginTop: "30px",
        }}
      />
      <FormControl>
        <FormLabel
          style={{
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
        >
          <FormControlLabel
            value="Yes"
            control={<Radio style={{ color: "white" }} />}
            label="Yes"
          />
          <FormControlLabel
            value="No"
            control={<Radio style={{ color: "white" }} />}
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
      <br />
      {formik.values.activeLoans === "Yes" && (
        <>
          <Typography paragraph style={{ fontSize: "25px", marginTop: "50px" }}>
            How much amount will you pay for EMI every month?
          </Typography>
          <TextField
            style={{ borderColor: "white", width: "500px" }}
            name="loanEMI"
            value={formik.values.loanEMI}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.loanEMI && formik.errors.loanEMI)}
            helperText={formik.touched.loanEMI && formik.errors.loanEMI}
          />
          {+formik.values.loanEMI > 0 && (
            <>
              <Typography
                paragraph
                style={{ fontSize: "25px", marginTop: "50px" }}
              >
                Outstanding amount
              </Typography>
              <TextField
                style={{ borderColor: "white", width: "500px" }}
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
            </>
          )}
        </>
      )}
      <FormControl>
        <FormLabel
          style={{
            color: "white",
            marginTop: "50px",
            fontSize: "25px",
            marginBottom: "10px",
          }}
        >
          Do you have any vehicle?
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="vehicle"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <FormControlLabel
            value="Yes"
            control={<Radio style={{ color: "white" }} />}
            label="Yes"
          />
          <FormControlLabel
            value="No"
            control={<Radio style={{ color: "white" }} />}
            label="No"
          />
        </RadioGroup>
      </FormControl>
      {formik.values.vehicle === "Yes" && (
        <>
          <Typography paragraph style={{ fontSize: "25px", marginTop: "50px" }}>
            How much amount will you pay for your vehicle EMI?
          </Typography>
          <TextField
            style={{ borderColor: "white", width: "500px" }}
            name="vehicleEMI"
            value={formik.values.vehicleEMI}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(
              formik.touched.vehicleEMI && formik.errors.vehicleEMI
            )}
            helperText={formik.touched.vehicleEMI && formik.errors.vehicleEMI}
          />
          {+formik.values.vehicleEMI > 0 && (
            <>
              <Typography
                paragraph
                style={{ fontSize: "25px", marginTop: "50px" }}
              >
                Outstanding amount of your vehicle
              </Typography>
              <TextField
                style={{ borderColor: "white", width: "500px" }}
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
            </>
          )}
        </>
      )}
      <Typography paragraph style={{ fontSize: "25px", marginTop: "50px" }}>
        How many children you have?
      </Typography>
      <TextField
        style={{ borderColor: "white", width: "500px" }}
        name="children"
        value={formik.values.children}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={Boolean(formik.touched.children && formik.errors.children)}
        helperText={formik.touched.children && formik.errors.children}
      />
      {+formik.values.children > 0 && (
        <>
          <Typography paragraph style={{ fontSize: "25px", marginTop: "50px" }}>
            How much amount will you pay for their school fee yearly?
          </Typography>
          <TextField
            style={{ borderColor: "white", width: "500px" }}
            name="schoolFee"
            value={formik.values.schoolFee}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.schoolFee && formik.errors.schoolFee)}
            helperText={formik.touched.schoolFee && formik.errors.schoolFee}
          />
        </>
      )}
      <Typography paragraph style={{ fontSize: "25px", marginTop: "50px" }}>
        Do you have any other expenditures
      </Typography>
      <TextField
        style={{ borderColor: "white", width: "500px" }}
        name="otherExpenditures"
        value={formik.values.otherExpenditures}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={Boolean(
          formik.touched.otherExpenditures && formik.errors.otherExpenditures
        )}
        helperText={
          formik.touched.otherExpenditures && formik.errors.otherExpenditures
        }
      />
      {formik.values.otherExpenditures === "Yes" && (
        <>
          <Typography paragraph style={{ fontSize: "25px", marginTop: "50px" }}>
            How much amount will you spend on them every month?
          </Typography>
          <TextField
            style={{ borderColor: "white", width: "500px" }}
            name="otherAmount"
            value={formik.values.otherAmount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(
              formik.touched.otherAmount && formik.errors.otherAmount
            )}
            helperText={formik.touched.otherAmount && formik.errors.otherAmount}
          />
        </>
      )}

      <Divider
        style={{
          backgroundColor: "white",
          borderBottomWidth: 3,
          width: "1200px",
          marginTop: "50px",
        }}
      />
      <Button
        variant="contained"
        color="inherit"
        component={Link}
        style={{
          backgroundColor: "blue",
          padding: "15px 60px",
          marginTop: "40px",
          fontWeight: "bold",
        }}
        to="/income-details"
      >
        <ArrowLeftIcon style={{ fontSize: "30px" }} />
        Back
      </Button>
      <Button
        type="submit"
        variant="contained"
        color="inherit"
        style={{
          backgroundColor: "blue",
          marginLeft: "785px",
          padding: "15px 60px",
          marginTop: "40px",
          fontWeight: "bold",
        }}
        endIcon={<ArrowRightIcon style={{ fontSize: "30px" }} />}
      >
        Submit
      </Button>
    </form>
  );
}
