import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import ScrollToHash from "./components/ScrollToHash";

// Tailwind CSS
import "./index.css";

// Font Awesome CSS
import "./assets/fontawesome/css/fontawesome.css";
import "./assets/fontawesome/css/brands.css";
import "./assets/fontawesome/css/solid.css";

// AOS Animation on Scroll
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 800, // durée des animations (ms)
  once: true, // l’animation ne se rejoue pas
  easing: "ease-in-out",
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <ScrollToHash headerOffset={64} />
      <App />
    </HashRouter>
  </StrictMode>
);
