import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import HeaderAbout from "./components/headerAbout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import termsdata from "./termsdata";
import Terms from "./pages/Terms"

function App() {
  return (
    <BrowserRouter>
      {/* Routes should wrap all Route components */}
      <Routes>
        {/* Route for Home page with Header */}
        <Route path="/" element={<>
          <Header />
          <Home />
        </>} />
        
        {/* Route for About page without Header */}
        <Route path="/about" element={<>
        <HeaderAbout/>
        <About/>
        </>} />
        <Route path="/login" element={<>
        <Login />
        </>} />
        <Route path="/signup" element={<>
        <Signup />
        </>} />
        <Route path="/Terms" element={<Terms termsdata={termsdata}/>} />
        
      </Routes>

      
    </BrowserRouter>
  );
}

export default App;
