import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import Home from "./pages/Home";
import Career from "./pages/Career";
import Blog from "./pages/Blog";
import About from "./pages/About";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Blog" element={<Blog />}></Route>
        <Route path="/Career" element={<Career />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Support" element={<Navigate to="/#support" replace />} />

        
      </Routes>
    </BrowserRouter>

  );
}
export default App;