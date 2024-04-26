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
      <Grid
        item
        maxWidth="xl"
        component={Carousel}
        sx={{ width: "100%" }}
        interval={3000}
      >
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(${item.href})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          px: 10,
          py: 15,
        }}
      >
        <CardContent sx={{ flex: 1 }}>
          <Typography
            variant="h3"
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
    name: "What information do I need to get an Agreement in Principle?",
    description: `
    When applying for an Agreement in Principle you will typically need the following information:
    The exact details of your income
    Details of your outgoings and any existing credit agreements
    Your addresses for the last 3 years`,
  },
  {
    href: "assets/image.png",
    name: "What happens after getting an Agreement in Principle?",
    description: `Having an Agreement in Principle means you can view properties with a clearer understanding of what you can afford. Whilst it isn’t compulsory to have an Agreement in Principle in order to view properties, it can show estate agents and sellers that you are serious about buying. An Agreement in Principle also means you can make an offer as soon as you find your ideal home.`,
  },
  {
    href: "assets/image.png",
    name: "How is an Agreement in Principle different to a mortgage offer?",
    description: `A mortgage offer is an official document from your lender to confirm they will provide you with a mortgage for a specific property. This is only provided after you have completed a full mortgage application where more detail is provided and a full credit check is carried out.`,
  },
];
