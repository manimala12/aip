import ButtonAppBar from "./components/app_bar/app_bar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Contact from "./pages/contact/contact";
import About from "./pages/about/about";
import Footer from "./components/footer/footer";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import DialogModal from "./pages/dialog_modal/dialog_modal";
import MainHome from "./pages/main_home/main_home";
import LoanDetails from "./pages/loan_details/loan_details";
import PersonalDetails from "./pages/personal_details/personal_details";
import IncomeDetails from "./pages/income_details/income_details";
import Expenditures from "./pages/expenditures/expenditures";
import Result from "./pages/result/result";
import { ToastContainer } from "react-toastify";
import { AppRoutes } from "./types";
import { LightThemeProvider } from "./components/theme-providers";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./custom-redux/store";
import { useEffect } from "react";
import { verifyTokenAction } from "./custom-redux/actions/verifyToken";
import { UnknownAction } from "redux";

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
        <Route path={AppRoutes.REGISTERED} element={<DialogModal />} />
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
