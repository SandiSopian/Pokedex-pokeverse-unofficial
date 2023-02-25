import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import SupportUs from "./pages/SupportUs";
import Pokemon from "./pages/Pokemon";
import PokemonDetail from "./pages/PokemonDetail";
import Tms from "./pages/Tms";
import HeldItems from "./pages/HeldItems";
import Nature from "./pages/Nature";
import Plates from "./pages/Plates";
import ZCrystal from "./pages/ZCrystal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/pokemon/:pokemonId" element={<PokemonDetail />} />
        <Route path="/tms" element={<Tms />} />
        <Route path="/held items" element={<HeldItems />} />
        <Route path="/nature" element={<Nature />} />
        <Route path="/plate" element={<Plates />} />
        <Route path="/z-crystal" element={<ZCrystal />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<SupportUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
