import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Container from "../components/layout/Container";

function NotFound() {
  return (
    <>
      <title></title>
      <meta name="description" content="" />
      <meta name="keywords" content="" />
      <meta property="og:title" content="" />
      <meta property="og:description" content="" />
      <meta property="og:image" content="" />
      <meta property="og:url" content="" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="" />
      <meta name="twitter:description" content="" />
      <meta name="twitter:image" content="" />

      <Header />
      <main className="pt-[64px] min-h-screen flex items-center justify-center">
        <Container className="py-20">
          <div className="text-center">
            <h1 className="text-white text-6xl sm:text-7xl lg:text-8xl font-bold mb-4">
              404
            </h1>
            <h2 className="text-white text-3xl sm:text-4xl font-semibold mb-4 relative w-fit mx-auto">
              Page non trouvée
              <span className="block h-1 w-full mt-2 bg-gradient-to-r from-[#B4C9DB] via-[#8AA6C1] to-[#4F6F8A] rounded-full animate-pulse"></span>
            </h2>
            <p className="text-white/70 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
              Désolé, la page que vous recherchez n'existe pas ou a été
              déplacée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-block px-8 py-3 bg-gradient-to-r from-[#B4C9DB] via-[#8AA6C1] to-[#4F6F8A] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Retour à l'accueil
              </Link>
              <Link
                to="/projets/"
                className="inline-block px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                Voir mes projets
              </Link>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default NotFound;
