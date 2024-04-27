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
    <Container sx={{ display: "flex", gap: "300px", width: "1800px" }}>
      <Container
        sx={{
          marginTop: "200px",
          color: "white",
          width: "400px",
          marginLeft: "0px",
        }}
      >
        <Typography variant="h2">
          Have any questions? We'd love to hear from you.
        </Typography>
        <Typography paragraph sx={{ fontSize: "20px", marginTop: "30px" }}>
          Whether you have a question about loans, fees or anything else, our
          team is ready to answer all your questions.
        </Typography>
      </Container>
      <Box
        sx={{
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
          sx={{
            width: "400px",
            marginBottom: "50px",
            marginTop: "50px",
            marginLeft: "40px",
          }}
        />
        <br />
        <TextField
          placeholder="Email"
          sx={{ width: "400px", marginBottom: "50px", marginLeft: "40px" }}
        />
        <br />
        <TextField
          placeholder="Subject"
          sx={{ width: "400px", marginBottom: "50px", marginLeft: "40px" }}
        />
        <br />
        <TextField
          placeholder="Message"
          type="textarea"
          sx={{ width: "400px", marginLeft: "40px", marginBottom: "50px" }}
        />
        <Button
          color="inherit"
          sx={{
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
          sx={{
            color: "grey",
            fontSize: "18px",
            marginTop: "10px",
            marginBottom: "20px",
            marginLeft: "150px",
          }}
        >
          or connect through:
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: "40px" }}>
          <LinkedInIcon sx={style} />
          <YouTubeIcon sx={style} />
          <GitHubIcon sx={style} />
          <TelegramIcon sx={style} />
        </Box>
      </Box>
    </Container>
  );
}
