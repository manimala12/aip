import { Grid, Button, Divider } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { Link } from "react-router-dom";
import React, { FC } from "react";

interface FormLayoutProps {
  name: string;
  route: string;
}

const FormFooter: FC<FormLayoutProps> = ({ name, route }) => {
  return (
    <>
      <Divider
        sx={{
          backgroundColor: "white",
          borderBottomWidth: 3,
          width: "1200px",
          marginTop: "50px",
        }}
      />
      <Grid sx={{ display: "flex", gap: "750px" }}>
        {name !== "loan" && (
          <Button
            variant="contained"
            color="inherit"
            component={Link}
            sx={{
              backgroundColor: "#ffc107",
              padding: "15px 60px",
              marginTop: "40px",
              fontWeight: "bold",
              marginBottom: "30px",
            }}
            to={route}
          >
            <ArrowLeftIcon sx={{ fontSize: "30px" }} />
            Back
          </Button>
        )}
        <Button
          variant="contained"
          color="inherit"
          type="submit"
          sx={{
            backgroundColor: "#ffc107",
            padding: "15px 60px",
            marginTop: "40px",
            fontWeight: "bold",
            marginBottom: "30px",
          }}
          endIcon={<ArrowRightIcon sx={{ fontSize: "30px" }} />}
        >
          {name === "expenditures" ? "Review" : "Continue"}
        </Button>
      </Grid>
    </>
  );
};

export default FormFooter;
