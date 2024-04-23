import {
  Box,
  Typography,
  Divider,
  TextField,
  Button,
  FormHelperText,
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
import * as Yup from "yup";

export default function PersonalDetails() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      dateOfBirth: "",
      gender: "",
      mobileNumber: "",
      address: "",
    },
    validationSchema: Yup.object().shape({
      fullName: Yup.string().required("Please enter your full name"),
      mobileNumber: Yup.number()
        .positive("Please enter a valid mobile number")
        .required("Please enter your mobile number"),
      gender: Yup.string()
        .required("Please enter your gender")
        .oneOf(["Male", "Female"]),
      address: Yup.string().required("Please enter your address"),
    }),
    onSubmit: (values) => {
      fetch("http://localhost:8000/personal-details", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      })
        .then(() => {
          console.log("Posted Successfully");
          navigate("/income-details");
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
      <Typography variant="h2">Personal Details</Typography>
      <Divider
        style={{
          backgroundColor: "white",
          borderBottomWidth: 3,
          width: "1200px",
          marginTop: "30px",
        }}
      />
      <Typography
        paragraph
        style={{ fontSize: "25px", marginTop: "50px", marginBottom: "20px" }}
      >
        Full Name
      </Typography>
      <TextField
        style={{ borderColor: "white", width: "500px" }}
        name="fullName"
        value={formik.values.fullName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={Boolean(formik.touched.fullName && formik.errors.fullName)}
        helperText={formik.touched.fullName && formik.errors.fullName}
      />

      <Typography
        paragraph
        style={{ fontSize: "25px", marginTop: "50px", marginBottom: "20px" }}
      >
        Date of Birth
      </Typography>
      <Box style={{ display: "flex", gap: "20px" }}>
        <TextField
          style={{ width: "150px", color: "white" }}
          placeholder="DD/MM/YYYY"
          name="dateOfBirth"
          value={formik.values.dateOfBirth}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Box>

      <FormControl>
        <FormLabel
          style={{
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
        >
          <FormControlLabel
            value="Male"
            control={<Radio style={{ color: "white" }} />}
            label="Male"
          />
          <FormControlLabel
            value="Female"
            control={<Radio style={{ color: "white" }} />}
            label="Female"
          />
        </RadioGroup>
        <FormHelperText
          error={Boolean(formik.touched.gender && formik.errors.gender)}
        >
          {formik.touched.gender && formik.errors.gender}
        </FormHelperText>
      </FormControl>

      <Typography paragraph style={{ fontSize: "25px", marginTop: "50px" }}>
        Mobile Number
      </Typography>
      <TextField
        style={{ borderColor: "white", width: "500px" }}
        name="mobileNumber"
        value={formik.values.mobileNumber}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={Boolean(
          formik.touched.mobileNumber && formik.errors.mobileNumber
        )}
        helperText={formik.touched.mobileNumber && formik.errors.mobileNumber}
      />
      <Typography paragraph style={{ fontSize: "23px", marginTop: "50px" }}>
        Address
      </Typography>
      <TextField
        style={{ borderColor: "white", width: "500px" }}
        name="address"
        value={formik.values.address}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={Boolean(formik.touched.address && formik.errors.address)}
        helperText={formik.touched.address && formik.errors.address}
      />

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
          backgroundColor: "#ffc107",
          padding: "15px 60px",
          marginTop: "40px",
          fontWeight: "bold",
          marginBottom: "30px",
        }}
        to="/loan-details"
      >
        <ArrowLeftIcon style={{ fontSize: "30px" }} />
        Back
      </Button>
      <Button
        variant="contained"
        color="inherit"
        type="submit"
        style={{
          backgroundColor: "#ffc107",
          marginLeft: "785px",
          padding: "15px 60px",
          marginTop: "40px",
          fontWeight: "bold",
          marginBottom: "30px",
        }}
        endIcon={<ArrowRightIcon style={{ fontSize: "30px" }} />}
      >
        Continue
      </Button>
    </form>
  );
}
