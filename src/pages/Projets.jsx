// Layout
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Container from "../components/layout/Container";
import HeroContenu from "../components/layout/HeroContenu/HeroContenu";
import DetailsProjets from "../components/ui/DetailsProjets";

function Projets() {
  return (
    <>
      <link
        rel="canonical"
        href="https://charleseuzo.github.io/portfolio-react/projets/"
      />
      <title>Projets | Charles Pâquet</title>
      <meta
        name="description"
        content="Découvrez les projets web réalisés par Charles Pâquet : applications React, interfaces modernes et solutions logicielles concrètes."
      />
      <meta
        name="keywords"
        content="projets développeur, portfolio Charles Pâquet, React, applications web, développement web, frontend"
      />
      <meta property="og:title" content="Projets | Charles Pâquet" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Explorez le portfolio de Charles Pâquet et découvrez ses projets web, ses applications React et ses solutions logicielles."
      />
      <meta
        property="og:image"
        content="https://charleseuzo.github.io/portfolio-react/images/charles_a-propos.jpg"
      />
      <meta
        property="og:url"
        content="https://charleseuzo.github.io/portfolio-react/projets/"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Projets | Charles Pâquet" />
      <meta
        name="twitter:description"
        content="Découvrez les projets web de Charles Pâquet, ses applications React et ses réalisations en développement web."
      />
      <meta
        name="twitter:image"
        content="https://charleseuzo.github.io/portfolio-react/images/charles_a-propos.jpg"
      />

      <Header />
      <main className="pt-[64px]">
        <HeroContenu
          titre="Mes Projets"
          usePattern={true}
          altImage="Image de fond des projets"
        />

        {/* Add your project sections here */}
        <section className="py-12">
          <Container>
            <DetailsProjets />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Projets;
