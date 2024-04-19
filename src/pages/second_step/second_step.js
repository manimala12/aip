import { Box, Typography, Divider, TextField, Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Link } from "react-router-dom";

export default function SecondStep() {
  return (
    <Box style={{ marginTop: "200px", color: "white", marginLeft: "100px" }}>
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
      <TextField style={{ borderColor: "white", width: "500px" }} />

      <Typography
        paragraph
        style={{ fontSize: "25px", marginTop: "50px", marginBottom: "20px" }}
      >
        Date of Birth
      </Typography>
      <Box style={{ display: "flex", gap: "20px" }}>
        <TextField style={{ width: "50px", color: "white" }} placeholder="DD" />
        <TextField style={{ width: "60px" }} placeholder="MM" />
        <TextField style={{ width: "100px" }} placeholder="YYYY" />
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
          name="radio-buttons-group"
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
      <TextField style={{ borderColor: "white", width: "500px" }} />
      <Typography paragraph style={{ fontSize: "23px", marginTop: "50px" }}>
        Address
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
        color="inherit"
        style={{
          backgroundColor: "blue",
          padding: "15px 60px",
          marginTop: "40px",
          fontWeight: "bold",
        }}
      >
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to="/first-step"
        >
          &lt; Back
        </Link>
      </Button>
      <Button
        color="inherit"
        style={{
          backgroundColor: "blue",
          marginLeft: "985px",
          padding: "15px 60px",
          marginTop: "40px",
          fontWeight: "bold",
        }}
      >
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to="/third-step"
        >
          Continue &gt;
        </Link>
      </Button>
    </Box>
  );
}
