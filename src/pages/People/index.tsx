import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { cardItems, CardData } from "./data";
import { Grid } from "@mui/material";

export default function OurPeople() {
  return (
    <Grid
      container
      spacing={2}
      sx={{ margin: "auto", maxWidth: "lg", pt: "100px" }}
    >
      <Grid item xs={12}>
        <Typography
          variant="h3"
          sx={{
            color: "primary.main",
            marginBottom: "50px",
            textAlign: "center",
            fontSize: "35px",
          }}
        >
          Our people
          <hr className="w-25 mx-auto border border-warning" />
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{
            my: 7,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {cardItems.map((card: CardData) => (
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{
                    height: 400,
                    transition: "transform .7s",
                  }}
                  image={card.link}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    paragraph
                    component="div"
                    sx={{ color: "primary.main", textAlign: "center" }}
                  >
                    {card.heading}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
