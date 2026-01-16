// Schema json-ld integration
import Schema from "../Schema";

// Layout
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

// Sections
import Hero from "../components/layout/Hero";
import HomeMenu from "../components/layout/HomeMenu/HomeMenu";
import ProjetsSection from "../components/layout/ProjetsSection";
import Apropos from "../components/layout/Apropos";
import ExperiencePro from "../components/layout/ExperiencePro";
import Formations from "../components/layout/Formations/Formations";
import Competences from "../components/layout/Competences/Competences";

function Home() {
  return (
    <>
      <link
        rel="canonical"
        href="https://charleseuzo.github.io/portfolio-react/"
      />

      <title>Charles Pâquet | Développeur Front-End</title>
      <meta
        name="description"
        content="Portfolio de Charles Pâquet, développeur web et analyste-programmeur. Découvrez mes projets en React, mes compétences techniques et mes informations de contact."
      />
      <meta
        name="keywords"
        content="Charles Pâquet, portfolio développeur, développeur web, analyste-programmeur, React, JavaScript, frontend, programmation, projets web"
      />
      <meta
        property="og:title"
        content="Charles Pâquet | Développeur Front-End"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Portfolio de Charles Pâquet, développeur web et analyste-programmeur. Découvrez mes projets en React, mes compétences techniques et mes informations de contact."
      />
      <meta
        property="og:image"
        content="https://charleseuzo.github.io/portfolio-react/images/charles_a-propos.jpg"
      />
      <meta
        property="og:url"
        content="https://charleseuzo.github.io/portfolio-react/"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Charles Pâquet | Développeur Front-End"
      />
      <meta
        name="twitter:description"
        content="Portfolio de Charles Pâquet, développeur web et analyste-programmeur. Découvrez mes projets en React, mes compétences techniques et mes informations de contact."
      />
      <meta
        name="twitter:image"
        content="https://charleseuzo.github.io/portfolio-react/images/charles_a-propos.jpg"
      />
      <Schema />
      <Header />
      <main className="pt-[64px]">
        <Hero />
        <HomeMenu />
        <Apropos />
        <ProjetsSection />
        <ExperiencePro />
        <Formations />
        <Competences />
      </main>
      <Footer />
    </>
  );
}

export default Home;
