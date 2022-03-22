import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PokemonPage from "./pages/PokemonPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/Homepage' element={<Homepage />} />
        <Route path='/Pokemonpage' element={<PokemonPage />} />
      </Routes>
    </div>
  );
};

export default App;
