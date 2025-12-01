// Layout
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Container from "../components/layout/Container";

function Projets() {
  return (
    <>
      <Header />
      <main className="pt-[64px]">
        <Container className="pt-16 pb-5">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold relative w-fit">
            Mes Projets
            <span className="block h-1 w-full mt-2 bg-gradient-to-r from-[#B4C9DB] via-[#8AA6C1] to-[#4F6F8A] rounded-full animate-pulse"></span>
          </h1>
        </Container>

        {/* Add your project sections here */}
        <section className="py-12">
          <Container>
            <p className="text-white text-lg">
              Contenu des projets à ajouter ici...
            </p>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Projets;
