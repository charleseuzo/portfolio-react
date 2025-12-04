import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Projets from "./pages/Projets";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projets/" element={<Projets />} />
      <Route
        path="/politique-de-confidentialite/"
        element={<PolitiqueConfidentialite />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
