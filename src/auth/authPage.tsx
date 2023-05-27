import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/about/About";

const AuthPages = () => {
  
    return (
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    );
  };

  export default AuthPages