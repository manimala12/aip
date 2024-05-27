import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppState, store } from "../../custom-redux/store";
import { AppData, AppRoutes } from "../../types";
import { useNavigate } from "react-router-dom";
import { reviewSections } from "./utils";
import { saveDecisionAction } from "../../custom-redux/actions/getDecision";
import { UnknownAction } from "redux";
import { navigatedFromAction } from "../../custom-redux/actions/navigatedFrom";
import FormLayout from "../../components/FormLayout";

export default function Review() {
  const appData = useSelector<AppState, AppData>((state) => state.appData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(saveDecisionAction(navigate) as unknown as UnknownAction);
  };
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <FormLayout
        heading="Review Your Details"
        name="personal"
        route={AppRoutes.EXPENDITURES}
      >
        {reviewSections.map(
          ({ label, editButtonText, fieldLabels, name, editLink }) => (
            <Card
              sx={{
                minWidth: 300,
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
                  onClick={() => {
                    store.dispatch(navigatedFromAction(AppRoutes.REVIEW));
                    navigate(editLink);
                  }}
                >
                  {editButtonText}
                </Button>
              </CardActions>
            </Card>
          )
        )}
      </FormLayout>
    </form>
  );
}
