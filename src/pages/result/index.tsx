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
      <Typography variant="h2" sx={{ marginBottom: "20px", color: "#ffc107" }}>
        <ConfettiExplosion style={{ margin: "auto" }} />
        Congratulations!!!
      </Typography>

      <Typography
        paragraph
        sx={{ fontSize: "22px", marginBottom: "500px", marginTop: "50px" }}
      >
        We're thrilled to inform you that you are eligible for your home loan
        application! You are now eligible to proceed with the next steps towards
        securing your dream home.
      </Typography>
    </Container>
  );
}

function Failure() {
  return (
    <Container sx={{ marginTop: "300px", textAlign: "center", color: "white" }}>
      {/* <Typography variant="h2" sx={{ marginBottom: "20px" }}>
        Congratulations!!!
      </Typography> */}

      <Typography
        paragraph
        sx={{ fontSize: "22px", marginBottom: "500px", marginTop: "50px" }}
      >
        We regret to inform you that, based on the information provided, you are
        not eligible for your home loan at this time. Our decision is based on
        your credit score.
      </Typography>
    </Container>
  );
}

function Partial() {
  return (
    <Container sx={{ marginTop: "300px", textAlign: "center", color: "white" }}>
      {/* <Typography variant="h2" sx={{ marginBottom: "20px" }}>
        Congratulations!!!
      </Typography> */}

      <Typography
        paragraph
        sx={{ fontSize: "22px", marginBottom: "500px", marginTop: "50px" }}
      >
        We encourage you to consider modifying either the duration of the loan
        or the property value or the deposit to increase your chances of
        eligibility. Our team is available to discuss the available options and
        assist you in making the best decision for your financial situation.
      </Typography>
    </Container>
  );
}
