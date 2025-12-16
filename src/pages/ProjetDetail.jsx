import { useParams, Navigate } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroContenu from "../components/layout/HeroContenu/HeroContenu";
import Container from "../components/layout/Container";
import { projetsData } from "../data/projets";

function ProjetDetail() {
  const { slug } = useParams();
  const projet = projetsData[slug];

  // Si le projet n'existe pas, rediriger vers 404
  if (!projet) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <link
        rel="canonical"
        href={`https://charleseuzo.github.io/portfolio-react/projets/${slug}`}
      />

      <title></title>
      <meta name="description" content="" />
      <meta name="keywords" content="" />
      <meta property="og:title" content="" />
      <meta property="og:type" content="article" />
      <meta property="og:description" content="" />
      <meta property="og:image" content="" />
      <meta property="og:url" content="" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="" />
      <meta name="twitter:description" content="" />
      <meta name="twitter:image" content="" />

      <Header />
      <main className="pt-[64px] min-h-screen">
        <HeroContenu
          titre={projet.titre}
          imageMobile={projet.hero_image_mobile}
          imageTablet={projet.hero_image_tablet}
          imageDesktop={projet.hero_image_desktop}
          altImage={projet.alt_image}
        />

        <Container className="py-12">
          {/* Description */}
          {projet.description && (
            <section className="mb-12">
              <p className="text-white/90 text-lg leading-relaxed">
                {projet.description}
              </p>
            </section>
          )}

          {/* Technologies */}
          {projet.technologies && projet.technologies.length > 0 && (
            <section className="mb-12">
              <h2 className="text-white text-2xl font-semibold mb-4">
                Technologies
              </h2>
              <div className="flex flex-wrap gap-3">
                {projet.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Liens */}
          {(projet.lien_github || projet.lien_demo) && (
            <section className="mb-12">
              <div className="flex flex-wrap gap-4">
                {projet.lien_github && (
                  <a
                    href={projet.lien_github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
                  >
                    <i className="fa-brands fa-github"></i>
                    Voir sur GitHub
                  </a>
                )}
                {projet.lien_demo && (
                  <a
                    href={projet.lien_demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#B4C9DB] via-[#8AA6C1] to-[#4F6F8A] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    <i className="fa-solid fa-external-link-alt"></i>
                    Voir la démo
                  </a>
                )}
              </div>
            </section>
          )}

          {/* Contenu dynamique */}
          {projet.contenu &&
            projet.contenu.map((section, idx) => (
              <section key={idx} className="mb-12">
                {section.titre && (
                  <h2 className="text-white text-2xl font-semibold mb-4">
                    {section.titre}
                  </h2>
                )}
                {section.texte && (
                  <p className="text-white/80 text-lg leading-relaxed">
                    {section.texte}
                  </p>
                )}
                {section.liste && (
                  <ul className="list-disc list-inside text-white/80 text-lg space-y-2">
                    {section.liste.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default ProjetDetail;
