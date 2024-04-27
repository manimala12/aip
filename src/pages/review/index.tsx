import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid, Divider } from "@mui/material";

export default function Review() {
  return (
    // <Container maxWidth="xl" sx={{ minHeight: "100vh" }}>
    //   <Grid container sx={{ my: 10 }}>
    //     <Grid item md={6}>
    //       <CardSection />
    //     </Grid>
    //   </Grid>
    // </Container>
    <Container
      style={{ marginTop: "100px", color: "white", marginLeft: "100px" }}
    >
      <Typography variant="h5" sx={{ marginBottom: "20px" }}>
        Agreement In Principle
      </Typography>
      <Typography variant="h2"> Review Your Details</Typography>
      <Divider
        sx={{
          backgroundColor: "white",
          borderBottomWidth: 3,
          width: "1200px",
          marginTop: "30px",
        }}
      />
      <Card sx={{ minWidth: 375, mt: 10 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Your Loan Details
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{ margin: "auto", maxWidth: "lg", pb: "100px" }}
          >
            <Grid item xs={12}>
              <Typography>Property</Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Container>
  );
}
