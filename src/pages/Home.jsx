// Schema json-ld integration
import Schema from "../Schema";

// Layout
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

// Sections
import Hero from "../components/layout/Hero";
import HomeMenu from "../components/layout/HomeMenu/HomeMenu";
import Apropos from "../components/layout/Apropos";
import ExperiencePro from "../components/layout/ExperiencePro";
import Formations from "../components/layout/Formations/Formations";
import Competences from "../components/layout/Competences/Competences";

function Home() {
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
        <Competences />
      </main>
      <Footer />
    </>
  );
}

export default Home;
