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

export default function App() {
  return (
    <>
      <ButtonAppBar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path={AppRoutes.LOGIN} element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="registered" element={<DialogModal />} />
        <Route path="home" element={<MainHome />} />
        <Route path="loan-details" element={<LoanDetails />} />
        <Route path="personal-details" element={<PersonalDetails />} />
        <Route path="income-details" element={<IncomeDetails />} />
        <Route path="expenditures" element={<Expenditures />} />
        <Route path="result" element={<Result />} />
      </Routes>
      <Footer />
    </>
  );
}
