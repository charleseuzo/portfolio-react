import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';

// Font Awesome CSS
import './assets/fontawesome/css/fontawesome.css'
import './assets/fontawesome/css/brands.css'
import './assets/fontawesome/css/solid.css'

// Tailwind CSS
import './index.css'

//Initialisation de AOS
AOS.init({
  duration: 800, // durée des animations (ms)
  once: true,    // l’animation ne se rejoue pas
  easing: 'ease-in-out',
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
