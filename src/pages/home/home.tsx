import {
  Typography,
  Container,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Grid,
  Stack,
  Paper,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import Faq from "../../components/faq/Faq";

import { Link } from "react-router-dom";
import { LightThemeProvider } from "../../components/theme-providers";
import HomePageCards from "../../components/home_page_cards/home_page_cards";
import FlipCard from "../../components/flip-cards/flip";
import FeaturedPost from "../../components/featuredPost";
import MainFeaturedPost from "../../components/mainFeature";

export default function Home() {
  return (
    <>
      <Paper
        sx={{
          minHeight: "100vh",
          textAlign: "center",
          color: "white",
          background:
            "linear-gradient(#212529e7, #212529e7), url(assets/HomeLoan.jpg)",
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={2} sx={{ margin: "auto", maxWidth: "lg" }}>
          <Grid item xs={12}>
            <Typography variant="h2">Check Your Loan Eligibilty</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography paragraph sx={{ fontSize: "25px", mt: 4, mb: 5 }}>
              Congratulations on taking the first step towards your dream home!
              We believe that everyone deserves the opportunity to own their
              dream home. Let us help turn your homeownership aspirations into
              reality. Start your journey with us today!
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            alignContent="center"
            textAlign="center"
            width="100%"
            alignSelf="center"
            alignItems="center"
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={13}
              sx={{
                mt: 4,
                justifyContent: "center",
              }}
            >
              <Button
                type="button"
                color="primary"
                component={"a"}
                sx={{ px: 8, py: "12px" }}
                variant="contained"
                href="#scroll-to"
              >
                Explore
              </Button>
              <Button
                type="button"
                component={Link}
                color="primary"
                sx={{ px: 8, py: "12px" }}
                variant="contained"
                to="/register"
              >
                Register
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
      <FeaturedPost />
      {/* <MainFeaturedPost /> */}
      <HomePageCards />
      <FlipCard />
      <Container
        style={{
          marginTop: "350px",
          textAlign: "center",
          color: "white",
          marginBottom: "200px",
        }}
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
      <LightThemeProvider>
        <Faq />
      </LightThemeProvider>
    </>
  );
}
