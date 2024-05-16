import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import Typography from "@mui/material/Typography";
import {
  Container,
  Divider,
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Grid,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../custom-redux/store";
import { AppData, AppRoutes } from "../../types";
import { Link, useNavigate } from "react-router-dom";
import { reviewSections } from "./utils";
import { saveDecisionAction } from "../../custom-redux/actions/getDecision";
import { UnknownAction } from "redux";

export default function Review() {
  const appData = useSelector<AppState, AppData>((state) => state.appData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(saveDecisionAction(navigate) as unknown as UnknownAction);
  };
  return (
    <>
      <Container
        style={{ marginTop: "100px", color: "white", marginLeft: "100px" }}
      >
        <Typography variant="h5" sx={{ marginBottom: "20px" }}>
          Agreement In Principle
        </Typography>
        <Typography variant="h2"> Review Your Details</Typography>
        <Divider
          sx={{
            backgroundColor: "white",
            borderBottomWidth: 3,
            width: "1200px",
            marginTop: "30px",
          }}
        />
        {reviewSections.map(
          ({ label, editButtonText, fieldLabels, name, editLink }) => (
            <Card
              sx={{
                minWidth: 375,
                my: 8,
                borderColor: "#ffc107",
                border: 1,
                maxWidth: "md",
              }}
              key={label}
            >
              <CardContent>
                <Typography
                  sx={{ fontSize: 19, mx: 2 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {label}
                </Typography>

                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableBody>
                      {Object.keys(fieldLabels).map((key: string) => {
                        // @ts-ignore
                        const fieldName = appData[name][key];
                        if (fieldName) {
                          return (
                            <TableRow
                              key={key}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell component="th" scope="row">
                                {fieldLabels[key]}
                              </TableCell>
                              <TableCell align="right">
                                {/* @ts-ignore */}
                                {appData[name][key]}
                              </TableCell>
                            </TableRow>
                          );
                        }
                        return null;
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant="outlined"
                  sx={{ my: 2, mx: 1 }}
                  onClick={() => navigate(editLink)}
                >
                  {editButtonText}
                </Button>
              </CardActions>
            </Card>
          )
        )}
      </Container>
      <Divider
        sx={{
          backgroundColor: "white",
          borderBottomWidth: 3,
          width: "1200px",
          marginTop: "50px",
          marginLeft: "100px",
        }}
      />
      <Grid sx={{ display: "flex", gap: "700px", marginLeft: 15 }}>
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
          to={AppRoutes.EXPENDITURES}
        >
          <ArrowLeftIcon sx={{ fontSize: "30px" }} />
          Back
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="inherit"
          sx={{
            backgroundColor: "#ffc107",
            padding: "15px 60px",
            marginTop: "40px",
            fontWeight: "bold",
            marginBottom: "30px",
          }}
          endIcon={<ArrowRightIcon sx={{ fontSize: "30px" }} />}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Grid>
    </>
  );
}
