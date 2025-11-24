import { useState } from "react";
import Schema from "./Schema";
import styles from "./App.module.css";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import HomeMenu from "./components/layout/HomeMenu/HomeMenu";
import Apropos from "./components/layout/Apropos";
import ExperiencePro from "./components/layout/ExperiencePro";
import Formations from "./components/layout/Formations/Formations";
import Footer from "./components/layout/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Schema />
      <Header />
      <main className="pt-[64px]">
        <Hero />
        <HomeMenu />
        <Apropos />
        <ExperiencePro />
        <Formations />
      </main>
      <Footer />
    </>
  );
}

export default App;
