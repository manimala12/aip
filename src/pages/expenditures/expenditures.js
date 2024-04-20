import { Box, Typography, Divider, Button } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { Link } from "react-router-dom";

export default function Expenditures() {
  return (
    <Box style={{ marginTop: "200px", color: "white", marginLeft: "100px" }}>
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
        to="/result"
      >
        Submit
      </Button>
    </Box>
  );
}
