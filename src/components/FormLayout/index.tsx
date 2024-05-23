import { Typography, Divider, Button, Grid, Box } from "@mui/material";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

interface FormLayoutProps {
  heading: string;
  name: string;
  route: string;
  children: React.ReactNode;
}

const FormLayout: FC<FormLayoutProps> = ({
  children,
  heading,
  name,
  route,
}) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        maxWidth: "lg",
        color: "white",
        mx: { xs: 4, md: 6, lg: 13 },
        my: { xs: 15, md: 20, lg: 20 },
      }}
    >
      <Typography
        variant="h5"
        sx={{ marginBottom: "20px", fontSize: { xs: 15, md: 20, lg: 25 } }}
      >
        Agreement In Principle
      </Typography>
      <Typography variant="h2" sx={{ fontSize: { xs: 30, md: 40, lg: 55 } }}>
        {heading}
      </Typography>
      <Divider
        sx={{
          backgroundColor: "white",
          borderBottomWidth: 3,
          marginTop: "30px",
        }}
      />
      {children}
      <Divider
        sx={{
          backgroundColor: "white",
          borderBottomWidth: 3,
          marginTop: "50px",
        }}
      />
      <Grid
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          gap: 2,
          mt: 3,
        }}
      >
        {name !== "loan" && (
          <Grid
            item
            xs={12}
            component={Button}
            variant="contained"
            color="inherit"
            onClick={() => navigate(route)}
            sx={{
              backgroundColor: "#ffc107",
              padding: { xs: "8px 40px", md: "15px 60px" },
              fontWeight: "bold",
              width: { sm: "100%" },
              maxWidth: { sm: "200px" },
            }}
            startIcon={<ArrowLeftIcon sx={{ fontSize: "30px" }} />}
          >
            Back
          </Grid>
        )}
        <Grid
          item
          xs={12}
          component={Button}
          variant="contained"
          color="inherit"
          type="submit"
          sx={{
            backgroundColor: "#ffc107",
            padding: { xs: "8px 40px", md: "15px 60px" },
            fontWeight: "bold",
            width: { sm: "100%" },
            maxWidth: { sm: "200px" },
            ...(name === "loan"
              ? { marginLeft: { xs: "inherit", sm: "auto" } }
              : {}),
          }}
          endIcon={<ArrowRightIcon sx={{ fontSize: "30px" }} />}
        >
          {name === "expenditures" ? "Review" : "Continue"}
        </Grid>
      </Grid>
    </Box>
  );
};

export default FormLayout;
