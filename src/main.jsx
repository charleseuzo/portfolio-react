import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
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
  once: true, // l'animation ne se rejoue pas
  easing: "ease-in-out",
});

// Restore path from 404 redirect if present (GitHub Pages SPA trick)
const redirectPath = sessionStorage.getItem("redirectPath");
if (redirectPath) {
  sessionStorage.removeItem("redirectPath");
  // In production, prepend the basename so the full URL matches BrowserRouter's expectation
  const basename = import.meta.env.PROD ? "/portfolio-react/" : "/";
  const currentPath = window.location.pathname;

  // Only restore if current path is exactly the base (means we got redirected from 404)
  if (currentPath === basename || currentPath === basename.slice(0, -1)) {
    history.replaceState(null, "", basename + redirectPath);
  }
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.PROD ? "/portfolio-react/" : "/"}>
      <ScrollToHash headerOffset={64} />
      <App />
    </BrowserRouter>
  </StrictMode>
);
