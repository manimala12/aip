import { Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CelebrationIcon from "@mui/icons-material/Celebration";

const style = {
  width: "400px",
  height: "300px",
  backgroundColor: "white",
  bgcolor: "background.paper",
  p: 4,
  textAlign: "center",
  borderRadius: "20px",
  marginTop: "250px",
  marginBottom: "450px",
  marginLeft: "650px",
};

export default function DialogModal() {
  return (
    <Box style={style}>
      <Typography
        variant="h5"
        style={{ color: "blue", fontWeight: "bold", paddingTop: "80px" }}
      >
        Registered Successfully!!!
      </Typography>
      <br />
      <CelebrationIcon style={{ fontSize: "40px", color: "blue" }} />
      <br />
      <br />
      <Button
        component={Link}
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px 50px",
          marginRight: "20px",
        }}
        to="/login"
      >
        Ok
      </Button>
    </Box>
  );
}
