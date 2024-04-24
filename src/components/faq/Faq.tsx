import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Container, Typography } from "@mui/material";

export default function Faq() {
  return (
    <Container
      sx={{
        fontSize: "25px",
        bgcolor: "white",
        pt: 8,
        pb: 10,
        width: "100%",
        minWidth: "100%",
      }}
    >
      <Box maxWidth="lg" sx={{ mx: "auto" }}>
        <Typography
          variant="h3"
          sx={{
            color: "primary.main",
            marginBottom: "50px",
            textAlign: "center",
          }}
        >
          FAQs
          <hr className="w-25 mx-auto border border-warning" />
        </Typography>
        <Accordion style={{ color: "#212529;" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            What is an Agreement in Principle and do I need one?
          </AccordionSummary>
          <AccordionDetails>
            An Agreement in Principle (AIP), also known as a 'Decision in
            Principle' or 'Mortgage Promise', is something you would usually
            need to complete when applying for a new mortgage, but when you
            apply for a remortgage with us you do not need to do an AIP. If you
            want personal reassurance with what we can lend to you, then you can
            apply for an AIP and it will have no effect on your credit rating.
            <br />
            <br />
            A mortgage offer is issued by a lender once your mortgage
            application has been received and the necessary checks, such as the
            property valuation and confirmation of your details, have been
            carried out. It sets out the terms under which the lender is
            prepared to offer you a loan.
            <br />
            <br />
            If you do decide to complete an AIP, all we need is a few personal
            details about you and anyone else who will be named on the mortgage.
            Then we’ll contact a credit reference agency for a credit search and
            give you a credit score. If you reach our pass mark, we’ll confirm
            that we could offer you a mortgage (subject to you completing a full
            mortgage application).
            <br />
            <br />
            If you don’t want to do an AIP, you can see our mortgage rates and
            build the right deal for you online by telling us a little bit about
            you, your mortgage and what’s important to you. Once you’re done,
            you can get some advice by contacting us, or continuing your
            application online by yourself.
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ color: "#212529;" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            What can I do to secure a mortgage rate with you?
          </AccordionSummary>
          <AccordionDetails>
            If you are not already a mortgage customer with us, you must
            complete a full mortgage application, either online or with a
            Mortgage Adviser, to secure a mortgage rate.
            <br />
            <br />
            If you already have a mortgage with us, you'll need to complete an
            application for a new deal, either online or with a Mortgage
            Adviser. If you're in the last six months of your current deal, you
            can select a new rate to start when your current deal ends with no
            early repayment charge (ERC). If you're in the last three months of
            your current mortgage deal you can select a new rate to start
            straight away with no early repayment charges. Find more information
            about switching your deal on our existing customer support pages.
            <br />
            <br />
            If your existing deal has more than three months left to run, you
            can still switch your deal, but we won't waive the ERC in most
            cases.
            <br />
            <br />
            Important: An Agreement in Principle (AIP) isn't a mortgage offer.
            Once you've completed an AIP, you'll need to complete a full
            mortgage application to secure your rate with us.
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ color: "#212529;" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            Can I transfer my agreement to someone else?
          </AccordionSummary>
          <AccordionDetails>
            No, you cannot transfer an agreement to someone else.
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ color: "#212529;" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            Are there specific terms and conditions for each offer I activate?
          </AccordionSummary>
          <AccordionDetails>
            Retailers set their own conditions for each of their offers, such
            as:
            <br />
            <br />
            whether an offer is available both online and in store or online
            only the amount of cashback offered the expiry date of the offer any
            offer conditions or restrictions, such as how many times you can use
            the offer or which purchases it can be used on any limits to the
            amount you can earn from each offer The specific conditions relating
            to your chosen offer will be displayed when you activate it.
            <br />
            <br />
            The offer retailers are responsible for the offers you receive, but
            we’re responsible for making sure the cashback reaches your account.
            The terms and conditions for Everyday Offers can be found in the
            Internet Banking agreement, and details of how we use your
            information are contained in our Privacy Policy.
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}
