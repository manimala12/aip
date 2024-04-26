import { Typography, Container, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function MainHome() {
  return (
    <Container
      sx={{
        color: "white",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" sx={{ marginBottom: "30px" }}>
        Welcome!!
      </Typography>
      <Typography paragraph sx={{ fontSize: "25px", textAlign: "center" }}>
        Congratulations on taking the first step towards your dream home!. Let
        us help turn your homeownership aspirations into reality. Start your
        journey with us today!
      </Typography>
      <Button
        component={Link}
        to="/loan-details"
        sx={{
          color: "white",
          backgroundColor: "#ffc107",
          marginTop: "30px",
          padding: "30px 30px",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        Check your eligibility for home loan
      </Button>
    </Container>
  );
}
