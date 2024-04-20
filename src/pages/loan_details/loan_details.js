import {
  Typography,
  Divider,
  TextField,
  Button,
  MenuItem,
  Select,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useFormik } from "formik";

export default function LoanDetails() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      noOfPeople: "",
      homeType: "",
      propertyValue: "",
      deposit: "",
    },
    onSubmit: (values) => {
      fetch("http://localhost:8000/loan-details", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      })
        .then(() => {
          console.log("Posted Successfully");
          navigate("/personal-details");
        })
        .catch((err) => {
          console.log("Failed:" + err.message);
        });
    },
  });
  return (
    <form
      style={{ marginTop: "200px", marginLeft: "100px", color: "white" }}
      autoComplete="off"
      onSubmit={formik.handleSubmit}
    >
      <Typography variant="h5" style={{ marginBottom: "20px" }}>
        Agreement In Principle
      </Typography>
      <Typography variant="h2"> Your Loan Details</Typography>
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
            marginTop: "100px",
            fontSize: "25px",
            marginBottom: "10px",
          }}
        >
          How many people will be applying for the mortgage?
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="noOfPeople"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <FormControlLabel
            value="1"
            control={<Radio style={{ color: "white" }} />}
            label="Just me"
          />
          <FormControlLabel
            value="2"
            control={<Radio style={{ color: "white" }} />}
            label="Me and someone else"
          />
        </RadioGroup>
      </FormControl>

      <Typography
        paragraph
        style={{ fontSize: "25px", marginTop: "50px", marginBottom: "20px" }}
      >
        Firstly, what would you like to do?
      </Typography>

      <FormControl style={{ width: "500px", backgroundColor: "grey" }}>
        <Select
          defaultValue={"Select an option"}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="homeType"
        >
          <MenuItem style={{ fontSize: "20px" }} value={"Select an option"}>
            Select an option
          </MenuItem>
          <MenuItem
            style={{ fontSize: "20px" }}
            value={"Constructing a new home"}
          >
            Constructing a new home
          </MenuItem>
          <MenuItem
            style={{ fontSize: "20px" }}
            value={"Reconstructing an existing home"}
          >
            Reconstructing an existing home
          </MenuItem>
          <MenuItem style={{ fontSize: "20px" }} value={"Buying a home"}>
            Buying a home
          </MenuItem>
        </Select>
      </FormControl>

      <Typography paragraph style={{ fontSize: "25px", marginTop: "50px" }}>
        Property Value
      </Typography>
      <Typography paragraph style={{ fontSize: "18px", marginTop: "20px" }}>
        This doesn't need to be the exact amount right now.
      </Typography>
      <TextField
        style={{ borderColor: "white", width: "500px" }}
        name="propertyValue"
        value={formik.values.propertyValue}
        onChange={formik.handleChange}
      />

      <Typography paragraph style={{ fontSize: "25px", marginTop: "60px" }}>
        Deposit
      </Typography>
      <Typography paragraph style={{ fontSize: "18px", marginTop: "20px" }}>
        Tell us roughly how much your deposit wil be.
      </Typography>
      <TextField
        style={{ borderColor: "white", width: "500px" }}
        name="deposit"
        value={formik.values.deposit}
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
        type="submit"
        style={{
          backgroundColor: "blue",
          marginLeft: "985px",
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
