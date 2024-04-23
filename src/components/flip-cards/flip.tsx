import { Card, CardContent, Typography } from "@mui/material";

const FlipCard = () => {
  return (
    <Card
      sx={{
        width: 200,
        height: 300,
        perspective: "1000px",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          textAlign: "center",
          transition: "transform 0.6s",
          transformStyle: "preserve-3d",
        }}
      >
        <CardContent
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
          }}
        >
          <Typography variant="body2" color="textSecondary" component="p">
            Hii
          </Typography>
        </CardContent>
        <CardContent
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <Typography variant="body2" color="textSecondary" component="p">
            Hello
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

export default FlipCard;
