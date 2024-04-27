import { Typography, Container } from "@mui/material";
import AboutPageImage from "../../components/about_page_image";
import OurPeople from "../people";

export default function About() {
  return (
    <>
      <AboutPageImage />
      <Container
        sx={{
          marginTop: "100px",
          textAlign: "center",
          color: "white",
        }}
      >
        <Typography
          variant="h4"
          sx={{ marginBottom: "50px", color: "#ffc107" }}
        >
          Who we are
        </Typography>
        <Typography paragraph sx={{ fontSize: "20px", paddingBottom: "100px" }}>
          At JBS, it always has been and always will be, all about people. We
          know that a mortgage isn’t just a mortgage, it’s about you and your
          family living in your dream house. We know that savings are for the
          good things like your daughter’s wedding, and the annoying things like
          a new boiler. And we know that a bank account is just a way to make
          living everyday life a little easier. We know, because we’re people
          just like you. We’ve failed driving tests, changed careers, had twins
          (unexpectedly) and lived with our parents for a few years longer than
          we planned. We know about the ups and downs of life, so we know what a
          bank needs to do to help and support you through all of them. We know,
          because at Halifax, it’s a people thing.
        </Typography>
        <Typography
          variant="h4"
          sx={{ marginBottom: "50px", color: "#ffc107" }}
        >
          Everyone should have a place to call home
        </Typography>
        <Typography paragraph sx={{ fontSize: "20px" }}>
          Having a safe and settled home is the foundation on which people can
          build a decent life and help to build successful communities. Together
          with Crisis, we are working towards ending homelessness through a
          programme of activity including fundraising and volunteering. Donate
          to Crisis
        </Typography>
      </Container>
      <OurPeople />
    </>
  );
}
