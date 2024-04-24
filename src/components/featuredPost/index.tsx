import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";

import Carousel from "react-material-ui-carousel";

export default function FeaturedPost() {
  return (
    <Grid
      container
      id="scroll-to"
      sx={{ my: 10 }}
      maxWidth="lg"
      minHeight="sm"
      mx="auto"
    >
      <Grid item maxWidth="xl" component={Carousel} sx={{ width: "100%" }}>
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
  href: string;
};

interface ProjectProps {
  item: Item;
}

function Project({ item }: ProjectProps) {
  return (
    // <Grid item xs={12} md={12} key={"post.title"}>
    <CardActionArea component="a" href="#">
      <Card
        sx={{
          display: "flex",
          backgroundImage: `url(${item.href})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          px: 10,
          py: 15,
        }}
      >
        <CardContent sx={{ flex: 1 }}>
          <Typography
            variant="h2"
            sx={{ marginBottom: "50px", color: "primary.main" }}
          >
            {item.name}
          </Typography>
          <Typography paragraph style={{ fontSize: "25px" }}>
            {item.description}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
    // </Grid>
  );
}

const items: Item[] = [
  {
    href: "assets/image.png",
    name: "What is an Agreement In Principle?",
    description: `An Agreement in Principle (AIP) is the first step to getting a
    mortgage. It’s sometimes called a Mortgage Promise or a Decision in
    Principle, and lets you know how much you could borrow before you
    apply for a mortgage. Once you've got your AIP, you can make a full
    mortgage application when you’re ready. It's quick and easy to apply
    for an AIP.`,
  },
  {
    href: "assets/image.png",
    name: "What is an Agreement In Principle?",
    description: `An Agreement in Principle (AIP) is the first step to getting a
    mortgage. It’s sometimes called a Mortgage Promise or a Decision in
    Principle, and lets you know how much you could borrow before you
    apply for a mortgage. Once you've got your AIP, you can make a full
    mortgage application when you’re ready. It's quick and easy to apply
    for an AIP.`,
  },
  {
    href: "assets/image.png",
    name: "What is an Agreement In Principle?",
    description: `An Agreement in Principle (AIP) is the first step to getting a
    mortgage. It’s sometimes called a Mortgage Promise or a Decision in
    Principle, and lets you know how much you could borrow before you
    apply for a mortgage. Once you've got your AIP, you can make a full
    mortgage application when you’re ready. It's quick and easy to apply
    for an AIP.`,
  },
  {
    href: "assets/image.png",
    name: "What is an Agreement In Principle?",
    description: `An Agreement in Principle (AIP) is the first step to getting a
    mortgage. It’s sometimes called a Mortgage Promise or a Decision in
    Principle, and lets you know how much you could borrow before you
    apply for a mortgage. Once you've got your AIP, you can make a full
    mortgage application when you’re ready. It's quick and easy to apply
    for an AIP.`,
  },
];
