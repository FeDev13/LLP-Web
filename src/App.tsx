import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import { Hero } from "./components/Hero";
import { Honorarios } from "./components/Honorarios";
import { Nosotros } from "./components/Nosotros";
import { Areas } from "./components/Areas";
import {Map} from "./components/Map"
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/Honorarios" element={<Honorarios />} />
          <Route path="/Areas" element={<Areas />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Ubicacion" element={<Map />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
