import {
  Typography,
  Container,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import Faq from "C:/Users/Dell/Desktop/AgreementInPrinciple/first_poc/src/components/faq/Faq.js";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Container
        style={{ marginTop: "200px", textAlign: "center", color: "white" }}
      >
        <Typography variant="h2" style={{ marginBottom: "50px" }}>
          Check Your Loan Eligibilty
        </Typography>
        <Typography
          paragraph
          style={{ fontSize: "25px", marginBottom: "100px" }}
        >
          Congratulations on taking the first step towards your dream home! We
          believe that everyone deserves the opportunity to own their dream
          home. Let us help turn your homeownership aspirations into reality.
          Start your journey with us today!
        </Typography>
        <Button
          color="inherit"
          style={{
            backgroundColor: "blue",
            marginRight: "100px",
            padding: "15px 70px",
          }}
        >
          <Link style={{ textDecoration: "none", color: "white" }} to="/about">
            Explore
          </Link>
        </Button>
        <Button
          color="inherit"
          style={{
            backgroundColor: "blue",
            marginRight: "100px",
            padding: "15px 70px",
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/register"
          >
            Register
          </Link>
        </Button>
      </Container>

      <Container
        style={{ marginTop: "350px", textAlign: "center", color: "white" }}
      >
        <Typography variant="h2" style={{ marginBottom: "50px" }}>
          What is an Agreement In Principle?
        </Typography>
        <Typography paragraph style={{ fontSize: "25px" }}>
          An Agreement in Principle (AIP) is the first step to getting a
          mortgage. It’s sometimes called a Mortgage Promise or a Decision in
          Principle, and lets you know how much you could borrow before you
          apply for a mortgage. Once you've got your AIP, you can make a full
          mortgage application when you’re ready. It's quick and easy to apply
          for an AIP.
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
                <CircleIcon style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ fontSize: "22px" }}
                primary="It should take about 15 minutes"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CircleIcon style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ fontSize: "22px" }}
                primary="We will need to know detials of your income and outgoings"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CircleIcon style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ fontSize: "22px" }}
                primary="We will also need your addresses for the last 3 years"
              />
            </ListItem>
          </List>
        </Container>
      </Container>

      <Faq />
    </>
  );
}
