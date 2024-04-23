import {
  Typography,
  Divider,
  TextField,
  Button,
  MenuItem,
  Select,
  FormHelperText,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useFormik } from "formik";
import { HomeTypeOptions, LoanDetailsValues } from "./types";
import { loanDetailsInitialValues, loanDetailsValidation } from "./utils";
import { loanDetailsAction } from "../../custom-redux/actions/loanDetails";
import { useDispatch } from "react-redux";
import { UnknownAction } from "redux";

export default function LoanDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik<LoanDetailsValues>({
    initialValues: loanDetailsInitialValues(),
    validationSchema: loanDetailsValidation(),
    onSubmit: (values) => {
      dispatch(loanDetailsAction(values, navigate) as unknown as UnknownAction);
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
          defaultValue={formik.values.noOfPeople}
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
        <FormHelperText
          error={Boolean(formik.touched.noOfPeople && formik.errors.noOfPeople)}
        >
          {formik.touched.noOfPeople && formik.errors.noOfPeople}
        </FormHelperText>
      </FormControl>

      <Typography
        paragraph
        style={{ fontSize: "25px", marginTop: "50px", marginBottom: "20px" }}
      >
        Firstly, what would you like to do?
      </Typography>

      <FormControl style={{ width: "500px" }}>
        <Select
          defaultValue={formik.values.homeType}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="homeType"
        >
          <MenuItem style={{ fontSize: "20px" }} value={""}>
            Select an option
          </MenuItem>
          <MenuItem
            style={{ fontSize: "20px" }}
            value={HomeTypeOptions.NEW_HOME}
          >
            {HomeTypeOptions.NEW_HOME}
          </MenuItem>
          <MenuItem
            style={{ fontSize: "20px" }}
            value={HomeTypeOptions.EXISTING_HOME}
          >
            {HomeTypeOptions.EXISTING_HOME}
          </MenuItem>
          <MenuItem
            style={{ fontSize: "20px" }}
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
        onBlur={formik.handleBlur}
        error={Boolean(
          formik.touched.propertyValue && formik.errors.propertyValue
        )}
        helperText={formik.touched.propertyValue && formik.errors.propertyValue}
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
        onBlur={formik.handleBlur}
        error={Boolean(formik.touched.deposit && formik.errors.deposit)}
        helperText={formik.touched.deposit && formik.errors.deposit}
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
          backgroundColor: "#ffc107",
          marginLeft: "985px",
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
