import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { cardItems, CardData } from "./home_page_card_items";
import { Grid } from "@mui/material";

export default function HomePageCards() {
  return (
    <Grid container spacing={2} sx={{ margin: "auto", maxWidth: "lg" }}>
      <Grid item xs={12}>
        <Typography
          variant="h3"
          sx={{
            color: "primary.main",
            marginBottom: "50px",
            textAlign: "center",
          }}
        >
          Promotions
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
                    height: 180,
                    transition: "transform .7s",
                    "&:hover": { transform: "scale(1.2)" },
                  }}
                  image={card.link}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ color: "primary.main", textAlign: "center" }}
                  >
                    {card.heading}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Button
                    sx={{ backgroundColor: "primary.main", color: "black" }}
                  >
                    Apply
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
