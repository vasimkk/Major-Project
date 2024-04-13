import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Services from './Services';
import Contact from './Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import {ThemeProvider} from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth0 } from "@auth0/auth0-react";
import EasySell from './EasySell';
import EasyBuy from './EasyBuy';
function App() {
 const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    }
  }
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
 return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <Header/>
    <Routes>
     <Route path='/' element= {<Home />} />
     <Route path='/about' element = { <About />} />
      <Route path='/services' element = { <Services/> } />
      <Route path='/contact' element ={<Contact/>}/>
      <Route path='/easysell' element={<EasySell/>}/>
      <Route path='/easybuy' element={<EasyBuy/>}/>
      </Routes>
    <Footer/> 
    </BrowserRouter>
    </ThemeProvider>
    );
}
export default App;



