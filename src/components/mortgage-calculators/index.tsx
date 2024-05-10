import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { cardItems, CardData } from "./data";

export default function MortgageCalculator() {
  return (
    <Grid
      container
      spacing={2}
      sx={{ margin: "auto", maxWidth: "lg", pb: "100px" }}
    >
      <Grid item xs={12}>
        <Typography
          variant="h3"
          sx={{
            color: "primary.main",
            marginBottom: "50px",
            textAlign: "center",
            fontSize: "40px",
          }}
        >
          Mortgage calculators
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
              <Card
                key={card.heading}
                sx={{
                  maxWidth: 345,
                  pb: 2,
                  // minHeight: 270,
                  borderColor: "#ffc107",
                  border: 1,
                }}
              >
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ color: "primary.main", textAlign: "center" }}
                  >
                    {card.heading}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    textAlign="justify"
                  >
                    {card.description}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Button
                    sx={{ backgroundColor: "primary.main", color: "black" }}
                  >
                    {card.heading}
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
