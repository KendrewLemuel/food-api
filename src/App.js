import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Cuisine from "./Routes/Cuisine";
import SearchPage from "./Routes/SearchPage";
import DetailRecipes from "./Routes/DetailRecipes";
import Random from "./Components/Random/Random";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/search/:search" element={<SearchPage />} />
      <Route path="/recipes/:id" element={<DetailRecipes />} />
      <Route path="/random" element={<Random />} />
    </Routes>
  );
}

export default App;
