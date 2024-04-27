import * as React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { mainFeaturedPost } from "./utils";
import { Container } from "@mui/material";

export default function AboutPageImage() {
  return (
    <Container maxWidth="xl">
      <Paper
        sx={{
          position: "relative",
          backgroundColor: "grey.800",
          color: "#ffc107",
          mb: 4,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${mainFeaturedPost.image})`,
          mt: 12,
          height: "400px",
        }}
      >
        {/* Increase the priority of the hero background image */}
        {
          <img
            style={{ display: "none" }}
            src={mainFeaturedPost.image}
            alt={mainFeaturedPost.imageText}
          />
        }
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,.3)",
          }}
        />
        <Grid container>
          <Grid item md={6}>
            <Box
              sx={{
                position: "relative",
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
              }}
            >
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                {mainFeaturedPost.title}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                {mainFeaturedPost.description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
