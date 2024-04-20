import {
  Box,
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
} from "@mui/material";
import { Link } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

export default function IncomeDetails() {
  return (
    <Box style={{ marginTop: "200px", color: "white", marginLeft: "100px" }}>
      <Typography variant="h5" style={{ marginBottom: "20px" }}>
        Agreement In Principle
      </Typography>
      <Typography variant="h2"> Your Earnings</Typography>
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
          Type of Employement
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="Salaried"
            control={<Radio style={{ color: "white" }} />}
            label="Salaried"
          />
          <FormControlLabel
            value="Self Employed"
            control={<Radio style={{ color: "white" }} />}
            label="Self Employed"
          />
        </RadioGroup>
      </FormControl>
      <br />

      <FormControl>
        <FormLabel
          style={{
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
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="Full Time"
            control={<Radio style={{ color: "white" }} />}
            label="Full Time"
          />
          <FormControlLabel
            value="Part Time"
            control={<Radio style={{ color: "white" }} />}
            label="Part Time"
          />
        </RadioGroup>
      </FormControl>

      <Typography
        paragraph
        style={{ fontSize: "25px", marginTop: "50px", marginBottom: "20px" }}
      >
        Occupation
      </Typography>

      <FormControl style={{ width: "500px", backgroundColor: "grey" }}>
        <Select defaultValue={"Select an option"}>
          <MenuItem style={{ fontSize: "20px" }} value={"Select an option"}>
            Select an option
          </MenuItem>
          <MenuItem style={{ fontSize: "20px" }} value={"Teacher"}>
            Teacher
          </MenuItem>
          <MenuItem style={{ fontSize: "20px" }} value={"Government Employee"}>
            Government Employee
          </MenuItem>
          <MenuItem style={{ fontSize: "20px" }} value={"Doctor"}>
            Doctor
          </MenuItem>
          <MenuItem style={{ fontSize: "20px" }} value={"Actor"}>
            Actor
          </MenuItem>
          <MenuItem style={{ fontSize: "20px" }} value={"Chartered Accountant"}>
            Chartered Accountant
          </MenuItem>
          <MenuItem style={{ fontSize: "20px" }} value={"Lawyer"}>
            Lawyer
          </MenuItem>
          <MenuItem style={{ fontSize: "20px" }} value={"IT Employee"}>
            IT Employee
          </MenuItem>
          <MenuItem style={{ fontSize: "20px" }} value={"Others"}>
            Others
          </MenuItem>
        </Select>
      </FormControl>

      <Typography paragraph style={{ fontSize: "25px", marginTop: "50px" }}>
        Name of the Employer
      </Typography>
      <TextField style={{ borderColor: "white", width: "500px" }} />

      <Typography
        paragraph
        style={{ fontSize: "25px", marginTop: "50px", marginBottom: "20px" }}
      >
        How Often do you get paid
      </Typography>
      <FormControl style={{ width: "500px", backgroundColor: "grey" }}>
        <Select defaultValue={"Select an option"}>
          <MenuItem style={{ fontSize: "20px" }} value={"Select an option"}>
            Select an option
          </MenuItem>
          <MenuItem style={{ fontSize: "20px" }} value={"Weekly"}>
            Weekly
          </MenuItem>
          <MenuItem style={{ fontSize: "20px" }} value={"Fortnightly"}>
            Fortnightly
          </MenuItem>
          <MenuItem style={{ fontSize: "20px" }} value={"Monthly"}>
            Monthly
          </MenuItem>
        </Select>
      </FormControl>

      <Typography paragraph style={{ fontSize: "25px", marginTop: "50px" }}>
        How much will you earn
      </Typography>
      <TextField style={{ borderColor: "white", width: "500px" }} />

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
        to="/personal-details"
      >
        <ArrowLeftIcon style={{ fontSize: "30px" }} />
        Back
      </Button>
      <Button
        variant="contained"
        color="inherit"
        component={Link}
        style={{
          backgroundColor: "blue",
          marginLeft: "785px",
          padding: "15px 60px",
          marginTop: "40px",
          fontWeight: "bold",
        }}
        endIcon={<ArrowRightIcon style={{ fontSize: "30px" }} />}
        to="/expenditures"
      >
        Continue
      </Button>
    </Box>
  );
}
