import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Link, ThemeProvider, createTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../custom-redux/store";
import { logoutAction } from "../../custom-redux/actions/logout";
import { UnknownAction } from "redux";
import { AppRoutes } from "../../types";

interface Props {
  window?: () => Window;
}

const darkTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#212529;",
    },
  },
});
const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        AIP
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector<AppState, boolean>(
    (state) => state.auth.isAuthenticated
  );
  const logoutHandler = () => {
    if (!isAuthenticated) {
      navigate(AppRoutes.LOGIN);
    } else {
      dispatch(logoutAction() as unknown as UnknownAction);
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Link
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                color: "#ffc107",
                textDecoration: "none",
              }}
            >
              AGREEMENT IN PRINCIPLE
            </Link>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  component={RouterLink}
                  to={`/${item.toLowerCase()}`}
                  key={item}
                  sx={{ color: "#ffc107", mx: { xs: 0, md: 1 } }}
                >
                  {item}
                </Button>
              ))}
              <Button
                type="button"
                onClick={logoutHandler}
                sx={{ color: "#ffc107" }}
              >
                {isAuthenticated ? "Logout" : "Login"}
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </ThemeProvider>
  );
}
