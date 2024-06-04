import React from "react";
import { Routes, Route,  HashRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";
import FicheLogement from "./pages/FicheLogement/FicheLogement";


const App = () => {
  return ( 
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element = {<FicheLogement />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </HashRouter>
  );
};

export default App;