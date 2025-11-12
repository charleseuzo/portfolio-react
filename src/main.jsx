import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';

//Initialisation de AOS
AOS.init({
  duration: 800, // durée des animations (ms)
  once: true,    // l’animation ne se rejoue pas
  easing: 'ease-in-out',
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
