import ButtonAppBar from "./Components/ButtonAppBar";
import {Route, Routes} from 'react-router-dom';
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Footer from './Components/Footer';
import Login from "./Components/Login";
import Register from './Components/Register';
import DialogModal from './Components/DialogModal';
import MainHome from './Components/MainHome';
import FirstStep from "./Components/FirstStep";
import SecondStep from "./Components/SecondStep";
import ThirdStep from "./Components/ThirdStep";
import FourthStep from "./Components/FourthStep";
import Result from "./Components/Result";

export default function App() {

  return (
    <>
      <ButtonAppBar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>  
          <Route path='login' element={<Login/>}/> 
          <Route path='register' element={<Register/>}/>  
          <Route path='registered' element={<DialogModal/>}/>
          <Route path='home' element={<MainHome/>}/>
          <Route path='first-step' element={<FirstStep  />}/>
          <Route path='second-step' element={<SecondStep/>}/>
          <Route path='third-step' element={<ThirdStep/>}/>
          <Route path='fourth-step' element={<FourthStep/>}/>
          <Route path='result' element={<Result/>}/>
      </Routes>  
      <Footer/>   
    </>
  );
}

