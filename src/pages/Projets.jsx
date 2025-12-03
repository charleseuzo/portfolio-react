// Layout
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Container from "../components/layout/Container";
import HeroContenu from "../components/layout/HeroContenu/HeroContenu";
import DetailsProjets from "../components/ui/DetailsProjets";

function Projets() {
  return (
    <>
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
