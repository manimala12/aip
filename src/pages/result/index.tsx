import { Typography, Container, Button, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { AppState } from "../../custom-redux/store";
import { DecisionTypes } from "../../types";
import ConfettiExplosion from "react-confetti-explosion";
import { LoanDetailsValues } from "../LoanDetails/types";
import getExpiryDate from "../../helpers/index";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../types";
import useScrollToTop from "../../components/ScrollToTop/useScrollToTop";

export default function Result() {
  useScrollToTop();
  const result = useSelector<AppState, string | undefined>(
    (state) => state.appData.result
  );

  const rollNumber = useSelector<AppState, number | undefined>(
    (state) => state.appData.rollNumber
  );

  const loanDetails = useSelector<AppState, LoanDetailsValues | undefined>(
    (state) => state.appData.loanDetails
  );

  const email = useSelector<AppState, string | undefined>(
    (state) => state.auth.email
  );
  let amountBorrowing: number | undefined;
  if (loanDetails?.propertyValue && loanDetails?.deposit) {
    amountBorrowing = +loanDetails.propertyValue - +loanDetails.deposit;
  }
  const GetDecisionMessage = () => {
    switch (result) {
      case DecisionTypes.SUCCESS:
        return (
          <Success
            rollNumber={rollNumber}
            amountBorrowing={amountBorrowing}
            deposit={loanDetails?.deposit}
            loanDuration={loanDetails?.loanDuration}
            email={email}
          />
        );

      case DecisionTypes.PARTIAL:
        return <Partial rollNumber={rollNumber} email={email} />;

      case DecisionTypes.FAILURE:
        return <Failure rollNumber={rollNumber} />;

      default:
        return <Failure rollNumber={rollNumber} />;
    }
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        margin: "auto",
        maxWidth: "lg",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid item xs={12}>
        <GetDecisionMessage />
        <Button
          component={Link}
          to={AppRoutes.REVIEW}
          sx={{
            ml: 60,
            mt: 5,
            backgroundColor: "#ffc107",
            color: "black",
            px: 5,
            py: 2,
            mb: 20,
          }}
        >
          Review Your Details
        </Button>
      </Grid>
    </Grid>
  );
}

function Success({
  rollNumber,
  amountBorrowing,
  deposit,
  loanDuration,
  email,
}: {
  rollNumber: number | undefined;
  amountBorrowing: number | undefined;
  deposit: string | undefined;
  loanDuration: number | undefined;
  email: string | undefined;
}) {
  return (
    <Container sx={{ marginTop: "200px", textAlign: "center", color: "white" }}>
      <Typography variant="h2" sx={{ marginBottom: "20px", color: "#ffc107" }}>
        <ConfettiExplosion style={{ margin: "auto" }} />
        Congratulations!!!
      </Typography>

      <Typography
        paragraph
        sx={{ fontSize: "22px", marginBottom: "50px", marginTop: "50px" }}
      >
        We're thrilled to inform you that you are eligible for your home loan
        application! Based on what you've told us so far, we think you could
        borrow <b>Rs.{amountBorrowing}</b> with your deposit <b>Rs.{deposit}</b>{" "}
        over a maximum term of <b>{loanDuration}</b> years.
      </Typography>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <List>
          <ListItem>
            <ListItemIcon>
              <CircleIcon style={{ color: "white", fontSize: "18px" }} />
            </ListItemIcon>
            <ListItemText sx={{ fontSize: "20px" }}>
              Your mortgage reference / roll number is <b>{rollNumber}</b>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CircleIcon style={{ color: "white", fontSize: "18px" }} />
            </ListItemIcon>
            <ListItemText sx={{ fontSize: "20px" }}>
              {" "}
              This Agreement in principle is valid until{" "}
              <b>{getExpiryDate().toLocaleDateString()}</b>. We've emailed a
              copy to <b>{email}</b>
            </ListItemText>
          </ListItem>
        </List>
      </Container>
    </Container>
  );
}

function Failure({ rollNumber }: { rollNumber: number | undefined }) {
  return (
    <Container sx={{ marginTop: "200px", textAlign: "center", color: "white" }}>
      <Typography variant="h2" sx={{ marginBottom: "20px", color: "#ffc107" }}>
        We won't be able to help this time..
      </Typography>
      <Typography
        paragraph
        sx={{ fontSize: "22px", marginBottom: "50px", marginTop: "50px" }}
      >
        We regret to inform you that, based on the information provided, you are
        not eligible for your home loan at this time. Our decision is based on
        your credit score.
      </Typography>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <List>
          <ListItem>
            <ListItemIcon>
              <CircleIcon style={{ color: "white", fontSize: "18px" }} />
            </ListItemIcon>
            <ListItemText sx={{ fontSize: "20px" }}>
              Your mortgage reference / roll number is <b>{rollNumber}</b>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CircleIcon style={{ color: "white", fontSize: "18px" }} />
            </ListItemIcon>
            <ListItemText sx={{ fontSize: "20px" }}>
              If you'd like to talk to us about our decision, please call{" "}
              <b>9876543210</b>. Lines are open Monday to Friday 8am - 8pm.
              We're not open Saturdays, Sundays or bank holidays.
            </ListItemText>
          </ListItem>
        </List>
      </Container>
    </Container>
  );
}

function Partial({
  rollNumber,
  email,
}: {
  rollNumber: number | undefined;
  email: string | undefined;
}) {
  return (
    <Container sx={{ marginTop: "200px", textAlign: "center", color: "white" }}>
      <Typography variant="h2" sx={{ marginBottom: "20px", color: "#ffc107" }}>
        It looks like we could help you...
      </Typography>

      <Typography
        paragraph
        sx={{ fontSize: "22px", marginBottom: "50px", marginTop: "50px" }}
      >
        We encourage you to consider modifying either the duration of the loan
        or the property value or the deposit to increase your chances of
        eligibility. Our team is available to discuss the available options and
        assist you in making the best decision for your financial situation.
      </Typography>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <List>
          <ListItem>
            <ListItemIcon>
              <CircleIcon style={{ color: "white", fontSize: "18px" }} />
            </ListItemIcon>
            <ListItemText sx={{ fontSize: "20px" }}>
              {" "}
              Your mortgage reference / roll number is <b>{rollNumber}</b>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CircleIcon style={{ color: "white", fontSize: "18px" }} />
            </ListItemIcon>
            <ListItemText sx={{ fontSize: "20px" }}>
              {" "}
              This Agreement in principle is valid until{" "}
              <b>{getExpiryDate().toLocaleDateString()}</b>. We've eamiled a
              copy to <b>{email}</b>
            </ListItemText>
          </ListItem>
        </List>
      </Container>
    </Container>
  );
}
