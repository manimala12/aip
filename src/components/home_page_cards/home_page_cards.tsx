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
    <Grid
      container
      // spacing={2}
      sx={{
        my: 7,
        display: "flex",
        width: "100%",
        alignItems: "self-end",
        justifyContent: "space-between",
      }}
    >
      {cardItems.map((card: CardData) => (
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{
                height: 180,
                transition: "transform .7s",
                "&:hover": { transform: "scale(1.3)" },
              }}
              image={card.link}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "primary.main", textAlign: "center" }}
              >
                {card.heading}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button sx={{ color: "black", bgcolor: "primary.main" }}>
                APPLY
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
