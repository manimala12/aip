import { Typography, Container } from "@mui/material";
import { useSelector } from "react-redux";
import { AppState } from "../../custom-redux/store";
import { DecisionTypes } from "../../types";
import ConfettiExplosion from "react-confetti-explosion";

export default function Result() {
  const result = useSelector<AppState, string | undefined>(
    (state) => state.appData.result
  );

  const GetDecisionMessage = () => {
    switch (result) {
      case DecisionTypes.SUCCESS:
        return <Success />;

      case DecisionTypes.PARTIAL:
        return <Partial />;

      case DecisionTypes.FAILURE:
        return <Failure />;

      default:
        return <Failure />;
    }
  };

  return <GetDecisionMessage />;
}

function Success() {
  return (
    <Container sx={{ marginTop: "300px", textAlign: "center", color: "white" }}>
      <Typography variant="h2" sx={{ marginBottom: "20px" }}>
        <ConfettiExplosion style={{ margin: "auto" }} />
        Congratulations!!!
      </Typography>

      <Typography
        paragraph
        sx={{ fontSize: "25px", marginBottom: "500px", marginTop: "50px" }}
      >
        You are eligible for your home loan.
      </Typography>
    </Container>
  );
}

function Failure() {
  return (
    <Container sx={{ marginTop: "300px", textAlign: "center", color: "white" }}>
      <Typography variant="h2" sx={{ marginBottom: "20px" }}>
        Congratulations!!!
      </Typography>

      <Typography
        paragraph
        sx={{ fontSize: "25px", marginBottom: "500px", marginTop: "50px" }}
      >
        You are eligible for your home loan.
      </Typography>
    </Container>
  );
}

function Partial() {
  return (
    <Container sx={{ marginTop: "300px", textAlign: "center", color: "white" }}>
      <Typography variant="h2" sx={{ marginBottom: "20px" }}>
        Congratulations!!!
      </Typography>

      <Typography
        paragraph
        sx={{ fontSize: "25px", marginBottom: "500px", marginTop: "50px" }}
      >
        You are eligible for your home loan.
      </Typography>
    </Container>
  );
}
