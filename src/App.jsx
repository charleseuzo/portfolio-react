import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Projets from "./pages/Projets";
import ProjetDetail from "./pages/ProjetDetail";
import Contact from "./pages/Contact";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projets/" element={<Projets />} />
      <Route path="/projets/:slug" element={<ProjetDetail />} />
      <Route path="/contact/" element={<Contact />} />
      <Route
        path="/politique-de-confidentialite/"
        element={<PolitiqueConfidentialite />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
