import { Typography, Container, Box, TextField, Button } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const style = {
  color: "grey",
  fontSize: "35px",
  cursor: "pointer",
  "&:hover": { color: "grey" },
};
export default function Contact() {
  return (
    <Container style={{ display: "flex", gap: "300px", width: "1800px" }}>
      <Container
        style={{
          marginTop: "200px",
          color: "white",
          width: "400px",
          marginLeft: "0px",
        }}
      >
        <Typography variant="h2">
          Have any questions? We'd love to hear from you.
        </Typography>
        <Typography paragraph style={{ fontSize: "20px", marginTop: "30px" }}>
          Whether you have a question about loans, fees or anything else, our
          team is ready to answer all your questions.
        </Typography>
      </Container>
      <Box
        style={{
          width: "500px",
          height: "650px",
          backgroundColor: "white",
          marginTop: "100px",
          marginRight: "0px",
          marginBottom: "90px",
        }}
      >
        <TextField
          placeholder="Full Name"
          style={{
            width: "400px",
            marginBottom: "50px",
            marginTop: "50px",
            marginLeft: "40px",
          }}
        />
        <br />
        <TextField
          placeholder="Email"
          style={{ width: "400px", marginBottom: "50px", marginLeft: "40px" }}
        />
        <br />
        <TextField
          placeholder="Subject"
          style={{ width: "400px", marginBottom: "50px", marginLeft: "40px" }}
        />
        <br />
        <TextField
          placeholder="Message"
          type="textarea"
          style={{ width: "400px", marginLeft: "40px", marginBottom: "50px" }}
        />
        <Button
          color="inherit"
          style={{
            color: "white",
            backgroundColor: "#ffc107",
            padding: "10px 40px",
            width: "400px",
            marginLeft: "40px",
          }}
        >
          CONTACT US
        </Button>
        <Typography
          paragraph
          style={{
            color: "grey",
            fontSize: "18px",
            marginTop: "10px",
            marginBottom: "20px",
            marginLeft: "150px",
          }}
        >
          or connect through:
        </Typography>
        <Box style={{ display: "flex", justifyContent: "center", gap: "40px" }}>
          <LinkedInIcon sx={style} />
          <YouTubeIcon sx={style} />
          <GitHubIcon sx={style} />
          <TelegramIcon sx={style} />
        </Box>
      </Box>
    </Container>
  );
}
