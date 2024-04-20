import {
  Box,
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
import { Link } from "react-router-dom";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


export default function LoanDetails() {
  return (
    <Box style={{ marginTop: "200px", marginLeft: "100px", color:'white' }}>
      <Typography variant="h5" style={{ marginBottom: "20px" ,}}>
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
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="Just me"
            control={<Radio style={{ color: "white" }} />}
            label="Just me"
          />
          <FormControlLabel
            value="Me and someone else"
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
        <Select defaultValue={"Select an option"}>
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
      <Typography paragraph style={{ fontSize: "23px", marginTop: "20px" }}>
        This doesn't need to be the exact amount right now.
      </Typography>
      <TextField style={{ borderColor: "white", width: "500px" }} />

      <Typography paragraph style={{ fontSize: "25px", marginTop: "60px" }}>
        Deposit
      </Typography>
      <Typography paragraph style={{ fontSize: "23px", marginTop: "20px" }}>
        Tell us roughly how much your deposit wil be.
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


      <Button variant="contained" color="inherit"
      component={Link}
        style={{
          backgroundColor: "blue",
          marginLeft: "985px",
          padding: "15px 60px",
          marginTop: "40px",
          fontWeight: "bold",
        }}
        endIcon={<ArrowRightIcon style={{fontSize:'30px'}}/>}
        to='/personal-details'>
        Continue
      </Button>
      
    </Box>
  );
}
