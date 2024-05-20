import { Typography, Button, Grid, Stack, Paper } from "@mui/material";
import Faq from "../../components/Faq";
import { Link } from "react-router-dom";
import { LightThemeProvider } from "../../components/ThemeProviders";
import HomePageCards from "../../components/HomePageCards";
import FlipCard from "../../components/Branches";
import FeaturedPost from "../../components/Carousel";
import MortgageCalculator from "../../components/MortgageCalculators";

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
            <Typography variant="h2" sx={{ color: "primary.main" }}>
              Check Your Loan Eligibilty
            </Typography>
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
      <MortgageCalculator />
      <HomePageCards />
      <FlipCard />
      <LightThemeProvider>
        <Faq />
      </LightThemeProvider>
    </>
  );
}
