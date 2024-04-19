import { Typography, Container } from "@mui/material";
import CelebrationIcon from "@mui/icons-material/Celebration";

export default function Result() {
  return (
    <Container
      style={{ marginTop: "300px", textAlign: "center", color: "white" }}
    >
      <Typography variant="h2" style={{ marginBottom: "20px" }}>
        Congratulations!!!
      </Typography>
      <CelebrationIcon style={{ fontSize: "40px", color: "white" }} />
      <CelebrationIcon style={{ fontSize: "40px", color: "white" }} />
      <CelebrationIcon style={{ fontSize: "40px", color: "white" }} />
      <Typography
        paragraph
        style={{ fontSize: "25px", marginBottom: "500px", marginTop: "50px" }}
      >
        You're eligible for your home loan.
      </Typography>
    </Container>
  );
}
