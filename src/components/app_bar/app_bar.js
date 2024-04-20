import * as React from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

function ButtonAppBar() {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" style={{ height: "90px" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
          ></IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              marginTop: "25px",
              fontWeight: "bold",
            }}
          >
            AGREEMENT IN PRINCIPLE
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" }, marginTop: "25px" }}>
            <Button
              sx={{ color: "#fff", fontSize: "20px", fontWeight: "bold" }}
            >
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                Home
              </Link>
            </Button>
            <Button
              sx={{ color: "#fff", fontSize: "20px", fontWeight: "bold" }}
            >
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/about"
              >
                About
              </Link>
            </Button>
            <Button
              sx={{ color: "#fff", fontSize: "20px", fontWeight: "bold" }}
            >
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/contact"
              >
                Contact
              </Link>
            </Button>
            <Button
              color="inherit"
              style={{
                backgroundColor: "blue",
                marginLeft: "40px",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/login"
              >
                Login
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default ButtonAppBar;
