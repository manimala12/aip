import { Box, Typography, Divider, TextField, Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Link, useNavigate } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { useFormik } from "formik";

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
      </FormControl>

      <Typography paragraph style={{ fontSize: "25px", marginTop: "50px" }}>
        Mobile Number
      </Typography>
      <TextField
        style={{ borderColor: "white", width: "500px" }}
        name="mobileNumber"
        value={formik.values.mobileNumber}
        onChange={formik.handleChange}
      />
      <Typography paragraph style={{ fontSize: "23px", marginTop: "50px" }}>
        Address
      </Typography>
      <TextField
        style={{ borderColor: "white", width: "500px" }}
        name="address"
        value={formik.values.address}
        onChange={formik.handleChange}
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
          backgroundColor: "blue",
          padding: "15px 60px",
          marginTop: "40px",
          fontWeight: "bold",
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
          backgroundColor: "blue",
          marginLeft: "785px",
          padding: "15px 60px",
          marginTop: "40px",
          fontWeight: "bold",
        }}
        endIcon={<ArrowRightIcon style={{ fontSize: "30px" }} />}
      >
        Continue
      </Button>
    </form>
  );
}
