import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import SupportUs from "./pages/SupportUs";
import Pokemon from "./pages/Pokemon";
import PokemonDetail from "./pages/PokemonDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/pokemon/:pokemonId" element={<PokemonDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<SupportUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
