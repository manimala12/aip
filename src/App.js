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
import FirstStep from "./pages/first_step/first_step";
import SecondStep from "./pages/second_step/second_step";
import ThirdStep from "./pages/third_step/third_step";
import FourthStep from "./pages/fourth_step/fourth_step";
import Result from "./pages/result/result";

export default function App() {
  return (
    <>
      <ButtonAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="registered" element={<DialogModal />} />
        <Route path="home" element={<MainHome />} />
        <Route path="first-step" element={<FirstStep />} />
        <Route path="second-step" element={<SecondStep />} />
        <Route path="third-step" element={<ThirdStep />} />
        <Route path="fourth-step" element={<FourthStep />} />
        <Route path="result" element={<Result />} />
      </Routes>
      <Footer />
    </>
  );
}
