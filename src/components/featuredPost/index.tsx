import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { FeaturedPostProps } from "./types";
import { posts } from "./utils";
import Carousel from "react-material-ui-carousel";
import { Button, Paper } from "@mui/material";

export default function FeaturedPost() {
  return (
    <Grid container sx={{ my: 10 }} maxWidth="md" mx="auto">
      <Grid item component={Carousel} sx={{ width: "100%" }}>
        {items.map((item, index) => {
          return <Project item={item} key={index} />;
        })}
      </Grid>
    </Grid>
  );
}

type Item = {
  name: string;
  description: string;
  color: string;
  href: string;
};

interface ProjectProps {
  item: Item;
}

function Project({ item }: ProjectProps) {
  return (
    // <Grid item xs={12} md={12} key={"post.title"}>
    <CardActionArea component="a" href="#">
      <Card sx={{ display: "flex" }}>
        <CardContent sx={{ flex: 1 }}>
          <Typography component="h2" variant="h5">
            post.title
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            post.date
          </Typography>
          <Typography variant="subtitle1" paragraph>
            post.description
          </Typography>
          <Typography variant="subtitle1" color="primary">
            Continue reading...
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          sx={{ width: 160, display: { xs: "none", sm: "block" } }}
          image={"assets/image.png"}
          alt={"post.imageLabel"}
        />
      </Card>
    </CardActionArea>
    // </Grid>
  );
}

const items: Item[] = [
  {
    name: "Lear Music Reader",
    description: "A PDF Reader specially designed for musicians.",
    color: "#64ACC8",
    href: "https://github.com/Learus/Lear-Music-Reader",
  },
  {
    name: "Hash Code 2019",
    description:
      "My Solution on the 2019 Hash Code by Google Slideshow problem.",
    color: "#7D85B1",
    href: "https://github.com/Learus/HashCode2019",
  },
  {
    name: "Terrio",
    description: "A exciting mobile game game made in the Unity Engine.",
    color: "#CE7E78",
    href: "https://play.google.com/store/apps/details?id=com.Brewery.Terrio",
  },
  {
    name: "React Carousel",
    description: "A Generic carousel UI component for React using material ui.",
    color: "#C9A27E",
    href: "https://github.com/Learus/react-material-ui-carousel",
  },
];
