import { Typography, Container } from "@mui/material";
import CelebrationIcon from "@mui/icons-material/Celebration";
import { useSelector } from "react-redux";
import { AppState } from "../../custom-redux/store";
import { DecisionTypes } from "../../types";
import ConfettiExplosion from "react-confetti-explosion";

export default function Result() {
  const result = useSelector<AppState, string | undefined>(
    (state) => state.appData.result
  );

  const getDecisionMessage = () => {
    if (result === DecisionTypes.SUCCESS) {
      return "You're eligible for your home loan.";
    } else if (result === DecisionTypes.PARTIAL) {
      return "Partial";
    } else if (result === DecisionTypes.FAILURE) {
      return "Partial";
    }
  };

  return (
    <Container
      style={{ marginTop: "300px", textAlign: "center", color: "white" }}
    >
      <Typography variant="h2" style={{ marginBottom: "20px" }}>
        <ConfettiExplosion style={{ margin: "auto" }} />
        Congratulations!!!
      </Typography>
      <CelebrationIcon style={{ fontSize: "40px", color: "white" }} />
      <CelebrationIcon style={{ fontSize: "40px", color: "white" }} />
      <CelebrationIcon style={{ fontSize: "40px", color: "white" }} />
      <Typography
        paragraph
        style={{ fontSize: "25px", marginBottom: "500px", marginTop: "50px" }}
      >
        {getDecisionMessage()}
      </Typography>
    </Container>
  );
}
