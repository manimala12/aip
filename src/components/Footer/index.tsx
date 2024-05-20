import { Box, Divider, Typography, Container, Grid, Link } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import { Link as RouterLink } from "react-router-dom";

const style = {
  color: "white",
  fontSize: "50px",
  cursor: "pointer",
  "&:hover": { color: "grey" },
};
export default function Footer() {
  return (
    <>
      <Box
        sx={{
          border: "2px solid white",
          backgroundColor: "#212529;",
          mt: 7,
        }}
      >
        <Container>
          <Grid
            container
            rowSpacing={{ xs: 10 }}
            columnSpacing={15}
            color="white"
            paddingTop={6}
            marginBottom={10}
            sx={{ px: 4 }}
          >
            <Grid item xs={12} sm={4} paddingTop={0}>
              <Typography variant="h5">Agreement In Principle</Typography>
              <Divider
                sx={{
                  marginTop: "10px",
                  bgcolor: "primary.main",
                  borderBottomWidth: 5,
                }}
              />
              <Typography
                paragraph
                sx={{
                  fontSize: "20px",
                  mt: 5,
                }}
              >
                A home loan eligibility checking website with accuracy and
                customer satisfaction.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} paddingTop={0}>
              <Typography variant="h5">Explore</Typography>
              <Divider
                sx={{
                  marginTop: "10px",
                  bgcolor: "primary.main",
                  borderBottomWidth: 5,
                  mb: 5,
                }}
              />
              <Link
                component={RouterLink}
                sx={{
                  display: "block",
                  textDecorationColor: "white",
                  color: "white",
                  fontSize: "20px",
                  py: 1,
                }}
                to="/"
              >
                Home
              </Link>
              <Link
                component={RouterLink}
                sx={{
                  display: "block",
                  textDecorationColor: "white",
                  color: "white",
                  fontSize: "20px",
                  py: 1,
                }}
                to="/about"
              >
                About
              </Link>
              <Link
                component={RouterLink}
                sx={{
                  display: "block",
                  textDecorationColor: "white",
                  color: "white",
                  fontSize: "20px",
                  py: 1,
                }}
                to="/contact"
              >
                Contact
              </Link>
            </Grid>
            <Grid item xs={12} sm={4} paddingTop={0}>
              <Typography variant="h5">Have a question?</Typography>
              <Divider
                sx={{
                  marginTop: "10px",
                  bgcolor: "primary.main",
                  borderBottomWidth: 5,
                  mb: 5,
                }}
              />
              <Typography
                paragraph
                sx={{
                  fontSize: "20px",
                }}
              >
                <LocalPhoneIcon sx={{ marginRight: "20px" }} />
                +919876543210
              </Typography>
              <Typography paragraph sx={{ fontSize: "20px" }}>
                <MailIcon sx={{ marginRight: "20px" }} />
                support@aip.co
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Divider sx={{ background: "white" }} />
        <Typography
          paragraph
          sx={{
            fontSize: "25px",
            textAlign: "center",
            color: "white",
            marginTop: "25px",
          }}
        >
          © 2024 Copyright | All rights reserved for the designer{" "}
          <i style={{ fontWeight: "bold" }}>Jnaneswari Yalla</i>
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "40px",
            mb: 3,
          }}
        >
          <LinkedInIcon sx={style} />
          <YouTubeIcon sx={style} />
          <GitHubIcon sx={style} />
          <TelegramIcon sx={style} />
        </Box>
      </Box>
    </>
  );
}
