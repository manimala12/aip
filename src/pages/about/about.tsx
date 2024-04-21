import {
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

export default function About() {
  return (
    <Container
      style={{
        marginTop: "200px",
        textAlign: "center",
        color: "white",
        paddingBottom: "500px",
      }}
    >
      <Typography variant="h2" style={{ marginBottom: "50px" }}>
        What is an Agreement In Principle?
      </Typography>
      <Typography paragraph style={{ fontSize: "25px" }}>
        An Agreement in Principle (AIP) is the first step to getting a mortgage.
        It’s sometimes called a Mortgage Promise or a Decision in Principle, and
        lets you know how much you could borrow before you apply for a mortgage.
        Once you've got your AIP, you can make a full mortgage application when
        you’re ready. It's quick and easy to apply for an AIP.
      </Typography>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <List>
          <ListItem>
            <ListItemIcon>
              <CircleIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ fontSize: "22px" }}
              primary="It should take about 15 minutes"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CircleIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ fontSize: "22px" }}
              primary="We will need to know detials of your income and outgoings"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CircleIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ fontSize: "22px" }}
              primary="We will also need your addresses for the last 3 years"
            />
          </ListItem>
        </List>
      </Container>
    </Container>
  );
}
