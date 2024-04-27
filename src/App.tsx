import ButtonAppBar from "./components/app_bar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Footer from "./components/footer";
import Login from "./pages/login";
import Register from "./pages/register";
import MainHome from "./pages/main_home";
import LoanDetails from "./pages/loan_details";
import PersonalDetails from "./pages/personal_details";
import IncomeDetails from "./pages/income_details";
import Expenditures from "./pages/expenditures";
import Result from "./pages/result";
import { ToastContainer } from "react-toastify";
import { AppRoutes } from "./types";
import { LightThemeProvider } from "./components/theme-providers";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./custom-redux/store";
import { useEffect } from "react";
import { verifyTokenAction } from "./custom-redux/actions/verifyToken";
import { UnknownAction } from "redux";
import Review from "./pages/review";

export default function App() {
  const isAuthenticated = useSelector<AppState, boolean>(
    (state) => state.auth.isAuthenticated
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(verifyTokenAction() as unknown as UnknownAction);
  }, []);

  return (
    <>
      <ButtonAppBar />
      <ToastContainer />
      <Routes>
        <Route
          path={AppRoutes.HOME}
          element={isAuthenticated ? <MainHome /> : <Home />}
        />
        <Route path={AppRoutes.ABOUT} element={<About />} />
        <Route
          path={AppRoutes.CONTACT}
          element={
            <LightThemeProvider>
              <Contact />
            </LightThemeProvider>
          }
        />
        <Route
          path={AppRoutes.LOGIN}
          element={
            <LightThemeProvider>
              <Login />
            </LightThemeProvider>
          }
        />
        <Route
          path={AppRoutes.REGISTER}
          element={
            <LightThemeProvider>
              <Register />
            </LightThemeProvider>
          }
        />
        <Route
          path={AppRoutes.LOAN_DETAILS}
          element={<ProtectedRoute component={<LoanDetails />} />}
        />
        <Route
          path={AppRoutes.PERSONAL_DETAILS}
          element={<ProtectedRoute component={<PersonalDetails />} />}
        />
        <Route
          path={AppRoutes.INCOME_DETAILS}
          element={<ProtectedRoute component={<IncomeDetails />} />}
        />
        <Route
          path={AppRoutes.EXPENDITURES}
          element={<ProtectedRoute component={<Expenditures />} />}
        />
        <Route
          path={AppRoutes.REVIEW}
          element={<ProtectedRoute component={<Review />} />}
        />
        <Route
          path={AppRoutes.RESULT}
          element={<ProtectedRoute component={<Result />} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

const ProtectedRoute = ({
  component = <Home />,
  redirectTo = (
    <LightThemeProvider>
      <Login />
    </LightThemeProvider>
  ),
}) => {
  const isAuthenticated = useSelector<AppState, boolean>(
    (state) => state.auth.isAuthenticated
  );
  return isAuthenticated ? component : redirectTo;
};
